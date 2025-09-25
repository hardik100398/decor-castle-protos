import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "decorcastle";
/** Order status enum */
export declare enum OrderStatus {
    RECEIVED = 0,
    CONFIRMED = 1,
    PROCESSING = 2,
    CUTTING = 3,
    FABRICATING = 4,
    QUALITY_CHECK = 5,
    READY_FOR_DISPATCH = 6,
    DISPATCHED = 7,
    IN_TRANSIT = 8,
    DELIVERED = 9,
    PARTIALLY_DELIVERED = 10,
    COMPLETED = 11,
    INVOICED = 12,
    ON_HOLD = 13,
    CANCELLED = 14,
    RETURNED = 15,
    REFUNDED = 16,
    UNRECOGNIZED = -1
}
export declare function orderStatusFromJSON(object: any): OrderStatus;
export declare function orderStatusToJSON(object: OrderStatus): string;
/** Order Book message */
export interface OrderBook {
    id: number;
    orderNumber: string;
    customerOrderNumber?: string | undefined;
    customerName: string;
    customerContact?: string | undefined;
    customerEmail?: string | undefined;
    customerAddress?: string | undefined;
    deliveryAddress?: string | undefined;
    deliveryContact?: string | undefined;
    deliveryDate?: string | undefined;
    productDescription: string;
    productType?: string | undefined;
    specifications?: string | undefined;
    quantity: number;
    unit: string;
    unitPrice?: number | undefined;
    totalAmount?: number | undefined;
    status: OrderStatus;
    priority: string;
    orderDate: string;
    expectedCompletionDate?: string | undefined;
    actualCompletionDate?: string | undefined;
    dispatchDate?: string | undefined;
    notes?: string | undefined;
    specialInstructions?: string | undefined;
    tallyVoucherNumber?: string | undefined;
    isBilledInTally: boolean;
    tallyBillDate?: string | undefined;
    stockId?: number | undefined;
    creditorId?: number | undefined;
    createdAt: string;
    updatedAt: string;
}
/** Create Order Book Request */
export interface CreateOrderBookRequest {
    orderNumber: string;
    customerOrderNumber?: string | undefined;
    customerName: string;
    customerContact?: string | undefined;
    customerEmail?: string | undefined;
    customerAddress?: string | undefined;
    deliveryAddress?: string | undefined;
    deliveryContact?: string | undefined;
    deliveryDate?: string | undefined;
    productDescription: string;
    productType?: string | undefined;
    specifications?: string | undefined;
    quantity: number;
    unit: string;
    unitPrice?: number | undefined;
    totalAmount?: number | undefined;
    priority: string;
    expectedCompletionDate?: string | undefined;
    notes?: string | undefined;
    specialInstructions?: string | undefined;
    stockId?: number | undefined;
    creditorId?: number | undefined;
}
/** Update Order Book Request */
export interface UpdateOrderBookRequest {
    orderNumber?: string | undefined;
    customerOrderNumber?: string | undefined;
    customerName?: string | undefined;
    customerContact?: string | undefined;
    customerEmail?: string | undefined;
    customerAddress?: string | undefined;
    deliveryAddress?: string | undefined;
    deliveryContact?: string | undefined;
    deliveryDate?: string | undefined;
    productDescription?: string | undefined;
    productType?: string | undefined;
    specifications?: string | undefined;
    quantity?: number | undefined;
    unit?: string | undefined;
    unitPrice?: number | undefined;
    totalAmount?: number | undefined;
    status?: OrderStatus | undefined;
    priority?: string | undefined;
    expectedCompletionDate?: string | undefined;
    actualCompletionDate?: string | undefined;
    dispatchDate?: string | undefined;
    notes?: string | undefined;
    specialInstructions?: string | undefined;
    tallyVoucherNumber?: string | undefined;
    isBilledInTally?: boolean | undefined;
    tallyBillDate?: string | undefined;
    stockId?: number | undefined;
    creditorId?: number | undefined;
}
/** Order Status Update Request */
export interface OrderStatusUpdateRequest {
    status: OrderStatus;
    notes?: string | undefined;
    actualCompletionDate?: string | undefined;
    dispatchDate?: string | undefined;
    deliveryDate?: string | undefined;
}
/** Order Book Summary */
export interface OrderBookSummary {
    totalOrders: number;
    ordersByStatus: {
        [key: string]: number;
    };
    ordersByPriority: {
        [key: string]: number;
    };
    overdueOrders: number;
    completedOrders: number;
    pendingOrders: number;
    totalValue: number;
}
export interface OrderBookSummary_OrdersByStatusEntry {
    key: string;
    value: number;
}
export interface OrderBookSummary_OrdersByPriorityEntry {
    key: string;
    value: number;
}
export declare const OrderBook: {
    encode(message: OrderBook, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderBook;
    fromJSON(object: any): OrderBook;
    toJSON(message: OrderBook): unknown;
    create<I extends Exact<DeepPartial<OrderBook>, I>>(base?: I): OrderBook;
    fromPartial<I extends Exact<DeepPartial<OrderBook>, I>>(object: I): OrderBook;
};
export declare const CreateOrderBookRequest: {
    encode(message: CreateOrderBookRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateOrderBookRequest;
    fromJSON(object: any): CreateOrderBookRequest;
    toJSON(message: CreateOrderBookRequest): unknown;
    create<I extends Exact<DeepPartial<CreateOrderBookRequest>, I>>(base?: I): CreateOrderBookRequest;
    fromPartial<I extends Exact<DeepPartial<CreateOrderBookRequest>, I>>(object: I): CreateOrderBookRequest;
};
export declare const UpdateOrderBookRequest: {
    encode(message: UpdateOrderBookRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOrderBookRequest;
    fromJSON(object: any): UpdateOrderBookRequest;
    toJSON(message: UpdateOrderBookRequest): unknown;
    create<I extends Exact<DeepPartial<UpdateOrderBookRequest>, I>>(base?: I): UpdateOrderBookRequest;
    fromPartial<I extends Exact<DeepPartial<UpdateOrderBookRequest>, I>>(object: I): UpdateOrderBookRequest;
};
export declare const OrderStatusUpdateRequest: {
    encode(message: OrderStatusUpdateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderStatusUpdateRequest;
    fromJSON(object: any): OrderStatusUpdateRequest;
    toJSON(message: OrderStatusUpdateRequest): unknown;
    create<I extends Exact<DeepPartial<OrderStatusUpdateRequest>, I>>(base?: I): OrderStatusUpdateRequest;
    fromPartial<I extends Exact<DeepPartial<OrderStatusUpdateRequest>, I>>(object: I): OrderStatusUpdateRequest;
};
export declare const OrderBookSummary: {
    encode(message: OrderBookSummary, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderBookSummary;
    fromJSON(object: any): OrderBookSummary;
    toJSON(message: OrderBookSummary): unknown;
    create<I extends Exact<DeepPartial<OrderBookSummary>, I>>(base?: I): OrderBookSummary;
    fromPartial<I extends Exact<DeepPartial<OrderBookSummary>, I>>(object: I): OrderBookSummary;
};
export declare const OrderBookSummary_OrdersByStatusEntry: {
    encode(message: OrderBookSummary_OrdersByStatusEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderBookSummary_OrdersByStatusEntry;
    fromJSON(object: any): OrderBookSummary_OrdersByStatusEntry;
    toJSON(message: OrderBookSummary_OrdersByStatusEntry): unknown;
    create<I extends Exact<DeepPartial<OrderBookSummary_OrdersByStatusEntry>, I>>(base?: I): OrderBookSummary_OrdersByStatusEntry;
    fromPartial<I extends Exact<DeepPartial<OrderBookSummary_OrdersByStatusEntry>, I>>(object: I): OrderBookSummary_OrdersByStatusEntry;
};
export declare const OrderBookSummary_OrdersByPriorityEntry: {
    encode(message: OrderBookSummary_OrdersByPriorityEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderBookSummary_OrdersByPriorityEntry;
    fromJSON(object: any): OrderBookSummary_OrdersByPriorityEntry;
    toJSON(message: OrderBookSummary_OrdersByPriorityEntry): unknown;
    create<I extends Exact<DeepPartial<OrderBookSummary_OrdersByPriorityEntry>, I>>(base?: I): OrderBookSummary_OrdersByPriorityEntry;
    fromPartial<I extends Exact<DeepPartial<OrderBookSummary_OrdersByPriorityEntry>, I>>(object: I): OrderBookSummary_OrdersByPriorityEntry;
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
