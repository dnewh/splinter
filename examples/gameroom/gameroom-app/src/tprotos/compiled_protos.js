/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const BatchHeader = $root.BatchHeader = (() => {

    /**
     * Properties of a BatchHeader.
     * @exports IBatchHeader
     * @interface IBatchHeader
     * @property {string|null} [signerPublicKey] BatchHeader signerPublicKey
     * @property {Array.<string>|null} [transactionIds] BatchHeader transactionIds
     */

    /**
     * Constructs a new BatchHeader.
     * @exports BatchHeader
     * @classdesc Represents a BatchHeader.
     * @implements IBatchHeader
     * @constructor
     * @param {IBatchHeader=} [properties] Properties to set
     */
    function BatchHeader(properties) {
        this.transactionIds = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BatchHeader signerPublicKey.
     * @member {string} signerPublicKey
     * @memberof BatchHeader
     * @instance
     */
    BatchHeader.prototype.signerPublicKey = "";

    /**
     * BatchHeader transactionIds.
     * @member {Array.<string>} transactionIds
     * @memberof BatchHeader
     * @instance
     */
    BatchHeader.prototype.transactionIds = $util.emptyArray;

    /**
     * Creates a new BatchHeader instance using the specified properties.
     * @function create
     * @memberof BatchHeader
     * @static
     * @param {IBatchHeader=} [properties] Properties to set
     * @returns {BatchHeader} BatchHeader instance
     */
    BatchHeader.create = function create(properties) {
        return new BatchHeader(properties);
    };

    /**
     * Encodes the specified BatchHeader message. Does not implicitly {@link BatchHeader.verify|verify} messages.
     * @function encode
     * @memberof BatchHeader
     * @static
     * @param {IBatchHeader} message BatchHeader message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BatchHeader.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.signerPublicKey != null && message.hasOwnProperty("signerPublicKey"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.signerPublicKey);
        if (message.transactionIds != null && message.transactionIds.length)
            for (let i = 0; i < message.transactionIds.length; ++i)
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.transactionIds[i]);
        return writer;
    };

    /**
     * Encodes the specified BatchHeader message, length delimited. Does not implicitly {@link BatchHeader.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BatchHeader
     * @static
     * @param {IBatchHeader} message BatchHeader message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BatchHeader.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BatchHeader message from the specified reader or buffer.
     * @function decode
     * @memberof BatchHeader
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BatchHeader} BatchHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BatchHeader.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.BatchHeader();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.signerPublicKey = reader.string();
                break;
            case 2:
                if (!(message.transactionIds && message.transactionIds.length))
                    message.transactionIds = [];
                message.transactionIds.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BatchHeader message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BatchHeader
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BatchHeader} BatchHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BatchHeader.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BatchHeader message.
     * @function verify
     * @memberof BatchHeader
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BatchHeader.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.signerPublicKey != null && message.hasOwnProperty("signerPublicKey"))
            if (!$util.isString(message.signerPublicKey))
                return "signerPublicKey: string expected";
        if (message.transactionIds != null && message.hasOwnProperty("transactionIds")) {
            if (!Array.isArray(message.transactionIds))
                return "transactionIds: array expected";
            for (let i = 0; i < message.transactionIds.length; ++i)
                if (!$util.isString(message.transactionIds[i]))
                    return "transactionIds: string[] expected";
        }
        return null;
    };

    /**
     * Creates a BatchHeader message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BatchHeader
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BatchHeader} BatchHeader
     */
    BatchHeader.fromObject = function fromObject(object) {
        if (object instanceof $root.BatchHeader)
            return object;
        let message = new $root.BatchHeader();
        if (object.signerPublicKey != null)
            message.signerPublicKey = String(object.signerPublicKey);
        if (object.transactionIds) {
            if (!Array.isArray(object.transactionIds))
                throw TypeError(".BatchHeader.transactionIds: array expected");
            message.transactionIds = [];
            for (let i = 0; i < object.transactionIds.length; ++i)
                message.transactionIds[i] = String(object.transactionIds[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a BatchHeader message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BatchHeader
     * @static
     * @param {BatchHeader} message BatchHeader
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BatchHeader.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.transactionIds = [];
        if (options.defaults)
            object.signerPublicKey = "";
        if (message.signerPublicKey != null && message.hasOwnProperty("signerPublicKey"))
            object.signerPublicKey = message.signerPublicKey;
        if (message.transactionIds && message.transactionIds.length) {
            object.transactionIds = [];
            for (let j = 0; j < message.transactionIds.length; ++j)
                object.transactionIds[j] = message.transactionIds[j];
        }
        return object;
    };

    /**
     * Converts this BatchHeader to JSON.
     * @function toJSON
     * @memberof BatchHeader
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BatchHeader.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BatchHeader;
})();

export const Batch = $root.Batch = (() => {

    /**
     * Properties of a Batch.
     * @exports IBatch
     * @interface IBatch
     * @property {Uint8Array|null} [header] Batch header
     * @property {string|null} [headerSignature] Batch headerSignature
     * @property {Array.<ITransaction>|null} [transactions] Batch transactions
     * @property {boolean|null} [trace] Batch trace
     */

    /**
     * Constructs a new Batch.
     * @exports Batch
     * @classdesc Represents a Batch.
     * @implements IBatch
     * @constructor
     * @param {IBatch=} [properties] Properties to set
     */
    function Batch(properties) {
        this.transactions = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Batch header.
     * @member {Uint8Array} header
     * @memberof Batch
     * @instance
     */
    Batch.prototype.header = $util.newBuffer([]);

    /**
     * Batch headerSignature.
     * @member {string} headerSignature
     * @memberof Batch
     * @instance
     */
    Batch.prototype.headerSignature = "";

    /**
     * Batch transactions.
     * @member {Array.<ITransaction>} transactions
     * @memberof Batch
     * @instance
     */
    Batch.prototype.transactions = $util.emptyArray;

    /**
     * Batch trace.
     * @member {boolean} trace
     * @memberof Batch
     * @instance
     */
    Batch.prototype.trace = false;

    /**
     * Creates a new Batch instance using the specified properties.
     * @function create
     * @memberof Batch
     * @static
     * @param {IBatch=} [properties] Properties to set
     * @returns {Batch} Batch instance
     */
    Batch.create = function create(properties) {
        return new Batch(properties);
    };

    /**
     * Encodes the specified Batch message. Does not implicitly {@link Batch.verify|verify} messages.
     * @function encode
     * @memberof Batch
     * @static
     * @param {IBatch} message Batch message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Batch.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.header != null && message.hasOwnProperty("header"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.header);
        if (message.headerSignature != null && message.hasOwnProperty("headerSignature"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.headerSignature);
        if (message.transactions != null && message.transactions.length)
            for (let i = 0; i < message.transactions.length; ++i)
                $root.Transaction.encode(message.transactions[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.trace != null && message.hasOwnProperty("trace"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.trace);
        return writer;
    };

    /**
     * Encodes the specified Batch message, length delimited. Does not implicitly {@link Batch.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Batch
     * @static
     * @param {IBatch} message Batch message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Batch.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Batch message from the specified reader or buffer.
     * @function decode
     * @memberof Batch
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Batch} Batch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Batch.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Batch();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.header = reader.bytes();
                break;
            case 2:
                message.headerSignature = reader.string();
                break;
            case 3:
                if (!(message.transactions && message.transactions.length))
                    message.transactions = [];
                message.transactions.push($root.Transaction.decode(reader, reader.uint32()));
                break;
            case 4:
                message.trace = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Batch message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Batch
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Batch} Batch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Batch.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Batch message.
     * @function verify
     * @memberof Batch
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Batch.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.header != null && message.hasOwnProperty("header"))
            if (!(message.header && typeof message.header.length === "number" || $util.isString(message.header)))
                return "header: buffer expected";
        if (message.headerSignature != null && message.hasOwnProperty("headerSignature"))
            if (!$util.isString(message.headerSignature))
                return "headerSignature: string expected";
        if (message.transactions != null && message.hasOwnProperty("transactions")) {
            if (!Array.isArray(message.transactions))
                return "transactions: array expected";
            for (let i = 0; i < message.transactions.length; ++i) {
                let error = $root.Transaction.verify(message.transactions[i]);
                if (error)
                    return "transactions." + error;
            }
        }
        if (message.trace != null && message.hasOwnProperty("trace"))
            if (typeof message.trace !== "boolean")
                return "trace: boolean expected";
        return null;
    };

    /**
     * Creates a Batch message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Batch
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Batch} Batch
     */
    Batch.fromObject = function fromObject(object) {
        if (object instanceof $root.Batch)
            return object;
        let message = new $root.Batch();
        if (object.header != null)
            if (typeof object.header === "string")
                $util.base64.decode(object.header, message.header = $util.newBuffer($util.base64.length(object.header)), 0);
            else if (object.header.length)
                message.header = object.header;
        if (object.headerSignature != null)
            message.headerSignature = String(object.headerSignature);
        if (object.transactions) {
            if (!Array.isArray(object.transactions))
                throw TypeError(".Batch.transactions: array expected");
            message.transactions = [];
            for (let i = 0; i < object.transactions.length; ++i) {
                if (typeof object.transactions[i] !== "object")
                    throw TypeError(".Batch.transactions: object expected");
                message.transactions[i] = $root.Transaction.fromObject(object.transactions[i]);
            }
        }
        if (object.trace != null)
            message.trace = Boolean(object.trace);
        return message;
    };

    /**
     * Creates a plain object from a Batch message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Batch
     * @static
     * @param {Batch} message Batch
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Batch.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.transactions = [];
        if (options.defaults) {
            if (options.bytes === String)
                object.header = "";
            else {
                object.header = [];
                if (options.bytes !== Array)
                    object.header = $util.newBuffer(object.header);
            }
            object.headerSignature = "";
            object.trace = false;
        }
        if (message.header != null && message.hasOwnProperty("header"))
            object.header = options.bytes === String ? $util.base64.encode(message.header, 0, message.header.length) : options.bytes === Array ? Array.prototype.slice.call(message.header) : message.header;
        if (message.headerSignature != null && message.hasOwnProperty("headerSignature"))
            object.headerSignature = message.headerSignature;
        if (message.transactions && message.transactions.length) {
            object.transactions = [];
            for (let j = 0; j < message.transactions.length; ++j)
                object.transactions[j] = $root.Transaction.toObject(message.transactions[j], options);
        }
        if (message.trace != null && message.hasOwnProperty("trace"))
            object.trace = message.trace;
        return object;
    };

    /**
     * Converts this Batch to JSON.
     * @function toJSON
     * @memberof Batch
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Batch.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Batch;
})();

export const BatchList = $root.BatchList = (() => {

    /**
     * Properties of a BatchList.
     * @exports IBatchList
     * @interface IBatchList
     * @property {Array.<IBatch>|null} [batches] BatchList batches
     */

    /**
     * Constructs a new BatchList.
     * @exports BatchList
     * @classdesc Represents a BatchList.
     * @implements IBatchList
     * @constructor
     * @param {IBatchList=} [properties] Properties to set
     */
    function BatchList(properties) {
        this.batches = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BatchList batches.
     * @member {Array.<IBatch>} batches
     * @memberof BatchList
     * @instance
     */
    BatchList.prototype.batches = $util.emptyArray;

    /**
     * Creates a new BatchList instance using the specified properties.
     * @function create
     * @memberof BatchList
     * @static
     * @param {IBatchList=} [properties] Properties to set
     * @returns {BatchList} BatchList instance
     */
    BatchList.create = function create(properties) {
        return new BatchList(properties);
    };

    /**
     * Encodes the specified BatchList message. Does not implicitly {@link BatchList.verify|verify} messages.
     * @function encode
     * @memberof BatchList
     * @static
     * @param {IBatchList} message BatchList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BatchList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.batches != null && message.batches.length)
            for (let i = 0; i < message.batches.length; ++i)
                $root.Batch.encode(message.batches[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified BatchList message, length delimited. Does not implicitly {@link BatchList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BatchList
     * @static
     * @param {IBatchList} message BatchList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BatchList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BatchList message from the specified reader or buffer.
     * @function decode
     * @memberof BatchList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BatchList} BatchList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BatchList.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.BatchList();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.batches && message.batches.length))
                    message.batches = [];
                message.batches.push($root.Batch.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BatchList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BatchList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BatchList} BatchList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BatchList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BatchList message.
     * @function verify
     * @memberof BatchList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BatchList.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.batches != null && message.hasOwnProperty("batches")) {
            if (!Array.isArray(message.batches))
                return "batches: array expected";
            for (let i = 0; i < message.batches.length; ++i) {
                let error = $root.Batch.verify(message.batches[i]);
                if (error)
                    return "batches." + error;
            }
        }
        return null;
    };

    /**
     * Creates a BatchList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BatchList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BatchList} BatchList
     */
    BatchList.fromObject = function fromObject(object) {
        if (object instanceof $root.BatchList)
            return object;
        let message = new $root.BatchList();
        if (object.batches) {
            if (!Array.isArray(object.batches))
                throw TypeError(".BatchList.batches: array expected");
            message.batches = [];
            for (let i = 0; i < object.batches.length; ++i) {
                if (typeof object.batches[i] !== "object")
                    throw TypeError(".BatchList.batches: object expected");
                message.batches[i] = $root.Batch.fromObject(object.batches[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a BatchList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BatchList
     * @static
     * @param {BatchList} message BatchList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BatchList.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.batches = [];
        if (message.batches && message.batches.length) {
            object.batches = [];
            for (let j = 0; j < message.batches.length; ++j)
                object.batches[j] = $root.Batch.toObject(message.batches[j], options);
        }
        return object;
    };

    /**
     * Converts this BatchList to JSON.
     * @function toJSON
     * @memberof BatchList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BatchList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BatchList;
})();

export const TransactionHeader = $root.TransactionHeader = (() => {

    /**
     * Properties of a TransactionHeader.
     * @exports ITransactionHeader
     * @interface ITransactionHeader
     * @property {string|null} [batcherPublicKey] TransactionHeader batcherPublicKey
     * @property {Array.<string>|null} [dependencies] TransactionHeader dependencies
     * @property {string|null} [familyName] TransactionHeader familyName
     * @property {string|null} [familyVersion] TransactionHeader familyVersion
     * @property {Array.<string>|null} [inputs] TransactionHeader inputs
     * @property {string|null} [nonce] TransactionHeader nonce
     * @property {Array.<string>|null} [outputs] TransactionHeader outputs
     * @property {string|null} [payloadSha512] TransactionHeader payloadSha512
     * @property {string|null} [signerPublicKey] TransactionHeader signerPublicKey
     */

    /**
     * Constructs a new TransactionHeader.
     * @exports TransactionHeader
     * @classdesc Represents a TransactionHeader.
     * @implements ITransactionHeader
     * @constructor
     * @param {ITransactionHeader=} [properties] Properties to set
     */
    function TransactionHeader(properties) {
        this.dependencies = [];
        this.inputs = [];
        this.outputs = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TransactionHeader batcherPublicKey.
     * @member {string} batcherPublicKey
     * @memberof TransactionHeader
     * @instance
     */
    TransactionHeader.prototype.batcherPublicKey = "";

    /**
     * TransactionHeader dependencies.
     * @member {Array.<string>} dependencies
     * @memberof TransactionHeader
     * @instance
     */
    TransactionHeader.prototype.dependencies = $util.emptyArray;

    /**
     * TransactionHeader familyName.
     * @member {string} familyName
     * @memberof TransactionHeader
     * @instance
     */
    TransactionHeader.prototype.familyName = "";

    /**
     * TransactionHeader familyVersion.
     * @member {string} familyVersion
     * @memberof TransactionHeader
     * @instance
     */
    TransactionHeader.prototype.familyVersion = "";

    /**
     * TransactionHeader inputs.
     * @member {Array.<string>} inputs
     * @memberof TransactionHeader
     * @instance
     */
    TransactionHeader.prototype.inputs = $util.emptyArray;

    /**
     * TransactionHeader nonce.
     * @member {string} nonce
     * @memberof TransactionHeader
     * @instance
     */
    TransactionHeader.prototype.nonce = "";

    /**
     * TransactionHeader outputs.
     * @member {Array.<string>} outputs
     * @memberof TransactionHeader
     * @instance
     */
    TransactionHeader.prototype.outputs = $util.emptyArray;

    /**
     * TransactionHeader payloadSha512.
     * @member {string} payloadSha512
     * @memberof TransactionHeader
     * @instance
     */
    TransactionHeader.prototype.payloadSha512 = "";

    /**
     * TransactionHeader signerPublicKey.
     * @member {string} signerPublicKey
     * @memberof TransactionHeader
     * @instance
     */
    TransactionHeader.prototype.signerPublicKey = "";

    /**
     * Creates a new TransactionHeader instance using the specified properties.
     * @function create
     * @memberof TransactionHeader
     * @static
     * @param {ITransactionHeader=} [properties] Properties to set
     * @returns {TransactionHeader} TransactionHeader instance
     */
    TransactionHeader.create = function create(properties) {
        return new TransactionHeader(properties);
    };

    /**
     * Encodes the specified TransactionHeader message. Does not implicitly {@link TransactionHeader.verify|verify} messages.
     * @function encode
     * @memberof TransactionHeader
     * @static
     * @param {ITransactionHeader} message TransactionHeader message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransactionHeader.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.batcherPublicKey != null && message.hasOwnProperty("batcherPublicKey"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.batcherPublicKey);
        if (message.dependencies != null && message.dependencies.length)
            for (let i = 0; i < message.dependencies.length; ++i)
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.dependencies[i]);
        if (message.familyName != null && message.hasOwnProperty("familyName"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.familyName);
        if (message.familyVersion != null && message.hasOwnProperty("familyVersion"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.familyVersion);
        if (message.inputs != null && message.inputs.length)
            for (let i = 0; i < message.inputs.length; ++i)
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.inputs[i]);
        if (message.nonce != null && message.hasOwnProperty("nonce"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.nonce);
        if (message.outputs != null && message.outputs.length)
            for (let i = 0; i < message.outputs.length; ++i)
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.outputs[i]);
        if (message.payloadSha512 != null && message.hasOwnProperty("payloadSha512"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.payloadSha512);
        if (message.signerPublicKey != null && message.hasOwnProperty("signerPublicKey"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.signerPublicKey);
        return writer;
    };

    /**
     * Encodes the specified TransactionHeader message, length delimited. Does not implicitly {@link TransactionHeader.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TransactionHeader
     * @static
     * @param {ITransactionHeader} message TransactionHeader message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransactionHeader.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TransactionHeader message from the specified reader or buffer.
     * @function decode
     * @memberof TransactionHeader
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TransactionHeader} TransactionHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransactionHeader.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.TransactionHeader();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.batcherPublicKey = reader.string();
                break;
            case 2:
                if (!(message.dependencies && message.dependencies.length))
                    message.dependencies = [];
                message.dependencies.push(reader.string());
                break;
            case 3:
                message.familyName = reader.string();
                break;
            case 4:
                message.familyVersion = reader.string();
                break;
            case 5:
                if (!(message.inputs && message.inputs.length))
                    message.inputs = [];
                message.inputs.push(reader.string());
                break;
            case 6:
                message.nonce = reader.string();
                break;
            case 7:
                if (!(message.outputs && message.outputs.length))
                    message.outputs = [];
                message.outputs.push(reader.string());
                break;
            case 9:
                message.payloadSha512 = reader.string();
                break;
            case 10:
                message.signerPublicKey = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TransactionHeader message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TransactionHeader
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TransactionHeader} TransactionHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransactionHeader.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TransactionHeader message.
     * @function verify
     * @memberof TransactionHeader
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TransactionHeader.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.batcherPublicKey != null && message.hasOwnProperty("batcherPublicKey"))
            if (!$util.isString(message.batcherPublicKey))
                return "batcherPublicKey: string expected";
        if (message.dependencies != null && message.hasOwnProperty("dependencies")) {
            if (!Array.isArray(message.dependencies))
                return "dependencies: array expected";
            for (let i = 0; i < message.dependencies.length; ++i)
                if (!$util.isString(message.dependencies[i]))
                    return "dependencies: string[] expected";
        }
        if (message.familyName != null && message.hasOwnProperty("familyName"))
            if (!$util.isString(message.familyName))
                return "familyName: string expected";
        if (message.familyVersion != null && message.hasOwnProperty("familyVersion"))
            if (!$util.isString(message.familyVersion))
                return "familyVersion: string expected";
        if (message.inputs != null && message.hasOwnProperty("inputs")) {
            if (!Array.isArray(message.inputs))
                return "inputs: array expected";
            for (let i = 0; i < message.inputs.length; ++i)
                if (!$util.isString(message.inputs[i]))
                    return "inputs: string[] expected";
        }
        if (message.nonce != null && message.hasOwnProperty("nonce"))
            if (!$util.isString(message.nonce))
                return "nonce: string expected";
        if (message.outputs != null && message.hasOwnProperty("outputs")) {
            if (!Array.isArray(message.outputs))
                return "outputs: array expected";
            for (let i = 0; i < message.outputs.length; ++i)
                if (!$util.isString(message.outputs[i]))
                    return "outputs: string[] expected";
        }
        if (message.payloadSha512 != null && message.hasOwnProperty("payloadSha512"))
            if (!$util.isString(message.payloadSha512))
                return "payloadSha512: string expected";
        if (message.signerPublicKey != null && message.hasOwnProperty("signerPublicKey"))
            if (!$util.isString(message.signerPublicKey))
                return "signerPublicKey: string expected";
        return null;
    };

    /**
     * Creates a TransactionHeader message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TransactionHeader
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TransactionHeader} TransactionHeader
     */
    TransactionHeader.fromObject = function fromObject(object) {
        if (object instanceof $root.TransactionHeader)
            return object;
        let message = new $root.TransactionHeader();
        if (object.batcherPublicKey != null)
            message.batcherPublicKey = String(object.batcherPublicKey);
        if (object.dependencies) {
            if (!Array.isArray(object.dependencies))
                throw TypeError(".TransactionHeader.dependencies: array expected");
            message.dependencies = [];
            for (let i = 0; i < object.dependencies.length; ++i)
                message.dependencies[i] = String(object.dependencies[i]);
        }
        if (object.familyName != null)
            message.familyName = String(object.familyName);
        if (object.familyVersion != null)
            message.familyVersion = String(object.familyVersion);
        if (object.inputs) {
            if (!Array.isArray(object.inputs))
                throw TypeError(".TransactionHeader.inputs: array expected");
            message.inputs = [];
            for (let i = 0; i < object.inputs.length; ++i)
                message.inputs[i] = String(object.inputs[i]);
        }
        if (object.nonce != null)
            message.nonce = String(object.nonce);
        if (object.outputs) {
            if (!Array.isArray(object.outputs))
                throw TypeError(".TransactionHeader.outputs: array expected");
            message.outputs = [];
            for (let i = 0; i < object.outputs.length; ++i)
                message.outputs[i] = String(object.outputs[i]);
        }
        if (object.payloadSha512 != null)
            message.payloadSha512 = String(object.payloadSha512);
        if (object.signerPublicKey != null)
            message.signerPublicKey = String(object.signerPublicKey);
        return message;
    };

    /**
     * Creates a plain object from a TransactionHeader message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TransactionHeader
     * @static
     * @param {TransactionHeader} message TransactionHeader
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TransactionHeader.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults) {
            object.dependencies = [];
            object.inputs = [];
            object.outputs = [];
        }
        if (options.defaults) {
            object.batcherPublicKey = "";
            object.familyName = "";
            object.familyVersion = "";
            object.nonce = "";
            object.payloadSha512 = "";
            object.signerPublicKey = "";
        }
        if (message.batcherPublicKey != null && message.hasOwnProperty("batcherPublicKey"))
            object.batcherPublicKey = message.batcherPublicKey;
        if (message.dependencies && message.dependencies.length) {
            object.dependencies = [];
            for (let j = 0; j < message.dependencies.length; ++j)
                object.dependencies[j] = message.dependencies[j];
        }
        if (message.familyName != null && message.hasOwnProperty("familyName"))
            object.familyName = message.familyName;
        if (message.familyVersion != null && message.hasOwnProperty("familyVersion"))
            object.familyVersion = message.familyVersion;
        if (message.inputs && message.inputs.length) {
            object.inputs = [];
            for (let j = 0; j < message.inputs.length; ++j)
                object.inputs[j] = message.inputs[j];
        }
        if (message.nonce != null && message.hasOwnProperty("nonce"))
            object.nonce = message.nonce;
        if (message.outputs && message.outputs.length) {
            object.outputs = [];
            for (let j = 0; j < message.outputs.length; ++j)
                object.outputs[j] = message.outputs[j];
        }
        if (message.payloadSha512 != null && message.hasOwnProperty("payloadSha512"))
            object.payloadSha512 = message.payloadSha512;
        if (message.signerPublicKey != null && message.hasOwnProperty("signerPublicKey"))
            object.signerPublicKey = message.signerPublicKey;
        return object;
    };

    /**
     * Converts this TransactionHeader to JSON.
     * @function toJSON
     * @memberof TransactionHeader
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TransactionHeader.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TransactionHeader;
})();

export const Transaction = $root.Transaction = (() => {

    /**
     * Properties of a Transaction.
     * @exports ITransaction
     * @interface ITransaction
     * @property {Uint8Array|null} [header] Transaction header
     * @property {string|null} [headerSignature] Transaction headerSignature
     * @property {Uint8Array|null} [payload] Transaction payload
     */

    /**
     * Constructs a new Transaction.
     * @exports Transaction
     * @classdesc Represents a Transaction.
     * @implements ITransaction
     * @constructor
     * @param {ITransaction=} [properties] Properties to set
     */
    function Transaction(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Transaction header.
     * @member {Uint8Array} header
     * @memberof Transaction
     * @instance
     */
    Transaction.prototype.header = $util.newBuffer([]);

    /**
     * Transaction headerSignature.
     * @member {string} headerSignature
     * @memberof Transaction
     * @instance
     */
    Transaction.prototype.headerSignature = "";

    /**
     * Transaction payload.
     * @member {Uint8Array} payload
     * @memberof Transaction
     * @instance
     */
    Transaction.prototype.payload = $util.newBuffer([]);

    /**
     * Creates a new Transaction instance using the specified properties.
     * @function create
     * @memberof Transaction
     * @static
     * @param {ITransaction=} [properties] Properties to set
     * @returns {Transaction} Transaction instance
     */
    Transaction.create = function create(properties) {
        return new Transaction(properties);
    };

    /**
     * Encodes the specified Transaction message. Does not implicitly {@link Transaction.verify|verify} messages.
     * @function encode
     * @memberof Transaction
     * @static
     * @param {ITransaction} message Transaction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Transaction.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.header != null && message.hasOwnProperty("header"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.header);
        if (message.headerSignature != null && message.hasOwnProperty("headerSignature"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.headerSignature);
        if (message.payload != null && message.hasOwnProperty("payload"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.payload);
        return writer;
    };

    /**
     * Encodes the specified Transaction message, length delimited. Does not implicitly {@link Transaction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Transaction
     * @static
     * @param {ITransaction} message Transaction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Transaction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Transaction message from the specified reader or buffer.
     * @function decode
     * @memberof Transaction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Transaction} Transaction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Transaction.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Transaction();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.header = reader.bytes();
                break;
            case 2:
                message.headerSignature = reader.string();
                break;
            case 3:
                message.payload = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Transaction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Transaction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Transaction} Transaction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Transaction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Transaction message.
     * @function verify
     * @memberof Transaction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Transaction.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.header != null && message.hasOwnProperty("header"))
            if (!(message.header && typeof message.header.length === "number" || $util.isString(message.header)))
                return "header: buffer expected";
        if (message.headerSignature != null && message.hasOwnProperty("headerSignature"))
            if (!$util.isString(message.headerSignature))
                return "headerSignature: string expected";
        if (message.payload != null && message.hasOwnProperty("payload"))
            if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                return "payload: buffer expected";
        return null;
    };

    /**
     * Creates a Transaction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Transaction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Transaction} Transaction
     */
    Transaction.fromObject = function fromObject(object) {
        if (object instanceof $root.Transaction)
            return object;
        let message = new $root.Transaction();
        if (object.header != null)
            if (typeof object.header === "string")
                $util.base64.decode(object.header, message.header = $util.newBuffer($util.base64.length(object.header)), 0);
            else if (object.header.length)
                message.header = object.header;
        if (object.headerSignature != null)
            message.headerSignature = String(object.headerSignature);
        if (object.payload != null)
            if (typeof object.payload === "string")
                $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
            else if (object.payload.length)
                message.payload = object.payload;
        return message;
    };

    /**
     * Creates a plain object from a Transaction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Transaction
     * @static
     * @param {Transaction} message Transaction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Transaction.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            if (options.bytes === String)
                object.header = "";
            else {
                object.header = [];
                if (options.bytes !== Array)
                    object.header = $util.newBuffer(object.header);
            }
            object.headerSignature = "";
            if (options.bytes === String)
                object.payload = "";
            else {
                object.payload = [];
                if (options.bytes !== Array)
                    object.payload = $util.newBuffer(object.payload);
            }
        }
        if (message.header != null && message.hasOwnProperty("header"))
            object.header = options.bytes === String ? $util.base64.encode(message.header, 0, message.header.length) : options.bytes === Array ? Array.prototype.slice.call(message.header) : message.header;
        if (message.headerSignature != null && message.hasOwnProperty("headerSignature"))
            object.headerSignature = message.headerSignature;
        if (message.payload != null && message.hasOwnProperty("payload"))
            object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
        return object;
    };

    /**
     * Converts this Transaction to JSON.
     * @function toJSON
     * @memberof Transaction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Transaction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Transaction;
})();

export const TransactionList = $root.TransactionList = (() => {

    /**
     * Properties of a TransactionList.
     * @exports ITransactionList
     * @interface ITransactionList
     * @property {Array.<ITransaction>|null} [transactions] TransactionList transactions
     */

    /**
     * Constructs a new TransactionList.
     * @exports TransactionList
     * @classdesc Represents a TransactionList.
     * @implements ITransactionList
     * @constructor
     * @param {ITransactionList=} [properties] Properties to set
     */
    function TransactionList(properties) {
        this.transactions = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TransactionList transactions.
     * @member {Array.<ITransaction>} transactions
     * @memberof TransactionList
     * @instance
     */
    TransactionList.prototype.transactions = $util.emptyArray;

    /**
     * Creates a new TransactionList instance using the specified properties.
     * @function create
     * @memberof TransactionList
     * @static
     * @param {ITransactionList=} [properties] Properties to set
     * @returns {TransactionList} TransactionList instance
     */
    TransactionList.create = function create(properties) {
        return new TransactionList(properties);
    };

    /**
     * Encodes the specified TransactionList message. Does not implicitly {@link TransactionList.verify|verify} messages.
     * @function encode
     * @memberof TransactionList
     * @static
     * @param {ITransactionList} message TransactionList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransactionList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.transactions != null && message.transactions.length)
            for (let i = 0; i < message.transactions.length; ++i)
                $root.Transaction.encode(message.transactions[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified TransactionList message, length delimited. Does not implicitly {@link TransactionList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TransactionList
     * @static
     * @param {ITransactionList} message TransactionList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransactionList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TransactionList message from the specified reader or buffer.
     * @function decode
     * @memberof TransactionList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TransactionList} TransactionList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransactionList.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.TransactionList();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.transactions && message.transactions.length))
                    message.transactions = [];
                message.transactions.push($root.Transaction.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TransactionList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TransactionList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TransactionList} TransactionList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransactionList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TransactionList message.
     * @function verify
     * @memberof TransactionList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TransactionList.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.transactions != null && message.hasOwnProperty("transactions")) {
            if (!Array.isArray(message.transactions))
                return "transactions: array expected";
            for (let i = 0; i < message.transactions.length; ++i) {
                let error = $root.Transaction.verify(message.transactions[i]);
                if (error)
                    return "transactions." + error;
            }
        }
        return null;
    };

    /**
     * Creates a TransactionList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TransactionList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TransactionList} TransactionList
     */
    TransactionList.fromObject = function fromObject(object) {
        if (object instanceof $root.TransactionList)
            return object;
        let message = new $root.TransactionList();
        if (object.transactions) {
            if (!Array.isArray(object.transactions))
                throw TypeError(".TransactionList.transactions: array expected");
            message.transactions = [];
            for (let i = 0; i < object.transactions.length; ++i) {
                if (typeof object.transactions[i] !== "object")
                    throw TypeError(".TransactionList.transactions: object expected");
                message.transactions[i] = $root.Transaction.fromObject(object.transactions[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a TransactionList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TransactionList
     * @static
     * @param {TransactionList} message TransactionList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TransactionList.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.transactions = [];
        if (message.transactions && message.transactions.length) {
            object.transactions = [];
            for (let j = 0; j < message.transactions.length; ++j)
                object.transactions[j] = $root.Transaction.toObject(message.transactions[j], options);
        }
        return object;
    };

    /**
     * Converts this TransactionList to JSON.
     * @function toJSON
     * @memberof TransactionList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TransactionList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TransactionList;
})();

export const SabrePayload = $root.SabrePayload = (() => {

    /**
     * Properties of a SabrePayload.
     * @exports ISabrePayload
     * @interface ISabrePayload
     * @property {SabrePayload.Action|null} [action] SabrePayload action
     * @property {ICreateContractAction|null} [createContract] SabrePayload createContract
     * @property {IDeleteContractAction|null} [deleteContract] SabrePayload deleteContract
     * @property {IExecuteContractAction|null} [executeContract] SabrePayload executeContract
     * @property {ICreateContractRegistryAction|null} [createContractRegistry] SabrePayload createContractRegistry
     * @property {IDeleteContractRegistryAction|null} [deleteContractRegistry] SabrePayload deleteContractRegistry
     * @property {IUpdateContractRegistryOwnersAction|null} [updateContractRegistryOwners] SabrePayload updateContractRegistryOwners
     * @property {ICreateNamespaceRegistryAction|null} [createNamespaceRegistry] SabrePayload createNamespaceRegistry
     * @property {IDeleteNamespaceRegistryAction|null} [deleteNamespaceRegistry] SabrePayload deleteNamespaceRegistry
     * @property {IUpdateNamespaceRegistryOwnersAction|null} [updateNamespaceRegistryOwners] SabrePayload updateNamespaceRegistryOwners
     * @property {ICreateNamespaceRegistryPermissionAction|null} [createNamespaceRegistryPermission] SabrePayload createNamespaceRegistryPermission
     * @property {IDeleteNamespaceRegistryPermissionAction|null} [deleteNamespaceRegistryPermission] SabrePayload deleteNamespaceRegistryPermission
     * @property {ICreateSmartPermissionAction|null} [createSmartPermission] SabrePayload createSmartPermission
     * @property {IUpdateSmartPermissionAction|null} [updateSmartPermission] SabrePayload updateSmartPermission
     * @property {IDeleteSmartPermissionAction|null} [deleteSmartPermission] SabrePayload deleteSmartPermission
     */

    /**
     * Constructs a new SabrePayload.
     * @exports SabrePayload
     * @classdesc Represents a SabrePayload.
     * @implements ISabrePayload
     * @constructor
     * @param {ISabrePayload=} [properties] Properties to set
     */
    function SabrePayload(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SabrePayload action.
     * @member {SabrePayload.Action} action
     * @memberof SabrePayload
     * @instance
     */
    SabrePayload.prototype.action = 0;

    /**
     * SabrePayload createContract.
     * @member {ICreateContractAction|null|undefined} createContract
     * @memberof SabrePayload
     * @instance
     */
    SabrePayload.prototype.createContract = null;

    /**
     * SabrePayload deleteContract.
     * @member {IDeleteContractAction|null|undefined} deleteContract
     * @memberof SabrePayload
     * @instance
     */
    SabrePayload.prototype.deleteContract = null;

    /**
     * SabrePayload executeContract.
     * @member {IExecuteContractAction|null|undefined} executeContract
     * @memberof SabrePayload
     * @instance
     */
    SabrePayload.prototype.executeContract = null;

    /**
     * SabrePayload createContractRegistry.
     * @member {ICreateContractRegistryAction|null|undefined} createContractRegistry
     * @memberof SabrePayload
     * @instance
     */
    SabrePayload.prototype.createContractRegistry = null;

    /**
     * SabrePayload deleteContractRegistry.
     * @member {IDeleteContractRegistryAction|null|undefined} deleteContractRegistry
     * @memberof SabrePayload
     * @instance
     */
    SabrePayload.prototype.deleteContractRegistry = null;

    /**
     * SabrePayload updateContractRegistryOwners.
     * @member {IUpdateContractRegistryOwnersAction|null|undefined} updateContractRegistryOwners
     * @memberof SabrePayload
     * @instance
     */
    SabrePayload.prototype.updateContractRegistryOwners = null;

    /**
     * SabrePayload createNamespaceRegistry.
     * @member {ICreateNamespaceRegistryAction|null|undefined} createNamespaceRegistry
     * @memberof SabrePayload
     * @instance
     */
    SabrePayload.prototype.createNamespaceRegistry = null;

    /**
     * SabrePayload deleteNamespaceRegistry.
     * @member {IDeleteNamespaceRegistryAction|null|undefined} deleteNamespaceRegistry
     * @memberof SabrePayload
     * @instance
     */
    SabrePayload.prototype.deleteNamespaceRegistry = null;

    /**
     * SabrePayload updateNamespaceRegistryOwners.
     * @member {IUpdateNamespaceRegistryOwnersAction|null|undefined} updateNamespaceRegistryOwners
     * @memberof SabrePayload
     * @instance
     */
    SabrePayload.prototype.updateNamespaceRegistryOwners = null;

    /**
     * SabrePayload createNamespaceRegistryPermission.
     * @member {ICreateNamespaceRegistryPermissionAction|null|undefined} createNamespaceRegistryPermission
     * @memberof SabrePayload
     * @instance
     */
    SabrePayload.prototype.createNamespaceRegistryPermission = null;

    /**
     * SabrePayload deleteNamespaceRegistryPermission.
     * @member {IDeleteNamespaceRegistryPermissionAction|null|undefined} deleteNamespaceRegistryPermission
     * @memberof SabrePayload
     * @instance
     */
    SabrePayload.prototype.deleteNamespaceRegistryPermission = null;

    /**
     * SabrePayload createSmartPermission.
     * @member {ICreateSmartPermissionAction|null|undefined} createSmartPermission
     * @memberof SabrePayload
     * @instance
     */
    SabrePayload.prototype.createSmartPermission = null;

    /**
     * SabrePayload updateSmartPermission.
     * @member {IUpdateSmartPermissionAction|null|undefined} updateSmartPermission
     * @memberof SabrePayload
     * @instance
     */
    SabrePayload.prototype.updateSmartPermission = null;

    /**
     * SabrePayload deleteSmartPermission.
     * @member {IDeleteSmartPermissionAction|null|undefined} deleteSmartPermission
     * @memberof SabrePayload
     * @instance
     */
    SabrePayload.prototype.deleteSmartPermission = null;

    /**
     * Creates a new SabrePayload instance using the specified properties.
     * @function create
     * @memberof SabrePayload
     * @static
     * @param {ISabrePayload=} [properties] Properties to set
     * @returns {SabrePayload} SabrePayload instance
     */
    SabrePayload.create = function create(properties) {
        return new SabrePayload(properties);
    };

    /**
     * Encodes the specified SabrePayload message. Does not implicitly {@link SabrePayload.verify|verify} messages.
     * @function encode
     * @memberof SabrePayload
     * @static
     * @param {ISabrePayload} message SabrePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SabrePayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.action != null && message.hasOwnProperty("action"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.action);
        if (message.createContract != null && message.hasOwnProperty("createContract"))
            $root.CreateContractAction.encode(message.createContract, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.deleteContract != null && message.hasOwnProperty("deleteContract"))
            $root.DeleteContractAction.encode(message.deleteContract, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.executeContract != null && message.hasOwnProperty("executeContract"))
            $root.ExecuteContractAction.encode(message.executeContract, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.createContractRegistry != null && message.hasOwnProperty("createContractRegistry"))
            $root.CreateContractRegistryAction.encode(message.createContractRegistry, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.deleteContractRegistry != null && message.hasOwnProperty("deleteContractRegistry"))
            $root.DeleteContractRegistryAction.encode(message.deleteContractRegistry, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.updateContractRegistryOwners != null && message.hasOwnProperty("updateContractRegistryOwners"))
            $root.UpdateContractRegistryOwnersAction.encode(message.updateContractRegistryOwners, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.createNamespaceRegistry != null && message.hasOwnProperty("createNamespaceRegistry"))
            $root.CreateNamespaceRegistryAction.encode(message.createNamespaceRegistry, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.deleteNamespaceRegistry != null && message.hasOwnProperty("deleteNamespaceRegistry"))
            $root.DeleteNamespaceRegistryAction.encode(message.deleteNamespaceRegistry, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.updateNamespaceRegistryOwners != null && message.hasOwnProperty("updateNamespaceRegistryOwners"))
            $root.UpdateNamespaceRegistryOwnersAction.encode(message.updateNamespaceRegistryOwners, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.createNamespaceRegistryPermission != null && message.hasOwnProperty("createNamespaceRegistryPermission"))
            $root.CreateNamespaceRegistryPermissionAction.encode(message.createNamespaceRegistryPermission, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.deleteNamespaceRegistryPermission != null && message.hasOwnProperty("deleteNamespaceRegistryPermission"))
            $root.DeleteNamespaceRegistryPermissionAction.encode(message.deleteNamespaceRegistryPermission, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        if (message.createSmartPermission != null && message.hasOwnProperty("createSmartPermission"))
            $root.CreateSmartPermissionAction.encode(message.createSmartPermission, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
        if (message.updateSmartPermission != null && message.hasOwnProperty("updateSmartPermission"))
            $root.UpdateSmartPermissionAction.encode(message.updateSmartPermission, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
        if (message.deleteSmartPermission != null && message.hasOwnProperty("deleteSmartPermission"))
            $root.DeleteSmartPermissionAction.encode(message.deleteSmartPermission, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SabrePayload message, length delimited. Does not implicitly {@link SabrePayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SabrePayload
     * @static
     * @param {ISabrePayload} message SabrePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SabrePayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SabrePayload message from the specified reader or buffer.
     * @function decode
     * @memberof SabrePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SabrePayload} SabrePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SabrePayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.SabrePayload();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.action = reader.int32();
                break;
            case 2:
                message.createContract = $root.CreateContractAction.decode(reader, reader.uint32());
                break;
            case 3:
                message.deleteContract = $root.DeleteContractAction.decode(reader, reader.uint32());
                break;
            case 4:
                message.executeContract = $root.ExecuteContractAction.decode(reader, reader.uint32());
                break;
            case 5:
                message.createContractRegistry = $root.CreateContractRegistryAction.decode(reader, reader.uint32());
                break;
            case 6:
                message.deleteContractRegistry = $root.DeleteContractRegistryAction.decode(reader, reader.uint32());
                break;
            case 7:
                message.updateContractRegistryOwners = $root.UpdateContractRegistryOwnersAction.decode(reader, reader.uint32());
                break;
            case 8:
                message.createNamespaceRegistry = $root.CreateNamespaceRegistryAction.decode(reader, reader.uint32());
                break;
            case 9:
                message.deleteNamespaceRegistry = $root.DeleteNamespaceRegistryAction.decode(reader, reader.uint32());
                break;
            case 10:
                message.updateNamespaceRegistryOwners = $root.UpdateNamespaceRegistryOwnersAction.decode(reader, reader.uint32());
                break;
            case 11:
                message.createNamespaceRegistryPermission = $root.CreateNamespaceRegistryPermissionAction.decode(reader, reader.uint32());
                break;
            case 12:
                message.deleteNamespaceRegistryPermission = $root.DeleteNamespaceRegistryPermissionAction.decode(reader, reader.uint32());
                break;
            case 13:
                message.createSmartPermission = $root.CreateSmartPermissionAction.decode(reader, reader.uint32());
                break;
            case 14:
                message.updateSmartPermission = $root.UpdateSmartPermissionAction.decode(reader, reader.uint32());
                break;
            case 15:
                message.deleteSmartPermission = $root.DeleteSmartPermissionAction.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SabrePayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SabrePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SabrePayload} SabrePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SabrePayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SabrePayload message.
     * @function verify
     * @memberof SabrePayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SabrePayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.action != null && message.hasOwnProperty("action"))
            switch (message.action) {
            default:
                return "action: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
                break;
            }
        if (message.createContract != null && message.hasOwnProperty("createContract")) {
            let error = $root.CreateContractAction.verify(message.createContract);
            if (error)
                return "createContract." + error;
        }
        if (message.deleteContract != null && message.hasOwnProperty("deleteContract")) {
            let error = $root.DeleteContractAction.verify(message.deleteContract);
            if (error)
                return "deleteContract." + error;
        }
        if (message.executeContract != null && message.hasOwnProperty("executeContract")) {
            let error = $root.ExecuteContractAction.verify(message.executeContract);
            if (error)
                return "executeContract." + error;
        }
        if (message.createContractRegistry != null && message.hasOwnProperty("createContractRegistry")) {
            let error = $root.CreateContractRegistryAction.verify(message.createContractRegistry);
            if (error)
                return "createContractRegistry." + error;
        }
        if (message.deleteContractRegistry != null && message.hasOwnProperty("deleteContractRegistry")) {
            let error = $root.DeleteContractRegistryAction.verify(message.deleteContractRegistry);
            if (error)
                return "deleteContractRegistry." + error;
        }
        if (message.updateContractRegistryOwners != null && message.hasOwnProperty("updateContractRegistryOwners")) {
            let error = $root.UpdateContractRegistryOwnersAction.verify(message.updateContractRegistryOwners);
            if (error)
                return "updateContractRegistryOwners." + error;
        }
        if (message.createNamespaceRegistry != null && message.hasOwnProperty("createNamespaceRegistry")) {
            let error = $root.CreateNamespaceRegistryAction.verify(message.createNamespaceRegistry);
            if (error)
                return "createNamespaceRegistry." + error;
        }
        if (message.deleteNamespaceRegistry != null && message.hasOwnProperty("deleteNamespaceRegistry")) {
            let error = $root.DeleteNamespaceRegistryAction.verify(message.deleteNamespaceRegistry);
            if (error)
                return "deleteNamespaceRegistry." + error;
        }
        if (message.updateNamespaceRegistryOwners != null && message.hasOwnProperty("updateNamespaceRegistryOwners")) {
            let error = $root.UpdateNamespaceRegistryOwnersAction.verify(message.updateNamespaceRegistryOwners);
            if (error)
                return "updateNamespaceRegistryOwners." + error;
        }
        if (message.createNamespaceRegistryPermission != null && message.hasOwnProperty("createNamespaceRegistryPermission")) {
            let error = $root.CreateNamespaceRegistryPermissionAction.verify(message.createNamespaceRegistryPermission);
            if (error)
                return "createNamespaceRegistryPermission." + error;
        }
        if (message.deleteNamespaceRegistryPermission != null && message.hasOwnProperty("deleteNamespaceRegistryPermission")) {
            let error = $root.DeleteNamespaceRegistryPermissionAction.verify(message.deleteNamespaceRegistryPermission);
            if (error)
                return "deleteNamespaceRegistryPermission." + error;
        }
        if (message.createSmartPermission != null && message.hasOwnProperty("createSmartPermission")) {
            let error = $root.CreateSmartPermissionAction.verify(message.createSmartPermission);
            if (error)
                return "createSmartPermission." + error;
        }
        if (message.updateSmartPermission != null && message.hasOwnProperty("updateSmartPermission")) {
            let error = $root.UpdateSmartPermissionAction.verify(message.updateSmartPermission);
            if (error)
                return "updateSmartPermission." + error;
        }
        if (message.deleteSmartPermission != null && message.hasOwnProperty("deleteSmartPermission")) {
            let error = $root.DeleteSmartPermissionAction.verify(message.deleteSmartPermission);
            if (error)
                return "deleteSmartPermission." + error;
        }
        return null;
    };

    /**
     * Creates a SabrePayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SabrePayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SabrePayload} SabrePayload
     */
    SabrePayload.fromObject = function fromObject(object) {
        if (object instanceof $root.SabrePayload)
            return object;
        let message = new $root.SabrePayload();
        switch (object.action) {
        case "ACTION_UNSET":
        case 0:
            message.action = 0;
            break;
        case "CREATE_CONTRACT":
        case 1:
            message.action = 1;
            break;
        case "DELETE_CONTRACT":
        case 2:
            message.action = 2;
            break;
        case "EXECUTE_CONTRACT":
        case 3:
            message.action = 3;
            break;
        case "CREATE_CONTRACT_REGISTRY":
        case 4:
            message.action = 4;
            break;
        case "DELETE_CONTRACT_REGISTRY":
        case 5:
            message.action = 5;
            break;
        case "UPDATE_CONTRACT_REGISTRY_OWNERS":
        case 6:
            message.action = 6;
            break;
        case "CREATE_NAMESPACE_REGISTRY":
        case 7:
            message.action = 7;
            break;
        case "DELETE_NAMESPACE_REGISTRY":
        case 8:
            message.action = 8;
            break;
        case "UPDATE_NAMESPACE_REGISTRY_OWNERS":
        case 9:
            message.action = 9;
            break;
        case "CREATE_NAMESPACE_REGISTRY_PERMISSION":
        case 10:
            message.action = 10;
            break;
        case "DELETE_NAMESPACE_REGISTRY_PERMISSION":
        case 11:
            message.action = 11;
            break;
        case "CREATE_SMART_PERMISSION":
        case 12:
            message.action = 12;
            break;
        case "UPDATE_SMART_PERMISSION":
        case 13:
            message.action = 13;
            break;
        case "DELETE_SMART_PERMISSION":
        case 14:
            message.action = 14;
            break;
        }
        if (object.createContract != null) {
            if (typeof object.createContract !== "object")
                throw TypeError(".SabrePayload.createContract: object expected");
            message.createContract = $root.CreateContractAction.fromObject(object.createContract);
        }
        if (object.deleteContract != null) {
            if (typeof object.deleteContract !== "object")
                throw TypeError(".SabrePayload.deleteContract: object expected");
            message.deleteContract = $root.DeleteContractAction.fromObject(object.deleteContract);
        }
        if (object.executeContract != null) {
            if (typeof object.executeContract !== "object")
                throw TypeError(".SabrePayload.executeContract: object expected");
            message.executeContract = $root.ExecuteContractAction.fromObject(object.executeContract);
        }
        if (object.createContractRegistry != null) {
            if (typeof object.createContractRegistry !== "object")
                throw TypeError(".SabrePayload.createContractRegistry: object expected");
            message.createContractRegistry = $root.CreateContractRegistryAction.fromObject(object.createContractRegistry);
        }
        if (object.deleteContractRegistry != null) {
            if (typeof object.deleteContractRegistry !== "object")
                throw TypeError(".SabrePayload.deleteContractRegistry: object expected");
            message.deleteContractRegistry = $root.DeleteContractRegistryAction.fromObject(object.deleteContractRegistry);
        }
        if (object.updateContractRegistryOwners != null) {
            if (typeof object.updateContractRegistryOwners !== "object")
                throw TypeError(".SabrePayload.updateContractRegistryOwners: object expected");
            message.updateContractRegistryOwners = $root.UpdateContractRegistryOwnersAction.fromObject(object.updateContractRegistryOwners);
        }
        if (object.createNamespaceRegistry != null) {
            if (typeof object.createNamespaceRegistry !== "object")
                throw TypeError(".SabrePayload.createNamespaceRegistry: object expected");
            message.createNamespaceRegistry = $root.CreateNamespaceRegistryAction.fromObject(object.createNamespaceRegistry);
        }
        if (object.deleteNamespaceRegistry != null) {
            if (typeof object.deleteNamespaceRegistry !== "object")
                throw TypeError(".SabrePayload.deleteNamespaceRegistry: object expected");
            message.deleteNamespaceRegistry = $root.DeleteNamespaceRegistryAction.fromObject(object.deleteNamespaceRegistry);
        }
        if (object.updateNamespaceRegistryOwners != null) {
            if (typeof object.updateNamespaceRegistryOwners !== "object")
                throw TypeError(".SabrePayload.updateNamespaceRegistryOwners: object expected");
            message.updateNamespaceRegistryOwners = $root.UpdateNamespaceRegistryOwnersAction.fromObject(object.updateNamespaceRegistryOwners);
        }
        if (object.createNamespaceRegistryPermission != null) {
            if (typeof object.createNamespaceRegistryPermission !== "object")
                throw TypeError(".SabrePayload.createNamespaceRegistryPermission: object expected");
            message.createNamespaceRegistryPermission = $root.CreateNamespaceRegistryPermissionAction.fromObject(object.createNamespaceRegistryPermission);
        }
        if (object.deleteNamespaceRegistryPermission != null) {
            if (typeof object.deleteNamespaceRegistryPermission !== "object")
                throw TypeError(".SabrePayload.deleteNamespaceRegistryPermission: object expected");
            message.deleteNamespaceRegistryPermission = $root.DeleteNamespaceRegistryPermissionAction.fromObject(object.deleteNamespaceRegistryPermission);
        }
        if (object.createSmartPermission != null) {
            if (typeof object.createSmartPermission !== "object")
                throw TypeError(".SabrePayload.createSmartPermission: object expected");
            message.createSmartPermission = $root.CreateSmartPermissionAction.fromObject(object.createSmartPermission);
        }
        if (object.updateSmartPermission != null) {
            if (typeof object.updateSmartPermission !== "object")
                throw TypeError(".SabrePayload.updateSmartPermission: object expected");
            message.updateSmartPermission = $root.UpdateSmartPermissionAction.fromObject(object.updateSmartPermission);
        }
        if (object.deleteSmartPermission != null) {
            if (typeof object.deleteSmartPermission !== "object")
                throw TypeError(".SabrePayload.deleteSmartPermission: object expected");
            message.deleteSmartPermission = $root.DeleteSmartPermissionAction.fromObject(object.deleteSmartPermission);
        }
        return message;
    };

    /**
     * Creates a plain object from a SabrePayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SabrePayload
     * @static
     * @param {SabrePayload} message SabrePayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SabrePayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.action = options.enums === String ? "ACTION_UNSET" : 0;
            object.createContract = null;
            object.deleteContract = null;
            object.executeContract = null;
            object.createContractRegistry = null;
            object.deleteContractRegistry = null;
            object.updateContractRegistryOwners = null;
            object.createNamespaceRegistry = null;
            object.deleteNamespaceRegistry = null;
            object.updateNamespaceRegistryOwners = null;
            object.createNamespaceRegistryPermission = null;
            object.deleteNamespaceRegistryPermission = null;
            object.createSmartPermission = null;
            object.updateSmartPermission = null;
            object.deleteSmartPermission = null;
        }
        if (message.action != null && message.hasOwnProperty("action"))
            object.action = options.enums === String ? $root.SabrePayload.Action[message.action] : message.action;
        if (message.createContract != null && message.hasOwnProperty("createContract"))
            object.createContract = $root.CreateContractAction.toObject(message.createContract, options);
        if (message.deleteContract != null && message.hasOwnProperty("deleteContract"))
            object.deleteContract = $root.DeleteContractAction.toObject(message.deleteContract, options);
        if (message.executeContract != null && message.hasOwnProperty("executeContract"))
            object.executeContract = $root.ExecuteContractAction.toObject(message.executeContract, options);
        if (message.createContractRegistry != null && message.hasOwnProperty("createContractRegistry"))
            object.createContractRegistry = $root.CreateContractRegistryAction.toObject(message.createContractRegistry, options);
        if (message.deleteContractRegistry != null && message.hasOwnProperty("deleteContractRegistry"))
            object.deleteContractRegistry = $root.DeleteContractRegistryAction.toObject(message.deleteContractRegistry, options);
        if (message.updateContractRegistryOwners != null && message.hasOwnProperty("updateContractRegistryOwners"))
            object.updateContractRegistryOwners = $root.UpdateContractRegistryOwnersAction.toObject(message.updateContractRegistryOwners, options);
        if (message.createNamespaceRegistry != null && message.hasOwnProperty("createNamespaceRegistry"))
            object.createNamespaceRegistry = $root.CreateNamespaceRegistryAction.toObject(message.createNamespaceRegistry, options);
        if (message.deleteNamespaceRegistry != null && message.hasOwnProperty("deleteNamespaceRegistry"))
            object.deleteNamespaceRegistry = $root.DeleteNamespaceRegistryAction.toObject(message.deleteNamespaceRegistry, options);
        if (message.updateNamespaceRegistryOwners != null && message.hasOwnProperty("updateNamespaceRegistryOwners"))
            object.updateNamespaceRegistryOwners = $root.UpdateNamespaceRegistryOwnersAction.toObject(message.updateNamespaceRegistryOwners, options);
        if (message.createNamespaceRegistryPermission != null && message.hasOwnProperty("createNamespaceRegistryPermission"))
            object.createNamespaceRegistryPermission = $root.CreateNamespaceRegistryPermissionAction.toObject(message.createNamespaceRegistryPermission, options);
        if (message.deleteNamespaceRegistryPermission != null && message.hasOwnProperty("deleteNamespaceRegistryPermission"))
            object.deleteNamespaceRegistryPermission = $root.DeleteNamespaceRegistryPermissionAction.toObject(message.deleteNamespaceRegistryPermission, options);
        if (message.createSmartPermission != null && message.hasOwnProperty("createSmartPermission"))
            object.createSmartPermission = $root.CreateSmartPermissionAction.toObject(message.createSmartPermission, options);
        if (message.updateSmartPermission != null && message.hasOwnProperty("updateSmartPermission"))
            object.updateSmartPermission = $root.UpdateSmartPermissionAction.toObject(message.updateSmartPermission, options);
        if (message.deleteSmartPermission != null && message.hasOwnProperty("deleteSmartPermission"))
            object.deleteSmartPermission = $root.DeleteSmartPermissionAction.toObject(message.deleteSmartPermission, options);
        return object;
    };

    /**
     * Converts this SabrePayload to JSON.
     * @function toJSON
     * @memberof SabrePayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SabrePayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Action enum.
     * @name SabrePayload.Action
     * @enum {string}
     * @property {number} ACTION_UNSET=0 ACTION_UNSET value
     * @property {number} CREATE_CONTRACT=1 CREATE_CONTRACT value
     * @property {number} DELETE_CONTRACT=2 DELETE_CONTRACT value
     * @property {number} EXECUTE_CONTRACT=3 EXECUTE_CONTRACT value
     * @property {number} CREATE_CONTRACT_REGISTRY=4 CREATE_CONTRACT_REGISTRY value
     * @property {number} DELETE_CONTRACT_REGISTRY=5 DELETE_CONTRACT_REGISTRY value
     * @property {number} UPDATE_CONTRACT_REGISTRY_OWNERS=6 UPDATE_CONTRACT_REGISTRY_OWNERS value
     * @property {number} CREATE_NAMESPACE_REGISTRY=7 CREATE_NAMESPACE_REGISTRY value
     * @property {number} DELETE_NAMESPACE_REGISTRY=8 DELETE_NAMESPACE_REGISTRY value
     * @property {number} UPDATE_NAMESPACE_REGISTRY_OWNERS=9 UPDATE_NAMESPACE_REGISTRY_OWNERS value
     * @property {number} CREATE_NAMESPACE_REGISTRY_PERMISSION=10 CREATE_NAMESPACE_REGISTRY_PERMISSION value
     * @property {number} DELETE_NAMESPACE_REGISTRY_PERMISSION=11 DELETE_NAMESPACE_REGISTRY_PERMISSION value
     * @property {number} CREATE_SMART_PERMISSION=12 CREATE_SMART_PERMISSION value
     * @property {number} UPDATE_SMART_PERMISSION=13 UPDATE_SMART_PERMISSION value
     * @property {number} DELETE_SMART_PERMISSION=14 DELETE_SMART_PERMISSION value
     */
    SabrePayload.Action = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ACTION_UNSET"] = 0;
        values[valuesById[1] = "CREATE_CONTRACT"] = 1;
        values[valuesById[2] = "DELETE_CONTRACT"] = 2;
        values[valuesById[3] = "EXECUTE_CONTRACT"] = 3;
        values[valuesById[4] = "CREATE_CONTRACT_REGISTRY"] = 4;
        values[valuesById[5] = "DELETE_CONTRACT_REGISTRY"] = 5;
        values[valuesById[6] = "UPDATE_CONTRACT_REGISTRY_OWNERS"] = 6;
        values[valuesById[7] = "CREATE_NAMESPACE_REGISTRY"] = 7;
        values[valuesById[8] = "DELETE_NAMESPACE_REGISTRY"] = 8;
        values[valuesById[9] = "UPDATE_NAMESPACE_REGISTRY_OWNERS"] = 9;
        values[valuesById[10] = "CREATE_NAMESPACE_REGISTRY_PERMISSION"] = 10;
        values[valuesById[11] = "DELETE_NAMESPACE_REGISTRY_PERMISSION"] = 11;
        values[valuesById[12] = "CREATE_SMART_PERMISSION"] = 12;
        values[valuesById[13] = "UPDATE_SMART_PERMISSION"] = 13;
        values[valuesById[14] = "DELETE_SMART_PERMISSION"] = 14;
        return values;
    })();

    return SabrePayload;
})();

export const CreateContractAction = $root.CreateContractAction = (() => {

    /**
     * Properties of a CreateContractAction.
     * @exports ICreateContractAction
     * @interface ICreateContractAction
     * @property {string|null} [name] CreateContractAction name
     * @property {string|null} [version] CreateContractAction version
     * @property {Array.<string>|null} [inputs] CreateContractAction inputs
     * @property {Array.<string>|null} [outputs] CreateContractAction outputs
     * @property {Uint8Array|null} [contract] CreateContractAction contract
     */

    /**
     * Constructs a new CreateContractAction.
     * @exports CreateContractAction
     * @classdesc Represents a CreateContractAction.
     * @implements ICreateContractAction
     * @constructor
     * @param {ICreateContractAction=} [properties] Properties to set
     */
    function CreateContractAction(properties) {
        this.inputs = [];
        this.outputs = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CreateContractAction name.
     * @member {string} name
     * @memberof CreateContractAction
     * @instance
     */
    CreateContractAction.prototype.name = "";

    /**
     * CreateContractAction version.
     * @member {string} version
     * @memberof CreateContractAction
     * @instance
     */
    CreateContractAction.prototype.version = "";

    /**
     * CreateContractAction inputs.
     * @member {Array.<string>} inputs
     * @memberof CreateContractAction
     * @instance
     */
    CreateContractAction.prototype.inputs = $util.emptyArray;

    /**
     * CreateContractAction outputs.
     * @member {Array.<string>} outputs
     * @memberof CreateContractAction
     * @instance
     */
    CreateContractAction.prototype.outputs = $util.emptyArray;

    /**
     * CreateContractAction contract.
     * @member {Uint8Array} contract
     * @memberof CreateContractAction
     * @instance
     */
    CreateContractAction.prototype.contract = $util.newBuffer([]);

    /**
     * Creates a new CreateContractAction instance using the specified properties.
     * @function create
     * @memberof CreateContractAction
     * @static
     * @param {ICreateContractAction=} [properties] Properties to set
     * @returns {CreateContractAction} CreateContractAction instance
     */
    CreateContractAction.create = function create(properties) {
        return new CreateContractAction(properties);
    };

    /**
     * Encodes the specified CreateContractAction message. Does not implicitly {@link CreateContractAction.verify|verify} messages.
     * @function encode
     * @memberof CreateContractAction
     * @static
     * @param {ICreateContractAction} message CreateContractAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateContractAction.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.version != null && message.hasOwnProperty("version"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
        if (message.inputs != null && message.inputs.length)
            for (let i = 0; i < message.inputs.length; ++i)
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.inputs[i]);
        if (message.outputs != null && message.outputs.length)
            for (let i = 0; i < message.outputs.length; ++i)
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.outputs[i]);
        if (message.contract != null && message.hasOwnProperty("contract"))
            writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.contract);
        return writer;
    };

    /**
     * Encodes the specified CreateContractAction message, length delimited. Does not implicitly {@link CreateContractAction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CreateContractAction
     * @static
     * @param {ICreateContractAction} message CreateContractAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateContractAction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CreateContractAction message from the specified reader or buffer.
     * @function decode
     * @memberof CreateContractAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CreateContractAction} CreateContractAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateContractAction.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CreateContractAction();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                message.version = reader.string();
                break;
            case 3:
                if (!(message.inputs && message.inputs.length))
                    message.inputs = [];
                message.inputs.push(reader.string());
                break;
            case 4:
                if (!(message.outputs && message.outputs.length))
                    message.outputs = [];
                message.outputs.push(reader.string());
                break;
            case 5:
                message.contract = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CreateContractAction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CreateContractAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CreateContractAction} CreateContractAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateContractAction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CreateContractAction message.
     * @function verify
     * @memberof CreateContractAction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CreateContractAction.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.version != null && message.hasOwnProperty("version"))
            if (!$util.isString(message.version))
                return "version: string expected";
        if (message.inputs != null && message.hasOwnProperty("inputs")) {
            if (!Array.isArray(message.inputs))
                return "inputs: array expected";
            for (let i = 0; i < message.inputs.length; ++i)
                if (!$util.isString(message.inputs[i]))
                    return "inputs: string[] expected";
        }
        if (message.outputs != null && message.hasOwnProperty("outputs")) {
            if (!Array.isArray(message.outputs))
                return "outputs: array expected";
            for (let i = 0; i < message.outputs.length; ++i)
                if (!$util.isString(message.outputs[i]))
                    return "outputs: string[] expected";
        }
        if (message.contract != null && message.hasOwnProperty("contract"))
            if (!(message.contract && typeof message.contract.length === "number" || $util.isString(message.contract)))
                return "contract: buffer expected";
        return null;
    };

    /**
     * Creates a CreateContractAction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CreateContractAction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CreateContractAction} CreateContractAction
     */
    CreateContractAction.fromObject = function fromObject(object) {
        if (object instanceof $root.CreateContractAction)
            return object;
        let message = new $root.CreateContractAction();
        if (object.name != null)
            message.name = String(object.name);
        if (object.version != null)
            message.version = String(object.version);
        if (object.inputs) {
            if (!Array.isArray(object.inputs))
                throw TypeError(".CreateContractAction.inputs: array expected");
            message.inputs = [];
            for (let i = 0; i < object.inputs.length; ++i)
                message.inputs[i] = String(object.inputs[i]);
        }
        if (object.outputs) {
            if (!Array.isArray(object.outputs))
                throw TypeError(".CreateContractAction.outputs: array expected");
            message.outputs = [];
            for (let i = 0; i < object.outputs.length; ++i)
                message.outputs[i] = String(object.outputs[i]);
        }
        if (object.contract != null)
            if (typeof object.contract === "string")
                $util.base64.decode(object.contract, message.contract = $util.newBuffer($util.base64.length(object.contract)), 0);
            else if (object.contract.length)
                message.contract = object.contract;
        return message;
    };

    /**
     * Creates a plain object from a CreateContractAction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CreateContractAction
     * @static
     * @param {CreateContractAction} message CreateContractAction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CreateContractAction.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults) {
            object.inputs = [];
            object.outputs = [];
        }
        if (options.defaults) {
            object.name = "";
            object.version = "";
            if (options.bytes === String)
                object.contract = "";
            else {
                object.contract = [];
                if (options.bytes !== Array)
                    object.contract = $util.newBuffer(object.contract);
            }
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.version != null && message.hasOwnProperty("version"))
            object.version = message.version;
        if (message.inputs && message.inputs.length) {
            object.inputs = [];
            for (let j = 0; j < message.inputs.length; ++j)
                object.inputs[j] = message.inputs[j];
        }
        if (message.outputs && message.outputs.length) {
            object.outputs = [];
            for (let j = 0; j < message.outputs.length; ++j)
                object.outputs[j] = message.outputs[j];
        }
        if (message.contract != null && message.hasOwnProperty("contract"))
            object.contract = options.bytes === String ? $util.base64.encode(message.contract, 0, message.contract.length) : options.bytes === Array ? Array.prototype.slice.call(message.contract) : message.contract;
        return object;
    };

    /**
     * Converts this CreateContractAction to JSON.
     * @function toJSON
     * @memberof CreateContractAction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CreateContractAction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CreateContractAction;
})();

export const DeleteContractAction = $root.DeleteContractAction = (() => {

    /**
     * Properties of a DeleteContractAction.
     * @exports IDeleteContractAction
     * @interface IDeleteContractAction
     * @property {string|null} [name] DeleteContractAction name
     * @property {string|null} [version] DeleteContractAction version
     */

    /**
     * Constructs a new DeleteContractAction.
     * @exports DeleteContractAction
     * @classdesc Represents a DeleteContractAction.
     * @implements IDeleteContractAction
     * @constructor
     * @param {IDeleteContractAction=} [properties] Properties to set
     */
    function DeleteContractAction(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DeleteContractAction name.
     * @member {string} name
     * @memberof DeleteContractAction
     * @instance
     */
    DeleteContractAction.prototype.name = "";

    /**
     * DeleteContractAction version.
     * @member {string} version
     * @memberof DeleteContractAction
     * @instance
     */
    DeleteContractAction.prototype.version = "";

    /**
     * Creates a new DeleteContractAction instance using the specified properties.
     * @function create
     * @memberof DeleteContractAction
     * @static
     * @param {IDeleteContractAction=} [properties] Properties to set
     * @returns {DeleteContractAction} DeleteContractAction instance
     */
    DeleteContractAction.create = function create(properties) {
        return new DeleteContractAction(properties);
    };

    /**
     * Encodes the specified DeleteContractAction message. Does not implicitly {@link DeleteContractAction.verify|verify} messages.
     * @function encode
     * @memberof DeleteContractAction
     * @static
     * @param {IDeleteContractAction} message DeleteContractAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeleteContractAction.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.version != null && message.hasOwnProperty("version"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
        return writer;
    };

    /**
     * Encodes the specified DeleteContractAction message, length delimited. Does not implicitly {@link DeleteContractAction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DeleteContractAction
     * @static
     * @param {IDeleteContractAction} message DeleteContractAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeleteContractAction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DeleteContractAction message from the specified reader or buffer.
     * @function decode
     * @memberof DeleteContractAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DeleteContractAction} DeleteContractAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeleteContractAction.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DeleteContractAction();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                message.version = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DeleteContractAction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DeleteContractAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DeleteContractAction} DeleteContractAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeleteContractAction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DeleteContractAction message.
     * @function verify
     * @memberof DeleteContractAction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DeleteContractAction.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.version != null && message.hasOwnProperty("version"))
            if (!$util.isString(message.version))
                return "version: string expected";
        return null;
    };

    /**
     * Creates a DeleteContractAction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DeleteContractAction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DeleteContractAction} DeleteContractAction
     */
    DeleteContractAction.fromObject = function fromObject(object) {
        if (object instanceof $root.DeleteContractAction)
            return object;
        let message = new $root.DeleteContractAction();
        if (object.name != null)
            message.name = String(object.name);
        if (object.version != null)
            message.version = String(object.version);
        return message;
    };

    /**
     * Creates a plain object from a DeleteContractAction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DeleteContractAction
     * @static
     * @param {DeleteContractAction} message DeleteContractAction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DeleteContractAction.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.name = "";
            object.version = "";
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.version != null && message.hasOwnProperty("version"))
            object.version = message.version;
        return object;
    };

    /**
     * Converts this DeleteContractAction to JSON.
     * @function toJSON
     * @memberof DeleteContractAction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DeleteContractAction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DeleteContractAction;
})();

export const ExecuteContractAction = $root.ExecuteContractAction = (() => {

    /**
     * Properties of an ExecuteContractAction.
     * @exports IExecuteContractAction
     * @interface IExecuteContractAction
     * @property {string|null} [name] ExecuteContractAction name
     * @property {string|null} [version] ExecuteContractAction version
     * @property {Array.<string>|null} [inputs] ExecuteContractAction inputs
     * @property {Array.<string>|null} [outputs] ExecuteContractAction outputs
     * @property {Uint8Array|null} [payload] ExecuteContractAction payload
     */

    /**
     * Constructs a new ExecuteContractAction.
     * @exports ExecuteContractAction
     * @classdesc Represents an ExecuteContractAction.
     * @implements IExecuteContractAction
     * @constructor
     * @param {IExecuteContractAction=} [properties] Properties to set
     */
    function ExecuteContractAction(properties) {
        this.inputs = [];
        this.outputs = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ExecuteContractAction name.
     * @member {string} name
     * @memberof ExecuteContractAction
     * @instance
     */
    ExecuteContractAction.prototype.name = "";

    /**
     * ExecuteContractAction version.
     * @member {string} version
     * @memberof ExecuteContractAction
     * @instance
     */
    ExecuteContractAction.prototype.version = "";

    /**
     * ExecuteContractAction inputs.
     * @member {Array.<string>} inputs
     * @memberof ExecuteContractAction
     * @instance
     */
    ExecuteContractAction.prototype.inputs = $util.emptyArray;

    /**
     * ExecuteContractAction outputs.
     * @member {Array.<string>} outputs
     * @memberof ExecuteContractAction
     * @instance
     */
    ExecuteContractAction.prototype.outputs = $util.emptyArray;

    /**
     * ExecuteContractAction payload.
     * @member {Uint8Array} payload
     * @memberof ExecuteContractAction
     * @instance
     */
    ExecuteContractAction.prototype.payload = $util.newBuffer([]);

    /**
     * Creates a new ExecuteContractAction instance using the specified properties.
     * @function create
     * @memberof ExecuteContractAction
     * @static
     * @param {IExecuteContractAction=} [properties] Properties to set
     * @returns {ExecuteContractAction} ExecuteContractAction instance
     */
    ExecuteContractAction.create = function create(properties) {
        return new ExecuteContractAction(properties);
    };

    /**
     * Encodes the specified ExecuteContractAction message. Does not implicitly {@link ExecuteContractAction.verify|verify} messages.
     * @function encode
     * @memberof ExecuteContractAction
     * @static
     * @param {IExecuteContractAction} message ExecuteContractAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ExecuteContractAction.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.version != null && message.hasOwnProperty("version"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
        if (message.inputs != null && message.inputs.length)
            for (let i = 0; i < message.inputs.length; ++i)
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.inputs[i]);
        if (message.outputs != null && message.outputs.length)
            for (let i = 0; i < message.outputs.length; ++i)
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.outputs[i]);
        if (message.payload != null && message.hasOwnProperty("payload"))
            writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.payload);
        return writer;
    };

    /**
     * Encodes the specified ExecuteContractAction message, length delimited. Does not implicitly {@link ExecuteContractAction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ExecuteContractAction
     * @static
     * @param {IExecuteContractAction} message ExecuteContractAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ExecuteContractAction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ExecuteContractAction message from the specified reader or buffer.
     * @function decode
     * @memberof ExecuteContractAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ExecuteContractAction} ExecuteContractAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ExecuteContractAction.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ExecuteContractAction();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                message.version = reader.string();
                break;
            case 3:
                if (!(message.inputs && message.inputs.length))
                    message.inputs = [];
                message.inputs.push(reader.string());
                break;
            case 4:
                if (!(message.outputs && message.outputs.length))
                    message.outputs = [];
                message.outputs.push(reader.string());
                break;
            case 5:
                message.payload = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ExecuteContractAction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ExecuteContractAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ExecuteContractAction} ExecuteContractAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ExecuteContractAction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ExecuteContractAction message.
     * @function verify
     * @memberof ExecuteContractAction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ExecuteContractAction.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.version != null && message.hasOwnProperty("version"))
            if (!$util.isString(message.version))
                return "version: string expected";
        if (message.inputs != null && message.hasOwnProperty("inputs")) {
            if (!Array.isArray(message.inputs))
                return "inputs: array expected";
            for (let i = 0; i < message.inputs.length; ++i)
                if (!$util.isString(message.inputs[i]))
                    return "inputs: string[] expected";
        }
        if (message.outputs != null && message.hasOwnProperty("outputs")) {
            if (!Array.isArray(message.outputs))
                return "outputs: array expected";
            for (let i = 0; i < message.outputs.length; ++i)
                if (!$util.isString(message.outputs[i]))
                    return "outputs: string[] expected";
        }
        if (message.payload != null && message.hasOwnProperty("payload"))
            if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                return "payload: buffer expected";
        return null;
    };

    /**
     * Creates an ExecuteContractAction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ExecuteContractAction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ExecuteContractAction} ExecuteContractAction
     */
    ExecuteContractAction.fromObject = function fromObject(object) {
        if (object instanceof $root.ExecuteContractAction)
            return object;
        let message = new $root.ExecuteContractAction();
        if (object.name != null)
            message.name = String(object.name);
        if (object.version != null)
            message.version = String(object.version);
        if (object.inputs) {
            if (!Array.isArray(object.inputs))
                throw TypeError(".ExecuteContractAction.inputs: array expected");
            message.inputs = [];
            for (let i = 0; i < object.inputs.length; ++i)
                message.inputs[i] = String(object.inputs[i]);
        }
        if (object.outputs) {
            if (!Array.isArray(object.outputs))
                throw TypeError(".ExecuteContractAction.outputs: array expected");
            message.outputs = [];
            for (let i = 0; i < object.outputs.length; ++i)
                message.outputs[i] = String(object.outputs[i]);
        }
        if (object.payload != null)
            if (typeof object.payload === "string")
                $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
            else if (object.payload.length)
                message.payload = object.payload;
        return message;
    };

    /**
     * Creates a plain object from an ExecuteContractAction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ExecuteContractAction
     * @static
     * @param {ExecuteContractAction} message ExecuteContractAction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ExecuteContractAction.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults) {
            object.inputs = [];
            object.outputs = [];
        }
        if (options.defaults) {
            object.name = "";
            object.version = "";
            if (options.bytes === String)
                object.payload = "";
            else {
                object.payload = [];
                if (options.bytes !== Array)
                    object.payload = $util.newBuffer(object.payload);
            }
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.version != null && message.hasOwnProperty("version"))
            object.version = message.version;
        if (message.inputs && message.inputs.length) {
            object.inputs = [];
            for (let j = 0; j < message.inputs.length; ++j)
                object.inputs[j] = message.inputs[j];
        }
        if (message.outputs && message.outputs.length) {
            object.outputs = [];
            for (let j = 0; j < message.outputs.length; ++j)
                object.outputs[j] = message.outputs[j];
        }
        if (message.payload != null && message.hasOwnProperty("payload"))
            object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
        return object;
    };

    /**
     * Converts this ExecuteContractAction to JSON.
     * @function toJSON
     * @memberof ExecuteContractAction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ExecuteContractAction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ExecuteContractAction;
})();

export const CreateContractRegistryAction = $root.CreateContractRegistryAction = (() => {

    /**
     * Properties of a CreateContractRegistryAction.
     * @exports ICreateContractRegistryAction
     * @interface ICreateContractRegistryAction
     * @property {string|null} [name] CreateContractRegistryAction name
     * @property {Array.<string>|null} [owners] CreateContractRegistryAction owners
     */

    /**
     * Constructs a new CreateContractRegistryAction.
     * @exports CreateContractRegistryAction
     * @classdesc Represents a CreateContractRegistryAction.
     * @implements ICreateContractRegistryAction
     * @constructor
     * @param {ICreateContractRegistryAction=} [properties] Properties to set
     */
    function CreateContractRegistryAction(properties) {
        this.owners = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CreateContractRegistryAction name.
     * @member {string} name
     * @memberof CreateContractRegistryAction
     * @instance
     */
    CreateContractRegistryAction.prototype.name = "";

    /**
     * CreateContractRegistryAction owners.
     * @member {Array.<string>} owners
     * @memberof CreateContractRegistryAction
     * @instance
     */
    CreateContractRegistryAction.prototype.owners = $util.emptyArray;

    /**
     * Creates a new CreateContractRegistryAction instance using the specified properties.
     * @function create
     * @memberof CreateContractRegistryAction
     * @static
     * @param {ICreateContractRegistryAction=} [properties] Properties to set
     * @returns {CreateContractRegistryAction} CreateContractRegistryAction instance
     */
    CreateContractRegistryAction.create = function create(properties) {
        return new CreateContractRegistryAction(properties);
    };

    /**
     * Encodes the specified CreateContractRegistryAction message. Does not implicitly {@link CreateContractRegistryAction.verify|verify} messages.
     * @function encode
     * @memberof CreateContractRegistryAction
     * @static
     * @param {ICreateContractRegistryAction} message CreateContractRegistryAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateContractRegistryAction.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.owners != null && message.owners.length)
            for (let i = 0; i < message.owners.length; ++i)
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.owners[i]);
        return writer;
    };

    /**
     * Encodes the specified CreateContractRegistryAction message, length delimited. Does not implicitly {@link CreateContractRegistryAction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CreateContractRegistryAction
     * @static
     * @param {ICreateContractRegistryAction} message CreateContractRegistryAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateContractRegistryAction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CreateContractRegistryAction message from the specified reader or buffer.
     * @function decode
     * @memberof CreateContractRegistryAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CreateContractRegistryAction} CreateContractRegistryAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateContractRegistryAction.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CreateContractRegistryAction();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                if (!(message.owners && message.owners.length))
                    message.owners = [];
                message.owners.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CreateContractRegistryAction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CreateContractRegistryAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CreateContractRegistryAction} CreateContractRegistryAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateContractRegistryAction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CreateContractRegistryAction message.
     * @function verify
     * @memberof CreateContractRegistryAction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CreateContractRegistryAction.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.owners != null && message.hasOwnProperty("owners")) {
            if (!Array.isArray(message.owners))
                return "owners: array expected";
            for (let i = 0; i < message.owners.length; ++i)
                if (!$util.isString(message.owners[i]))
                    return "owners: string[] expected";
        }
        return null;
    };

    /**
     * Creates a CreateContractRegistryAction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CreateContractRegistryAction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CreateContractRegistryAction} CreateContractRegistryAction
     */
    CreateContractRegistryAction.fromObject = function fromObject(object) {
        if (object instanceof $root.CreateContractRegistryAction)
            return object;
        let message = new $root.CreateContractRegistryAction();
        if (object.name != null)
            message.name = String(object.name);
        if (object.owners) {
            if (!Array.isArray(object.owners))
                throw TypeError(".CreateContractRegistryAction.owners: array expected");
            message.owners = [];
            for (let i = 0; i < object.owners.length; ++i)
                message.owners[i] = String(object.owners[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a CreateContractRegistryAction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CreateContractRegistryAction
     * @static
     * @param {CreateContractRegistryAction} message CreateContractRegistryAction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CreateContractRegistryAction.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.owners = [];
        if (options.defaults)
            object.name = "";
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.owners && message.owners.length) {
            object.owners = [];
            for (let j = 0; j < message.owners.length; ++j)
                object.owners[j] = message.owners[j];
        }
        return object;
    };

    /**
     * Converts this CreateContractRegistryAction to JSON.
     * @function toJSON
     * @memberof CreateContractRegistryAction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CreateContractRegistryAction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CreateContractRegistryAction;
})();

export const DeleteContractRegistryAction = $root.DeleteContractRegistryAction = (() => {

    /**
     * Properties of a DeleteContractRegistryAction.
     * @exports IDeleteContractRegistryAction
     * @interface IDeleteContractRegistryAction
     * @property {string|null} [name] DeleteContractRegistryAction name
     */

    /**
     * Constructs a new DeleteContractRegistryAction.
     * @exports DeleteContractRegistryAction
     * @classdesc Represents a DeleteContractRegistryAction.
     * @implements IDeleteContractRegistryAction
     * @constructor
     * @param {IDeleteContractRegistryAction=} [properties] Properties to set
     */
    function DeleteContractRegistryAction(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DeleteContractRegistryAction name.
     * @member {string} name
     * @memberof DeleteContractRegistryAction
     * @instance
     */
    DeleteContractRegistryAction.prototype.name = "";

    /**
     * Creates a new DeleteContractRegistryAction instance using the specified properties.
     * @function create
     * @memberof DeleteContractRegistryAction
     * @static
     * @param {IDeleteContractRegistryAction=} [properties] Properties to set
     * @returns {DeleteContractRegistryAction} DeleteContractRegistryAction instance
     */
    DeleteContractRegistryAction.create = function create(properties) {
        return new DeleteContractRegistryAction(properties);
    };

    /**
     * Encodes the specified DeleteContractRegistryAction message. Does not implicitly {@link DeleteContractRegistryAction.verify|verify} messages.
     * @function encode
     * @memberof DeleteContractRegistryAction
     * @static
     * @param {IDeleteContractRegistryAction} message DeleteContractRegistryAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeleteContractRegistryAction.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        return writer;
    };

    /**
     * Encodes the specified DeleteContractRegistryAction message, length delimited. Does not implicitly {@link DeleteContractRegistryAction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DeleteContractRegistryAction
     * @static
     * @param {IDeleteContractRegistryAction} message DeleteContractRegistryAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeleteContractRegistryAction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DeleteContractRegistryAction message from the specified reader or buffer.
     * @function decode
     * @memberof DeleteContractRegistryAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DeleteContractRegistryAction} DeleteContractRegistryAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeleteContractRegistryAction.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DeleteContractRegistryAction();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DeleteContractRegistryAction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DeleteContractRegistryAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DeleteContractRegistryAction} DeleteContractRegistryAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeleteContractRegistryAction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DeleteContractRegistryAction message.
     * @function verify
     * @memberof DeleteContractRegistryAction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DeleteContractRegistryAction.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        return null;
    };

    /**
     * Creates a DeleteContractRegistryAction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DeleteContractRegistryAction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DeleteContractRegistryAction} DeleteContractRegistryAction
     */
    DeleteContractRegistryAction.fromObject = function fromObject(object) {
        if (object instanceof $root.DeleteContractRegistryAction)
            return object;
        let message = new $root.DeleteContractRegistryAction();
        if (object.name != null)
            message.name = String(object.name);
        return message;
    };

    /**
     * Creates a plain object from a DeleteContractRegistryAction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DeleteContractRegistryAction
     * @static
     * @param {DeleteContractRegistryAction} message DeleteContractRegistryAction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DeleteContractRegistryAction.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.name = "";
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        return object;
    };

    /**
     * Converts this DeleteContractRegistryAction to JSON.
     * @function toJSON
     * @memberof DeleteContractRegistryAction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DeleteContractRegistryAction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DeleteContractRegistryAction;
})();

export const UpdateContractRegistryOwnersAction = $root.UpdateContractRegistryOwnersAction = (() => {

    /**
     * Properties of an UpdateContractRegistryOwnersAction.
     * @exports IUpdateContractRegistryOwnersAction
     * @interface IUpdateContractRegistryOwnersAction
     * @property {string|null} [name] UpdateContractRegistryOwnersAction name
     * @property {Array.<string>|null} [owners] UpdateContractRegistryOwnersAction owners
     */

    /**
     * Constructs a new UpdateContractRegistryOwnersAction.
     * @exports UpdateContractRegistryOwnersAction
     * @classdesc Represents an UpdateContractRegistryOwnersAction.
     * @implements IUpdateContractRegistryOwnersAction
     * @constructor
     * @param {IUpdateContractRegistryOwnersAction=} [properties] Properties to set
     */
    function UpdateContractRegistryOwnersAction(properties) {
        this.owners = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UpdateContractRegistryOwnersAction name.
     * @member {string} name
     * @memberof UpdateContractRegistryOwnersAction
     * @instance
     */
    UpdateContractRegistryOwnersAction.prototype.name = "";

    /**
     * UpdateContractRegistryOwnersAction owners.
     * @member {Array.<string>} owners
     * @memberof UpdateContractRegistryOwnersAction
     * @instance
     */
    UpdateContractRegistryOwnersAction.prototype.owners = $util.emptyArray;

    /**
     * Creates a new UpdateContractRegistryOwnersAction instance using the specified properties.
     * @function create
     * @memberof UpdateContractRegistryOwnersAction
     * @static
     * @param {IUpdateContractRegistryOwnersAction=} [properties] Properties to set
     * @returns {UpdateContractRegistryOwnersAction} UpdateContractRegistryOwnersAction instance
     */
    UpdateContractRegistryOwnersAction.create = function create(properties) {
        return new UpdateContractRegistryOwnersAction(properties);
    };

    /**
     * Encodes the specified UpdateContractRegistryOwnersAction message. Does not implicitly {@link UpdateContractRegistryOwnersAction.verify|verify} messages.
     * @function encode
     * @memberof UpdateContractRegistryOwnersAction
     * @static
     * @param {IUpdateContractRegistryOwnersAction} message UpdateContractRegistryOwnersAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpdateContractRegistryOwnersAction.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.owners != null && message.owners.length)
            for (let i = 0; i < message.owners.length; ++i)
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.owners[i]);
        return writer;
    };

    /**
     * Encodes the specified UpdateContractRegistryOwnersAction message, length delimited. Does not implicitly {@link UpdateContractRegistryOwnersAction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UpdateContractRegistryOwnersAction
     * @static
     * @param {IUpdateContractRegistryOwnersAction} message UpdateContractRegistryOwnersAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpdateContractRegistryOwnersAction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an UpdateContractRegistryOwnersAction message from the specified reader or buffer.
     * @function decode
     * @memberof UpdateContractRegistryOwnersAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UpdateContractRegistryOwnersAction} UpdateContractRegistryOwnersAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpdateContractRegistryOwnersAction.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.UpdateContractRegistryOwnersAction();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                if (!(message.owners && message.owners.length))
                    message.owners = [];
                message.owners.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an UpdateContractRegistryOwnersAction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UpdateContractRegistryOwnersAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UpdateContractRegistryOwnersAction} UpdateContractRegistryOwnersAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpdateContractRegistryOwnersAction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an UpdateContractRegistryOwnersAction message.
     * @function verify
     * @memberof UpdateContractRegistryOwnersAction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UpdateContractRegistryOwnersAction.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.owners != null && message.hasOwnProperty("owners")) {
            if (!Array.isArray(message.owners))
                return "owners: array expected";
            for (let i = 0; i < message.owners.length; ++i)
                if (!$util.isString(message.owners[i]))
                    return "owners: string[] expected";
        }
        return null;
    };

    /**
     * Creates an UpdateContractRegistryOwnersAction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UpdateContractRegistryOwnersAction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UpdateContractRegistryOwnersAction} UpdateContractRegistryOwnersAction
     */
    UpdateContractRegistryOwnersAction.fromObject = function fromObject(object) {
        if (object instanceof $root.UpdateContractRegistryOwnersAction)
            return object;
        let message = new $root.UpdateContractRegistryOwnersAction();
        if (object.name != null)
            message.name = String(object.name);
        if (object.owners) {
            if (!Array.isArray(object.owners))
                throw TypeError(".UpdateContractRegistryOwnersAction.owners: array expected");
            message.owners = [];
            for (let i = 0; i < object.owners.length; ++i)
                message.owners[i] = String(object.owners[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from an UpdateContractRegistryOwnersAction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UpdateContractRegistryOwnersAction
     * @static
     * @param {UpdateContractRegistryOwnersAction} message UpdateContractRegistryOwnersAction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UpdateContractRegistryOwnersAction.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.owners = [];
        if (options.defaults)
            object.name = "";
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.owners && message.owners.length) {
            object.owners = [];
            for (let j = 0; j < message.owners.length; ++j)
                object.owners[j] = message.owners[j];
        }
        return object;
    };

    /**
     * Converts this UpdateContractRegistryOwnersAction to JSON.
     * @function toJSON
     * @memberof UpdateContractRegistryOwnersAction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UpdateContractRegistryOwnersAction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UpdateContractRegistryOwnersAction;
})();

export const CreateNamespaceRegistryAction = $root.CreateNamespaceRegistryAction = (() => {

    /**
     * Properties of a CreateNamespaceRegistryAction.
     * @exports ICreateNamespaceRegistryAction
     * @interface ICreateNamespaceRegistryAction
     * @property {string|null} [namespace] CreateNamespaceRegistryAction namespace
     * @property {Array.<string>|null} [owners] CreateNamespaceRegistryAction owners
     */

    /**
     * Constructs a new CreateNamespaceRegistryAction.
     * @exports CreateNamespaceRegistryAction
     * @classdesc Represents a CreateNamespaceRegistryAction.
     * @implements ICreateNamespaceRegistryAction
     * @constructor
     * @param {ICreateNamespaceRegistryAction=} [properties] Properties to set
     */
    function CreateNamespaceRegistryAction(properties) {
        this.owners = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CreateNamespaceRegistryAction namespace.
     * @member {string} namespace
     * @memberof CreateNamespaceRegistryAction
     * @instance
     */
    CreateNamespaceRegistryAction.prototype.namespace = "";

    /**
     * CreateNamespaceRegistryAction owners.
     * @member {Array.<string>} owners
     * @memberof CreateNamespaceRegistryAction
     * @instance
     */
    CreateNamespaceRegistryAction.prototype.owners = $util.emptyArray;

    /**
     * Creates a new CreateNamespaceRegistryAction instance using the specified properties.
     * @function create
     * @memberof CreateNamespaceRegistryAction
     * @static
     * @param {ICreateNamespaceRegistryAction=} [properties] Properties to set
     * @returns {CreateNamespaceRegistryAction} CreateNamespaceRegistryAction instance
     */
    CreateNamespaceRegistryAction.create = function create(properties) {
        return new CreateNamespaceRegistryAction(properties);
    };

    /**
     * Encodes the specified CreateNamespaceRegistryAction message. Does not implicitly {@link CreateNamespaceRegistryAction.verify|verify} messages.
     * @function encode
     * @memberof CreateNamespaceRegistryAction
     * @static
     * @param {ICreateNamespaceRegistryAction} message CreateNamespaceRegistryAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateNamespaceRegistryAction.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.namespace != null && message.hasOwnProperty("namespace"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.namespace);
        if (message.owners != null && message.owners.length)
            for (let i = 0; i < message.owners.length; ++i)
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.owners[i]);
        return writer;
    };

    /**
     * Encodes the specified CreateNamespaceRegistryAction message, length delimited. Does not implicitly {@link CreateNamespaceRegistryAction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CreateNamespaceRegistryAction
     * @static
     * @param {ICreateNamespaceRegistryAction} message CreateNamespaceRegistryAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateNamespaceRegistryAction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CreateNamespaceRegistryAction message from the specified reader or buffer.
     * @function decode
     * @memberof CreateNamespaceRegistryAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CreateNamespaceRegistryAction} CreateNamespaceRegistryAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateNamespaceRegistryAction.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CreateNamespaceRegistryAction();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.namespace = reader.string();
                break;
            case 2:
                if (!(message.owners && message.owners.length))
                    message.owners = [];
                message.owners.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CreateNamespaceRegistryAction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CreateNamespaceRegistryAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CreateNamespaceRegistryAction} CreateNamespaceRegistryAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateNamespaceRegistryAction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CreateNamespaceRegistryAction message.
     * @function verify
     * @memberof CreateNamespaceRegistryAction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CreateNamespaceRegistryAction.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.namespace != null && message.hasOwnProperty("namespace"))
            if (!$util.isString(message.namespace))
                return "namespace: string expected";
        if (message.owners != null && message.hasOwnProperty("owners")) {
            if (!Array.isArray(message.owners))
                return "owners: array expected";
            for (let i = 0; i < message.owners.length; ++i)
                if (!$util.isString(message.owners[i]))
                    return "owners: string[] expected";
        }
        return null;
    };

    /**
     * Creates a CreateNamespaceRegistryAction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CreateNamespaceRegistryAction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CreateNamespaceRegistryAction} CreateNamespaceRegistryAction
     */
    CreateNamespaceRegistryAction.fromObject = function fromObject(object) {
        if (object instanceof $root.CreateNamespaceRegistryAction)
            return object;
        let message = new $root.CreateNamespaceRegistryAction();
        if (object.namespace != null)
            message.namespace = String(object.namespace);
        if (object.owners) {
            if (!Array.isArray(object.owners))
                throw TypeError(".CreateNamespaceRegistryAction.owners: array expected");
            message.owners = [];
            for (let i = 0; i < object.owners.length; ++i)
                message.owners[i] = String(object.owners[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a CreateNamespaceRegistryAction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CreateNamespaceRegistryAction
     * @static
     * @param {CreateNamespaceRegistryAction} message CreateNamespaceRegistryAction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CreateNamespaceRegistryAction.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.owners = [];
        if (options.defaults)
            object.namespace = "";
        if (message.namespace != null && message.hasOwnProperty("namespace"))
            object.namespace = message.namespace;
        if (message.owners && message.owners.length) {
            object.owners = [];
            for (let j = 0; j < message.owners.length; ++j)
                object.owners[j] = message.owners[j];
        }
        return object;
    };

    /**
     * Converts this CreateNamespaceRegistryAction to JSON.
     * @function toJSON
     * @memberof CreateNamespaceRegistryAction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CreateNamespaceRegistryAction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CreateNamespaceRegistryAction;
})();

export const DeleteNamespaceRegistryAction = $root.DeleteNamespaceRegistryAction = (() => {

    /**
     * Properties of a DeleteNamespaceRegistryAction.
     * @exports IDeleteNamespaceRegistryAction
     * @interface IDeleteNamespaceRegistryAction
     * @property {string|null} [namespace] DeleteNamespaceRegistryAction namespace
     */

    /**
     * Constructs a new DeleteNamespaceRegistryAction.
     * @exports DeleteNamespaceRegistryAction
     * @classdesc Represents a DeleteNamespaceRegistryAction.
     * @implements IDeleteNamespaceRegistryAction
     * @constructor
     * @param {IDeleteNamespaceRegistryAction=} [properties] Properties to set
     */
    function DeleteNamespaceRegistryAction(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DeleteNamespaceRegistryAction namespace.
     * @member {string} namespace
     * @memberof DeleteNamespaceRegistryAction
     * @instance
     */
    DeleteNamespaceRegistryAction.prototype.namespace = "";

    /**
     * Creates a new DeleteNamespaceRegistryAction instance using the specified properties.
     * @function create
     * @memberof DeleteNamespaceRegistryAction
     * @static
     * @param {IDeleteNamespaceRegistryAction=} [properties] Properties to set
     * @returns {DeleteNamespaceRegistryAction} DeleteNamespaceRegistryAction instance
     */
    DeleteNamespaceRegistryAction.create = function create(properties) {
        return new DeleteNamespaceRegistryAction(properties);
    };

    /**
     * Encodes the specified DeleteNamespaceRegistryAction message. Does not implicitly {@link DeleteNamespaceRegistryAction.verify|verify} messages.
     * @function encode
     * @memberof DeleteNamespaceRegistryAction
     * @static
     * @param {IDeleteNamespaceRegistryAction} message DeleteNamespaceRegistryAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeleteNamespaceRegistryAction.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.namespace != null && message.hasOwnProperty("namespace"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.namespace);
        return writer;
    };

    /**
     * Encodes the specified DeleteNamespaceRegistryAction message, length delimited. Does not implicitly {@link DeleteNamespaceRegistryAction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DeleteNamespaceRegistryAction
     * @static
     * @param {IDeleteNamespaceRegistryAction} message DeleteNamespaceRegistryAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeleteNamespaceRegistryAction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DeleteNamespaceRegistryAction message from the specified reader or buffer.
     * @function decode
     * @memberof DeleteNamespaceRegistryAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DeleteNamespaceRegistryAction} DeleteNamespaceRegistryAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeleteNamespaceRegistryAction.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DeleteNamespaceRegistryAction();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.namespace = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DeleteNamespaceRegistryAction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DeleteNamespaceRegistryAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DeleteNamespaceRegistryAction} DeleteNamespaceRegistryAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeleteNamespaceRegistryAction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DeleteNamespaceRegistryAction message.
     * @function verify
     * @memberof DeleteNamespaceRegistryAction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DeleteNamespaceRegistryAction.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.namespace != null && message.hasOwnProperty("namespace"))
            if (!$util.isString(message.namespace))
                return "namespace: string expected";
        return null;
    };

    /**
     * Creates a DeleteNamespaceRegistryAction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DeleteNamespaceRegistryAction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DeleteNamespaceRegistryAction} DeleteNamespaceRegistryAction
     */
    DeleteNamespaceRegistryAction.fromObject = function fromObject(object) {
        if (object instanceof $root.DeleteNamespaceRegistryAction)
            return object;
        let message = new $root.DeleteNamespaceRegistryAction();
        if (object.namespace != null)
            message.namespace = String(object.namespace);
        return message;
    };

    /**
     * Creates a plain object from a DeleteNamespaceRegistryAction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DeleteNamespaceRegistryAction
     * @static
     * @param {DeleteNamespaceRegistryAction} message DeleteNamespaceRegistryAction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DeleteNamespaceRegistryAction.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.namespace = "";
        if (message.namespace != null && message.hasOwnProperty("namespace"))
            object.namespace = message.namespace;
        return object;
    };

    /**
     * Converts this DeleteNamespaceRegistryAction to JSON.
     * @function toJSON
     * @memberof DeleteNamespaceRegistryAction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DeleteNamespaceRegistryAction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DeleteNamespaceRegistryAction;
})();

export const UpdateNamespaceRegistryOwnersAction = $root.UpdateNamespaceRegistryOwnersAction = (() => {

    /**
     * Properties of an UpdateNamespaceRegistryOwnersAction.
     * @exports IUpdateNamespaceRegistryOwnersAction
     * @interface IUpdateNamespaceRegistryOwnersAction
     * @property {string|null} [namespace] UpdateNamespaceRegistryOwnersAction namespace
     * @property {Array.<string>|null} [owners] UpdateNamespaceRegistryOwnersAction owners
     */

    /**
     * Constructs a new UpdateNamespaceRegistryOwnersAction.
     * @exports UpdateNamespaceRegistryOwnersAction
     * @classdesc Represents an UpdateNamespaceRegistryOwnersAction.
     * @implements IUpdateNamespaceRegistryOwnersAction
     * @constructor
     * @param {IUpdateNamespaceRegistryOwnersAction=} [properties] Properties to set
     */
    function UpdateNamespaceRegistryOwnersAction(properties) {
        this.owners = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UpdateNamespaceRegistryOwnersAction namespace.
     * @member {string} namespace
     * @memberof UpdateNamespaceRegistryOwnersAction
     * @instance
     */
    UpdateNamespaceRegistryOwnersAction.prototype.namespace = "";

    /**
     * UpdateNamespaceRegistryOwnersAction owners.
     * @member {Array.<string>} owners
     * @memberof UpdateNamespaceRegistryOwnersAction
     * @instance
     */
    UpdateNamespaceRegistryOwnersAction.prototype.owners = $util.emptyArray;

    /**
     * Creates a new UpdateNamespaceRegistryOwnersAction instance using the specified properties.
     * @function create
     * @memberof UpdateNamespaceRegistryOwnersAction
     * @static
     * @param {IUpdateNamespaceRegistryOwnersAction=} [properties] Properties to set
     * @returns {UpdateNamespaceRegistryOwnersAction} UpdateNamespaceRegistryOwnersAction instance
     */
    UpdateNamespaceRegistryOwnersAction.create = function create(properties) {
        return new UpdateNamespaceRegistryOwnersAction(properties);
    };

    /**
     * Encodes the specified UpdateNamespaceRegistryOwnersAction message. Does not implicitly {@link UpdateNamespaceRegistryOwnersAction.verify|verify} messages.
     * @function encode
     * @memberof UpdateNamespaceRegistryOwnersAction
     * @static
     * @param {IUpdateNamespaceRegistryOwnersAction} message UpdateNamespaceRegistryOwnersAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpdateNamespaceRegistryOwnersAction.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.namespace != null && message.hasOwnProperty("namespace"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.namespace);
        if (message.owners != null && message.owners.length)
            for (let i = 0; i < message.owners.length; ++i)
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.owners[i]);
        return writer;
    };

    /**
     * Encodes the specified UpdateNamespaceRegistryOwnersAction message, length delimited. Does not implicitly {@link UpdateNamespaceRegistryOwnersAction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UpdateNamespaceRegistryOwnersAction
     * @static
     * @param {IUpdateNamespaceRegistryOwnersAction} message UpdateNamespaceRegistryOwnersAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpdateNamespaceRegistryOwnersAction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an UpdateNamespaceRegistryOwnersAction message from the specified reader or buffer.
     * @function decode
     * @memberof UpdateNamespaceRegistryOwnersAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UpdateNamespaceRegistryOwnersAction} UpdateNamespaceRegistryOwnersAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpdateNamespaceRegistryOwnersAction.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.UpdateNamespaceRegistryOwnersAction();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.namespace = reader.string();
                break;
            case 2:
                if (!(message.owners && message.owners.length))
                    message.owners = [];
                message.owners.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an UpdateNamespaceRegistryOwnersAction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UpdateNamespaceRegistryOwnersAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UpdateNamespaceRegistryOwnersAction} UpdateNamespaceRegistryOwnersAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpdateNamespaceRegistryOwnersAction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an UpdateNamespaceRegistryOwnersAction message.
     * @function verify
     * @memberof UpdateNamespaceRegistryOwnersAction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UpdateNamespaceRegistryOwnersAction.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.namespace != null && message.hasOwnProperty("namespace"))
            if (!$util.isString(message.namespace))
                return "namespace: string expected";
        if (message.owners != null && message.hasOwnProperty("owners")) {
            if (!Array.isArray(message.owners))
                return "owners: array expected";
            for (let i = 0; i < message.owners.length; ++i)
                if (!$util.isString(message.owners[i]))
                    return "owners: string[] expected";
        }
        return null;
    };

    /**
     * Creates an UpdateNamespaceRegistryOwnersAction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UpdateNamespaceRegistryOwnersAction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UpdateNamespaceRegistryOwnersAction} UpdateNamespaceRegistryOwnersAction
     */
    UpdateNamespaceRegistryOwnersAction.fromObject = function fromObject(object) {
        if (object instanceof $root.UpdateNamespaceRegistryOwnersAction)
            return object;
        let message = new $root.UpdateNamespaceRegistryOwnersAction();
        if (object.namespace != null)
            message.namespace = String(object.namespace);
        if (object.owners) {
            if (!Array.isArray(object.owners))
                throw TypeError(".UpdateNamespaceRegistryOwnersAction.owners: array expected");
            message.owners = [];
            for (let i = 0; i < object.owners.length; ++i)
                message.owners[i] = String(object.owners[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from an UpdateNamespaceRegistryOwnersAction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UpdateNamespaceRegistryOwnersAction
     * @static
     * @param {UpdateNamespaceRegistryOwnersAction} message UpdateNamespaceRegistryOwnersAction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UpdateNamespaceRegistryOwnersAction.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.owners = [];
        if (options.defaults)
            object.namespace = "";
        if (message.namespace != null && message.hasOwnProperty("namespace"))
            object.namespace = message.namespace;
        if (message.owners && message.owners.length) {
            object.owners = [];
            for (let j = 0; j < message.owners.length; ++j)
                object.owners[j] = message.owners[j];
        }
        return object;
    };

    /**
     * Converts this UpdateNamespaceRegistryOwnersAction to JSON.
     * @function toJSON
     * @memberof UpdateNamespaceRegistryOwnersAction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UpdateNamespaceRegistryOwnersAction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UpdateNamespaceRegistryOwnersAction;
})();

export const CreateNamespaceRegistryPermissionAction = $root.CreateNamespaceRegistryPermissionAction = (() => {

    /**
     * Properties of a CreateNamespaceRegistryPermissionAction.
     * @exports ICreateNamespaceRegistryPermissionAction
     * @interface ICreateNamespaceRegistryPermissionAction
     * @property {string|null} [namespace] CreateNamespaceRegistryPermissionAction namespace
     * @property {string|null} [contractName] CreateNamespaceRegistryPermissionAction contractName
     * @property {boolean|null} [read] CreateNamespaceRegistryPermissionAction read
     * @property {boolean|null} [write] CreateNamespaceRegistryPermissionAction write
     */

    /**
     * Constructs a new CreateNamespaceRegistryPermissionAction.
     * @exports CreateNamespaceRegistryPermissionAction
     * @classdesc Represents a CreateNamespaceRegistryPermissionAction.
     * @implements ICreateNamespaceRegistryPermissionAction
     * @constructor
     * @param {ICreateNamespaceRegistryPermissionAction=} [properties] Properties to set
     */
    function CreateNamespaceRegistryPermissionAction(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CreateNamespaceRegistryPermissionAction namespace.
     * @member {string} namespace
     * @memberof CreateNamespaceRegistryPermissionAction
     * @instance
     */
    CreateNamespaceRegistryPermissionAction.prototype.namespace = "";

    /**
     * CreateNamespaceRegistryPermissionAction contractName.
     * @member {string} contractName
     * @memberof CreateNamespaceRegistryPermissionAction
     * @instance
     */
    CreateNamespaceRegistryPermissionAction.prototype.contractName = "";

    /**
     * CreateNamespaceRegistryPermissionAction read.
     * @member {boolean} read
     * @memberof CreateNamespaceRegistryPermissionAction
     * @instance
     */
    CreateNamespaceRegistryPermissionAction.prototype.read = false;

    /**
     * CreateNamespaceRegistryPermissionAction write.
     * @member {boolean} write
     * @memberof CreateNamespaceRegistryPermissionAction
     * @instance
     */
    CreateNamespaceRegistryPermissionAction.prototype.write = false;

    /**
     * Creates a new CreateNamespaceRegistryPermissionAction instance using the specified properties.
     * @function create
     * @memberof CreateNamespaceRegistryPermissionAction
     * @static
     * @param {ICreateNamespaceRegistryPermissionAction=} [properties] Properties to set
     * @returns {CreateNamespaceRegistryPermissionAction} CreateNamespaceRegistryPermissionAction instance
     */
    CreateNamespaceRegistryPermissionAction.create = function create(properties) {
        return new CreateNamespaceRegistryPermissionAction(properties);
    };

    /**
     * Encodes the specified CreateNamespaceRegistryPermissionAction message. Does not implicitly {@link CreateNamespaceRegistryPermissionAction.verify|verify} messages.
     * @function encode
     * @memberof CreateNamespaceRegistryPermissionAction
     * @static
     * @param {ICreateNamespaceRegistryPermissionAction} message CreateNamespaceRegistryPermissionAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateNamespaceRegistryPermissionAction.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.namespace != null && message.hasOwnProperty("namespace"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.namespace);
        if (message.contractName != null && message.hasOwnProperty("contractName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.contractName);
        if (message.read != null && message.hasOwnProperty("read"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.read);
        if (message.write != null && message.hasOwnProperty("write"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.write);
        return writer;
    };

    /**
     * Encodes the specified CreateNamespaceRegistryPermissionAction message, length delimited. Does not implicitly {@link CreateNamespaceRegistryPermissionAction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CreateNamespaceRegistryPermissionAction
     * @static
     * @param {ICreateNamespaceRegistryPermissionAction} message CreateNamespaceRegistryPermissionAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateNamespaceRegistryPermissionAction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CreateNamespaceRegistryPermissionAction message from the specified reader or buffer.
     * @function decode
     * @memberof CreateNamespaceRegistryPermissionAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CreateNamespaceRegistryPermissionAction} CreateNamespaceRegistryPermissionAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateNamespaceRegistryPermissionAction.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CreateNamespaceRegistryPermissionAction();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.namespace = reader.string();
                break;
            case 2:
                message.contractName = reader.string();
                break;
            case 3:
                message.read = reader.bool();
                break;
            case 4:
                message.write = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CreateNamespaceRegistryPermissionAction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CreateNamespaceRegistryPermissionAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CreateNamespaceRegistryPermissionAction} CreateNamespaceRegistryPermissionAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateNamespaceRegistryPermissionAction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CreateNamespaceRegistryPermissionAction message.
     * @function verify
     * @memberof CreateNamespaceRegistryPermissionAction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CreateNamespaceRegistryPermissionAction.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.namespace != null && message.hasOwnProperty("namespace"))
            if (!$util.isString(message.namespace))
                return "namespace: string expected";
        if (message.contractName != null && message.hasOwnProperty("contractName"))
            if (!$util.isString(message.contractName))
                return "contractName: string expected";
        if (message.read != null && message.hasOwnProperty("read"))
            if (typeof message.read !== "boolean")
                return "read: boolean expected";
        if (message.write != null && message.hasOwnProperty("write"))
            if (typeof message.write !== "boolean")
                return "write: boolean expected";
        return null;
    };

    /**
     * Creates a CreateNamespaceRegistryPermissionAction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CreateNamespaceRegistryPermissionAction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CreateNamespaceRegistryPermissionAction} CreateNamespaceRegistryPermissionAction
     */
    CreateNamespaceRegistryPermissionAction.fromObject = function fromObject(object) {
        if (object instanceof $root.CreateNamespaceRegistryPermissionAction)
            return object;
        let message = new $root.CreateNamespaceRegistryPermissionAction();
        if (object.namespace != null)
            message.namespace = String(object.namespace);
        if (object.contractName != null)
            message.contractName = String(object.contractName);
        if (object.read != null)
            message.read = Boolean(object.read);
        if (object.write != null)
            message.write = Boolean(object.write);
        return message;
    };

    /**
     * Creates a plain object from a CreateNamespaceRegistryPermissionAction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CreateNamespaceRegistryPermissionAction
     * @static
     * @param {CreateNamespaceRegistryPermissionAction} message CreateNamespaceRegistryPermissionAction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CreateNamespaceRegistryPermissionAction.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.namespace = "";
            object.contractName = "";
            object.read = false;
            object.write = false;
        }
        if (message.namespace != null && message.hasOwnProperty("namespace"))
            object.namespace = message.namespace;
        if (message.contractName != null && message.hasOwnProperty("contractName"))
            object.contractName = message.contractName;
        if (message.read != null && message.hasOwnProperty("read"))
            object.read = message.read;
        if (message.write != null && message.hasOwnProperty("write"))
            object.write = message.write;
        return object;
    };

    /**
     * Converts this CreateNamespaceRegistryPermissionAction to JSON.
     * @function toJSON
     * @memberof CreateNamespaceRegistryPermissionAction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CreateNamespaceRegistryPermissionAction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CreateNamespaceRegistryPermissionAction;
})();

export const DeleteNamespaceRegistryPermissionAction = $root.DeleteNamespaceRegistryPermissionAction = (() => {

    /**
     * Properties of a DeleteNamespaceRegistryPermissionAction.
     * @exports IDeleteNamespaceRegistryPermissionAction
     * @interface IDeleteNamespaceRegistryPermissionAction
     * @property {string|null} [namespace] DeleteNamespaceRegistryPermissionAction namespace
     * @property {string|null} [contractName] DeleteNamespaceRegistryPermissionAction contractName
     */

    /**
     * Constructs a new DeleteNamespaceRegistryPermissionAction.
     * @exports DeleteNamespaceRegistryPermissionAction
     * @classdesc Represents a DeleteNamespaceRegistryPermissionAction.
     * @implements IDeleteNamespaceRegistryPermissionAction
     * @constructor
     * @param {IDeleteNamespaceRegistryPermissionAction=} [properties] Properties to set
     */
    function DeleteNamespaceRegistryPermissionAction(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DeleteNamespaceRegistryPermissionAction namespace.
     * @member {string} namespace
     * @memberof DeleteNamespaceRegistryPermissionAction
     * @instance
     */
    DeleteNamespaceRegistryPermissionAction.prototype.namespace = "";

    /**
     * DeleteNamespaceRegistryPermissionAction contractName.
     * @member {string} contractName
     * @memberof DeleteNamespaceRegistryPermissionAction
     * @instance
     */
    DeleteNamespaceRegistryPermissionAction.prototype.contractName = "";

    /**
     * Creates a new DeleteNamespaceRegistryPermissionAction instance using the specified properties.
     * @function create
     * @memberof DeleteNamespaceRegistryPermissionAction
     * @static
     * @param {IDeleteNamespaceRegistryPermissionAction=} [properties] Properties to set
     * @returns {DeleteNamespaceRegistryPermissionAction} DeleteNamespaceRegistryPermissionAction instance
     */
    DeleteNamespaceRegistryPermissionAction.create = function create(properties) {
        return new DeleteNamespaceRegistryPermissionAction(properties);
    };

    /**
     * Encodes the specified DeleteNamespaceRegistryPermissionAction message. Does not implicitly {@link DeleteNamespaceRegistryPermissionAction.verify|verify} messages.
     * @function encode
     * @memberof DeleteNamespaceRegistryPermissionAction
     * @static
     * @param {IDeleteNamespaceRegistryPermissionAction} message DeleteNamespaceRegistryPermissionAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeleteNamespaceRegistryPermissionAction.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.namespace != null && message.hasOwnProperty("namespace"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.namespace);
        if (message.contractName != null && message.hasOwnProperty("contractName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.contractName);
        return writer;
    };

    /**
     * Encodes the specified DeleteNamespaceRegistryPermissionAction message, length delimited. Does not implicitly {@link DeleteNamespaceRegistryPermissionAction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DeleteNamespaceRegistryPermissionAction
     * @static
     * @param {IDeleteNamespaceRegistryPermissionAction} message DeleteNamespaceRegistryPermissionAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeleteNamespaceRegistryPermissionAction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DeleteNamespaceRegistryPermissionAction message from the specified reader or buffer.
     * @function decode
     * @memberof DeleteNamespaceRegistryPermissionAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DeleteNamespaceRegistryPermissionAction} DeleteNamespaceRegistryPermissionAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeleteNamespaceRegistryPermissionAction.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DeleteNamespaceRegistryPermissionAction();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.namespace = reader.string();
                break;
            case 2:
                message.contractName = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DeleteNamespaceRegistryPermissionAction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DeleteNamespaceRegistryPermissionAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DeleteNamespaceRegistryPermissionAction} DeleteNamespaceRegistryPermissionAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeleteNamespaceRegistryPermissionAction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DeleteNamespaceRegistryPermissionAction message.
     * @function verify
     * @memberof DeleteNamespaceRegistryPermissionAction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DeleteNamespaceRegistryPermissionAction.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.namespace != null && message.hasOwnProperty("namespace"))
            if (!$util.isString(message.namespace))
                return "namespace: string expected";
        if (message.contractName != null && message.hasOwnProperty("contractName"))
            if (!$util.isString(message.contractName))
                return "contractName: string expected";
        return null;
    };

    /**
     * Creates a DeleteNamespaceRegistryPermissionAction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DeleteNamespaceRegistryPermissionAction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DeleteNamespaceRegistryPermissionAction} DeleteNamespaceRegistryPermissionAction
     */
    DeleteNamespaceRegistryPermissionAction.fromObject = function fromObject(object) {
        if (object instanceof $root.DeleteNamespaceRegistryPermissionAction)
            return object;
        let message = new $root.DeleteNamespaceRegistryPermissionAction();
        if (object.namespace != null)
            message.namespace = String(object.namespace);
        if (object.contractName != null)
            message.contractName = String(object.contractName);
        return message;
    };

    /**
     * Creates a plain object from a DeleteNamespaceRegistryPermissionAction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DeleteNamespaceRegistryPermissionAction
     * @static
     * @param {DeleteNamespaceRegistryPermissionAction} message DeleteNamespaceRegistryPermissionAction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DeleteNamespaceRegistryPermissionAction.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.namespace = "";
            object.contractName = "";
        }
        if (message.namespace != null && message.hasOwnProperty("namespace"))
            object.namespace = message.namespace;
        if (message.contractName != null && message.hasOwnProperty("contractName"))
            object.contractName = message.contractName;
        return object;
    };

    /**
     * Converts this DeleteNamespaceRegistryPermissionAction to JSON.
     * @function toJSON
     * @memberof DeleteNamespaceRegistryPermissionAction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DeleteNamespaceRegistryPermissionAction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DeleteNamespaceRegistryPermissionAction;
})();

export const CreateSmartPermissionAction = $root.CreateSmartPermissionAction = (() => {

    /**
     * Properties of a CreateSmartPermissionAction.
     * @exports ICreateSmartPermissionAction
     * @interface ICreateSmartPermissionAction
     * @property {string|null} [name] CreateSmartPermissionAction name
     * @property {string|null} [orgId] CreateSmartPermissionAction orgId
     * @property {Uint8Array|null} ["function"] CreateSmartPermissionAction function
     */

    /**
     * Constructs a new CreateSmartPermissionAction.
     * @exports CreateSmartPermissionAction
     * @classdesc Represents a CreateSmartPermissionAction.
     * @implements ICreateSmartPermissionAction
     * @constructor
     * @param {ICreateSmartPermissionAction=} [properties] Properties to set
     */
    function CreateSmartPermissionAction(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CreateSmartPermissionAction name.
     * @member {string} name
     * @memberof CreateSmartPermissionAction
     * @instance
     */
    CreateSmartPermissionAction.prototype.name = "";

    /**
     * CreateSmartPermissionAction orgId.
     * @member {string} orgId
     * @memberof CreateSmartPermissionAction
     * @instance
     */
    CreateSmartPermissionAction.prototype.orgId = "";

    /**
     * CreateSmartPermissionAction function.
     * @member {Uint8Array} function
     * @memberof CreateSmartPermissionAction
     * @instance
     */
    CreateSmartPermissionAction.prototype["function"] = $util.newBuffer([]);

    /**
     * Creates a new CreateSmartPermissionAction instance using the specified properties.
     * @function create
     * @memberof CreateSmartPermissionAction
     * @static
     * @param {ICreateSmartPermissionAction=} [properties] Properties to set
     * @returns {CreateSmartPermissionAction} CreateSmartPermissionAction instance
     */
    CreateSmartPermissionAction.create = function create(properties) {
        return new CreateSmartPermissionAction(properties);
    };

    /**
     * Encodes the specified CreateSmartPermissionAction message. Does not implicitly {@link CreateSmartPermissionAction.verify|verify} messages.
     * @function encode
     * @memberof CreateSmartPermissionAction
     * @static
     * @param {ICreateSmartPermissionAction} message CreateSmartPermissionAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateSmartPermissionAction.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.orgId != null && message.hasOwnProperty("orgId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.orgId);
        if (message["function"] != null && message.hasOwnProperty("function"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message["function"]);
        return writer;
    };

    /**
     * Encodes the specified CreateSmartPermissionAction message, length delimited. Does not implicitly {@link CreateSmartPermissionAction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CreateSmartPermissionAction
     * @static
     * @param {ICreateSmartPermissionAction} message CreateSmartPermissionAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateSmartPermissionAction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CreateSmartPermissionAction message from the specified reader or buffer.
     * @function decode
     * @memberof CreateSmartPermissionAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CreateSmartPermissionAction} CreateSmartPermissionAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateSmartPermissionAction.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CreateSmartPermissionAction();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                message.orgId = reader.string();
                break;
            case 3:
                message["function"] = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CreateSmartPermissionAction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CreateSmartPermissionAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CreateSmartPermissionAction} CreateSmartPermissionAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateSmartPermissionAction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CreateSmartPermissionAction message.
     * @function verify
     * @memberof CreateSmartPermissionAction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CreateSmartPermissionAction.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.orgId != null && message.hasOwnProperty("orgId"))
            if (!$util.isString(message.orgId))
                return "orgId: string expected";
        if (message["function"] != null && message.hasOwnProperty("function"))
            if (!(message["function"] && typeof message["function"].length === "number" || $util.isString(message["function"])))
                return "function: buffer expected";
        return null;
    };

    /**
     * Creates a CreateSmartPermissionAction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CreateSmartPermissionAction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CreateSmartPermissionAction} CreateSmartPermissionAction
     */
    CreateSmartPermissionAction.fromObject = function fromObject(object) {
        if (object instanceof $root.CreateSmartPermissionAction)
            return object;
        let message = new $root.CreateSmartPermissionAction();
        if (object.name != null)
            message.name = String(object.name);
        if (object.orgId != null)
            message.orgId = String(object.orgId);
        if (object["function"] != null)
            if (typeof object["function"] === "string")
                $util.base64.decode(object["function"], message["function"] = $util.newBuffer($util.base64.length(object["function"])), 0);
            else if (object["function"].length)
                message["function"] = object["function"];
        return message;
    };

    /**
     * Creates a plain object from a CreateSmartPermissionAction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CreateSmartPermissionAction
     * @static
     * @param {CreateSmartPermissionAction} message CreateSmartPermissionAction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CreateSmartPermissionAction.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.name = "";
            object.orgId = "";
            if (options.bytes === String)
                object["function"] = "";
            else {
                object["function"] = [];
                if (options.bytes !== Array)
                    object["function"] = $util.newBuffer(object["function"]);
            }
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.orgId != null && message.hasOwnProperty("orgId"))
            object.orgId = message.orgId;
        if (message["function"] != null && message.hasOwnProperty("function"))
            object["function"] = options.bytes === String ? $util.base64.encode(message["function"], 0, message["function"].length) : options.bytes === Array ? Array.prototype.slice.call(message["function"]) : message["function"];
        return object;
    };

    /**
     * Converts this CreateSmartPermissionAction to JSON.
     * @function toJSON
     * @memberof CreateSmartPermissionAction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CreateSmartPermissionAction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CreateSmartPermissionAction;
})();

export const UpdateSmartPermissionAction = $root.UpdateSmartPermissionAction = (() => {

    /**
     * Properties of an UpdateSmartPermissionAction.
     * @exports IUpdateSmartPermissionAction
     * @interface IUpdateSmartPermissionAction
     * @property {string|null} [name] UpdateSmartPermissionAction name
     * @property {string|null} [orgId] UpdateSmartPermissionAction orgId
     * @property {Uint8Array|null} ["function"] UpdateSmartPermissionAction function
     */

    /**
     * Constructs a new UpdateSmartPermissionAction.
     * @exports UpdateSmartPermissionAction
     * @classdesc Represents an UpdateSmartPermissionAction.
     * @implements IUpdateSmartPermissionAction
     * @constructor
     * @param {IUpdateSmartPermissionAction=} [properties] Properties to set
     */
    function UpdateSmartPermissionAction(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UpdateSmartPermissionAction name.
     * @member {string} name
     * @memberof UpdateSmartPermissionAction
     * @instance
     */
    UpdateSmartPermissionAction.prototype.name = "";

    /**
     * UpdateSmartPermissionAction orgId.
     * @member {string} orgId
     * @memberof UpdateSmartPermissionAction
     * @instance
     */
    UpdateSmartPermissionAction.prototype.orgId = "";

    /**
     * UpdateSmartPermissionAction function.
     * @member {Uint8Array} function
     * @memberof UpdateSmartPermissionAction
     * @instance
     */
    UpdateSmartPermissionAction.prototype["function"] = $util.newBuffer([]);

    /**
     * Creates a new UpdateSmartPermissionAction instance using the specified properties.
     * @function create
     * @memberof UpdateSmartPermissionAction
     * @static
     * @param {IUpdateSmartPermissionAction=} [properties] Properties to set
     * @returns {UpdateSmartPermissionAction} UpdateSmartPermissionAction instance
     */
    UpdateSmartPermissionAction.create = function create(properties) {
        return new UpdateSmartPermissionAction(properties);
    };

    /**
     * Encodes the specified UpdateSmartPermissionAction message. Does not implicitly {@link UpdateSmartPermissionAction.verify|verify} messages.
     * @function encode
     * @memberof UpdateSmartPermissionAction
     * @static
     * @param {IUpdateSmartPermissionAction} message UpdateSmartPermissionAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpdateSmartPermissionAction.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.orgId != null && message.hasOwnProperty("orgId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.orgId);
        if (message["function"] != null && message.hasOwnProperty("function"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message["function"]);
        return writer;
    };

    /**
     * Encodes the specified UpdateSmartPermissionAction message, length delimited. Does not implicitly {@link UpdateSmartPermissionAction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UpdateSmartPermissionAction
     * @static
     * @param {IUpdateSmartPermissionAction} message UpdateSmartPermissionAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpdateSmartPermissionAction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an UpdateSmartPermissionAction message from the specified reader or buffer.
     * @function decode
     * @memberof UpdateSmartPermissionAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UpdateSmartPermissionAction} UpdateSmartPermissionAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpdateSmartPermissionAction.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.UpdateSmartPermissionAction();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                message.orgId = reader.string();
                break;
            case 3:
                message["function"] = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an UpdateSmartPermissionAction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UpdateSmartPermissionAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UpdateSmartPermissionAction} UpdateSmartPermissionAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpdateSmartPermissionAction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an UpdateSmartPermissionAction message.
     * @function verify
     * @memberof UpdateSmartPermissionAction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UpdateSmartPermissionAction.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.orgId != null && message.hasOwnProperty("orgId"))
            if (!$util.isString(message.orgId))
                return "orgId: string expected";
        if (message["function"] != null && message.hasOwnProperty("function"))
            if (!(message["function"] && typeof message["function"].length === "number" || $util.isString(message["function"])))
                return "function: buffer expected";
        return null;
    };

    /**
     * Creates an UpdateSmartPermissionAction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UpdateSmartPermissionAction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UpdateSmartPermissionAction} UpdateSmartPermissionAction
     */
    UpdateSmartPermissionAction.fromObject = function fromObject(object) {
        if (object instanceof $root.UpdateSmartPermissionAction)
            return object;
        let message = new $root.UpdateSmartPermissionAction();
        if (object.name != null)
            message.name = String(object.name);
        if (object.orgId != null)
            message.orgId = String(object.orgId);
        if (object["function"] != null)
            if (typeof object["function"] === "string")
                $util.base64.decode(object["function"], message["function"] = $util.newBuffer($util.base64.length(object["function"])), 0);
            else if (object["function"].length)
                message["function"] = object["function"];
        return message;
    };

    /**
     * Creates a plain object from an UpdateSmartPermissionAction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UpdateSmartPermissionAction
     * @static
     * @param {UpdateSmartPermissionAction} message UpdateSmartPermissionAction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UpdateSmartPermissionAction.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.name = "";
            object.orgId = "";
            if (options.bytes === String)
                object["function"] = "";
            else {
                object["function"] = [];
                if (options.bytes !== Array)
                    object["function"] = $util.newBuffer(object["function"]);
            }
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.orgId != null && message.hasOwnProperty("orgId"))
            object.orgId = message.orgId;
        if (message["function"] != null && message.hasOwnProperty("function"))
            object["function"] = options.bytes === String ? $util.base64.encode(message["function"], 0, message["function"].length) : options.bytes === Array ? Array.prototype.slice.call(message["function"]) : message["function"];
        return object;
    };

    /**
     * Converts this UpdateSmartPermissionAction to JSON.
     * @function toJSON
     * @memberof UpdateSmartPermissionAction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UpdateSmartPermissionAction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UpdateSmartPermissionAction;
})();

export const DeleteSmartPermissionAction = $root.DeleteSmartPermissionAction = (() => {

    /**
     * Properties of a DeleteSmartPermissionAction.
     * @exports IDeleteSmartPermissionAction
     * @interface IDeleteSmartPermissionAction
     * @property {string|null} [name] DeleteSmartPermissionAction name
     * @property {string|null} [orgId] DeleteSmartPermissionAction orgId
     */

    /**
     * Constructs a new DeleteSmartPermissionAction.
     * @exports DeleteSmartPermissionAction
     * @classdesc Represents a DeleteSmartPermissionAction.
     * @implements IDeleteSmartPermissionAction
     * @constructor
     * @param {IDeleteSmartPermissionAction=} [properties] Properties to set
     */
    function DeleteSmartPermissionAction(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DeleteSmartPermissionAction name.
     * @member {string} name
     * @memberof DeleteSmartPermissionAction
     * @instance
     */
    DeleteSmartPermissionAction.prototype.name = "";

    /**
     * DeleteSmartPermissionAction orgId.
     * @member {string} orgId
     * @memberof DeleteSmartPermissionAction
     * @instance
     */
    DeleteSmartPermissionAction.prototype.orgId = "";

    /**
     * Creates a new DeleteSmartPermissionAction instance using the specified properties.
     * @function create
     * @memberof DeleteSmartPermissionAction
     * @static
     * @param {IDeleteSmartPermissionAction=} [properties] Properties to set
     * @returns {DeleteSmartPermissionAction} DeleteSmartPermissionAction instance
     */
    DeleteSmartPermissionAction.create = function create(properties) {
        return new DeleteSmartPermissionAction(properties);
    };

    /**
     * Encodes the specified DeleteSmartPermissionAction message. Does not implicitly {@link DeleteSmartPermissionAction.verify|verify} messages.
     * @function encode
     * @memberof DeleteSmartPermissionAction
     * @static
     * @param {IDeleteSmartPermissionAction} message DeleteSmartPermissionAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeleteSmartPermissionAction.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.orgId != null && message.hasOwnProperty("orgId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.orgId);
        return writer;
    };

    /**
     * Encodes the specified DeleteSmartPermissionAction message, length delimited. Does not implicitly {@link DeleteSmartPermissionAction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DeleteSmartPermissionAction
     * @static
     * @param {IDeleteSmartPermissionAction} message DeleteSmartPermissionAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeleteSmartPermissionAction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DeleteSmartPermissionAction message from the specified reader or buffer.
     * @function decode
     * @memberof DeleteSmartPermissionAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DeleteSmartPermissionAction} DeleteSmartPermissionAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeleteSmartPermissionAction.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DeleteSmartPermissionAction();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                message.orgId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DeleteSmartPermissionAction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DeleteSmartPermissionAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DeleteSmartPermissionAction} DeleteSmartPermissionAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeleteSmartPermissionAction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DeleteSmartPermissionAction message.
     * @function verify
     * @memberof DeleteSmartPermissionAction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DeleteSmartPermissionAction.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.orgId != null && message.hasOwnProperty("orgId"))
            if (!$util.isString(message.orgId))
                return "orgId: string expected";
        return null;
    };

    /**
     * Creates a DeleteSmartPermissionAction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DeleteSmartPermissionAction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DeleteSmartPermissionAction} DeleteSmartPermissionAction
     */
    DeleteSmartPermissionAction.fromObject = function fromObject(object) {
        if (object instanceof $root.DeleteSmartPermissionAction)
            return object;
        let message = new $root.DeleteSmartPermissionAction();
        if (object.name != null)
            message.name = String(object.name);
        if (object.orgId != null)
            message.orgId = String(object.orgId);
        return message;
    };

    /**
     * Creates a plain object from a DeleteSmartPermissionAction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DeleteSmartPermissionAction
     * @static
     * @param {DeleteSmartPermissionAction} message DeleteSmartPermissionAction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DeleteSmartPermissionAction.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.name = "";
            object.orgId = "";
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.orgId != null && message.hasOwnProperty("orgId"))
            object.orgId = message.orgId;
        return object;
    };

    /**
     * Converts this DeleteSmartPermissionAction to JSON.
     * @function toJSON
     * @memberof DeleteSmartPermissionAction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DeleteSmartPermissionAction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DeleteSmartPermissionAction;
})();

export { $root as default };
