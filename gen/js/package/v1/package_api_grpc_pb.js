// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var package_v1_package_api_pb = require('../../package/v1/package_api_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_package_v1_PackageRequest(arg) {
  if (!(arg instanceof package_v1_package_api_pb.PackageRequest)) {
    throw new Error('Expected argument of type package.v1.PackageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_package_v1_PackageRequest(buffer_arg) {
  return package_v1_package_api_pb.PackageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_package_v1_PackageResult(arg) {
  if (!(arg instanceof package_v1_package_api_pb.PackageResult)) {
    throw new Error('Expected argument of type package.v1.PackageResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_package_v1_PackageResult(buffer_arg) {
  return package_v1_package_api_pb.PackageResult.deserializeBinary(new Uint8Array(buffer_arg));
}


var PackageAPIService = exports.PackageAPIService = {
  getPackage: {
    path: '/package.v1.PackageAPI/GetPackage',
    requestStream: false,
    responseStream: false,
    requestType: package_v1_package_api_pb.PackageRequest,
    responseType: package_v1_package_api_pb.PackageResult,
    requestSerialize: serialize_package_v1_PackageRequest,
    requestDeserialize: deserialize_package_v1_PackageRequest,
    responseSerialize: serialize_package_v1_PackageResult,
    responseDeserialize: deserialize_package_v1_PackageResult,
  },
};

exports.PackageAPIClient = grpc.makeGenericClientConstructor(PackageAPIService);
