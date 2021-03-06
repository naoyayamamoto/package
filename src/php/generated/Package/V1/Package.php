<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: package/v1/package_api.proto

namespace Package\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>package.v1.Package</code>
 */
class Package extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string id = 1;</code>
     */
    private $id = '';
    /**
     * Generated from protobuf field <code>string name = 2;</code>
     */
    private $name = '';
    /**
     * Generated from protobuf field <code>string version = 3;</code>
     */
    private $version = '';
    /**
     * Generated from protobuf field <code>string description = 4;</code>
     */
    private $description = '';
    /**
     * Generated from protobuf field <code>.google.protobuf.Timestamp date = 5;</code>
     */
    private $date = null;
    /**
     * Generated from protobuf field <code>repeated string keyword = 6;</code>
     */
    private $keyword;
    /**
     * Generated from protobuf field <code>.package.v1.Package.Links links = 7;</code>
     */
    private $links = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $id
     *     @type string $name
     *     @type string $version
     *     @type string $description
     *     @type \Google\Protobuf\Timestamp $date
     *     @type string[]|\Google\Protobuf\Internal\RepeatedField $keyword
     *     @type \Package\V1\Package\Links $links
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Package\V1\PackageApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string id = 1;</code>
     * @return string
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Generated from protobuf field <code>string id = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setId($var)
    {
        GPBUtil::checkString($var, True);
        $this->id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string name = 2;</code>
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Generated from protobuf field <code>string name = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setName($var)
    {
        GPBUtil::checkString($var, True);
        $this->name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string version = 3;</code>
     * @return string
     */
    public function getVersion()
    {
        return $this->version;
    }

    /**
     * Generated from protobuf field <code>string version = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setVersion($var)
    {
        GPBUtil::checkString($var, True);
        $this->version = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string description = 4;</code>
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Generated from protobuf field <code>string description = 4;</code>
     * @param string $var
     * @return $this
     */
    public function setDescription($var)
    {
        GPBUtil::checkString($var, True);
        $this->description = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.google.protobuf.Timestamp date = 5;</code>
     * @return \Google\Protobuf\Timestamp
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Generated from protobuf field <code>.google.protobuf.Timestamp date = 5;</code>
     * @param \Google\Protobuf\Timestamp $var
     * @return $this
     */
    public function setDate($var)
    {
        GPBUtil::checkMessage($var, \Google\Protobuf\Timestamp::class);
        $this->date = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated string keyword = 6;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getKeyword()
    {
        return $this->keyword;
    }

    /**
     * Generated from protobuf field <code>repeated string keyword = 6;</code>
     * @param string[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setKeyword($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::STRING);
        $this->keyword = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.package.v1.Package.Links links = 7;</code>
     * @return \Package\V1\Package\Links
     */
    public function getLinks()
    {
        return $this->links;
    }

    /**
     * Generated from protobuf field <code>.package.v1.Package.Links links = 7;</code>
     * @param \Package\V1\Package\Links $var
     * @return $this
     */
    public function setLinks($var)
    {
        GPBUtil::checkMessage($var, \Package\V1\Package_Links::class);
        $this->links = $var;

        return $this;
    }

}

