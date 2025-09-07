/**
 * Environment variable validation and fallback utilities
 * Provides graceful degradation for missing environment variables
 */

export interface EnvironmentStatus {
  isValid: boolean;
  missingVariables: string[];
  warnings: string[];
}

/**
 * Check if required environment variables are present
 */
export function validateEnvironment(): EnvironmentStatus {
  const required = ['DATABASE_URL'];
  const optional = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASSWORD'];
  
  const missing = required.filter(key => !process.env[key] && !import.meta.env[key]);
  const missingOptional = optional.filter(key => !process.env[key] && !import.meta.env[key]);
  
  return {
    isValid: missing.length === 0,
    missingVariables: missing,
    warnings: missingOptional.map(key => `Optional environment variable ${key} is missing`)
  };
}

/**
 * Check if database is available and connected
 */
export function isDatabaseAvailable(): boolean {
  try {
    const dbUrl = process.env.DATABASE_URL || import.meta.env.DATABASE_URL;
    return !!(dbUrl && dbUrl.trim().length > 0);
  } catch {
    return false;
  }
}

/**
 * Check if SMTP is configured
 */
export function isSMTPConfigured(): boolean {
  try {
    const host = process.env.SMTP_HOST || import.meta.env.SMTP_HOST;
    const user = process.env.SMTP_USER || import.meta.env.SMTP_USER;
    const pass = process.env.SMTP_PASSWORD || import.meta.env.SMTP_PASSWORD;
    
    return !!(host && user && pass);
  } catch {
    return false;
  }
}

/**
 * Get environment mode
 */
export function getEnvironmentMode(): 'production' | 'development' | 'preview' {
  if (process.env.NODE_ENV === 'production') return 'production';
  if (process.env.VERCEL_ENV === 'preview') return 'preview';
  return 'development';
}

/**
 * Should gracefully degrade (return empty data instead of errors)
 */
export function shouldGracefullyDegrade(): boolean {
  const mode = getEnvironmentMode();
  return mode === 'development' || mode === 'preview';
}

/**
 * Log environment status for debugging
 */
export function logEnvironmentStatus(): void {
  const status = validateEnvironment();
  const mode = getEnvironmentMode();
  const shouldDegrade = shouldGracefullyDegrade();
  
  console.log('🔧 Environment Status:', {
    mode,
    databaseAvailable: isDatabaseAvailable(),
    smtpConfigured: isSMTPConfigured(),
    shouldGracefullyDegrade: shouldDegrade,
    missingRequired: status.missingVariables,
    warnings: status.warnings
  });
  
  if (status.missingVariables.length > 0 && shouldDegrade) {
    console.warn('⚠️ Running in degraded mode due to missing environment variables:', status.missingVariables);
  }
}