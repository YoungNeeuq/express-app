import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import {JWT_SECRET} from "../../../config/app";

dotenv.config()

export function configJWT(id: any) {
  return jwt.sign({userId: id}, JWT_SECRET, {expiresIn: '7d'})
}
