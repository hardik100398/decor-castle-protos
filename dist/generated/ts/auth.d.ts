import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "decorcastle";
/** User Login Request */
export interface LoginRequest {
    email: string;
    password: string;
}
/** User Login Response */
export interface LoginResponse {
    message: string;
    accessToken: string;
    user: User | undefined;
    expiresIn: number;
}
/** User Information */
export interface User {
    id: string;
    email: string;
    createdAt?: string | undefined;
    role?: string | undefined;
}
/** Auth Status Response */
export interface AuthStatusResponse {
    authenticated: boolean;
    user: User | undefined;
    error?: string | undefined;
}
/** Logout Request */
export interface LogoutRequest {
    token?: string | undefined;
}
/** General Response */
export interface AuthResponse {
    message: string;
    success: boolean;
    warning?: string | undefined;
}
export declare const LoginRequest: {
    encode(message: LoginRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LoginRequest;
    fromJSON(object: any): LoginRequest;
    toJSON(message: LoginRequest): unknown;
    create<I extends Exact<DeepPartial<LoginRequest>, I>>(base?: I): LoginRequest;
    fromPartial<I extends Exact<DeepPartial<LoginRequest>, I>>(object: I): LoginRequest;
};
export declare const LoginResponse: {
    encode(message: LoginResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LoginResponse;
    fromJSON(object: any): LoginResponse;
    toJSON(message: LoginResponse): unknown;
    create<I extends Exact<DeepPartial<LoginResponse>, I>>(base?: I): LoginResponse;
    fromPartial<I extends Exact<DeepPartial<LoginResponse>, I>>(object: I): LoginResponse;
};
export declare const User: {
    encode(message: User, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): User;
    fromJSON(object: any): User;
    toJSON(message: User): unknown;
    create<I extends Exact<DeepPartial<User>, I>>(base?: I): User;
    fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User;
};
export declare const AuthStatusResponse: {
    encode(message: AuthStatusResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthStatusResponse;
    fromJSON(object: any): AuthStatusResponse;
    toJSON(message: AuthStatusResponse): unknown;
    create<I extends Exact<DeepPartial<AuthStatusResponse>, I>>(base?: I): AuthStatusResponse;
    fromPartial<I extends Exact<DeepPartial<AuthStatusResponse>, I>>(object: I): AuthStatusResponse;
};
export declare const LogoutRequest: {
    encode(message: LogoutRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LogoutRequest;
    fromJSON(object: any): LogoutRequest;
    toJSON(message: LogoutRequest): unknown;
    create<I extends Exact<DeepPartial<LogoutRequest>, I>>(base?: I): LogoutRequest;
    fromPartial<I extends Exact<DeepPartial<LogoutRequest>, I>>(object: I): LogoutRequest;
};
export declare const AuthResponse: {
    encode(message: AuthResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthResponse;
    fromJSON(object: any): AuthResponse;
    toJSON(message: AuthResponse): unknown;
    create<I extends Exact<DeepPartial<AuthResponse>, I>>(base?: I): AuthResponse;
    fromPartial<I extends Exact<DeepPartial<AuthResponse>, I>>(object: I): AuthResponse;
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
