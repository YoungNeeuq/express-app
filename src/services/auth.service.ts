import prisma from "../utils/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { RegisterInput, LoginInput } from "../types/auth";

export async function register(data: RegisterInput) {
  const existing = await prisma.user.findUnique({
    where: { email: data.email }
  });

  if (existing) {
    throw new Error("User already exists");
  }

  const hash = await bcrypt.hash(data.password, 10);

  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hash
    }
  });

  return user;
}

export async function login(data: LoginInput) {
  const user = await prisma.user.findUnique({
    where: { email: data.email }
  });

  if (!user) {
    throw new Error("User not found");
  }

  const ok = await bcrypt.compare(data.password, user.password);
  if (!ok) {
    throw new Error("Invalid credentials");
  }

  const accessToken = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET!,
    { expiresIn: "7d" }
  );

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    accessToken
  };
}
