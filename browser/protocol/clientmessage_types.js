//
// Autogenerated by Thrift Compiler (0.8.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//

TAction = {
'HEARTBEAT' : 0,
'CONNECT' : 1,
'CONNECTED' : 2,
'ERROR' : 3,
'ATTACH' : 4,
'ATTACHED' : 5,
'DETACH' : 6,
'DETACHED' : 7,
'SUBSCRIBE' : 8,
'SUBSCRIBED' : 9,
'UNSUBSCRIBE' : 10,
'UNSUBSCRIBED' : 11,
'PRESENCE' : 12,
'EVENT' : 13
};
TType = {
'NONE' : 0,
'TRUE' : 1,
'FALSE' : 2,
'INT32' : 3,
'INT64' : 4,
'DOUBLE' : 5,
'STRING' : 6,
'BUFFER' : 7,
'JSONARRAY' : 8,
'JSONOBJECT' : 9
};
TPresenceState = {
'ENTER' : 0,
'LEAVE' : 1
};
TData = function(args) {
  this.type = null;
  this.i32Data = null;
  this.i64Data = null;
  this.doubleData = null;
  this.stringData = null;
  this.binaryData = null;
  if (args) {
    if (args.type !== undefined) {
      this.type = args.type;
    }
    if (args.i32Data !== undefined) {
      this.i32Data = args.i32Data;
    }
    if (args.i64Data !== undefined) {
      this.i64Data = args.i64Data;
    }
    if (args.doubleData !== undefined) {
      this.doubleData = args.doubleData;
    }
    if (args.stringData !== undefined) {
      this.stringData = args.stringData;
    }
    if (args.binaryData !== undefined) {
      this.binaryData = args.binaryData;
    }
  }
};
TData.prototype = {};
TData.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.type = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.i32Data = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I64) {
        this.i64Data = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.DOUBLE) {
        this.doubleData = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.stringData = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.binaryData = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TData.prototype.write = function(output) {
  output.writeStructBegin('TData');
  if (this.type !== null) {
    output.writeFieldBegin('type', Thrift.Type.I32, 1);
    output.writeI32(this.type);
    output.writeFieldEnd();
  }
  if (this.i32Data !== null) {
    output.writeFieldBegin('i32Data', Thrift.Type.I32, 2);
    output.writeI32(this.i32Data);
    output.writeFieldEnd();
  }
  if (this.i64Data !== null) {
    output.writeFieldBegin('i64Data', Thrift.Type.I64, 3);
    output.writeI64(this.i64Data);
    output.writeFieldEnd();
  }
  if (this.doubleData !== null) {
    output.writeFieldBegin('doubleData', Thrift.Type.DOUBLE, 4);
    output.writeDouble(this.doubleData);
    output.writeFieldEnd();
  }
  if (this.stringData !== null) {
    output.writeFieldBegin('stringData', Thrift.Type.STRING, 5);
    output.writeString(this.stringData);
    output.writeFieldEnd();
  }
  if (this.binaryData !== null) {
    output.writeFieldBegin('binaryData', Thrift.Type.STRING, 6);
    output.writeString(this.binaryData);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TPresence = function(args) {
  this.state = null;
  this.clientId = null;
  this.clientData = null;
  if (args) {
    if (args.state !== undefined) {
      this.state = args.state;
    }
    if (args.clientId !== undefined) {
      this.clientId = args.clientId;
    }
    if (args.clientData !== undefined) {
      this.clientData = args.clientData;
    }
  }
};
TPresence.prototype = {};
TPresence.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.state = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.clientId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRUCT) {
        this.clientData = new TData();
        this.clientData.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TPresence.prototype.write = function(output) {
  output.writeStructBegin('TPresence');
  if (this.state !== null) {
    output.writeFieldBegin('state', Thrift.Type.I32, 1);
    output.writeI32(this.state);
    output.writeFieldEnd();
  }
  if (this.clientId !== null) {
    output.writeFieldBegin('clientId', Thrift.Type.STRING, 2);
    output.writeString(this.clientId);
    output.writeFieldEnd();
  }
  if (this.clientData !== null) {
    output.writeFieldBegin('clientData', Thrift.Type.STRUCT, 3);
    this.clientData.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TMessage = function(args) {
  this.name = null;
  this.clientId = null;
  this.timestamp = null;
  this.data = null;
  this.tags = null;
  if (args) {
    if (args.name !== undefined) {
      this.name = args.name;
    }
    if (args.clientId !== undefined) {
      this.clientId = args.clientId;
    }
    if (args.timestamp !== undefined) {
      this.timestamp = args.timestamp;
    }
    if (args.data !== undefined) {
      this.data = args.data;
    }
    if (args.tags !== undefined) {
      this.tags = args.tags;
    }
  }
};
TMessage.prototype = {};
TMessage.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.clientId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I64) {
        this.timestamp = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRUCT) {
        this.data = new TData();
        this.data.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.tags = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = input.readString();
          this.tags.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TMessage.prototype.write = function(output) {
  output.writeStructBegin('TMessage');
  if (this.name !== null) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 1);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.clientId !== null) {
    output.writeFieldBegin('clientId', Thrift.Type.STRING, 2);
    output.writeString(this.clientId);
    output.writeFieldEnd();
  }
  if (this.timestamp !== null) {
    output.writeFieldBegin('timestamp', Thrift.Type.I64, 4);
    output.writeI64(this.timestamp);
    output.writeFieldEnd();
  }
  if (this.data !== null) {
    output.writeFieldBegin('data', Thrift.Type.STRUCT, 5);
    this.data.write(output);
    output.writeFieldEnd();
  }
  if (this.tags !== null) {
    output.writeFieldBegin('tags', Thrift.Type.LIST, 6);
    output.writeListBegin(Thrift.Type.STRING, this.tags.length);
    for (var iter7 in this.tags)
    {
      if (this.tags.hasOwnProperty(iter7))
      {
        iter7 = this.tags[iter7];
        output.writeString(iter7);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TChannelMessage = function(args) {
  this.action = null;
  this.statusCode = null;
  this.code = null;
  this.reason = null;
  this.applicationId = null;
  this.clientId = null;
  this.connectionId = null;
  this.connectionSerial = null;
  this.channel = null;
  this.channelSerial = null;
  this.name = null;
  this.timestamp = null;
  this.size = null;
  this.messages = null;
  this.presence = null;
  if (args) {
    if (args.action !== undefined) {
      this.action = args.action;
    }
    if (args.statusCode !== undefined) {
      this.statusCode = args.statusCode;
    }
    if (args.code !== undefined) {
      this.code = args.code;
    }
    if (args.reason !== undefined) {
      this.reason = args.reason;
    }
    if (args.applicationId !== undefined) {
      this.applicationId = args.applicationId;
    }
    if (args.clientId !== undefined) {
      this.clientId = args.clientId;
    }
    if (args.connectionId !== undefined) {
      this.connectionId = args.connectionId;
    }
    if (args.connectionSerial !== undefined) {
      this.connectionSerial = args.connectionSerial;
    }
    if (args.channel !== undefined) {
      this.channel = args.channel;
    }
    if (args.channelSerial !== undefined) {
      this.channelSerial = args.channelSerial;
    }
    if (args.name !== undefined) {
      this.name = args.name;
    }
    if (args.timestamp !== undefined) {
      this.timestamp = args.timestamp;
    }
    if (args.size !== undefined) {
      this.size = args.size;
    }
    if (args.messages !== undefined) {
      this.messages = args.messages;
    }
    if (args.presence !== undefined) {
      this.presence = args.presence;
    }
  }
};
TChannelMessage.prototype = {};
TChannelMessage.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.action = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I16) {
        this.statusCode = input.readI16();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I16) {
        this.code = input.readI16();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.reason = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.applicationId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.clientId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.STRING) {
        this.connectionId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.I32) {
        this.connectionSerial = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.STRING) {
        this.channel = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.STRING) {
        this.channelSerial = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.I64) {
        this.timestamp = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 13:
      if (ftype == Thrift.Type.I32) {
        this.size = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 14:
      if (ftype == Thrift.Type.LIST) {
        var _size8 = 0;
        var _rtmp312;
        this.messages = [];
        var _etype11 = 0;
        _rtmp312 = input.readListBegin();
        _etype11 = _rtmp312.etype;
        _size8 = _rtmp312.size;
        for (var _i13 = 0; _i13 < _size8; ++_i13)
        {
          var elem14 = null;
          elem14 = new TMessage();
          elem14.read(input);
          this.messages.push(elem14);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 15:
      if (ftype == Thrift.Type.SET) {
        var _size15 = 0;
        var _rtmp319;
        this.presence = [];
        var _etype18 = 0;
        _rtmp319 = input.readSetBegin();
        _etype18 = _rtmp319.etype;
        _size15 = _rtmp319.size;
        for (var _i20 = 0; _i20 < _size15; ++_i20)
        {
          var elem21 = null;
          elem21 = new TPresence();
          elem21.read(input);
          this.presence.push(elem21);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TChannelMessage.prototype.write = function(output) {
  output.writeStructBegin('TChannelMessage');
  if (this.action !== null) {
    output.writeFieldBegin('action', Thrift.Type.I32, 1);
    output.writeI32(this.action);
    output.writeFieldEnd();
  }
  if (this.statusCode !== null) {
    output.writeFieldBegin('statusCode', Thrift.Type.I16, 2);
    output.writeI16(this.statusCode);
    output.writeFieldEnd();
  }
  if (this.code !== null) {
    output.writeFieldBegin('code', Thrift.Type.I16, 3);
    output.writeI16(this.code);
    output.writeFieldEnd();
  }
  if (this.reason !== null) {
    output.writeFieldBegin('reason', Thrift.Type.STRING, 4);
    output.writeString(this.reason);
    output.writeFieldEnd();
  }
  if (this.applicationId !== null) {
    output.writeFieldBegin('applicationId', Thrift.Type.STRING, 5);
    output.writeString(this.applicationId);
    output.writeFieldEnd();
  }
  if (this.clientId !== null) {
    output.writeFieldBegin('clientId', Thrift.Type.STRING, 6);
    output.writeString(this.clientId);
    output.writeFieldEnd();
  }
  if (this.connectionId !== null) {
    output.writeFieldBegin('connectionId', Thrift.Type.STRING, 7);
    output.writeString(this.connectionId);
    output.writeFieldEnd();
  }
  if (this.connectionSerial !== null) {
    output.writeFieldBegin('connectionSerial', Thrift.Type.I32, 8);
    output.writeI32(this.connectionSerial);
    output.writeFieldEnd();
  }
  if (this.channel !== null) {
    output.writeFieldBegin('channel', Thrift.Type.STRING, 9);
    output.writeString(this.channel);
    output.writeFieldEnd();
  }
  if (this.channelSerial !== null) {
    output.writeFieldBegin('channelSerial', Thrift.Type.STRING, 10);
    output.writeString(this.channelSerial);
    output.writeFieldEnd();
  }
  if (this.name !== null) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 11);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.timestamp !== null) {
    output.writeFieldBegin('timestamp', Thrift.Type.I64, 12);
    output.writeI64(this.timestamp);
    output.writeFieldEnd();
  }
  if (this.size !== null) {
    output.writeFieldBegin('size', Thrift.Type.I32, 13);
    output.writeI32(this.size);
    output.writeFieldEnd();
  }
  if (this.messages !== null) {
    output.writeFieldBegin('messages', Thrift.Type.LIST, 14);
    output.writeListBegin(Thrift.Type.STRUCT, this.messages.length);
    for (var iter22 in this.messages)
    {
      if (this.messages.hasOwnProperty(iter22))
      {
        iter22 = this.messages[iter22];
        iter22.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.presence !== null) {
    output.writeFieldBegin('presence', Thrift.Type.SET, 15);
    output.writeSetBegin(Thrift.Type.STRUCT, this.presence.length);
    for (var iter23 in this.presence)
    {
      if (this.presence.hasOwnProperty(iter23))
      {
        iter23 = this.presence[iter23];
        iter23.write(output);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TMessageSet = function(args) {
  this.items = null;
  if (args) {
    if (args.items !== undefined) {
      this.items = args.items;
    }
  }
};
TMessageSet.prototype = {};
TMessageSet.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.LIST) {
        var _size24 = 0;
        var _rtmp328;
        this.items = [];
        var _etype27 = 0;
        _rtmp328 = input.readListBegin();
        _etype27 = _rtmp328.etype;
        _size24 = _rtmp328.size;
        for (var _i29 = 0; _i29 < _size24; ++_i29)
        {
          var elem30 = null;
          elem30 = new TChannelMessage();
          elem30.read(input);
          this.items.push(elem30);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TMessageSet.prototype.write = function(output) {
  output.writeStructBegin('TMessageSet');
  if (this.items !== null) {
    output.writeFieldBegin('items', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.items.length);
    for (var iter31 in this.items)
    {
      if (this.items.hasOwnProperty(iter31))
      {
        iter31 = this.items[iter31];
        iter31.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

CTraffic = function(args) {
  this.messageCount = null;
  this.messageSize = null;
  if (args) {
    if (args.messageCount !== undefined) {
      this.messageCount = args.messageCount;
    }
    if (args.messageSize !== undefined) {
      this.messageSize = args.messageSize;
    }
  }
};
CTraffic.prototype = {};
CTraffic.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.messageCount = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.DOUBLE) {
        this.messageSize = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CTraffic.prototype.write = function(output) {
  output.writeStructBegin('CTraffic');
  if (this.messageCount !== null) {
    output.writeFieldBegin('messageCount', Thrift.Type.I32, 1);
    output.writeI32(this.messageCount);
    output.writeFieldEnd();
  }
  if (this.messageSize !== null) {
    output.writeFieldBegin('messageSize', Thrift.Type.DOUBLE, 2);
    output.writeDouble(this.messageSize);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

CConnections = function(args) {
  this.plain = null;
  this.tls = null;
  if (args) {
    if (args.plain !== undefined) {
      this.plain = args.plain;
    }
    if (args.tls !== undefined) {
      this.tls = args.tls;
    }
  }
};
CConnections.prototype = {};
CConnections.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.plain = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.tls = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CConnections.prototype.write = function(output) {
  output.writeStructBegin('CConnections');
  if (this.plain !== null) {
    output.writeFieldBegin('plain', Thrift.Type.I32, 1);
    output.writeI32(this.plain);
    output.writeFieldEnd();
  }
  if (this.tls !== null) {
    output.writeFieldBegin('tls', Thrift.Type.I32, 2);
    output.writeI32(this.tls);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

CTimelineStats = function(args) {
  this.published = null;
  this.deliveredAll = null;
  this.deliveredRealtime = null;
  this.deliveredRest = null;
  this.deliveredPost = null;
  this.deliveredHttpStream = null;
  this.connections = null;
  if (args) {
    if (args.published !== undefined) {
      this.published = args.published;
    }
    if (args.deliveredAll !== undefined) {
      this.deliveredAll = args.deliveredAll;
    }
    if (args.deliveredRealtime !== undefined) {
      this.deliveredRealtime = args.deliveredRealtime;
    }
    if (args.deliveredRest !== undefined) {
      this.deliveredRest = args.deliveredRest;
    }
    if (args.deliveredPost !== undefined) {
      this.deliveredPost = args.deliveredPost;
    }
    if (args.deliveredHttpStream !== undefined) {
      this.deliveredHttpStream = args.deliveredHttpStream;
    }
    if (args.connections !== undefined) {
      this.connections = args.connections;
    }
  }
};
CTimelineStats.prototype = {};
CTimelineStats.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.published = new CTraffic();
        this.published.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.deliveredAll = new CTraffic();
        this.deliveredAll.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRUCT) {
        this.deliveredRealtime = new CTraffic();
        this.deliveredRealtime.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRUCT) {
        this.deliveredRest = new CTraffic();
        this.deliveredRest.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRUCT) {
        this.deliveredPost = new CTraffic();
        this.deliveredPost.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRUCT) {
        this.deliveredHttpStream = new CTraffic();
        this.deliveredHttpStream.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.STRUCT) {
        this.connections = new CConnections();
        this.connections.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CTimelineStats.prototype.write = function(output) {
  output.writeStructBegin('CTimelineStats');
  if (this.published !== null) {
    output.writeFieldBegin('published', Thrift.Type.STRUCT, 1);
    this.published.write(output);
    output.writeFieldEnd();
  }
  if (this.deliveredAll !== null) {
    output.writeFieldBegin('deliveredAll', Thrift.Type.STRUCT, 2);
    this.deliveredAll.write(output);
    output.writeFieldEnd();
  }
  if (this.deliveredRealtime !== null) {
    output.writeFieldBegin('deliveredRealtime', Thrift.Type.STRUCT, 3);
    this.deliveredRealtime.write(output);
    output.writeFieldEnd();
  }
  if (this.deliveredRest !== null) {
    output.writeFieldBegin('deliveredRest', Thrift.Type.STRUCT, 4);
    this.deliveredRest.write(output);
    output.writeFieldEnd();
  }
  if (this.deliveredPost !== null) {
    output.writeFieldBegin('deliveredPost', Thrift.Type.STRUCT, 5);
    this.deliveredPost.write(output);
    output.writeFieldEnd();
  }
  if (this.deliveredHttpStream !== null) {
    output.writeFieldBegin('deliveredHttpStream', Thrift.Type.STRUCT, 6);
    this.deliveredHttpStream.write(output);
    output.writeFieldEnd();
  }
  if (this.connections !== null) {
    output.writeFieldBegin('connections', Thrift.Type.STRUCT, 7);
    this.connections.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TMessageArray = function(args) {
  this.items = null;
  if (args) {
    if (args.items !== undefined) {
      this.items = args.items;
    }
  }
};
TMessageArray.prototype = {};
TMessageArray.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.LIST) {
        var _size32 = 0;
        var _rtmp336;
        this.items = [];
        var _etype35 = 0;
        _rtmp336 = input.readListBegin();
        _etype35 = _rtmp336.etype;
        _size32 = _rtmp336.size;
        for (var _i37 = 0; _i37 < _size32; ++_i37)
        {
          var elem38 = null;
          elem38 = new TMessage();
          elem38.read(input);
          this.items.push(elem38);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TMessageArray.prototype.write = function(output) {
  output.writeStructBegin('TMessageArray');
  if (this.items !== null) {
    output.writeFieldBegin('items', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.items.length);
    for (var iter39 in this.items)
    {
      if (this.items.hasOwnProperty(iter39))
      {
        iter39 = this.items[iter39];
        iter39.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TPresenceArray = function(args) {
  this.items = null;
  if (args) {
    if (args.items !== undefined) {
      this.items = args.items;
    }
  }
};
TPresenceArray.prototype = {};
TPresenceArray.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.LIST) {
        var _size40 = 0;
        var _rtmp344;
        this.items = [];
        var _etype43 = 0;
        _rtmp344 = input.readListBegin();
        _etype43 = _rtmp344.etype;
        _size40 = _rtmp344.size;
        for (var _i45 = 0; _i45 < _size40; ++_i45)
        {
          var elem46 = null;
          elem46 = new TPresence();
          elem46.read(input);
          this.items.push(elem46);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TPresenceArray.prototype.write = function(output) {
  output.writeStructBegin('TPresenceArray');
  if (this.items !== null) {
    output.writeFieldBegin('items', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.items.length);
    for (var iter47 in this.items)
    {
      if (this.items.hasOwnProperty(iter47))
      {
        iter47 = this.items[iter47];
        iter47.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TStatsArray = function(args) {
  this.items = null;
  if (args) {
    if (args.items !== undefined) {
      this.items = args.items;
    }
  }
};
TStatsArray.prototype = {};
TStatsArray.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.LIST) {
        var _size48 = 0;
        var _rtmp352;
        this.items = [];
        var _etype51 = 0;
        _rtmp352 = input.readListBegin();
        _etype51 = _rtmp352.etype;
        _size48 = _rtmp352.size;
        for (var _i53 = 0; _i53 < _size48; ++_i53)
        {
          var elem54 = null;
          elem54 = new CTimelineStats();
          elem54.read(input);
          this.items.push(elem54);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TStatsArray.prototype.write = function(output) {
  output.writeStructBegin('TStatsArray');
  if (this.items !== null) {
    output.writeFieldBegin('items', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.items.length);
    for (var iter55 in this.items)
    {
      if (this.items.hasOwnProperty(iter55))
      {
        iter55 = this.items[iter55];
        iter55.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

