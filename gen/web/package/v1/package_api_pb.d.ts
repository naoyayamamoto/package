import * as jspb from "google-protobuf"

export class PackageRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PackageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PackageRequest): PackageRequest.AsObject;
  static serializeBinaryToWriter(message: PackageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PackageRequest;
  static deserializeBinaryFromReader(message: PackageRequest, reader: jspb.BinaryReader): PackageRequest;
}

export namespace PackageRequest {
  export type AsObject = {
    name: string,
  }
}

export class PackageResult extends jspb.Message {
  getDomain(): string;
  setDomain(value: string): void;

  getProfile(): Profile | undefined;
  setProfile(value?: Profile): void;
  hasProfile(): boolean;
  clearProfile(): void;

  getPackagesList(): Array<Package>;
  setPackagesList(value: Array<Package>): void;
  clearPackagesList(): void;
  addPackages(value?: Package, index?: number): Package;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PackageResult.AsObject;
  static toObject(includeInstance: boolean, msg: PackageResult): PackageResult.AsObject;
  static serializeBinaryToWriter(message: PackageResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PackageResult;
  static deserializeBinaryFromReader(message: PackageResult, reader: jspb.BinaryReader): PackageResult;
}

export namespace PackageResult {
  export type AsObject = {
    domain: string,
    profile?: Profile.AsObject,
    packagesList: Array<Package.AsObject>,
  }
}

export class Profile extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Profile.AsObject;
  static toObject(includeInstance: boolean, msg: Profile): Profile.AsObject;
  static serializeBinaryToWriter(message: Profile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Profile;
  static deserializeBinaryFromReader(message: Profile, reader: jspb.BinaryReader): Profile;
}

export namespace Profile {
  export type AsObject = {
    name: string,
    email: string,
  }
}

export class Package extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Package.AsObject;
  static toObject(includeInstance: boolean, msg: Package): Package.AsObject;
  static serializeBinaryToWriter(message: Package, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Package;
  static deserializeBinaryFromReader(message: Package, reader: jspb.BinaryReader): Package;
}

export namespace Package {
  export type AsObject = {
    id: string,
  }
}

