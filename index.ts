// Export all generated TypeScript types with explicit imports to avoid conflicts
import * as stockProto from './generated/ts/stock';
import * as authProto from './generated/ts/auth';

// Re-export Stock types
export const {
  Stock,
  CreateStockRequest,
  BatchCreateStockRequest,
  UpdateStockRequest
} = stockProto;

// Also export the type interfaces for better TypeScript support
export type { 
  Stock as StockType,
  CreateStockRequest as CreateStockRequestType,
  BatchCreateStockRequest as BatchCreateStockRequestType,
  UpdateStockRequest as UpdateStockRequestType
} from './generated/ts/stock';

// Re-export Auth types
export const {
  User,
  LoginRequest,
  LoginResponse,
  AuthStatusResponse,
  LogoutRequest,
  AuthResponse
} = authProto;

// Also export the type interfaces for better TypeScript support
export type {
  User as UserType,
  LoginRequest as LoginRequestType,
  LoginResponse as LoginResponseType,
  AuthStatusResponse as AuthStatusResponseType,
  LogoutRequest as LogoutRequestType,
  AuthResponse as AuthResponseType
} from './generated/ts/auth';

// Re-export utility types from stock (only need to export these once)
export type DeepPartial<T> = stockProto.DeepPartial<T>;
export type Exact<P, I extends P> = stockProto.Exact<P, I>;

// Export the protobuf package from stock (they should be the same)
export const { protobufPackage } = stockProto;

// Add more exports as you create more proto files
