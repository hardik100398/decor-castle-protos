import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "decorcastle";
export interface Company {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
}
export interface CreateCompanyRequest {
    name: string;
}
export interface UpdateCompanyRequest {
    name: string;
}
export declare const Company: {
    encode(message: Company, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Company;
    fromJSON(object: any): Company;
    toJSON(message: Company): unknown;
    create<I extends Exact<DeepPartial<Company>, I>>(base?: I): Company;
    fromPartial<I extends Exact<DeepPartial<Company>, I>>(object: I): Company;
};
export declare const CreateCompanyRequest: {
    encode(message: CreateCompanyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateCompanyRequest;
    fromJSON(object: any): CreateCompanyRequest;
    toJSON(message: CreateCompanyRequest): unknown;
    create<I extends Exact<DeepPartial<CreateCompanyRequest>, I>>(base?: I): CreateCompanyRequest;
    fromPartial<I extends Exact<DeepPartial<CreateCompanyRequest>, I>>(object: I): CreateCompanyRequest;
};
export declare const UpdateCompanyRequest: {
    encode(message: UpdateCompanyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCompanyRequest;
    fromJSON(object: any): UpdateCompanyRequest;
    toJSON(message: UpdateCompanyRequest): unknown;
    create<I extends Exact<DeepPartial<UpdateCompanyRequest>, I>>(base?: I): UpdateCompanyRequest;
    fromPartial<I extends Exact<DeepPartial<UpdateCompanyRequest>, I>>(object: I): UpdateCompanyRequest;
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
