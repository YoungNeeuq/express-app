import { Router } from "express";
import { sendMessageController, getConversationMessagesController } from "../controllers/message.controller";

const router = Router();

router.post("/send", sendMessageController);
router.get("/:conversationId", getConversationMessagesController);

export default router;
