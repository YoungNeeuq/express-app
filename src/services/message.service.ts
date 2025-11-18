import prisma from "../utils/prisma";

export interface SendMessageInput {
  conversationId: number;
  senderId: number;
  content: string;
}

export async function sendMessage(data: SendMessageInput) {
  return null;
}

export async function getConversationMessages(conversationId: number) {
  return null;
}
