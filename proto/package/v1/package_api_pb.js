// source: package_api.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.proto.package.v1.Package', null, global);
goog.exportSymbol('proto.proto.package.v1.Package.Links', null, global);
goog.exportSymbol('proto.proto.package.v1.PackageManager', null, global);
goog.exportSymbol('proto.proto.package.v1.PackageRequest', null, global);
goog.exportSymbol('proto.proto.package.v1.PackageResult', null, global);
goog.exportSymbol('proto.proto.package.v1.Profile', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.package.v1.PackageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.package.v1.PackageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.package.v1.PackageRequest.displayName = 'proto.proto.package.v1.PackageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.package.v1.PackageResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.package.v1.PackageResult.repeatedFields_, null);
};
goog.inherits(proto.proto.package.v1.PackageResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.package.v1.PackageResult.displayName = 'proto.proto.package.v1.PackageResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.package.v1.Profile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.package.v1.Profile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.package.v1.Profile.displayName = 'proto.proto.package.v1.Profile';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.package.v1.Package = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.package.v1.Package.repeatedFields_, null);
};
goog.inherits(proto.proto.package.v1.Package, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.package.v1.Package.displayName = 'proto.proto.package.v1.Package';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.package.v1.Package.Links = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.package.v1.Package.Links, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.package.v1.Package.Links.displayName = 'proto.proto.package.v1.Package.Links';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.package.v1.PackageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.package.v1.PackageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.package.v1.PackageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.package.v1.PackageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.package.v1.PackageRequest}
 */
proto.proto.package.v1.PackageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.package.v1.PackageRequest;
  return proto.proto.package.v1.PackageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.package.v1.PackageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.package.v1.PackageRequest}
 */
proto.proto.package.v1.PackageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.package.v1.PackageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.package.v1.PackageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.package.v1.PackageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.package.v1.PackageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.proto.package.v1.PackageRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.package.v1.PackageRequest} returns this
 */
proto.proto.package.v1.PackageRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.package.v1.PackageResult.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.package.v1.PackageResult.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.package.v1.PackageResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.package.v1.PackageResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.package.v1.PackageResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    domain: jspb.Message.getFieldWithDefault(msg, 1, ""),
    profile: (f = msg.getProfile()) && proto.proto.package.v1.Profile.toObject(includeInstance, f),
    packageManager: jspb.Message.getFieldWithDefault(msg, 3, 0),
    packageList: jspb.Message.toObjectList(msg.getPackageList(),
    proto.proto.package.v1.Package.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.package.v1.PackageResult}
 */
proto.proto.package.v1.PackageResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.package.v1.PackageResult;
  return proto.proto.package.v1.PackageResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.package.v1.PackageResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.package.v1.PackageResult}
 */
proto.proto.package.v1.PackageResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 2:
      var value = new proto.proto.package.v1.Profile;
      reader.readMessage(value,proto.proto.package.v1.Profile.deserializeBinaryFromReader);
      msg.setProfile(value);
      break;
    case 3:
      var value = /** @type {!proto.proto.package.v1.PackageManager} */ (reader.readEnum());
      msg.setPackageManager(value);
      break;
    case 6:
      var value = new proto.proto.package.v1.Package;
      reader.readMessage(value,proto.proto.package.v1.Package.deserializeBinaryFromReader);
      msg.addPackage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.package.v1.PackageResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.package.v1.PackageResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.package.v1.PackageResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.package.v1.PackageResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProfile();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.proto.package.v1.Profile.serializeBinaryToWriter
    );
  }
  f = message.getPackageManager();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getPackageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.proto.package.v1.Package.serializeBinaryToWriter
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.proto.package.v1.PackageResult.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.package.v1.PackageResult} returns this
 */
proto.proto.package.v1.PackageResult.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Profile profile = 2;
 * @return {?proto.proto.package.v1.Profile}
 */
proto.proto.package.v1.PackageResult.prototype.getProfile = function() {
  return /** @type{?proto.proto.package.v1.Profile} */ (
    jspb.Message.getWrapperField(this, proto.proto.package.v1.Profile, 2));
};


/**
 * @param {?proto.proto.package.v1.Profile|undefined} value
 * @return {!proto.proto.package.v1.PackageResult} returns this
*/
proto.proto.package.v1.PackageResult.prototype.setProfile = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.package.v1.PackageResult} returns this
 */
proto.proto.package.v1.PackageResult.prototype.clearProfile = function() {
  return this.setProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.package.v1.PackageResult.prototype.hasProfile = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PackageManager package_manager = 3;
 * @return {!proto.proto.package.v1.PackageManager}
 */
proto.proto.package.v1.PackageResult.prototype.getPackageManager = function() {
  return /** @type {!proto.proto.package.v1.PackageManager} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.proto.package.v1.PackageManager} value
 * @return {!proto.proto.package.v1.PackageResult} returns this
 */
proto.proto.package.v1.PackageResult.prototype.setPackageManager = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated Package package = 6;
 * @return {!Array<!proto.proto.package.v1.Package>}
 */
proto.proto.package.v1.PackageResult.prototype.getPackageList = function() {
  return /** @type{!Array<!proto.proto.package.v1.Package>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.package.v1.Package, 6));
};


/**
 * @param {!Array<!proto.proto.package.v1.Package>} value
 * @return {!proto.proto.package.v1.PackageResult} returns this
*/
proto.proto.package.v1.PackageResult.prototype.setPackageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.proto.package.v1.Package=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.package.v1.Package}
 */
proto.proto.package.v1.PackageResult.prototype.addPackage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.proto.package.v1.Package, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.package.v1.PackageResult} returns this
 */
proto.proto.package.v1.PackageResult.prototype.clearPackageList = function() {
  return this.setPackageList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.package.v1.Profile.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.package.v1.Profile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.package.v1.Profile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.package.v1.Profile.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    email: jspb.Message.getFieldWithDefault(msg, 2, ""),
    avatar: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.package.v1.Profile}
 */
proto.proto.package.v1.Profile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.package.v1.Profile;
  return proto.proto.package.v1.Profile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.package.v1.Profile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.package.v1.Profile}
 */
proto.proto.package.v1.Profile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatar(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.package.v1.Profile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.package.v1.Profile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.package.v1.Profile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.package.v1.Profile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAvatar();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.proto.package.v1.Profile.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.package.v1.Profile} returns this
 */
proto.proto.package.v1.Profile.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.proto.package.v1.Profile.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.package.v1.Profile} returns this
 */
proto.proto.package.v1.Profile.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string avatar = 3;
 * @return {string}
 */
proto.proto.package.v1.Profile.prototype.getAvatar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.package.v1.Profile} returns this
 */
proto.proto.package.v1.Profile.prototype.setAvatar = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.package.v1.Package.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.package.v1.Package.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.package.v1.Package.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.package.v1.Package} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.package.v1.Package.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    version: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    date: (f = msg.getDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    keywordList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    links: (f = msg.getLinks()) && proto.proto.package.v1.Package.Links.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.package.v1.Package}
 */
proto.proto.package.v1.Package.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.package.v1.Package;
  return proto.proto.package.v1.Package.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.package.v1.Package} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.package.v1.Package}
 */
proto.proto.package.v1.Package.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDate(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addKeyword(value);
      break;
    case 7:
      var value = new proto.proto.package.v1.Package.Links;
      reader.readMessage(value,proto.proto.package.v1.Package.Links.deserializeBinaryFromReader);
      msg.setLinks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.package.v1.Package.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.package.v1.Package.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.package.v1.Package} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.package.v1.Package.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getKeywordList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getLinks();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.proto.package.v1.Package.Links.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.package.v1.Package.Links.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.package.v1.Package.Links.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.package.v1.Package.Links} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.package.v1.Package.Links.toObject = function(includeInstance, msg) {
  var f, obj = {
    pb_package: jspb.Message.getFieldWithDefault(msg, 1, ""),
    homepage: jspb.Message.getFieldWithDefault(msg, 2, ""),
    repository: jspb.Message.getFieldWithDefault(msg, 3, ""),
    bugs: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.package.v1.Package.Links}
 */
proto.proto.package.v1.Package.Links.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.package.v1.Package.Links;
  return proto.proto.package.v1.Package.Links.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.package.v1.Package.Links} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.package.v1.Package.Links}
 */
proto.proto.package.v1.Package.Links.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPackage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHomepage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepository(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBugs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.package.v1.Package.Links.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.package.v1.Package.Links.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.package.v1.Package.Links} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.package.v1.Package.Links.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPackage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHomepage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRepository();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBugs();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string package = 1;
 * @return {string}
 */
proto.proto.package.v1.Package.Links.prototype.getPackage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.package.v1.Package.Links} returns this
 */
proto.proto.package.v1.Package.Links.prototype.setPackage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string homepage = 2;
 * @return {string}
 */
proto.proto.package.v1.Package.Links.prototype.getHomepage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.package.v1.Package.Links} returns this
 */
proto.proto.package.v1.Package.Links.prototype.setHomepage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string repository = 3;
 * @return {string}
 */
proto.proto.package.v1.Package.Links.prototype.getRepository = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.package.v1.Package.Links} returns this
 */
proto.proto.package.v1.Package.Links.prototype.setRepository = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string bugs = 4;
 * @return {string}
 */
proto.proto.package.v1.Package.Links.prototype.getBugs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.package.v1.Package.Links} returns this
 */
proto.proto.package.v1.Package.Links.prototype.setBugs = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.proto.package.v1.Package.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.package.v1.Package} returns this
 */
proto.proto.package.v1.Package.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.proto.package.v1.Package.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.package.v1.Package} returns this
 */
proto.proto.package.v1.Package.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string version = 3;
 * @return {string}
 */
proto.proto.package.v1.Package.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.package.v1.Package} returns this
 */
proto.proto.package.v1.Package.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.proto.package.v1.Package.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.package.v1.Package} returns this
 */
proto.proto.package.v1.Package.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp date = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.proto.package.v1.Package.prototype.getDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.proto.package.v1.Package} returns this
*/
proto.proto.package.v1.Package.prototype.setDate = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.package.v1.Package} returns this
 */
proto.proto.package.v1.Package.prototype.clearDate = function() {
  return this.setDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.package.v1.Package.prototype.hasDate = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated string keyword = 6;
 * @return {!Array<string>}
 */
proto.proto.package.v1.Package.prototype.getKeywordList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.proto.package.v1.Package} returns this
 */
proto.proto.package.v1.Package.prototype.setKeywordList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.proto.package.v1.Package} returns this
 */
proto.proto.package.v1.Package.prototype.addKeyword = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.package.v1.Package} returns this
 */
proto.proto.package.v1.Package.prototype.clearKeywordList = function() {
  return this.setKeywordList([]);
};


/**
 * optional Links links = 7;
 * @return {?proto.proto.package.v1.Package.Links}
 */
proto.proto.package.v1.Package.prototype.getLinks = function() {
  return /** @type{?proto.proto.package.v1.Package.Links} */ (
    jspb.Message.getWrapperField(this, proto.proto.package.v1.Package.Links, 7));
};


/**
 * @param {?proto.proto.package.v1.Package.Links|undefined} value
 * @return {!proto.proto.package.v1.Package} returns this
*/
proto.proto.package.v1.Package.prototype.setLinks = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.package.v1.Package} returns this
 */
proto.proto.package.v1.Package.prototype.clearLinks = function() {
  return this.setLinks(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.package.v1.Package.prototype.hasLinks = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * @enum {number}
 */
proto.proto.package.v1.PackageManager = {
  OTHER: 0,
  NPM: 1
};

goog.object.extend(exports, proto.proto.package.v1);
