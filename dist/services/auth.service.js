"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = register;
exports.login = login;
const prisma_1 = __importDefault(require("../utils/prisma"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
async function register(data) {
    const existing = await prisma_1.default.user.findUnique({
        where: { email: data.email }
    });
    if (existing) {
        throw new Error("User already exists");
    }
    const hash = await bcryptjs_1.default.hash(data.password, 10);
    const user = await prisma_1.default.user.create({
        data: {
            name: data.name,
            email: data.email,
            password: hash
        }
    });
    return user;
}
async function login(data) {
    const user = await prisma_1.default.user.findUnique({
        where: { email: data.email }
    });
    if (!user) {
        throw new Error("User not found");
    }
    const ok = await bcryptjs_1.default.compare(data.password, user.password);
    if (!ok) {
        throw new Error("Invalid credentials");
    }
    const accessToken = jsonwebtoken_1.default.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    return {
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
        },
        accessToken
    };
}
//# sourceMappingURL=auth.service.js.map