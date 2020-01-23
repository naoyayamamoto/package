// package: package.v1
// file: package/v1/package_api.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as package_v1_package_api_pb from "../../package/v1/package_api_pb";

interface IPackageAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getPackage: IPackageAPIService_IGetPackage;
}

interface IPackageAPIService_IGetPackage extends grpc.MethodDefinition<package_v1_package_api_pb.PackageRequest, package_v1_package_api_pb.PackageResult> {
    path: string; // "/package.v1.PackageAPI/GetPackage"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<package_v1_package_api_pb.PackageRequest>;
    requestDeserialize: grpc.deserialize<package_v1_package_api_pb.PackageRequest>;
    responseSerialize: grpc.serialize<package_v1_package_api_pb.PackageResult>;
    responseDeserialize: grpc.deserialize<package_v1_package_api_pb.PackageResult>;
}

export const PackageAPIService: IPackageAPIService;

export interface IPackageAPIServer {
    getPackage: grpc.handleUnaryCall<package_v1_package_api_pb.PackageRequest, package_v1_package_api_pb.PackageResult>;
}

export interface IPackageAPIClient {
    getPackage(request: package_v1_package_api_pb.PackageRequest, callback: (error: grpc.ServiceError | null, response: package_v1_package_api_pb.PackageResult) => void): grpc.ClientUnaryCall;
    getPackage(request: package_v1_package_api_pb.PackageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: package_v1_package_api_pb.PackageResult) => void): grpc.ClientUnaryCall;
    getPackage(request: package_v1_package_api_pb.PackageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: package_v1_package_api_pb.PackageResult) => void): grpc.ClientUnaryCall;
}

export class PackageAPIClient extends grpc.Client implements IPackageAPIClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getPackage(request: package_v1_package_api_pb.PackageRequest, callback: (error: grpc.ServiceError | null, response: package_v1_package_api_pb.PackageResult) => void): grpc.ClientUnaryCall;
    public getPackage(request: package_v1_package_api_pb.PackageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: package_v1_package_api_pb.PackageResult) => void): grpc.ClientUnaryCall;
    public getPackage(request: package_v1_package_api_pb.PackageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: package_v1_package_api_pb.PackageResult) => void): grpc.ClientUnaryCall;
}
