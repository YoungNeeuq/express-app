import { Request, Response } from "express";
import * as authService from "../services/auth.service";
import { registerSchema, loginSchema } from "../validators/auth.schema";
import { RegisterInput, LoginInput } from "../types/auth";

export async function register(req: Request, res: Response): Promise<Response> {
  try {
    const body: RegisterInput = registerSchema.parse(req.body);

    const user = await authService.register(body);
    return res.status(201).json({ user });
  } catch (err: any) {
    return res.status(400).json({ message: err.message });
  }
}

export async function login(req: Request, res: Response): Promise<Response> {
  try {
    const body: LoginInput = loginSchema.parse(req.body);

    const result = await authService.login(body);
    return res.status(200).json(result);
  } catch (err: any) {
    return res.status(401).json({ message: err.message });
  }
}
