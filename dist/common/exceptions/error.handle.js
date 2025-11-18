"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const lodash_1 = __importDefault(require("lodash"));
const ERROR_CODES = [http_status_codes_1.StatusCodes.UNPROCESSABLE_ENTITY, http_status_codes_1.StatusCodes.BAD_REQUEST];
const ErrorHandler = (err, req, res, next) => {
    const response = {
        statusCode: http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR
    };
    if (lodash_1.default.includes(ERROR_CODES, err.statusCode)) {
        response.errors = err.errors;
    }
    if (err.message) {
        response.message = err.message;
    }
    if (err.errorDetail) {
        response.code = err.errorDetail.code;
    }
    if (err.data) {
        response.data = err.data;
    }
    response.statusCode = err.statusCode ? err.statusCode : http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;
    res.status(response.statusCode).json(response);
};
exports.default = ErrorHandler;
//# sourceMappingURL=error.handle.js.map