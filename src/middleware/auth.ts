import type { MiddlewareHandler } from 'astro';
import { auth } from '../lib/auth';
import { shouldGracefullyDegrade, isDatabaseAvailable } from '../lib/env-validation';

export const onRequest: MiddlewareHandler = async (context, next) => {
  const { request, url } = context;
  
  // For admin routes only
  if (url.pathname.startsWith('/admin')) {
    try {
      // Skip auth check if database is not available and we should gracefully degrade
      if (!isDatabaseAvailable() && shouldGracefullyDegrade()) {
        console.warn('⚠️ Admin route accessed without database - skipping auth check in degraded mode');
        return next();
      }
      
      const session = await auth.api.getSession({
        headers: request.headers
      });
      
      if (!session || !session.user) {
        return Response.redirect('/login');
      }
      
      // Check if user has admin role
      if ((session.user as any).role !== 'admin') {
        return Response.redirect('/login');
      }
      
      // @ts-ignore
      context.locals.user = session.user;
      // @ts-ignore  
      context.locals.session = session;
    } catch (error) {
      console.error('Auth middleware error:', error);
      
      // In degraded mode, skip auth instead of redirecting
      if (shouldGracefullyDegrade()) {
        console.warn('⚠️ Auth error in degraded mode - continuing without auth');
        return next();
      }
      
      return Response.redirect('/login');
    }
  }
  
  return next();
};
