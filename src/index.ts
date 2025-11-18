import http from "http";
import { Server } from "socket.io";
import app from "./app";
import { messageSocket } from "./socket/message.socket";

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  messageSocket(io, socket);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
