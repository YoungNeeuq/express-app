"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const conversation_controller_1 = require("../controllers/conversation.controller");
const router = (0, express_1.Router)();
router.post("/create", conversation_controller_1.createConversationController);
router.get("/user/:userId", conversation_controller_1.getUserConversationsController);
exports.default = router;
//# sourceMappingURL=conversation.route.js.map