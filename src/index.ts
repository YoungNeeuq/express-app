import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import { prisma } from './prisma';
import ErrorHandlerMiddleware from './middlewares/error.middleware'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: true,
  credentials: true
}));

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => res.send('Hello World!'));

app.use(ErrorHandlerMiddleware)

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});
