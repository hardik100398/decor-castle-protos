import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "decorcastle";
export interface Stock {
    id: number;
    productTypeId: number;
    productName?: string | undefined;
    productNumber: string;
    company?: string | undefined;
    thickness?: string | undefined;
    width?: string | undefined;
    height?: string | undefined;
    amountPresent: number;
    unitPrice?: number | undefined;
    createdAt: string;
    updatedAt: string;
    lastOrderedAt?: string | undefined;
}
export interface CreateStockRequest {
    productTypeId: number;
    productName?: string | undefined;
    productNumber: string;
    company?: string | undefined;
    thickness?: string | undefined;
    width?: string | undefined;
    height?: string | undefined;
    amountPresent: number;
    unitPrice?: number | undefined;
}
export interface BatchCreateStockRequest {
    items: CreateStockRequest[];
}
export interface UpdateStockRequest {
    productTypeId?: number | undefined;
    productName?: string | undefined;
    productNumber?: string | undefined;
    company?: string | undefined;
    thickness?: string | undefined;
    width?: string | undefined;
    height?: string | undefined;
    amountPresent?: number | undefined;
    unitPrice?: number | undefined;
}
export declare const Stock: {
    encode(message: Stock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Stock;
    fromJSON(object: any): Stock;
    toJSON(message: Stock): unknown;
    create<I extends Exact<DeepPartial<Stock>, I>>(base?: I): Stock;
    fromPartial<I extends Exact<DeepPartial<Stock>, I>>(object: I): Stock;
};
export declare const CreateStockRequest: {
    encode(message: CreateStockRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateStockRequest;
    fromJSON(object: any): CreateStockRequest;
    toJSON(message: CreateStockRequest): unknown;
    create<I extends Exact<DeepPartial<CreateStockRequest>, I>>(base?: I): CreateStockRequest;
    fromPartial<I extends Exact<DeepPartial<CreateStockRequest>, I>>(object: I): CreateStockRequest;
};
export declare const BatchCreateStockRequest: {
    encode(message: BatchCreateStockRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchCreateStockRequest;
    fromJSON(object: any): BatchCreateStockRequest;
    toJSON(message: BatchCreateStockRequest): unknown;
    create<I extends Exact<DeepPartial<BatchCreateStockRequest>, I>>(base?: I): BatchCreateStockRequest;
    fromPartial<I extends Exact<DeepPartial<BatchCreateStockRequest>, I>>(object: I): BatchCreateStockRequest;
};
export declare const UpdateStockRequest: {
    encode(message: UpdateStockRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateStockRequest;
    fromJSON(object: any): UpdateStockRequest;
    toJSON(message: UpdateStockRequest): unknown;
    create<I extends Exact<DeepPartial<UpdateStockRequest>, I>>(base?: I): UpdateStockRequest;
    fromPartial<I extends Exact<DeepPartial<UpdateStockRequest>, I>>(object: I): UpdateStockRequest;
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
