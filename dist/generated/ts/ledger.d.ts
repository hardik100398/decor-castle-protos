import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "decorcastle";
/** Account types enum */
export declare enum AccountType {
    CREDITOR = 0,
    DEBTOR = 1,
    CASH = 2,
    BANK = 3,
    EXPENSE = 4,
    INCOME = 5,
    ASSET = 6,
    LIABILITY = 7,
    EQUITY = 8,
    UNRECOGNIZED = -1
}
export declare function accountTypeFromJSON(object: any): AccountType;
export declare function accountTypeToJSON(object: AccountType): string;
/** Transaction types enum */
export declare enum TransactionType {
    DEBIT = 0,
    CREDIT = 1,
    TRANSFER = 2,
    UNRECOGNIZED = -1
}
export declare function transactionTypeFromJSON(object: any): TransactionType;
export declare function transactionTypeToJSON(object: TransactionType): string;
/** Ledger Account message */
export interface LedgerAccount {
    id: number;
    name: string;
    accountType: AccountType;
    contact?: string | undefined;
    email?: string | undefined;
    reference?: string | undefined;
    address?: string | undefined;
    openingBalance: number;
    currentBalance: number;
    isActive: boolean;
    isConsignee: boolean;
    createdAt: string;
    updatedAt: string;
}
/** Ledger Transaction message */
export interface LedgerTransaction {
    id: number;
    debitAccountId?: number | undefined;
    creditAccountId?: number | undefined;
    amount: number;
    transactionType: TransactionType;
    description?: string | undefined;
    referenceNumber?: string | undefined;
    voucherNumber?: string | undefined;
    voucherDate?: string | undefined;
    createdAt: string;
    updatedAt: string;
}
/** Create Ledger Account Request */
export interface CreateLedgerAccountRequest {
    name: string;
    accountType: AccountType;
    contact?: string | undefined;
    email?: string | undefined;
    reference?: string | undefined;
    address?: string | undefined;
    openingBalance: number;
    isActive: boolean;
    isConsignee: boolean;
}
/** Update Ledger Account Request */
export interface UpdateLedgerAccountRequest {
    name?: string | undefined;
    accountType?: AccountType | undefined;
    contact?: string | undefined;
    email?: string | undefined;
    reference?: string | undefined;
    address?: string | undefined;
    openingBalance?: number | undefined;
    isActive?: boolean | undefined;
    isConsignee?: boolean | undefined;
}
/** Create Ledger Transaction Request */
export interface CreateLedgerTransactionRequest {
    debitAccountId?: number | undefined;
    creditAccountId?: number | undefined;
    amount: number;
    transactionType: TransactionType;
    description?: string | undefined;
    referenceNumber?: string | undefined;
    voucherNumber?: string | undefined;
    voucherDate?: string | undefined;
}
/** Update Ledger Transaction Request */
export interface UpdateLedgerTransactionRequest {
    debitAccountId?: number | undefined;
    creditAccountId?: number | undefined;
    amount?: number | undefined;
    transactionType?: TransactionType | undefined;
    description?: string | undefined;
    referenceNumber?: string | undefined;
    voucherNumber?: string | undefined;
    voucherDate?: string | undefined;
}
/** Ledger Account Summary */
export interface LedgerAccountSummary {
    totalAccounts: number;
    accountsByType: {
        [key: string]: number;
    };
    totalDebitBalance: number;
    totalCreditBalance: number;
    activeAccounts: number;
    inactiveAccounts: number;
}
export interface LedgerAccountSummary_AccountsByTypeEntry {
    key: string;
    value: number;
}
/** Ledger Transaction Summary */
export interface LedgerTransactionSummary {
    totalTransactions: number;
    totalDebitAmount: number;
    totalCreditAmount: number;
    transactionsByType: {
        [key: string]: number;
    };
    transactionsByMonth: {
        [key: string]: number;
    };
}
export interface LedgerTransactionSummary_TransactionsByTypeEntry {
    key: string;
    value: number;
}
export interface LedgerTransactionSummary_TransactionsByMonthEntry {
    key: string;
    value: number;
}
export declare const LedgerAccount: {
    encode(message: LedgerAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LedgerAccount;
    fromJSON(object: any): LedgerAccount;
    toJSON(message: LedgerAccount): unknown;
    create<I extends Exact<DeepPartial<LedgerAccount>, I>>(base?: I): LedgerAccount;
    fromPartial<I extends Exact<DeepPartial<LedgerAccount>, I>>(object: I): LedgerAccount;
};
export declare const LedgerTransaction: {
    encode(message: LedgerTransaction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LedgerTransaction;
    fromJSON(object: any): LedgerTransaction;
    toJSON(message: LedgerTransaction): unknown;
    create<I extends Exact<DeepPartial<LedgerTransaction>, I>>(base?: I): LedgerTransaction;
    fromPartial<I extends Exact<DeepPartial<LedgerTransaction>, I>>(object: I): LedgerTransaction;
};
export declare const CreateLedgerAccountRequest: {
    encode(message: CreateLedgerAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateLedgerAccountRequest;
    fromJSON(object: any): CreateLedgerAccountRequest;
    toJSON(message: CreateLedgerAccountRequest): unknown;
    create<I extends Exact<DeepPartial<CreateLedgerAccountRequest>, I>>(base?: I): CreateLedgerAccountRequest;
    fromPartial<I extends Exact<DeepPartial<CreateLedgerAccountRequest>, I>>(object: I): CreateLedgerAccountRequest;
};
export declare const UpdateLedgerAccountRequest: {
    encode(message: UpdateLedgerAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLedgerAccountRequest;
    fromJSON(object: any): UpdateLedgerAccountRequest;
    toJSON(message: UpdateLedgerAccountRequest): unknown;
    create<I extends Exact<DeepPartial<UpdateLedgerAccountRequest>, I>>(base?: I): UpdateLedgerAccountRequest;
    fromPartial<I extends Exact<DeepPartial<UpdateLedgerAccountRequest>, I>>(object: I): UpdateLedgerAccountRequest;
};
export declare const CreateLedgerTransactionRequest: {
    encode(message: CreateLedgerTransactionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateLedgerTransactionRequest;
    fromJSON(object: any): CreateLedgerTransactionRequest;
    toJSON(message: CreateLedgerTransactionRequest): unknown;
    create<I extends Exact<DeepPartial<CreateLedgerTransactionRequest>, I>>(base?: I): CreateLedgerTransactionRequest;
    fromPartial<I extends Exact<DeepPartial<CreateLedgerTransactionRequest>, I>>(object: I): CreateLedgerTransactionRequest;
};
export declare const UpdateLedgerTransactionRequest: {
    encode(message: UpdateLedgerTransactionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLedgerTransactionRequest;
    fromJSON(object: any): UpdateLedgerTransactionRequest;
    toJSON(message: UpdateLedgerTransactionRequest): unknown;
    create<I extends Exact<DeepPartial<UpdateLedgerTransactionRequest>, I>>(base?: I): UpdateLedgerTransactionRequest;
    fromPartial<I extends Exact<DeepPartial<UpdateLedgerTransactionRequest>, I>>(object: I): UpdateLedgerTransactionRequest;
};
export declare const LedgerAccountSummary: {
    encode(message: LedgerAccountSummary, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LedgerAccountSummary;
    fromJSON(object: any): LedgerAccountSummary;
    toJSON(message: LedgerAccountSummary): unknown;
    create<I extends Exact<DeepPartial<LedgerAccountSummary>, I>>(base?: I): LedgerAccountSummary;
    fromPartial<I extends Exact<DeepPartial<LedgerAccountSummary>, I>>(object: I): LedgerAccountSummary;
};
export declare const LedgerAccountSummary_AccountsByTypeEntry: {
    encode(message: LedgerAccountSummary_AccountsByTypeEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LedgerAccountSummary_AccountsByTypeEntry;
    fromJSON(object: any): LedgerAccountSummary_AccountsByTypeEntry;
    toJSON(message: LedgerAccountSummary_AccountsByTypeEntry): unknown;
    create<I extends Exact<DeepPartial<LedgerAccountSummary_AccountsByTypeEntry>, I>>(base?: I): LedgerAccountSummary_AccountsByTypeEntry;
    fromPartial<I extends Exact<DeepPartial<LedgerAccountSummary_AccountsByTypeEntry>, I>>(object: I): LedgerAccountSummary_AccountsByTypeEntry;
};
export declare const LedgerTransactionSummary: {
    encode(message: LedgerTransactionSummary, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LedgerTransactionSummary;
    fromJSON(object: any): LedgerTransactionSummary;
    toJSON(message: LedgerTransactionSummary): unknown;
    create<I extends Exact<DeepPartial<LedgerTransactionSummary>, I>>(base?: I): LedgerTransactionSummary;
    fromPartial<I extends Exact<DeepPartial<LedgerTransactionSummary>, I>>(object: I): LedgerTransactionSummary;
};
export declare const LedgerTransactionSummary_TransactionsByTypeEntry: {
    encode(message: LedgerTransactionSummary_TransactionsByTypeEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LedgerTransactionSummary_TransactionsByTypeEntry;
    fromJSON(object: any): LedgerTransactionSummary_TransactionsByTypeEntry;
    toJSON(message: LedgerTransactionSummary_TransactionsByTypeEntry): unknown;
    create<I extends Exact<DeepPartial<LedgerTransactionSummary_TransactionsByTypeEntry>, I>>(base?: I): LedgerTransactionSummary_TransactionsByTypeEntry;
    fromPartial<I extends Exact<DeepPartial<LedgerTransactionSummary_TransactionsByTypeEntry>, I>>(object: I): LedgerTransactionSummary_TransactionsByTypeEntry;
};
export declare const LedgerTransactionSummary_TransactionsByMonthEntry: {
    encode(message: LedgerTransactionSummary_TransactionsByMonthEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LedgerTransactionSummary_TransactionsByMonthEntry;
    fromJSON(object: any): LedgerTransactionSummary_TransactionsByMonthEntry;
    toJSON(message: LedgerTransactionSummary_TransactionsByMonthEntry): unknown;
    create<I extends Exact<DeepPartial<LedgerTransactionSummary_TransactionsByMonthEntry>, I>>(base?: I): LedgerTransactionSummary_TransactionsByMonthEntry;
    fromPartial<I extends Exact<DeepPartial<LedgerTransactionSummary_TransactionsByMonthEntry>, I>>(object: I): LedgerTransactionSummary_TransactionsByMonthEntry;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
