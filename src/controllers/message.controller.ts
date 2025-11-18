import { Request, Response } from "express";
import * as messageService from "../services/message.service";

export async function sendMessageController(req: Request, res: Response) {
  try {
    const { conversationId, senderId, content } = req.body;
    const message = await messageService.sendMessage({ conversationId, senderId, content });
    res.json({ success: true, message });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
}

export async function getConversationMessagesController(req: Request, res: Response) {
  try {
    const conversationId = Number(req.params.conversationId);
    const messages = await messageService.getConversationMessages(conversationId);
    res.json({ success: true, messages });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
}
