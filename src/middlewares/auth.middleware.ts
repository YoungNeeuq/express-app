import { Request, Response, NextFunction } from 'express';
import {UnauthorizedException} from "../common/exceptions/exceptions";
import {convertJWT} from "../common/logic/authentication/convertjwt";
import {COOKIE_NAME} from "../config/app";

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies?.[COOKIE_NAME];
  if (!token) {
    throw new UnauthorizedException('Not authenticated.')
  }

  try {
    const payload = convertJWT(token);
    (req as any).userId = payload.userId;
    next();
  } catch (err) {
    throw new UnauthorizedException('Invalid token')
  }
};
