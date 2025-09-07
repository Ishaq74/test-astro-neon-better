
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import { sendEmail } from "./smtp";
import { admin as adminPlugin } from "better-auth/plugins";
import { ac, admin, user, myCustomRole } from "./permissions";
import { isDatabaseAvailable, shouldGracefullyDegrade, isSMTPConfigured } from "./env-validation";

interface AuthUser {
  email: string;
  name?: string | null;
}

// Check if auth can be properly initialized
if (!isDatabaseAvailable()) {
  if (shouldGracefullyDegrade()) {
    console.warn('⚠️ Auth system running in degraded mode - database not available');
  } else {
    throw new Error('Database connection required for auth system');
  }
}

export const auth = betterAuth({
  database: prisma ? prismaAdapter(prisma, { provider: "postgresql" }) : undefined,
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url, token }, request) => {
      if (!isSMTPConfigured()) {
        console.warn('⚠️ SMTP not configured, skipping password reset email');
        return;
      }
      
      try {
        const subject = "Réinitialisation de votre mot de passe";
        const html = `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:24px;background:#f8f9fa;border-radius:8px;">
          <h2 style="color:#764ba2;">Réinitialisez votre mot de passe</h2>
          <p>Bonjour ${user.name || user.email},</p>
          <p>Cliquez sur le bouton ci-dessous pour choisir un nouveau mot de passe :</p>
          <p style="text-align:center;margin:32px 0;">
            <a href="${url}" style="background:#764ba2;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:bold;">Réinitialiser mon mot de passe</a>
          </p>
          <p>Ou copiez-collez ce lien :</p>
          <p style="word-break:break-all;font-size:13px;color:#333;">${url}</p>
          <hr style="margin:32px 0;">
          <p style="font-size:12px;color:#888;">Cet email est automatique. Ne répondez pas.</p>
        </div>`;
        const text = `Bonjour ${user.name || user.email},\n\nRéinitialisez votre mot de passe en cliquant sur ce lien : ${url}\n\nNe répondez pas.`;

        await sendEmail({ to: user.email, subject, html, text });
        console.log(`Reset password email sent to ${user.email}`);
      } catch (err) {
        console.error("Error sending reset password email:", err);
      }
    },
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url, token }, request) => {
      if (!isSMTPConfigured()) {
        console.warn('⚠️ SMTP not configured, skipping verification email');
        return;
      }
      
      try {
        const subject = "Vérification de votre adresse email";
        const html = `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:24px;background:#f8f9fa;border-radius:8px;">
          <h2 style="color:#764ba2;">Confirmez votre adresse email</h2>
          <p>Bonjour ${user.name || user.email},</p>
          <p>Merci de vous être inscrit. Cliquez sur le bouton pour activer votre compte :</p>
          <p style="text-align:center;margin:32px 0;">
            <a href="${url}" style="background:#764ba2;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:bold;">Vérifier mon email</a>
          </p>
          <p>Ou copiez-collez ce lien :</p>
          <p style="word-break:break-all;font-size:13px;color:#333;">${url}</p>
          <hr style="margin:32px 0;">
          <p style="font-size:12px;color:#888;">Cet email est automatique. Ne répondez pas.</p>
        </div>`;
        const text = `Bonjour ${user.name || user.email},\n\nConfirmez votre email en cliquant sur ce lien : ${url}\n\nNe répondez pas.`;

        await sendEmail({ to: user.email, subject, html, text });
        console.log(`Verification email sent to ${user.email}`);
      } catch (err) {
        console.error("Error sending verification email:", err);
      }
    },
  },
  plugins: [
    adminPlugin({
      ac,
      roles: { admin, user, myCustomRole },
      defaultRole: "user",
      adminRoles: ["admin", "superadmin"],
      adminUserIds: [],
      impersonationSessionDuration: 60 * 60 * 24,
      defaultBanReason: "Spamming",
      defaultBanExpiresIn: 60 * 60 * 24,
      bannedUserMessage: "Vous avez été banni de cette application. Contactez le support si besoin."
    })
  ]
});
