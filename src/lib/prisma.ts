import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

declare global {
    var prisma: PrismaClient | undefined;
}

const connectionString = 'postgresql://neondb_owner:npg_JLM7eyY8aPOb@ep-dawn-queen-a1mc0s37-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

console.log('Prisma Client Connection String:', connectionString ? connectionString.replace(/:[^:@]*@/, ':****@') : 'UNDEFINED');

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

export const prisma = global.prisma || new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;
