import * as jspb from "google-protobuf"

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Person extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getId(): number;
  setId(value: number): void;

  getEmail(): string;
  setEmail(value: string): void;

  getPhonesList(): Array<Person.PhoneNumber>;
  setPhonesList(value: Array<Person.PhoneNumber>): void;
  clearPhonesList(): void;
  addPhones(value?: Person.PhoneNumber, index?: number): Person.PhoneNumber;

  getLastUpdatedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdatedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasLastUpdatedTime(): boolean;
  clearLastUpdatedTime(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Person.AsObject;
  static toObject(includeInstance: boolean, msg: Person): Person.AsObject;
  static serializeBinaryToWriter(message: Person, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Person;
  static deserializeBinaryFromReader(message: Person, reader: jspb.BinaryReader): Person;
}

export namespace Person {
  export type AsObject = {
    name: string,
    id: number,
    email: string,
    phonesList: Array<Person.PhoneNumber.AsObject>,
    lastUpdatedTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export class PhoneNumber extends jspb.Message {
    getNumber(): string;
    setNumber(value: string): void;

    getType(): Person.PhoneType;
    setType(value: Person.PhoneType): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PhoneNumber.AsObject;
    static toObject(includeInstance: boolean, msg: PhoneNumber): PhoneNumber.AsObject;
    static serializeBinaryToWriter(message: PhoneNumber, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PhoneNumber;
    static deserializeBinaryFromReader(message: PhoneNumber, reader: jspb.BinaryReader): PhoneNumber;
  }

  export namespace PhoneNumber {
    export type AsObject = {
      number: string,
      type: Person.PhoneType,
    }
  }


  export enum PhoneType { 
    PHONE_TYPE_INVALID = 0,
    PHONE_TYPE_OBILE = 1,
    PHONE_TYPE_HOME = 2,
    PHONE_TYPE_WORK = 3,
  }
}

export class AddressBook extends jspb.Message {
  getPeopleList(): Array<Person>;
  setPeopleList(value: Array<Person>): void;
  clearPeopleList(): void;
  addPeople(value?: Person, index?: number): Person;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressBook.AsObject;
  static toObject(includeInstance: boolean, msg: AddressBook): AddressBook.AsObject;
  static serializeBinaryToWriter(message: AddressBook, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressBook;
  static deserializeBinaryFromReader(message: AddressBook, reader: jspb.BinaryReader): AddressBook;
}

export namespace AddressBook {
  export type AsObject = {
    peopleList: Array<Person.AsObject>,
  }
}

