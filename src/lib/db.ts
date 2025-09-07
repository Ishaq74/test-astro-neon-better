import { PrismaClient } from '@prisma/client';
import { isDatabaseAvailable, shouldGracefullyDegrade, logEnvironmentStatus } from './env-validation';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Log environment status on module load
logEnvironmentStatus();

let db: PrismaClient | null = null;

try {
  if (isDatabaseAvailable()) {
    db = globalForPrisma.prisma ?? new PrismaClient({
      datasources: { db: { url: process.env.DATABASE_URL } }
    });

    if (process.env.NODE_ENV !== 'production') {
      globalForPrisma.prisma = db;
    }
  } else {
    console.warn('🚫 Database not available - running in degraded mode');
    if (!shouldGracefullyDegrade()) {
      throw new Error('DATABASE_URL is required in production mode');
    }
  }
} catch (error) {
  console.error('❌ Database initialization error:', error);
  
  if (shouldGracefullyDegrade()) {
    console.warn('⚠️ Continuing without database connection');
    db = null;
  } else {
    throw error;
  }
}

export { db };

export function slugify(str: string): string {
  // Remove accents/diacritics (compatible ES5)
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default db;