// package: account.package.api.v1
// file: proto/api/v1/package_api.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_api_v1_package_api_pb from "../../../proto/api/v1/package_api_pb";
import * as proto_api_v1_package_pb from "../../../proto/api/v1/package_pb";

interface IPackageAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getPackage: IPackageAPIService_IGetPackage;
}

interface IPackageAPIService_IGetPackage extends grpc.MethodDefinition<proto_api_v1_package_api_pb.PackageRequest, proto_api_v1_package_api_pb.PackageResult> {
    path: string; // "/account.package.api.v1.PackageAPI/GetPackage"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<proto_api_v1_package_api_pb.PackageRequest>;
    requestDeserialize: grpc.deserialize<proto_api_v1_package_api_pb.PackageRequest>;
    responseSerialize: grpc.serialize<proto_api_v1_package_api_pb.PackageResult>;
    responseDeserialize: grpc.deserialize<proto_api_v1_package_api_pb.PackageResult>;
}

export const PackageAPIService: IPackageAPIService;

export interface IPackageAPIServer {
    getPackage: grpc.handleUnaryCall<proto_api_v1_package_api_pb.PackageRequest, proto_api_v1_package_api_pb.PackageResult>;
}

export interface IPackageAPIClient {
    getPackage(request: proto_api_v1_package_api_pb.PackageRequest, callback: (error: grpc.ServiceError | null, response: proto_api_v1_package_api_pb.PackageResult) => void): grpc.ClientUnaryCall;
    getPackage(request: proto_api_v1_package_api_pb.PackageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_api_v1_package_api_pb.PackageResult) => void): grpc.ClientUnaryCall;
    getPackage(request: proto_api_v1_package_api_pb.PackageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_api_v1_package_api_pb.PackageResult) => void): grpc.ClientUnaryCall;
}

export class PackageAPIClient extends grpc.Client implements IPackageAPIClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getPackage(request: proto_api_v1_package_api_pb.PackageRequest, callback: (error: grpc.ServiceError | null, response: proto_api_v1_package_api_pb.PackageResult) => void): grpc.ClientUnaryCall;
    public getPackage(request: proto_api_v1_package_api_pb.PackageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_api_v1_package_api_pb.PackageResult) => void): grpc.ClientUnaryCall;
    public getPackage(request: proto_api_v1_package_api_pb.PackageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_api_v1_package_api_pb.PackageResult) => void): grpc.ClientUnaryCall;
}
