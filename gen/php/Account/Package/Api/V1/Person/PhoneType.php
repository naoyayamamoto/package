<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: proto/api/v1/package.proto

namespace Account\Package\Api\V1\Person;

use UnexpectedValueException;

/**
 * Protobuf type <code>account.package.api.v1.Person.PhoneType</code>
 */
class PhoneType
{
    /**
     * Generated from protobuf enum <code>PHONE_TYPE_INVALID = 0;</code>
     */
    const PHONE_TYPE_INVALID = 0;
    /**
     * Generated from protobuf enum <code>PHONE_TYPE_OBILE = 1;</code>
     */
    const PHONE_TYPE_OBILE = 1;
    /**
     * Generated from protobuf enum <code>PHONE_TYPE_HOME = 2;</code>
     */
    const PHONE_TYPE_HOME = 2;
    /**
     * Generated from protobuf enum <code>PHONE_TYPE_WORK = 3;</code>
     */
    const PHONE_TYPE_WORK = 3;

    private static $valueToName = [
        self::PHONE_TYPE_INVALID => 'PHONE_TYPE_INVALID',
        self::PHONE_TYPE_OBILE => 'PHONE_TYPE_OBILE',
        self::PHONE_TYPE_HOME => 'PHONE_TYPE_HOME',
        self::PHONE_TYPE_WORK => 'PHONE_TYPE_WORK',
    ];

    public static function name($value)
    {
        if (!isset(self::$valueToName[$value])) {
            throw new UnexpectedValueException(sprintf(
                    'Enum %s has no name defined for value %s', __CLASS__, $value));
        }
        return self::$valueToName[$value];
    }


    public static function value($name)
    {
        $const = __CLASS__ . '::' . strtoupper($name);
        if (!defined($const)) {
            throw new UnexpectedValueException(sprintf(
                    'Enum %s has no value defined for name %s', __CLASS__, $name));
        }
        return constant($const);
    }
}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(PhoneType::class, \Account\Package\Api\V1\Person_PhoneType::class);

