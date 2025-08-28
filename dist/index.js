"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.protobufPackage = exports.AuthResponse = exports.LogoutRequest = exports.AuthStatusResponse = exports.LoginResponse = exports.LoginRequest = exports.User = exports.UpdateStockRequest = exports.BatchCreateStockRequest = exports.CreateStockRequest = exports.Stock = void 0;
// Export all generated TypeScript types with explicit imports to avoid conflicts
const stockProto = __importStar(require("./generated/ts/stock"));
const authProto = __importStar(require("./generated/ts/auth"));
// Re-export Stock types
exports.Stock = stockProto.Stock, exports.CreateStockRequest = stockProto.CreateStockRequest, exports.BatchCreateStockRequest = stockProto.BatchCreateStockRequest, exports.UpdateStockRequest = stockProto.UpdateStockRequest;
// Re-export Auth types
exports.User = authProto.User, exports.LoginRequest = authProto.LoginRequest, exports.LoginResponse = authProto.LoginResponse, exports.AuthStatusResponse = authProto.AuthStatusResponse, exports.LogoutRequest = authProto.LogoutRequest, exports.AuthResponse = authProto.AuthResponse;
// Export the protobuf package from stock (they should be the same)
exports.protobufPackage = stockProto.protobufPackage;
// Add more exports as you create more proto files
