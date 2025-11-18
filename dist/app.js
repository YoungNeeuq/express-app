"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const message_route_1 = __importDefault(require("./routes/message.route"));
const conversation_route_1 = __importDefault(require("./routes/conversation.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/auth", auth_route_1.default);
app.use("/api/messages", message_route_1.default);
app.use("/api/conversations", conversation_route_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map