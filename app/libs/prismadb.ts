import { PrismaClient } from "@prisma/client";

// global declaration and types for prisma
declare global {
  var prisma: PrismaClient | undefined;
}

// check if the prisma client is already defined, because of hot reloading by nextjs 13 - recomennded
const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;
