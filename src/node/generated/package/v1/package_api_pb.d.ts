// package: package.v1
// file: package/v1/package_api.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class PackageRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PackageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PackageRequest): PackageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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


    hasProfile(): boolean;
    clearProfile(): void;
    getProfile(): Profile | undefined;
    setProfile(value?: Profile): void;

    getPackageManager(): PackageManager;
    setPackageManager(value: PackageManager): void;

    clearPackageList(): void;
    getPackageList(): Array<Package>;
    setPackageList(value: Array<Package>): void;
    addPackage(value?: Package, index?: number): Package;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PackageResult.AsObject;
    static toObject(includeInstance: boolean, msg: PackageResult): PackageResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PackageResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PackageResult;
    static deserializeBinaryFromReader(message: PackageResult, reader: jspb.BinaryReader): PackageResult;
}

export namespace PackageResult {
    export type AsObject = {
        domain: string,
        profile?: Profile.AsObject,
        packageManager: PackageManager,
        pb_packageList: Array<Package.AsObject>,
    }
}

export class Profile extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    getEmail(): string;
    setEmail(value: string): void;

    getAvatar(): string;
    setAvatar(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Profile.AsObject;
    static toObject(includeInstance: boolean, msg: Profile): Profile.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Profile, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Profile;
    static deserializeBinaryFromReader(message: Profile, reader: jspb.BinaryReader): Profile;
}

export namespace Profile {
    export type AsObject = {
        name: string,
        email: string,
        avatar: string,
    }
}

export class Package extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getName(): string;
    setName(value: string): void;

    getVersion(): string;
    setVersion(value: string): void;

    getDescription(): string;
    setDescription(value: string): void;


    hasDate(): boolean;
    clearDate(): void;
    getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

    clearKeywordList(): void;
    getKeywordList(): Array<string>;
    setKeywordList(value: Array<string>): void;
    addKeyword(value: string, index?: number): string;


    hasLinks(): boolean;
    clearLinks(): void;
    getLinks(): Package.Links | undefined;
    setLinks(value?: Package.Links): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Package.AsObject;
    static toObject(includeInstance: boolean, msg: Package): Package.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Package, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Package;
    static deserializeBinaryFromReader(message: Package, reader: jspb.BinaryReader): Package;
}

export namespace Package {
    export type AsObject = {
        id: string,
        name: string,
        version: string,
        description: string,
        date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        keywordList: Array<string>,
        links?: Package.Links.AsObject,
    }


    export class Links extends jspb.Message { 
        getPackage(): string;
        setPackage(value: string): void;

        getHomepage(): string;
        setHomepage(value: string): void;

        getRepository(): string;
        setRepository(value: string): void;

        getBugs(): string;
        setBugs(value: string): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Links.AsObject;
        static toObject(includeInstance: boolean, msg: Links): Links.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Links, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Links;
        static deserializeBinaryFromReader(message: Links, reader: jspb.BinaryReader): Links;
    }

    export namespace Links {
        export type AsObject = {
            pb_package: string,
            homepage: string,
            repository: string,
            bugs: string,
        }
    }

}

export enum PackageManager {
    OTHER = 0,
    NPM = 1,
}
