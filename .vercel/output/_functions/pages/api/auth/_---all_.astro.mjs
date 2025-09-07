import { i as isDatabaseAvailable, s as shouldGracefullyDegrade, a as auth } from '../../../chunks/auth_CevptvXo.mjs';
export { renderers } from '../../../renderers.mjs';

const ALL = async (ctx) => {
  try {
    if (!isDatabaseAvailable()) {
      if (shouldGracefullyDegrade()) {
        return new Response(JSON.stringify({
          error: "Auth system not available",
          degraded: true
        }), {
          status: 503,
          headers: { "Content-Type": "application/json" }
        });
      }
      throw new Error("Database connection required for auth API");
    }
    return auth.handler(ctx.request);
  } catch (error) {
    console.error("Auth API error:", error);
    if (shouldGracefullyDegrade()) {
      return new Response(JSON.stringify({
        error: "Auth system temporarily unavailable",
        degraded: true
      }), {
        status: 503,
        headers: { "Content-Type": "application/json" }
      });
    }
    throw error;
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ALL
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
