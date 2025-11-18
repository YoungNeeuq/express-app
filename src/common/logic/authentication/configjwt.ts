import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import {JWT_ACCESS_SECRET, JWT_REFRESH_SECRET} from "../../../config/app";

dotenv.config()

export const generateTokens = (userId: number) => {
  const accessToken = jwt.sign({ userId }, JWT_ACCESS_SECRET, { expiresIn: '15m' });
  const refreshToken = jwt.sign({ userId }, JWT_REFRESH_SECRET, { expiresIn: '7d' });
  return { accessToken, refreshToken };
};

export const verifyAccessToken = (token: string) => {
  return jwt.verify(token, JWT_ACCESS_SECRET);
};

export const verifyRefreshToken = (token: string) => {
  return jwt.verify(token, JWT_REFRESH_SECRET);
};
