import { PrismaClient } from "@prisma/client";
import { isDatabaseAvailable, shouldGracefullyDegrade } from './env-validation';

let prisma: PrismaClient | null = null;

try {
  if (isDatabaseAvailable()) {
    prisma = new PrismaClient();
  } else {
    console.warn('🚫 Prisma client not initialized - database not available');
    if (!shouldGracefullyDegrade()) {
      throw new Error('DATABASE_URL is required for Prisma client');
    }
  }
} catch (error) {
  console.error('❌ Prisma client initialization error:', error);
  
  if (shouldGracefullyDegrade()) {
    console.warn('⚠️ Continuing without Prisma client');
    prisma = null;
  } else {
    throw error;
  }
}

export { prisma };
