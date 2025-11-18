import { Server, Socket } from "socket.io";
import * as messageService from "../services/message.service";

export function messageSocket(io: Server, socket: Socket) {
  console.log("New socket connected:", socket.id);

  socket.on("joinConversation", (conversationId: number) => {
    socket.join(`conversation_${conversationId}`);
    console.log(`Socket ${socket.id} joined conversation ${conversationId}`);
  });

  socket.on("sendMessage", async (data: { conversationId: number; senderId: number; content: string }) => {
    const message = await messageService.sendMessage(data);
    io.to(`conversation_${data.conversationId}`).emit("receiveMessage", message);
  });

  socket.on("disconnect", () => {
    console.log("Socket disconnected:", socket.id);
  });
}
