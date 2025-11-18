import { Router } from "express";
import { createConversationController, getUserConversationsController } from "../controllers/conversation.controller";

const router = Router();

router.post("/create", createConversationController);
router.get("/user/:userId", getUserConversationsController);

export default router;
