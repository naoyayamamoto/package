/**
 * @fileoverview gRPC-Web generated client stub for package.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import {
  PackageRequest,
  PackageResult} from './package_api_pb';

export class PackageAPIClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetPackage = new grpcWeb.AbstractClientBase.MethodInfo(
    PackageResult,
    (request: PackageRequest) => {
      return request.serializeBinary();
    },
    PackageResult.deserializeBinary
  );

  getPackage(
    request: PackageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: PackageResult) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/package.v1.PackageAPI/GetPackage',
      request,
      metadata || {},
      this.methodInfoGetPackage,
      callback);
  }

}

