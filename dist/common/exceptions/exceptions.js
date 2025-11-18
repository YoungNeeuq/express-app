"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerErrorException = exports.NotFoundException = exports.UnauthorizedException = exports.BadRequestException = void 0;
const http_status_1 = __importDefault(require("http-status"));
class BadRequestException extends Error {
    constructor(message = 'BAD_REQUEST') {
        super(message);
        this.statusCode = http_status_1.default.BAD_REQUEST;
    }
}
exports.BadRequestException = BadRequestException;
class UnauthorizedException extends Error {
    constructor(message = 'UNAUTHORIZED') {
        super(message);
        this.statusCode = http_status_1.default.UNAUTHORIZED;
    }
}
exports.UnauthorizedException = UnauthorizedException;
class NotFoundException extends Error {
    constructor(message = 'NOT FOUND') {
        super(message);
        this.statusCode = http_status_1.default.NOT_FOUND;
    }
}
exports.NotFoundException = NotFoundException;
class InternalServerErrorException extends Error {
    constructor(message = 'INTERNAL SERVER ERROR') {
        super(message);
        this.statusCode = http_status_1.default.INTERNAL_SERVER_ERROR;
    }
}
exports.InternalServerErrorException = InternalServerErrorException;
//# sourceMappingURL=exceptions.js.map