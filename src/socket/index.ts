import { Server } from "socket.io";
import { messageSocket } from "./message.socket";

export function initSocket(server: any) {
  const io = new Server(server, { cors: { origin: "*" } });

  io.on("connection", (socket) => {
    messageSocket(io, socket);
  });

  return io;
}
