import * as stockProto from './generated/ts/stock';
import * as authProto from './generated/ts/auth';
export declare const Stock: {
    encode(message: stockProto.Stock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): stockProto.Stock;
    fromJSON(object: any): stockProto.Stock;
    toJSON(message: stockProto.Stock): unknown;
    create<I extends stockProto.Exact<stockProto.DeepPartial<stockProto.Stock>, I>>(base?: I): stockProto.Stock;
    fromPartial<I extends stockProto.Exact<stockProto.DeepPartial<stockProto.Stock>, I>>(object: I): stockProto.Stock;
}, CreateStockRequest: {
    encode(message: stockProto.CreateStockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): stockProto.CreateStockRequest;
    fromJSON(object: any): stockProto.CreateStockRequest;
    toJSON(message: stockProto.CreateStockRequest): unknown;
    create<I extends stockProto.Exact<stockProto.DeepPartial<stockProto.CreateStockRequest>, I>>(base?: I): stockProto.CreateStockRequest;
    fromPartial<I extends stockProto.Exact<stockProto.DeepPartial<stockProto.CreateStockRequest>, I>>(object: I): stockProto.CreateStockRequest;
}, BatchCreateStockRequest: {
    encode(message: stockProto.BatchCreateStockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): stockProto.BatchCreateStockRequest;
    fromJSON(object: any): stockProto.BatchCreateStockRequest;
    toJSON(message: stockProto.BatchCreateStockRequest): unknown;
    create<I extends stockProto.Exact<stockProto.DeepPartial<stockProto.BatchCreateStockRequest>, I>>(base?: I): stockProto.BatchCreateStockRequest;
    fromPartial<I extends stockProto.Exact<stockProto.DeepPartial<stockProto.BatchCreateStockRequest>, I>>(object: I): stockProto.BatchCreateStockRequest;
}, UpdateStockRequest: {
    encode(message: stockProto.UpdateStockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): stockProto.UpdateStockRequest;
    fromJSON(object: any): stockProto.UpdateStockRequest;
    toJSON(message: stockProto.UpdateStockRequest): unknown;
    create<I extends stockProto.Exact<stockProto.DeepPartial<stockProto.UpdateStockRequest>, I>>(base?: I): stockProto.UpdateStockRequest;
    fromPartial<I extends stockProto.Exact<stockProto.DeepPartial<stockProto.UpdateStockRequest>, I>>(object: I): stockProto.UpdateStockRequest;
};
export type { Stock as StockType, CreateStockRequest as CreateStockRequestType, BatchCreateStockRequest as BatchCreateStockRequestType, UpdateStockRequest as UpdateStockRequestType } from './generated/ts/stock';
export declare const User: {
    encode(message: authProto.User, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): authProto.User;
    fromJSON(object: any): authProto.User;
    toJSON(message: authProto.User): unknown;
    create<I extends authProto.Exact<authProto.DeepPartial<authProto.User>, I>>(base?: I): authProto.User;
    fromPartial<I extends authProto.Exact<authProto.DeepPartial<authProto.User>, I>>(object: I): authProto.User;
}, LoginRequest: {
    encode(message: authProto.LoginRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): authProto.LoginRequest;
    fromJSON(object: any): authProto.LoginRequest;
    toJSON(message: authProto.LoginRequest): unknown;
    create<I extends authProto.Exact<authProto.DeepPartial<authProto.LoginRequest>, I>>(base?: I): authProto.LoginRequest;
    fromPartial<I extends authProto.Exact<authProto.DeepPartial<authProto.LoginRequest>, I>>(object: I): authProto.LoginRequest;
}, LoginResponse: {
    encode(message: authProto.LoginResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): authProto.LoginResponse;
    fromJSON(object: any): authProto.LoginResponse;
    toJSON(message: authProto.LoginResponse): unknown;
    create<I extends authProto.Exact<authProto.DeepPartial<authProto.LoginResponse>, I>>(base?: I): authProto.LoginResponse;
    fromPartial<I extends authProto.Exact<authProto.DeepPartial<authProto.LoginResponse>, I>>(object: I): authProto.LoginResponse;
}, AuthStatusResponse: {
    encode(message: authProto.AuthStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): authProto.AuthStatusResponse;
    fromJSON(object: any): authProto.AuthStatusResponse;
    toJSON(message: authProto.AuthStatusResponse): unknown;
    create<I extends authProto.Exact<authProto.DeepPartial<authProto.AuthStatusResponse>, I>>(base?: I): authProto.AuthStatusResponse;
    fromPartial<I extends authProto.Exact<authProto.DeepPartial<authProto.AuthStatusResponse>, I>>(object: I): authProto.AuthStatusResponse;
}, LogoutRequest: {
    encode(message: authProto.LogoutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): authProto.LogoutRequest;
    fromJSON(object: any): authProto.LogoutRequest;
    toJSON(message: authProto.LogoutRequest): unknown;
    create<I extends authProto.Exact<authProto.DeepPartial<authProto.LogoutRequest>, I>>(base?: I): authProto.LogoutRequest;
    fromPartial<I extends authProto.Exact<authProto.DeepPartial<authProto.LogoutRequest>, I>>(object: I): authProto.LogoutRequest;
}, AuthResponse: {
    encode(message: authProto.AuthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): authProto.AuthResponse;
    fromJSON(object: any): authProto.AuthResponse;
    toJSON(message: authProto.AuthResponse): unknown;
    create<I extends authProto.Exact<authProto.DeepPartial<authProto.AuthResponse>, I>>(base?: I): authProto.AuthResponse;
    fromPartial<I extends authProto.Exact<authProto.DeepPartial<authProto.AuthResponse>, I>>(object: I): authProto.AuthResponse;
};
export type { User as UserType, LoginRequest as LoginRequestType, LoginResponse as LoginResponseType, AuthStatusResponse as AuthStatusResponseType, LogoutRequest as LogoutRequestType, AuthResponse as AuthResponseType } from './generated/ts/auth';
export type DeepPartial<T> = stockProto.DeepPartial<T>;
export type Exact<P, I extends P> = stockProto.Exact<P, I>;
export declare const protobufPackage: string;
