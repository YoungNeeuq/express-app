"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertJWT = convertJWT;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = require("../../../config/app");
dotenv_1.default.config();
function convertJWT(sessionToken) {
    const decodedToken = jsonwebtoken_1.default.verify(sessionToken, app_1.JWT_ACCESS_SECRET);
    return decodedToken.userId;
}
//# sourceMappingURL=convertjwt.js.map