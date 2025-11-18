"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSocket = initSocket;
const socket_io_1 = require("socket.io");
const message_socket_1 = require("./message.socket");
function initSocket(server) {
    const io = new socket_io_1.Server(server, { cors: { origin: "*" } });
    io.on("connection", (socket) => {
        (0, message_socket_1.messageSocket)(io, socket);
    });
    return io;
}
//# sourceMappingURL=index.js.map