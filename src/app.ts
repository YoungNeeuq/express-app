import express from "express";
import authRouter from "./routes/auth.route";
import messageRouter from "./routes/message.route";
import conversationRouter from "./routes/conversation.route";

const app = express();
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);
app.use("/api/conversations", conversationRouter);

export default app;
