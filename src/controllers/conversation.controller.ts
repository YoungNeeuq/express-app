import { Request, Response } from "express";
import * as conversationService from "../services/conversation.service";

export async function createConversationController(req: Request, res: Response) {
  try {
    const conversation = await conversationService.createConversation(req.body);
    res.json({ success: true, conversation });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
}

export async function getUserConversationsController(req: Request, res: Response) {
  try {
    const userId = Number(req.params.userId);
    const conversations = await conversationService.getUserConversations(userId);
    res.json({ success: true, conversations });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
}
