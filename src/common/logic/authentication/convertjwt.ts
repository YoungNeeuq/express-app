import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import {JWT_SECRET} from "../../../config/app";

dotenv.config()

export function convertJWT(sessionToken: any) {
  const decodedToken: any = jwt.verify(sessionToken, JWT_SECRET)
  return decodedToken.userId
}
