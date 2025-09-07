// src/lib/server-auth.ts
import { auth } from "@lib/auth";

export async function getServerSession(request: Request) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  return session;
}
