import prisma from "../utils/prisma";

export interface CreateConversationInput {
  name?: string;
  isGroup?: boolean;
  memberIds: number[];
}

export async function createConversation(data: CreateConversationInput) {
  return null;
}

export async function getUserConversations(userId: number) {
  return null;
}
