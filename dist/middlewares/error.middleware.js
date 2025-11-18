"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const error_handle_1 = __importDefault(require("../common/exceptions/error.handle"));
const ErrorHandlerMiddleware = (error, req, res, next) => {
    return (0, error_handle_1.default)(error, req, res, next);
};
exports.default = ErrorHandlerMiddleware;
//# sourceMappingURL=error.middleware.js.map