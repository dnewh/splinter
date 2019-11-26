import * as $protobuf from "protobufjs";
/** Properties of a BatchHeader. */
export interface IBatchHeader {

    /** BatchHeader signerPublicKey */
    signerPublicKey?: (string|null);

    /** BatchHeader transactionIds */
    transactionIds?: (string[]|null);
}

/** Represents a BatchHeader. */
export class BatchHeader implements IBatchHeader {

    /**
     * Constructs a new BatchHeader.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBatchHeader);

    /** BatchHeader signerPublicKey. */
    public signerPublicKey: string;

    /** BatchHeader transactionIds. */
    public transactionIds: string[];

    /**
     * Creates a new BatchHeader instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BatchHeader instance
     */
    public static create(properties?: IBatchHeader): BatchHeader;

    /**
     * Encodes the specified BatchHeader message. Does not implicitly {@link BatchHeader.verify|verify} messages.
     * @param message BatchHeader message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBatchHeader, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BatchHeader message, length delimited. Does not implicitly {@link BatchHeader.verify|verify} messages.
     * @param message BatchHeader message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBatchHeader, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BatchHeader message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BatchHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BatchHeader;

    /**
     * Decodes a BatchHeader message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BatchHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BatchHeader;

    /**
     * Verifies a BatchHeader message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BatchHeader message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BatchHeader
     */
    public static fromObject(object: { [k: string]: any }): BatchHeader;

    /**
     * Creates a plain object from a BatchHeader message. Also converts values to other types if specified.
     * @param message BatchHeader
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BatchHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BatchHeader to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Batch. */
export interface IBatch {

    /** Batch header */
    header?: (Uint8Array|null);

    /** Batch headerSignature */
    headerSignature?: (string|null);

    /** Batch transactions */
    transactions?: (ITransaction[]|null);

    /** Batch trace */
    trace?: (boolean|null);
}

/** Represents a Batch. */
export class Batch implements IBatch {

    /**
     * Constructs a new Batch.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBatch);

    /** Batch header. */
    public header: Uint8Array;

    /** Batch headerSignature. */
    public headerSignature: string;

    /** Batch transactions. */
    public transactions: ITransaction[];

    /** Batch trace. */
    public trace: boolean;

    /**
     * Creates a new Batch instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Batch instance
     */
    public static create(properties?: IBatch): Batch;

    /**
     * Encodes the specified Batch message. Does not implicitly {@link Batch.verify|verify} messages.
     * @param message Batch message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBatch, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Batch message, length delimited. Does not implicitly {@link Batch.verify|verify} messages.
     * @param message Batch message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBatch, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Batch message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Batch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Batch;

    /**
     * Decodes a Batch message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Batch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Batch;

    /**
     * Verifies a Batch message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Batch message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Batch
     */
    public static fromObject(object: { [k: string]: any }): Batch;

    /**
     * Creates a plain object from a Batch message. Also converts values to other types if specified.
     * @param message Batch
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Batch, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Batch to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a BatchList. */
export interface IBatchList {

    /** BatchList batches */
    batches?: (IBatch[]|null);
}

/** Represents a BatchList. */
export class BatchList implements IBatchList {

    /**
     * Constructs a new BatchList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBatchList);

    /** BatchList batches. */
    public batches: IBatch[];

    /**
     * Creates a new BatchList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BatchList instance
     */
    public static create(properties?: IBatchList): BatchList;

    /**
     * Encodes the specified BatchList message. Does not implicitly {@link BatchList.verify|verify} messages.
     * @param message BatchList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBatchList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BatchList message, length delimited. Does not implicitly {@link BatchList.verify|verify} messages.
     * @param message BatchList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBatchList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BatchList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BatchList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BatchList;

    /**
     * Decodes a BatchList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BatchList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BatchList;

    /**
     * Verifies a BatchList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BatchList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BatchList
     */
    public static fromObject(object: { [k: string]: any }): BatchList;

    /**
     * Creates a plain object from a BatchList message. Also converts values to other types if specified.
     * @param message BatchList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BatchList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BatchList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TransactionHeader. */
export interface ITransactionHeader {

    /** TransactionHeader batcherPublicKey */
    batcherPublicKey?: (string|null);

    /** TransactionHeader dependencies */
    dependencies?: (string[]|null);

    /** TransactionHeader familyName */
    familyName?: (string|null);

    /** TransactionHeader familyVersion */
    familyVersion?: (string|null);

    /** TransactionHeader inputs */
    inputs?: (string[]|null);

    /** TransactionHeader nonce */
    nonce?: (string|null);

    /** TransactionHeader outputs */
    outputs?: (string[]|null);

    /** TransactionHeader payloadSha512 */
    payloadSha512?: (string|null);

    /** TransactionHeader signerPublicKey */
    signerPublicKey?: (string|null);
}

/** Represents a TransactionHeader. */
export class TransactionHeader implements ITransactionHeader {

    /**
     * Constructs a new TransactionHeader.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITransactionHeader);

    /** TransactionHeader batcherPublicKey. */
    public batcherPublicKey: string;

    /** TransactionHeader dependencies. */
    public dependencies: string[];

    /** TransactionHeader familyName. */
    public familyName: string;

    /** TransactionHeader familyVersion. */
    public familyVersion: string;

    /** TransactionHeader inputs. */
    public inputs: string[];

    /** TransactionHeader nonce. */
    public nonce: string;

    /** TransactionHeader outputs. */
    public outputs: string[];

    /** TransactionHeader payloadSha512. */
    public payloadSha512: string;

    /** TransactionHeader signerPublicKey. */
    public signerPublicKey: string;

    /**
     * Creates a new TransactionHeader instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TransactionHeader instance
     */
    public static create(properties?: ITransactionHeader): TransactionHeader;

    /**
     * Encodes the specified TransactionHeader message. Does not implicitly {@link TransactionHeader.verify|verify} messages.
     * @param message TransactionHeader message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITransactionHeader, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TransactionHeader message, length delimited. Does not implicitly {@link TransactionHeader.verify|verify} messages.
     * @param message TransactionHeader message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITransactionHeader, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TransactionHeader message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TransactionHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TransactionHeader;

    /**
     * Decodes a TransactionHeader message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TransactionHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TransactionHeader;

    /**
     * Verifies a TransactionHeader message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TransactionHeader message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TransactionHeader
     */
    public static fromObject(object: { [k: string]: any }): TransactionHeader;

    /**
     * Creates a plain object from a TransactionHeader message. Also converts values to other types if specified.
     * @param message TransactionHeader
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TransactionHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TransactionHeader to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Transaction. */
export interface ITransaction {

    /** Transaction header */
    header?: (Uint8Array|null);

    /** Transaction headerSignature */
    headerSignature?: (string|null);

    /** Transaction payload */
    payload?: (Uint8Array|null);
}

/** Represents a Transaction. */
export class Transaction implements ITransaction {

    /**
     * Constructs a new Transaction.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITransaction);

    /** Transaction header. */
    public header: Uint8Array;

    /** Transaction headerSignature. */
    public headerSignature: string;

    /** Transaction payload. */
    public payload: Uint8Array;

    /**
     * Creates a new Transaction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Transaction instance
     */
    public static create(properties?: ITransaction): Transaction;

    /**
     * Encodes the specified Transaction message. Does not implicitly {@link Transaction.verify|verify} messages.
     * @param message Transaction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITransaction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Transaction message, length delimited. Does not implicitly {@link Transaction.verify|verify} messages.
     * @param message Transaction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITransaction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Transaction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Transaction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Transaction;

    /**
     * Decodes a Transaction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Transaction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Transaction;

    /**
     * Verifies a Transaction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Transaction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Transaction
     */
    public static fromObject(object: { [k: string]: any }): Transaction;

    /**
     * Creates a plain object from a Transaction message. Also converts values to other types if specified.
     * @param message Transaction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Transaction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Transaction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TransactionList. */
export interface ITransactionList {

    /** TransactionList transactions */
    transactions?: (ITransaction[]|null);
}

/** Represents a TransactionList. */
export class TransactionList implements ITransactionList {

    /**
     * Constructs a new TransactionList.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITransactionList);

    /** TransactionList transactions. */
    public transactions: ITransaction[];

    /**
     * Creates a new TransactionList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TransactionList instance
     */
    public static create(properties?: ITransactionList): TransactionList;

    /**
     * Encodes the specified TransactionList message. Does not implicitly {@link TransactionList.verify|verify} messages.
     * @param message TransactionList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITransactionList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TransactionList message, length delimited. Does not implicitly {@link TransactionList.verify|verify} messages.
     * @param message TransactionList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITransactionList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TransactionList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TransactionList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TransactionList;

    /**
     * Decodes a TransactionList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TransactionList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TransactionList;

    /**
     * Verifies a TransactionList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TransactionList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TransactionList
     */
    public static fromObject(object: { [k: string]: any }): TransactionList;

    /**
     * Creates a plain object from a TransactionList message. Also converts values to other types if specified.
     * @param message TransactionList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TransactionList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TransactionList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SabrePayload. */
export interface ISabrePayload {

    /** SabrePayload action */
    action?: (SabrePayload.Action|null);

    /** SabrePayload createContract */
    createContract?: (ICreateContractAction|null);

    /** SabrePayload deleteContract */
    deleteContract?: (IDeleteContractAction|null);

    /** SabrePayload executeContract */
    executeContract?: (IExecuteContractAction|null);

    /** SabrePayload createContractRegistry */
    createContractRegistry?: (ICreateContractRegistryAction|null);

    /** SabrePayload deleteContractRegistry */
    deleteContractRegistry?: (IDeleteContractRegistryAction|null);

    /** SabrePayload updateContractRegistryOwners */
    updateContractRegistryOwners?: (IUpdateContractRegistryOwnersAction|null);

    /** SabrePayload createNamespaceRegistry */
    createNamespaceRegistry?: (ICreateNamespaceRegistryAction|null);

    /** SabrePayload deleteNamespaceRegistry */
    deleteNamespaceRegistry?: (IDeleteNamespaceRegistryAction|null);

    /** SabrePayload updateNamespaceRegistryOwners */
    updateNamespaceRegistryOwners?: (IUpdateNamespaceRegistryOwnersAction|null);

    /** SabrePayload createNamespaceRegistryPermission */
    createNamespaceRegistryPermission?: (ICreateNamespaceRegistryPermissionAction|null);

    /** SabrePayload deleteNamespaceRegistryPermission */
    deleteNamespaceRegistryPermission?: (IDeleteNamespaceRegistryPermissionAction|null);

    /** SabrePayload createSmartPermission */
    createSmartPermission?: (ICreateSmartPermissionAction|null);

    /** SabrePayload updateSmartPermission */
    updateSmartPermission?: (IUpdateSmartPermissionAction|null);

    /** SabrePayload deleteSmartPermission */
    deleteSmartPermission?: (IDeleteSmartPermissionAction|null);
}

/** Represents a SabrePayload. */
export class SabrePayload implements ISabrePayload {

    /**
     * Constructs a new SabrePayload.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISabrePayload);

    /** SabrePayload action. */
    public action: SabrePayload.Action;

    /** SabrePayload createContract. */
    public createContract?: (ICreateContractAction|null);

    /** SabrePayload deleteContract. */
    public deleteContract?: (IDeleteContractAction|null);

    /** SabrePayload executeContract. */
    public executeContract?: (IExecuteContractAction|null);

    /** SabrePayload createContractRegistry. */
    public createContractRegistry?: (ICreateContractRegistryAction|null);

    /** SabrePayload deleteContractRegistry. */
    public deleteContractRegistry?: (IDeleteContractRegistryAction|null);

    /** SabrePayload updateContractRegistryOwners. */
    public updateContractRegistryOwners?: (IUpdateContractRegistryOwnersAction|null);

    /** SabrePayload createNamespaceRegistry. */
    public createNamespaceRegistry?: (ICreateNamespaceRegistryAction|null);

    /** SabrePayload deleteNamespaceRegistry. */
    public deleteNamespaceRegistry?: (IDeleteNamespaceRegistryAction|null);

    /** SabrePayload updateNamespaceRegistryOwners. */
    public updateNamespaceRegistryOwners?: (IUpdateNamespaceRegistryOwnersAction|null);

    /** SabrePayload createNamespaceRegistryPermission. */
    public createNamespaceRegistryPermission?: (ICreateNamespaceRegistryPermissionAction|null);

    /** SabrePayload deleteNamespaceRegistryPermission. */
    public deleteNamespaceRegistryPermission?: (IDeleteNamespaceRegistryPermissionAction|null);

    /** SabrePayload createSmartPermission. */
    public createSmartPermission?: (ICreateSmartPermissionAction|null);

    /** SabrePayload updateSmartPermission. */
    public updateSmartPermission?: (IUpdateSmartPermissionAction|null);

    /** SabrePayload deleteSmartPermission. */
    public deleteSmartPermission?: (IDeleteSmartPermissionAction|null);

    /**
     * Creates a new SabrePayload instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SabrePayload instance
     */
    public static create(properties?: ISabrePayload): SabrePayload;

    /**
     * Encodes the specified SabrePayload message. Does not implicitly {@link SabrePayload.verify|verify} messages.
     * @param message SabrePayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISabrePayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SabrePayload message, length delimited. Does not implicitly {@link SabrePayload.verify|verify} messages.
     * @param message SabrePayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISabrePayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SabrePayload message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SabrePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SabrePayload;

    /**
     * Decodes a SabrePayload message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SabrePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SabrePayload;

    /**
     * Verifies a SabrePayload message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SabrePayload message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SabrePayload
     */
    public static fromObject(object: { [k: string]: any }): SabrePayload;

    /**
     * Creates a plain object from a SabrePayload message. Also converts values to other types if specified.
     * @param message SabrePayload
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SabrePayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SabrePayload to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace SabrePayload {

    /** Action enum. */
    enum Action {
        ACTION_UNSET = 0,
        CREATE_CONTRACT = 1,
        DELETE_CONTRACT = 2,
        EXECUTE_CONTRACT = 3,
        CREATE_CONTRACT_REGISTRY = 4,
        DELETE_CONTRACT_REGISTRY = 5,
        UPDATE_CONTRACT_REGISTRY_OWNERS = 6,
        CREATE_NAMESPACE_REGISTRY = 7,
        DELETE_NAMESPACE_REGISTRY = 8,
        UPDATE_NAMESPACE_REGISTRY_OWNERS = 9,
        CREATE_NAMESPACE_REGISTRY_PERMISSION = 10,
        DELETE_NAMESPACE_REGISTRY_PERMISSION = 11,
        CREATE_SMART_PERMISSION = 12,
        UPDATE_SMART_PERMISSION = 13,
        DELETE_SMART_PERMISSION = 14
    }
}

/** Properties of a CreateContractAction. */
export interface ICreateContractAction {

    /** CreateContractAction name */
    name?: (string|null);

    /** CreateContractAction version */
    version?: (string|null);

    /** CreateContractAction inputs */
    inputs?: (string[]|null);

    /** CreateContractAction outputs */
    outputs?: (string[]|null);

    /** CreateContractAction contract */
    contract?: (Uint8Array|null);
}

/** Represents a CreateContractAction. */
export class CreateContractAction implements ICreateContractAction {

    /**
     * Constructs a new CreateContractAction.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICreateContractAction);

    /** CreateContractAction name. */
    public name: string;

    /** CreateContractAction version. */
    public version: string;

    /** CreateContractAction inputs. */
    public inputs: string[];

    /** CreateContractAction outputs. */
    public outputs: string[];

    /** CreateContractAction contract. */
    public contract: Uint8Array;

    /**
     * Creates a new CreateContractAction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CreateContractAction instance
     */
    public static create(properties?: ICreateContractAction): CreateContractAction;

    /**
     * Encodes the specified CreateContractAction message. Does not implicitly {@link CreateContractAction.verify|verify} messages.
     * @param message CreateContractAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICreateContractAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CreateContractAction message, length delimited. Does not implicitly {@link CreateContractAction.verify|verify} messages.
     * @param message CreateContractAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICreateContractAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CreateContractAction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CreateContractAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CreateContractAction;

    /**
     * Decodes a CreateContractAction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CreateContractAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CreateContractAction;

    /**
     * Verifies a CreateContractAction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CreateContractAction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CreateContractAction
     */
    public static fromObject(object: { [k: string]: any }): CreateContractAction;

    /**
     * Creates a plain object from a CreateContractAction message. Also converts values to other types if specified.
     * @param message CreateContractAction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CreateContractAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CreateContractAction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a DeleteContractAction. */
export interface IDeleteContractAction {

    /** DeleteContractAction name */
    name?: (string|null);

    /** DeleteContractAction version */
    version?: (string|null);
}

/** Represents a DeleteContractAction. */
export class DeleteContractAction implements IDeleteContractAction {

    /**
     * Constructs a new DeleteContractAction.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDeleteContractAction);

    /** DeleteContractAction name. */
    public name: string;

    /** DeleteContractAction version. */
    public version: string;

    /**
     * Creates a new DeleteContractAction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeleteContractAction instance
     */
    public static create(properties?: IDeleteContractAction): DeleteContractAction;

    /**
     * Encodes the specified DeleteContractAction message. Does not implicitly {@link DeleteContractAction.verify|verify} messages.
     * @param message DeleteContractAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDeleteContractAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DeleteContractAction message, length delimited. Does not implicitly {@link DeleteContractAction.verify|verify} messages.
     * @param message DeleteContractAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDeleteContractAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeleteContractAction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeleteContractAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeleteContractAction;

    /**
     * Decodes a DeleteContractAction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeleteContractAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeleteContractAction;

    /**
     * Verifies a DeleteContractAction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DeleteContractAction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeleteContractAction
     */
    public static fromObject(object: { [k: string]: any }): DeleteContractAction;

    /**
     * Creates a plain object from a DeleteContractAction message. Also converts values to other types if specified.
     * @param message DeleteContractAction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DeleteContractAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DeleteContractAction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ExecuteContractAction. */
export interface IExecuteContractAction {

    /** ExecuteContractAction name */
    name?: (string|null);

    /** ExecuteContractAction version */
    version?: (string|null);

    /** ExecuteContractAction inputs */
    inputs?: (string[]|null);

    /** ExecuteContractAction outputs */
    outputs?: (string[]|null);

    /** ExecuteContractAction payload */
    payload?: (Uint8Array|null);
}

/** Represents an ExecuteContractAction. */
export class ExecuteContractAction implements IExecuteContractAction {

    /**
     * Constructs a new ExecuteContractAction.
     * @param [properties] Properties to set
     */
    constructor(properties?: IExecuteContractAction);

    /** ExecuteContractAction name. */
    public name: string;

    /** ExecuteContractAction version. */
    public version: string;

    /** ExecuteContractAction inputs. */
    public inputs: string[];

    /** ExecuteContractAction outputs. */
    public outputs: string[];

    /** ExecuteContractAction payload. */
    public payload: Uint8Array;

    /**
     * Creates a new ExecuteContractAction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ExecuteContractAction instance
     */
    public static create(properties?: IExecuteContractAction): ExecuteContractAction;

    /**
     * Encodes the specified ExecuteContractAction message. Does not implicitly {@link ExecuteContractAction.verify|verify} messages.
     * @param message ExecuteContractAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IExecuteContractAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ExecuteContractAction message, length delimited. Does not implicitly {@link ExecuteContractAction.verify|verify} messages.
     * @param message ExecuteContractAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IExecuteContractAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ExecuteContractAction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ExecuteContractAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ExecuteContractAction;

    /**
     * Decodes an ExecuteContractAction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ExecuteContractAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ExecuteContractAction;

    /**
     * Verifies an ExecuteContractAction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ExecuteContractAction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ExecuteContractAction
     */
    public static fromObject(object: { [k: string]: any }): ExecuteContractAction;

    /**
     * Creates a plain object from an ExecuteContractAction message. Also converts values to other types if specified.
     * @param message ExecuteContractAction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ExecuteContractAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ExecuteContractAction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CreateContractRegistryAction. */
export interface ICreateContractRegistryAction {

    /** CreateContractRegistryAction name */
    name?: (string|null);

    /** CreateContractRegistryAction owners */
    owners?: (string[]|null);
}

/** Represents a CreateContractRegistryAction. */
export class CreateContractRegistryAction implements ICreateContractRegistryAction {

    /**
     * Constructs a new CreateContractRegistryAction.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICreateContractRegistryAction);

    /** CreateContractRegistryAction name. */
    public name: string;

    /** CreateContractRegistryAction owners. */
    public owners: string[];

    /**
     * Creates a new CreateContractRegistryAction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CreateContractRegistryAction instance
     */
    public static create(properties?: ICreateContractRegistryAction): CreateContractRegistryAction;

    /**
     * Encodes the specified CreateContractRegistryAction message. Does not implicitly {@link CreateContractRegistryAction.verify|verify} messages.
     * @param message CreateContractRegistryAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICreateContractRegistryAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CreateContractRegistryAction message, length delimited. Does not implicitly {@link CreateContractRegistryAction.verify|verify} messages.
     * @param message CreateContractRegistryAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICreateContractRegistryAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CreateContractRegistryAction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CreateContractRegistryAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CreateContractRegistryAction;

    /**
     * Decodes a CreateContractRegistryAction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CreateContractRegistryAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CreateContractRegistryAction;

    /**
     * Verifies a CreateContractRegistryAction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CreateContractRegistryAction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CreateContractRegistryAction
     */
    public static fromObject(object: { [k: string]: any }): CreateContractRegistryAction;

    /**
     * Creates a plain object from a CreateContractRegistryAction message. Also converts values to other types if specified.
     * @param message CreateContractRegistryAction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CreateContractRegistryAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CreateContractRegistryAction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a DeleteContractRegistryAction. */
export interface IDeleteContractRegistryAction {

    /** DeleteContractRegistryAction name */
    name?: (string|null);
}

/** Represents a DeleteContractRegistryAction. */
export class DeleteContractRegistryAction implements IDeleteContractRegistryAction {

    /**
     * Constructs a new DeleteContractRegistryAction.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDeleteContractRegistryAction);

    /** DeleteContractRegistryAction name. */
    public name: string;

    /**
     * Creates a new DeleteContractRegistryAction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeleteContractRegistryAction instance
     */
    public static create(properties?: IDeleteContractRegistryAction): DeleteContractRegistryAction;

    /**
     * Encodes the specified DeleteContractRegistryAction message. Does not implicitly {@link DeleteContractRegistryAction.verify|verify} messages.
     * @param message DeleteContractRegistryAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDeleteContractRegistryAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DeleteContractRegistryAction message, length delimited. Does not implicitly {@link DeleteContractRegistryAction.verify|verify} messages.
     * @param message DeleteContractRegistryAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDeleteContractRegistryAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeleteContractRegistryAction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeleteContractRegistryAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeleteContractRegistryAction;

    /**
     * Decodes a DeleteContractRegistryAction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeleteContractRegistryAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeleteContractRegistryAction;

    /**
     * Verifies a DeleteContractRegistryAction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DeleteContractRegistryAction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeleteContractRegistryAction
     */
    public static fromObject(object: { [k: string]: any }): DeleteContractRegistryAction;

    /**
     * Creates a plain object from a DeleteContractRegistryAction message. Also converts values to other types if specified.
     * @param message DeleteContractRegistryAction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DeleteContractRegistryAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DeleteContractRegistryAction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an UpdateContractRegistryOwnersAction. */
export interface IUpdateContractRegistryOwnersAction {

    /** UpdateContractRegistryOwnersAction name */
    name?: (string|null);

    /** UpdateContractRegistryOwnersAction owners */
    owners?: (string[]|null);
}

/** Represents an UpdateContractRegistryOwnersAction. */
export class UpdateContractRegistryOwnersAction implements IUpdateContractRegistryOwnersAction {

    /**
     * Constructs a new UpdateContractRegistryOwnersAction.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUpdateContractRegistryOwnersAction);

    /** UpdateContractRegistryOwnersAction name. */
    public name: string;

    /** UpdateContractRegistryOwnersAction owners. */
    public owners: string[];

    /**
     * Creates a new UpdateContractRegistryOwnersAction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UpdateContractRegistryOwnersAction instance
     */
    public static create(properties?: IUpdateContractRegistryOwnersAction): UpdateContractRegistryOwnersAction;

    /**
     * Encodes the specified UpdateContractRegistryOwnersAction message. Does not implicitly {@link UpdateContractRegistryOwnersAction.verify|verify} messages.
     * @param message UpdateContractRegistryOwnersAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUpdateContractRegistryOwnersAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UpdateContractRegistryOwnersAction message, length delimited. Does not implicitly {@link UpdateContractRegistryOwnersAction.verify|verify} messages.
     * @param message UpdateContractRegistryOwnersAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUpdateContractRegistryOwnersAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UpdateContractRegistryOwnersAction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UpdateContractRegistryOwnersAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UpdateContractRegistryOwnersAction;

    /**
     * Decodes an UpdateContractRegistryOwnersAction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UpdateContractRegistryOwnersAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UpdateContractRegistryOwnersAction;

    /**
     * Verifies an UpdateContractRegistryOwnersAction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an UpdateContractRegistryOwnersAction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UpdateContractRegistryOwnersAction
     */
    public static fromObject(object: { [k: string]: any }): UpdateContractRegistryOwnersAction;

    /**
     * Creates a plain object from an UpdateContractRegistryOwnersAction message. Also converts values to other types if specified.
     * @param message UpdateContractRegistryOwnersAction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UpdateContractRegistryOwnersAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UpdateContractRegistryOwnersAction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CreateNamespaceRegistryAction. */
export interface ICreateNamespaceRegistryAction {

    /** CreateNamespaceRegistryAction namespace */
    namespace?: (string|null);

    /** CreateNamespaceRegistryAction owners */
    owners?: (string[]|null);
}

/** Represents a CreateNamespaceRegistryAction. */
export class CreateNamespaceRegistryAction implements ICreateNamespaceRegistryAction {

    /**
     * Constructs a new CreateNamespaceRegistryAction.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICreateNamespaceRegistryAction);

    /** CreateNamespaceRegistryAction namespace. */
    public namespace: string;

    /** CreateNamespaceRegistryAction owners. */
    public owners: string[];

    /**
     * Creates a new CreateNamespaceRegistryAction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CreateNamespaceRegistryAction instance
     */
    public static create(properties?: ICreateNamespaceRegistryAction): CreateNamespaceRegistryAction;

    /**
     * Encodes the specified CreateNamespaceRegistryAction message. Does not implicitly {@link CreateNamespaceRegistryAction.verify|verify} messages.
     * @param message CreateNamespaceRegistryAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICreateNamespaceRegistryAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CreateNamespaceRegistryAction message, length delimited. Does not implicitly {@link CreateNamespaceRegistryAction.verify|verify} messages.
     * @param message CreateNamespaceRegistryAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICreateNamespaceRegistryAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CreateNamespaceRegistryAction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CreateNamespaceRegistryAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CreateNamespaceRegistryAction;

    /**
     * Decodes a CreateNamespaceRegistryAction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CreateNamespaceRegistryAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CreateNamespaceRegistryAction;

    /**
     * Verifies a CreateNamespaceRegistryAction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CreateNamespaceRegistryAction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CreateNamespaceRegistryAction
     */
    public static fromObject(object: { [k: string]: any }): CreateNamespaceRegistryAction;

    /**
     * Creates a plain object from a CreateNamespaceRegistryAction message. Also converts values to other types if specified.
     * @param message CreateNamespaceRegistryAction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CreateNamespaceRegistryAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CreateNamespaceRegistryAction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a DeleteNamespaceRegistryAction. */
export interface IDeleteNamespaceRegistryAction {

    /** DeleteNamespaceRegistryAction namespace */
    namespace?: (string|null);
}

/** Represents a DeleteNamespaceRegistryAction. */
export class DeleteNamespaceRegistryAction implements IDeleteNamespaceRegistryAction {

    /**
     * Constructs a new DeleteNamespaceRegistryAction.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDeleteNamespaceRegistryAction);

    /** DeleteNamespaceRegistryAction namespace. */
    public namespace: string;

    /**
     * Creates a new DeleteNamespaceRegistryAction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeleteNamespaceRegistryAction instance
     */
    public static create(properties?: IDeleteNamespaceRegistryAction): DeleteNamespaceRegistryAction;

    /**
     * Encodes the specified DeleteNamespaceRegistryAction message. Does not implicitly {@link DeleteNamespaceRegistryAction.verify|verify} messages.
     * @param message DeleteNamespaceRegistryAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDeleteNamespaceRegistryAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DeleteNamespaceRegistryAction message, length delimited. Does not implicitly {@link DeleteNamespaceRegistryAction.verify|verify} messages.
     * @param message DeleteNamespaceRegistryAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDeleteNamespaceRegistryAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeleteNamespaceRegistryAction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeleteNamespaceRegistryAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeleteNamespaceRegistryAction;

    /**
     * Decodes a DeleteNamespaceRegistryAction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeleteNamespaceRegistryAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeleteNamespaceRegistryAction;

    /**
     * Verifies a DeleteNamespaceRegistryAction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DeleteNamespaceRegistryAction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeleteNamespaceRegistryAction
     */
    public static fromObject(object: { [k: string]: any }): DeleteNamespaceRegistryAction;

    /**
     * Creates a plain object from a DeleteNamespaceRegistryAction message. Also converts values to other types if specified.
     * @param message DeleteNamespaceRegistryAction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DeleteNamespaceRegistryAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DeleteNamespaceRegistryAction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an UpdateNamespaceRegistryOwnersAction. */
export interface IUpdateNamespaceRegistryOwnersAction {

    /** UpdateNamespaceRegistryOwnersAction namespace */
    namespace?: (string|null);

    /** UpdateNamespaceRegistryOwnersAction owners */
    owners?: (string[]|null);
}

/** Represents an UpdateNamespaceRegistryOwnersAction. */
export class UpdateNamespaceRegistryOwnersAction implements IUpdateNamespaceRegistryOwnersAction {

    /**
     * Constructs a new UpdateNamespaceRegistryOwnersAction.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUpdateNamespaceRegistryOwnersAction);

    /** UpdateNamespaceRegistryOwnersAction namespace. */
    public namespace: string;

    /** UpdateNamespaceRegistryOwnersAction owners. */
    public owners: string[];

    /**
     * Creates a new UpdateNamespaceRegistryOwnersAction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UpdateNamespaceRegistryOwnersAction instance
     */
    public static create(properties?: IUpdateNamespaceRegistryOwnersAction): UpdateNamespaceRegistryOwnersAction;

    /**
     * Encodes the specified UpdateNamespaceRegistryOwnersAction message. Does not implicitly {@link UpdateNamespaceRegistryOwnersAction.verify|verify} messages.
     * @param message UpdateNamespaceRegistryOwnersAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUpdateNamespaceRegistryOwnersAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UpdateNamespaceRegistryOwnersAction message, length delimited. Does not implicitly {@link UpdateNamespaceRegistryOwnersAction.verify|verify} messages.
     * @param message UpdateNamespaceRegistryOwnersAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUpdateNamespaceRegistryOwnersAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UpdateNamespaceRegistryOwnersAction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UpdateNamespaceRegistryOwnersAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UpdateNamespaceRegistryOwnersAction;

    /**
     * Decodes an UpdateNamespaceRegistryOwnersAction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UpdateNamespaceRegistryOwnersAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UpdateNamespaceRegistryOwnersAction;

    /**
     * Verifies an UpdateNamespaceRegistryOwnersAction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an UpdateNamespaceRegistryOwnersAction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UpdateNamespaceRegistryOwnersAction
     */
    public static fromObject(object: { [k: string]: any }): UpdateNamespaceRegistryOwnersAction;

    /**
     * Creates a plain object from an UpdateNamespaceRegistryOwnersAction message. Also converts values to other types if specified.
     * @param message UpdateNamespaceRegistryOwnersAction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UpdateNamespaceRegistryOwnersAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UpdateNamespaceRegistryOwnersAction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CreateNamespaceRegistryPermissionAction. */
export interface ICreateNamespaceRegistryPermissionAction {

    /** CreateNamespaceRegistryPermissionAction namespace */
    namespace?: (string|null);

    /** CreateNamespaceRegistryPermissionAction contractName */
    contractName?: (string|null);

    /** CreateNamespaceRegistryPermissionAction read */
    read?: (boolean|null);

    /** CreateNamespaceRegistryPermissionAction write */
    write?: (boolean|null);
}

/** Represents a CreateNamespaceRegistryPermissionAction. */
export class CreateNamespaceRegistryPermissionAction implements ICreateNamespaceRegistryPermissionAction {

    /**
     * Constructs a new CreateNamespaceRegistryPermissionAction.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICreateNamespaceRegistryPermissionAction);

    /** CreateNamespaceRegistryPermissionAction namespace. */
    public namespace: string;

    /** CreateNamespaceRegistryPermissionAction contractName. */
    public contractName: string;

    /** CreateNamespaceRegistryPermissionAction read. */
    public read: boolean;

    /** CreateNamespaceRegistryPermissionAction write. */
    public write: boolean;

    /**
     * Creates a new CreateNamespaceRegistryPermissionAction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CreateNamespaceRegistryPermissionAction instance
     */
    public static create(properties?: ICreateNamespaceRegistryPermissionAction): CreateNamespaceRegistryPermissionAction;

    /**
     * Encodes the specified CreateNamespaceRegistryPermissionAction message. Does not implicitly {@link CreateNamespaceRegistryPermissionAction.verify|verify} messages.
     * @param message CreateNamespaceRegistryPermissionAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICreateNamespaceRegistryPermissionAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CreateNamespaceRegistryPermissionAction message, length delimited. Does not implicitly {@link CreateNamespaceRegistryPermissionAction.verify|verify} messages.
     * @param message CreateNamespaceRegistryPermissionAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICreateNamespaceRegistryPermissionAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CreateNamespaceRegistryPermissionAction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CreateNamespaceRegistryPermissionAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CreateNamespaceRegistryPermissionAction;

    /**
     * Decodes a CreateNamespaceRegistryPermissionAction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CreateNamespaceRegistryPermissionAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CreateNamespaceRegistryPermissionAction;

    /**
     * Verifies a CreateNamespaceRegistryPermissionAction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CreateNamespaceRegistryPermissionAction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CreateNamespaceRegistryPermissionAction
     */
    public static fromObject(object: { [k: string]: any }): CreateNamespaceRegistryPermissionAction;

    /**
     * Creates a plain object from a CreateNamespaceRegistryPermissionAction message. Also converts values to other types if specified.
     * @param message CreateNamespaceRegistryPermissionAction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CreateNamespaceRegistryPermissionAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CreateNamespaceRegistryPermissionAction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a DeleteNamespaceRegistryPermissionAction. */
export interface IDeleteNamespaceRegistryPermissionAction {

    /** DeleteNamespaceRegistryPermissionAction namespace */
    namespace?: (string|null);

    /** DeleteNamespaceRegistryPermissionAction contractName */
    contractName?: (string|null);
}

/** Represents a DeleteNamespaceRegistryPermissionAction. */
export class DeleteNamespaceRegistryPermissionAction implements IDeleteNamespaceRegistryPermissionAction {

    /**
     * Constructs a new DeleteNamespaceRegistryPermissionAction.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDeleteNamespaceRegistryPermissionAction);

    /** DeleteNamespaceRegistryPermissionAction namespace. */
    public namespace: string;

    /** DeleteNamespaceRegistryPermissionAction contractName. */
    public contractName: string;

    /**
     * Creates a new DeleteNamespaceRegistryPermissionAction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeleteNamespaceRegistryPermissionAction instance
     */
    public static create(properties?: IDeleteNamespaceRegistryPermissionAction): DeleteNamespaceRegistryPermissionAction;

    /**
     * Encodes the specified DeleteNamespaceRegistryPermissionAction message. Does not implicitly {@link DeleteNamespaceRegistryPermissionAction.verify|verify} messages.
     * @param message DeleteNamespaceRegistryPermissionAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDeleteNamespaceRegistryPermissionAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DeleteNamespaceRegistryPermissionAction message, length delimited. Does not implicitly {@link DeleteNamespaceRegistryPermissionAction.verify|verify} messages.
     * @param message DeleteNamespaceRegistryPermissionAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDeleteNamespaceRegistryPermissionAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeleteNamespaceRegistryPermissionAction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeleteNamespaceRegistryPermissionAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeleteNamespaceRegistryPermissionAction;

    /**
     * Decodes a DeleteNamespaceRegistryPermissionAction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeleteNamespaceRegistryPermissionAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeleteNamespaceRegistryPermissionAction;

    /**
     * Verifies a DeleteNamespaceRegistryPermissionAction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DeleteNamespaceRegistryPermissionAction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeleteNamespaceRegistryPermissionAction
     */
    public static fromObject(object: { [k: string]: any }): DeleteNamespaceRegistryPermissionAction;

    /**
     * Creates a plain object from a DeleteNamespaceRegistryPermissionAction message. Also converts values to other types if specified.
     * @param message DeleteNamespaceRegistryPermissionAction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DeleteNamespaceRegistryPermissionAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DeleteNamespaceRegistryPermissionAction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CreateSmartPermissionAction. */
export interface ICreateSmartPermissionAction {

    /** CreateSmartPermissionAction name */
    name?: (string|null);

    /** CreateSmartPermissionAction orgId */
    orgId?: (string|null);

    /** CreateSmartPermissionAction function */
    "function"?: (Uint8Array|null);
}

/** Represents a CreateSmartPermissionAction. */
export class CreateSmartPermissionAction implements ICreateSmartPermissionAction {

    /**
     * Constructs a new CreateSmartPermissionAction.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICreateSmartPermissionAction);

    /** CreateSmartPermissionAction name. */
    public name: string;

    /** CreateSmartPermissionAction orgId. */
    public orgId: string;

    /** CreateSmartPermissionAction function. */
    public function: Uint8Array;

    /**
     * Creates a new CreateSmartPermissionAction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CreateSmartPermissionAction instance
     */
    public static create(properties?: ICreateSmartPermissionAction): CreateSmartPermissionAction;

    /**
     * Encodes the specified CreateSmartPermissionAction message. Does not implicitly {@link CreateSmartPermissionAction.verify|verify} messages.
     * @param message CreateSmartPermissionAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICreateSmartPermissionAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CreateSmartPermissionAction message, length delimited. Does not implicitly {@link CreateSmartPermissionAction.verify|verify} messages.
     * @param message CreateSmartPermissionAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICreateSmartPermissionAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CreateSmartPermissionAction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CreateSmartPermissionAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CreateSmartPermissionAction;

    /**
     * Decodes a CreateSmartPermissionAction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CreateSmartPermissionAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CreateSmartPermissionAction;

    /**
     * Verifies a CreateSmartPermissionAction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CreateSmartPermissionAction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CreateSmartPermissionAction
     */
    public static fromObject(object: { [k: string]: any }): CreateSmartPermissionAction;

    /**
     * Creates a plain object from a CreateSmartPermissionAction message. Also converts values to other types if specified.
     * @param message CreateSmartPermissionAction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CreateSmartPermissionAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CreateSmartPermissionAction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an UpdateSmartPermissionAction. */
export interface IUpdateSmartPermissionAction {

    /** UpdateSmartPermissionAction name */
    name?: (string|null);

    /** UpdateSmartPermissionAction orgId */
    orgId?: (string|null);

    /** UpdateSmartPermissionAction function */
    "function"?: (Uint8Array|null);
}

/** Represents an UpdateSmartPermissionAction. */
export class UpdateSmartPermissionAction implements IUpdateSmartPermissionAction {

    /**
     * Constructs a new UpdateSmartPermissionAction.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUpdateSmartPermissionAction);

    /** UpdateSmartPermissionAction name. */
    public name: string;

    /** UpdateSmartPermissionAction orgId. */
    public orgId: string;

    /** UpdateSmartPermissionAction function. */
    public function: Uint8Array;

    /**
     * Creates a new UpdateSmartPermissionAction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UpdateSmartPermissionAction instance
     */
    public static create(properties?: IUpdateSmartPermissionAction): UpdateSmartPermissionAction;

    /**
     * Encodes the specified UpdateSmartPermissionAction message. Does not implicitly {@link UpdateSmartPermissionAction.verify|verify} messages.
     * @param message UpdateSmartPermissionAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUpdateSmartPermissionAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UpdateSmartPermissionAction message, length delimited. Does not implicitly {@link UpdateSmartPermissionAction.verify|verify} messages.
     * @param message UpdateSmartPermissionAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUpdateSmartPermissionAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UpdateSmartPermissionAction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UpdateSmartPermissionAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UpdateSmartPermissionAction;

    /**
     * Decodes an UpdateSmartPermissionAction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UpdateSmartPermissionAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UpdateSmartPermissionAction;

    /**
     * Verifies an UpdateSmartPermissionAction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an UpdateSmartPermissionAction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UpdateSmartPermissionAction
     */
    public static fromObject(object: { [k: string]: any }): UpdateSmartPermissionAction;

    /**
     * Creates a plain object from an UpdateSmartPermissionAction message. Also converts values to other types if specified.
     * @param message UpdateSmartPermissionAction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UpdateSmartPermissionAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UpdateSmartPermissionAction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a DeleteSmartPermissionAction. */
export interface IDeleteSmartPermissionAction {

    /** DeleteSmartPermissionAction name */
    name?: (string|null);

    /** DeleteSmartPermissionAction orgId */
    orgId?: (string|null);
}

/** Represents a DeleteSmartPermissionAction. */
export class DeleteSmartPermissionAction implements IDeleteSmartPermissionAction {

    /**
     * Constructs a new DeleteSmartPermissionAction.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDeleteSmartPermissionAction);

    /** DeleteSmartPermissionAction name. */
    public name: string;

    /** DeleteSmartPermissionAction orgId. */
    public orgId: string;

    /**
     * Creates a new DeleteSmartPermissionAction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeleteSmartPermissionAction instance
     */
    public static create(properties?: IDeleteSmartPermissionAction): DeleteSmartPermissionAction;

    /**
     * Encodes the specified DeleteSmartPermissionAction message. Does not implicitly {@link DeleteSmartPermissionAction.verify|verify} messages.
     * @param message DeleteSmartPermissionAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDeleteSmartPermissionAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DeleteSmartPermissionAction message, length delimited. Does not implicitly {@link DeleteSmartPermissionAction.verify|verify} messages.
     * @param message DeleteSmartPermissionAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDeleteSmartPermissionAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeleteSmartPermissionAction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeleteSmartPermissionAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeleteSmartPermissionAction;

    /**
     * Decodes a DeleteSmartPermissionAction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeleteSmartPermissionAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeleteSmartPermissionAction;

    /**
     * Verifies a DeleteSmartPermissionAction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DeleteSmartPermissionAction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeleteSmartPermissionAction
     */
    public static fromObject(object: { [k: string]: any }): DeleteSmartPermissionAction;

    /**
     * Creates a plain object from a DeleteSmartPermissionAction message. Also converts values to other types if specified.
     * @param message DeleteSmartPermissionAction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DeleteSmartPermissionAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DeleteSmartPermissionAction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
