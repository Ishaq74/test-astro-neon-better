import { createAuthClient } from "better-auth/client";
import { adminClient } from "better-auth/client/plugins";
import { ac, admin, user, myCustomRole } from "./permissions";

export const authClient = createAuthClient({
	plugins: [
		adminClient({
			ac,
			roles: { admin, user, myCustomRole }
		})
	]
});
export const { useSession, signIn, signUp, signOut, resetPassword, requestPasswordReset, updateUser } = authClient;