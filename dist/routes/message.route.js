"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const message_controller_1 = require("../controllers/message.controller");
const router = (0, express_1.Router)();
router.post("/send", message_controller_1.sendMessageController);
router.get("/:conversationId", message_controller_1.getConversationMessagesController);
exports.default = router;
//# sourceMappingURL=message.route.js.map