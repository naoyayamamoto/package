// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_api_v1_package_api_pb = require('../../../proto/api/v1/package_api_pb.js');
var proto_api_v1_package_pb = require('../../../proto/api/v1/package_pb.js');

function serialize_account_package_api_v1_PackageRequest(arg) {
  if (!(arg instanceof proto_api_v1_package_api_pb.PackageRequest)) {
    throw new Error('Expected argument of type account.package.api.v1.PackageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_account_package_api_v1_PackageRequest(buffer_arg) {
  return proto_api_v1_package_api_pb.PackageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_account_package_api_v1_PackageResult(arg) {
  if (!(arg instanceof proto_api_v1_package_api_pb.PackageResult)) {
    throw new Error('Expected argument of type account.package.api.v1.PackageResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_account_package_api_v1_PackageResult(buffer_arg) {
  return proto_api_v1_package_api_pb.PackageResult.deserializeBinary(new Uint8Array(buffer_arg));
}


var PackageAPIService = exports.PackageAPIService = {
  getPackage: {
    path: '/account.package.api.v1.PackageAPI/GetPackage',
    requestStream: false,
    responseStream: false,
    requestType: proto_api_v1_package_api_pb.PackageRequest,
    responseType: proto_api_v1_package_api_pb.PackageResult,
    requestSerialize: serialize_account_package_api_v1_PackageRequest,
    requestDeserialize: deserialize_account_package_api_v1_PackageRequest,
    responseSerialize: serialize_account_package_api_v1_PackageResult,
    responseDeserialize: deserialize_account_package_api_v1_PackageResult,
  },
};

exports.PackageAPIClient = grpc.makeGenericClientConstructor(PackageAPIService);
