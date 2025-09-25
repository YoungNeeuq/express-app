import { Request, Response } from 'express';
import { prisma } from '../prisma';
import bcrypt from 'bcryptjs';
import {configJWT} from "../common/logic/authentication/configjwt";
import httpStatus from "http-status";
import {BadRequestException, NotFoundException, UnauthorizedException} from "../common/exceptions/exceptions";
import {COOKIE_NAME} from "../config/app";

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestException('Missing fields.')
  }
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    throw new UnauthorizedException('Your email is existed. Please try another email.')
  }

  const hashed = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { name, email, password: hashed }
  });

  const { password: _, ...userSafe } = user;
  res.status(httpStatus.CREATED).json(userSafe);
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestException('Missing fields.')
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new UnauthorizedException('Your email is not existed.')
  }

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    throw new UnauthorizedException('Password is incorrect. Please try again.')
  }

  const token = configJWT(user.id);

  res.cookie(COOKIE_NAME, token, {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax'
  });

  const { password: _, ...userSafe } = user;
  res.json(userSafe);
};

export const logout = async (req: Request, res: Response) => {
  res.clearCookie(COOKIE_NAME, { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production' });
  res.json({ message: 'Logged out' });
};

export const me = async (req: Request, res: Response) => {
  const userId = (req as any).userId;
  const user = await prisma.user.findUnique({ where: { id: Number(userId) } });
  if (!user) {
    throw new NotFoundException('Not found.')
  }
  const { password: _, ...userSafe } = user;
  res.json(userSafe);
};
