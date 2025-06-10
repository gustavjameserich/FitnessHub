import { PrismaClient } from "@prisma/client";

declare global {
  // avoid instantiating more than one client in development
  var prisma: PrismaClient | undefined;
}

const prisma =
  global.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma;
