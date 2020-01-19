import * as jspb from "google-protobuf"

import * as proto_api_v1_package_pb from '../../../proto/api/v1/package_pb';

export class PackageRequest extends jspb.Message {
  getResultCount(): number;
  setResultCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PackageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PackageRequest): PackageRequest.AsObject;
  static serializeBinaryToWriter(message: PackageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PackageRequest;
  static deserializeBinaryFromReader(message: PackageRequest, reader: jspb.BinaryReader): PackageRequest;
}

export namespace PackageRequest {
  export type AsObject = {
    resultCount: number,
  }
}

export class PackageResult extends jspb.Message {
  getPersonsList(): Array<proto_api_v1_package_pb.Person>;
  setPersonsList(value: Array<proto_api_v1_package_pb.Person>): void;
  clearPersonsList(): void;
  addPersons(value?: proto_api_v1_package_pb.Person, index?: number): proto_api_v1_package_pb.Person;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PackageResult.AsObject;
  static toObject(includeInstance: boolean, msg: PackageResult): PackageResult.AsObject;
  static serializeBinaryToWriter(message: PackageResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PackageResult;
  static deserializeBinaryFromReader(message: PackageResult, reader: jspb.BinaryReader): PackageResult;
}

export namespace PackageResult {
  export type AsObject = {
    personsList: Array<proto_api_v1_package_pb.Person.AsObject>,
  }
}

