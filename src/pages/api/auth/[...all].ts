import { auth } from "../../../lib/auth";
import type { APIRoute } from "astro";
import { isDatabaseAvailable, shouldGracefullyDegrade } from "../../../lib/env-validation";

export const ALL: APIRoute = async (ctx) => {
  try {
    // Check if database is available
    if (!isDatabaseAvailable()) {
      if (shouldGracefullyDegrade()) {
        // Return a simple response indicating auth is not available
        return new Response(JSON.stringify({ 
          error: 'Auth system not available', 
          degraded: true 
        }), {
          status: 503,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      throw new Error('Database connection required for auth API');
    }
    
    return auth.handler(ctx.request);
  } catch (error) {
    console.error('Auth API error:', error);
    
    if (shouldGracefullyDegrade()) {
      return new Response(JSON.stringify({ 
        error: 'Auth system temporarily unavailable', 
        degraded: true 
      }), {
        status: 503,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    throw error;
  }
};