"use strict";
import Platform from 'platform';
import Utils from '../../../common/lib/util/utils';
import Defaults from '../../../common/lib/util/defaults';
import ErrorInfo from '../../../common/lib/types/errorinfo';

var Http = (function() {
	var request = require('request');
	var msgpack = Platform.msgpack;
	var noop = function() {};

	/***************************************************
	 *
	 * These Http ops are used for REST operations
	 * and assume that the system is stateless - ie
	 * there is no connection state that tells us
	 * anything about the state of the network or the
	 * viability of any of the hosts we know about.
	 * Therefore all requests will respond to specific
	 * errors by attempting the fallback hosts, and no
	 * assumptions about host or network is retained to
	 * influence the handling of any subsequent request.
	 *
	 ***************************************************/

	var handler = function(uri, params, callback) {
		callback = callback || noop;
		return function(err, response, body) {
			if(err) {
				callback(err);
				return;
			}
			var statusCode = response.statusCode, headers = response.headers;
			if (statusCode === 204) { // body is expected to be empty
				// as described by Simon in
				// https://ably-real-time.slack.com/archives/C017C5EPYG0/p1634299240108500?thread_ts=1634292721.104800&cid=C017C5EPYG0
				// we ignore body, and make callback with body generated into
				// empty object depending on request type
				switch(true) {
					case headers['content-type'] && headers['content-type'].startsWith('application/json'):
						body = 'null'; // json representation of null object
						break;
					case headers['content-type'] && headers['content-type'].startsWith('application/x-msgpack'):
						body = msgpack.encode(null); // empty msgpack buffer
						break;
					default:
						body = msgpack.encode(null); // empty msgpack buffer
				}
				return callback(null, body, headers, false, statusCode);
			}

			if(statusCode >= 300) {
				// Related to https://github.com/ably/ably-js/issues/676
				// if body length is not zero, we try to parse it
				var error;
				try {
					if(body.length>0) {
						switch(headers['content-type']) {
							case 'application/json':
								body = JSON.parse(body);
								break;
							case 'application/x-msgpack':
								body = msgpack.decode(body);
						}
					}
					// we managed to parse the body, even if it looks like erroneous one
					error = body.error ? ErrorInfo.fromValues(body.error) : new ErrorInfo(
						headers['x-ably-errormessage'] || 'Error response received from server: ' + statusCode + ' body was: ' + Utils.inspect(body),
						headers['x-ably-errorcode'],
						statusCode
					);
				} catch (bodyParsingError) {
					// server response cannot be parsed both by JSON or msgpack.decode, looks like it
					// its something like nginx/cloudflare placeholder page
					error = new ErrorInfo(
						headers['x-ably-errormessage'] || 'Error parsing server response: ' + bodyParsingError + ' with body: ' + body.toString(),
						headers['x-ably-errorcode'] || statusCode,
						statusCode
					);
				}
				callback(error, body, headers, true, statusCode);
				return;
			}
			callback(null, body, headers, false, statusCode);
		};
	};

	function Http() {}

	function shouldFallback(err) {
		var code = err.code,
			statusCode = err.statusCode;
		return code === 'ENETUNREACH' ||
			code === 'EHOSTUNREACH'     ||
			code === 'EHOSTDOWN'        ||
			code === 'ETIMEDOUT'        ||
			code === 'ESOCKETTIMEDOUT'  ||
			code === 'ENOTFOUND'        ||
			code === 'ECONNRESET'       ||
			code === 'ECONNREFUSED'     ||
			(statusCode >= 500 && statusCode <= 504);
	}

	function getHosts(client) {
		/* If we're a connected realtime client, try the endpoint we're connected
		 * to first -- but still have fallbacks, being connected is not an absolute
		 * guarantee that a datacenter has free capacity to service REST requests. */
		var connection = client.connection,
			connectionHost = connection && connection.connectionManager.host;

		if(connectionHost) {
			return [connectionHost].concat(Defaults.getFallbackHosts(client.options));
		}

		return Defaults.getHosts(client.options);
	}
	Http._getHosts = getHosts;

	Http.methods = ['get', 'delete', 'post', 'put', 'patch'];
	Http.methodsWithoutBody = ['get', 'delete'];
	Http.methodsWithBody = Utils.arrSubtract(Http.methods, Http.methodsWithoutBody);

	/** Http.get, Http.post, Http.put, ...
	 * Perform an HTTP request for a given path against prime and fallback Ably hosts
	 * @param rest
	 * @param path the full path
	 * @param headers optional hash of headers
	 * [only for methods with body: @param body object or buffer containing request body]
	 * @param params optional hash of params
	 * @param callback (err, response)
	 *
	 ** Http.getUri, Http.postUri, Http.putUri, ...
	 * Perform an HTTP request for a given full URI
	 * @param rest
	 * @param uri the full URI
	 * @param headers optional hash of headers
	 * [only for methods with body: @param body object or buffer containing request body]
	 * @param params optional hash of params
	 * @param callback (err, response)
	 */
	Utils.arrForEach(Http.methodsWithoutBody, function(method) {
		Http[method] = function(rest, path, headers, params, callback) {
			Http['do'](method, rest, path, headers, null, params, callback);
		};
		Http[method + 'Uri'] = function(rest, uri, headers, params, callback) {
			Http.doUri(method, rest, uri, headers, null, params, callback);
		};
	});

	Utils.arrForEach(Http.methodsWithBody, function(method) {
		Http[method] = function(rest, path, headers, body, params, callback) {
			Http['do'](method, rest, path, headers, body, params, callback);
		};
		Http[method + 'Uri'] = function(rest, uri, headers, body, params, callback) {
			Http.doUri(method, rest, uri, headers, body, params, callback);
		};
	});

	/* Unlike for doUri, the 'rest' param here is mandatory, as it's used to generate the hosts */
	Http['do'] = function(method, rest, path, headers, body, params, callback) {
		var uriFromHost = (typeof(path) == 'function') ? path : function(host) { return rest.baseUri(host) + path; };
		var doArgs = arguments;

		var currentFallback = rest._currentFallback;
		if(currentFallback) {
			if(currentFallback.validUntil > Date.now()) {
				/* Use stored fallback */
				Http.doUri(method, rest, uriFromHost(currentFallback.host), headers, body, params, function(err) {
					if(err && shouldFallback(err)) {
						/* unstore the fallback and start from the top with the default sequence */
						rest._currentFallback = null;
						Http['do'].apply(Http, doArgs);
						return;
					}
					callback.apply(null, arguments);
				});
				return;
			} else {
				/* Fallback expired; remove it and fallthrough to normal sequence */
				rest._currentFallback = null;
			}
		}

		var hosts = getHosts(rest);

		/* see if we have one or more than one host */
		if(hosts.length == 1) {
			Http.doUri(method, rest, uriFromHost(hosts[0]), headers, body, params, callback);
			return;
		}

		var tryAHost = function(candidateHosts, persistOnSuccess) {
			var host = candidateHosts.shift();
			Http.doUri(method, rest, uriFromHost(host), headers, body, params, function(err) {
				if(err && shouldFallback(err) && candidateHosts.length) {
					tryAHost(candidateHosts, true);
					return;
				}
				if(persistOnSuccess) {
					/* RSC15f */
					rest._currentFallback = {
						host: host,
						validUntil: Date.now() + rest.options.timeouts.fallbackRetryTimeout
					};
				}
				callback.apply(null, arguments);
			});
		};
		tryAHost(hosts);
	};

	Http.doUri = function(method, rest, uri, headers, body, params, callback) {
		/* Will generally be making requests to one or two servers exclusively
		* (Ably and perhaps an auth server), so for efficiency, use the
		* foreverAgent to keep the TCP stream alive between requests where possible */
		var agentOptions = (rest && rest.options.restAgentOptions) || Defaults.restAgentOptions;
		var doOptions = {headers: headers, encoding: null, agentOptions: agentOptions};
		if (body) {
			doOptions.body = body;
		}
		if(params)
			doOptions.qs = params;

		doOptions.uri = uri;
		doOptions.timeout = (rest && rest.options.timeouts || Defaults.TIMEOUTS).httpRequestTimeout;
		request[method](doOptions, handler(uri, params, callback));
	};

	Http.supportsAuthHeaders = true;
	Http.supportsLinkHeaders = true;

	Http.checkConnectivity = function(callback) {
		var upUrl = Defaults.internetUpUrl;
		Http.getUri(null, upUrl, null, null, function(err, responseText) {
			callback(null, (!err && responseText.toString().trim() === 'yes'));
		});
	};

	return Http;
})();

export default Http;
