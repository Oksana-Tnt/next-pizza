import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
    return new PrismaClient();
};

declare global {
    var primaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prisma = globalThis.primaGlobal ?? prismaClientSingleton();


if (process.env.NODE_ENV !== "production") globalThis.primaGlobal = prisma;