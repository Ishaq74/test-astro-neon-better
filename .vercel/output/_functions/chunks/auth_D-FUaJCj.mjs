import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';
import { admin as admin$1 } from 'better-auth/plugins';
import { createAccessControl } from 'better-auth/plugins/access';
import { defaultStatements, adminAc } from 'better-auth/plugins/admin/access';

const prisma = new PrismaClient();

const smtpConfig = {
  host: process.env.SMTP_HOST || undefined                          || "localhost",
  port: parseInt(process.env.SMTP_PORT || undefined                          || "587"),
  secure: (process.env.SMTP_SECURE || undefined                           ) === "true",
  auth: {
    user: process.env.SMTP_USER || undefined                          || "",
    pass: process.env.SMTP_PASSWORD || undefined                              || ""
  },
  // Options spécifiques pour la compatibilité
  tls: {
    rejectUnauthorized: false
  }
};
function getDetailedErrorMessage(error) {
  const errorMessage = error?.message || error?.toString() || "Erreur inconnue";
  const errorCode = error?.code || error?.errno || "UNKNOWN";
  const errorMappings = {
    "ENOTFOUND": {
      message: "Serveur SMTP introuvable",
      details: "Vérifiez l'adresse du serveur SMTP dans la configuration. Le nom d'hôte est incorrect ou le serveur n'existe pas."
    },
    "ECONNREFUSED": {
      message: "Connexion refusée par le serveur SMTP",
      details: "Le serveur SMTP refuse la connexion. Vérifiez le port (587 pour TLS, 465 pour SSL, 25 pour non-sécurisé) et que le serveur accepte les connexions."
    },
    "ECONNRESET": {
      message: "Connexion fermée par le serveur SMTP",
      details: "La connexion a été fermée de manière inattendue. Cela peut être dû à une configuration TLS/SSL incorrecte ou à une limitation du serveur."
    },
    "ETIMEDOUT": {
      message: "Délai d'attente dépassé",
      details: "La connexion au serveur SMTP a expiré. Vérifiez votre connexion internet et les paramètres de pare-feu."
    },
    "EAUTH": {
      message: "Échec de l'authentification SMTP",
      details: "Les identifiants de connexion sont incorrects. Vérifiez le nom d'utilisateur et le mot de passe. Pour Gmail, utilisez un mot de passe d'application."
    },
    "ESOCKET": {
      message: "Erreur de socket réseau",
      details: "Problème de connexion réseau. Vérifiez votre connexion internet et les paramètres de proxy/pare-feu."
    },
    "EENVELOPE": {
      message: "Erreur d'enveloppe email",
      details: "L'adresse email expéditrice ou destinataire est invalide ou refusée par le serveur SMTP."
    },
    "EMESSAGE": {
      message: "Erreur de contenu du message",
      details: "Le contenu du message est invalide ou contient des éléments refusés par le serveur SMTP."
    },
    "EDNS": {
      message: "Erreur de résolution DNS",
      details: "Impossible de résoudre le nom du serveur SMTP. Vérifiez vos paramètres DNS et votre connexion internet."
    }
  };
  const messagePatterns = {
    "Invalid login": {
      message: "Identifiants de connexion invalides",
      details: "Le nom d'utilisateur ou le mot de passe est incorrect. Pour Gmail, activez l'authentification à deux facteurs et utilisez un mot de passe d'application."
    },
    "Username and Password not accepted": {
      message: "Nom d'utilisateur et mot de passe refusés",
      details: "Les identifiants ne sont pas acceptés par le serveur. Vérifiez que le compte est autorisé à envoyer des emails via SMTP."
    },
    "Must issue a STARTTLS command first": {
      message: "TLS requis par le serveur",
      details: "Le serveur exige une connexion sécurisée TLS. Vérifiez que le port et les paramètres de sécurité sont corrects."
    },
    "self signed certificate": {
      message: "Certificat SSL auto-signé",
      details: "Le serveur utilise un certificat SSL auto-signé. Cela peut nécessiter une configuration spéciale pour accepter ce type de certificat."
    },
    "certificate has expired": {
      message: "Certificat SSL expiré",
      details: "Le certificat SSL du serveur a expiré. Contactez l'administrateur du serveur SMTP."
    },
    "Network is unreachable": {
      message: "Réseau inaccessible",
      details: "Impossible d'atteindre le serveur SMTP. Vérifiez votre connexion internet et les paramètres de pare-feu."
    },
    "Relay access denied": {
      message: "Accès de relais refusé",
      details: "Le serveur refuse de transmettre l'email. Vérifiez que votre adresse IP est autorisée ou que vous êtes authentifié."
    },
    "Recipient address rejected": {
      message: "Adresse destinataire refusée",
      details: "L'adresse email du destinataire est refusée par le serveur. Vérifiez que l'adresse est valide et autorisée."
    }
  };
  if (errorMappings[errorCode]) {
    return {
      message: errorMappings[errorCode].message,
      detailedMessage: errorMappings[errorCode].details,
      errorCode
    };
  }
  for (const [pattern, info] of Object.entries(messagePatterns)) {
    if (errorMessage.toLowerCase().includes(pattern.toLowerCase())) {
      return {
        message: info.message,
        detailedMessage: info.details,
        errorCode: errorCode || "MESSAGE_PATTERN"
      };
    }
  }
  return {
    message: "Erreur SMTP",
    detailedMessage: `Erreur technique: ${errorMessage}. Vérifiez la configuration SMTP et consultez les logs pour plus de détails.`,
    errorCode: errorCode || "UNKNOWN"
  };
}
function validateSmtpConfig() {
  const errors = [];
  if (!smtpConfig.host || smtpConfig.host.trim() === "") {
    errors.push("Le serveur SMTP (SMTP_HOST) n'est pas configuré");
  }
  if (!smtpConfig.port || smtpConfig.port < 1 || smtpConfig.port > 65535) {
    errors.push("Le port SMTP (SMTP_PORT) doit être un nombre entre 1 et 65535");
  }
  if (!smtpConfig.auth.user || smtpConfig.auth.user.trim() === "") {
    errors.push("Le nom d'utilisateur SMTP (SMTP_USER) n'est pas configuré");
  }
  if (!smtpConfig.auth.pass || smtpConfig.auth.pass.trim() === "") {
    errors.push("Le mot de passe SMTP (SMTP_PASSWORD) n'est pas configuré");
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (smtpConfig.auth.user && !emailRegex.test(smtpConfig.auth.user)) {
    errors.push("L'adresse email SMTP (SMTP_USER) n'est pas au format valide");
  }
  return {
    isValid: errors.length === 0,
    errors
  };
}
async function createSmtpTransporter() {
  const transporter = nodemailer.createTransport(smtpConfig);
  return transporter;
}
function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email.trim());
}
function validateEmailOptions(options) {
  const errors = [];
  if (!options.to || options.to.trim() === "") {
    errors.push("L'adresse email du destinataire est requise");
  } else if (!isValidEmail(options.to)) {
    errors.push("L'adresse email du destinataire n'est pas au format valide");
  }
  if (!options.subject || options.subject.trim() === "") {
    errors.push("Le sujet de l'email est requis");
  } else if (options.subject.length > 200) {
    errors.push("Le sujet de l'email ne peut pas dépasser 200 caractères");
  }
  if (!options.text && !options.html) {
    errors.push("Le contenu de l'email (texte ou HTML) est requis");
  }
  if (options.text && options.text.length > 5e4) {
    errors.push("Le contenu texte de l'email ne peut pas dépasser 50 000 caractères");
  }
  if (options.html && options.html.length > 1e5) {
    errors.push("Le contenu HTML de l'email ne peut pas dépasser 100 000 caractères");
  }
  if (options.from && !isValidEmail(options.from)) {
    errors.push("L'adresse email de l'expéditeur n'est pas au format valide");
  }
  return {
    isValid: errors.length === 0,
    errors
  };
}
async function sendEmail(options) {
  const timestamp = /* @__PURE__ */ new Date();
  try {
    const validation = validateEmailOptions(options);
    if (!validation.isValid) {
      return {
        success: false,
        message: "Données d'email invalides",
        detailedMessage: `Erreurs de validation:
${validation.errors.join("\n")}`,
        errorCode: "VALIDATION_ERROR",
        timestamp
      };
    }
    const configValidation = validateSmtpConfig();
    if (!configValidation.isValid) {
      return {
        success: false,
        message: "Configuration SMTP invalide",
        detailedMessage: `Erreurs de configuration:
${configValidation.errors.join("\n")}`,
        errorCode: "CONFIG_INVALID",
        timestamp
      };
    }
    const transporter = await createSmtpTransporter();
    const mailOptions = {
      from: options.from || undefined                          || smtpConfig.auth.user,
      to: options.to.trim(),
      subject: options.subject.trim(),
      text: options.text?.trim(),
      html: options.html?.trim()
    };
    const sendResult = await Promise.race([
      transporter.sendMail(mailOptions),
      new Promise(
        (_, reject) => setTimeout(() => reject(new Error("Timeout: L'envoi de l'email a pris trop de temps")), 3e4)
      )
    ]);
    return {
      success: true,
      message: `Email envoyé avec succès`,
      detailedMessage: `Email envoyé à ${options.to}. ID du message: ${sendResult.messageId || "Non disponible"}. Le destinataire devrait recevoir l'email sous peu.`,
      errorCode: "SUCCESS",
      timestamp
    };
  } catch (error) {
    const errorInfo = getDetailedErrorMessage(error);
    return {
      success: false,
      message: `Échec de l'envoi: ${errorInfo.message}`,
      detailedMessage: errorInfo.detailedMessage,
      errorCode: errorInfo.errorCode,
      error,
      timestamp
    };
  }
}

const statement = {
  ...defaultStatements,
  project: ["create", "share", "update", "delete"]
};
const ac = createAccessControl(statement);
const user = ac.newRole({
  project: ["create"]
});
const admin = ac.newRole({
  project: ["create", "update"],
  ...adminAc.statements
});
const myCustomRole = ac.newRole({
  project: ["create", "update", "delete"],
  user: ["ban"]
});

const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user: user2, url, token }, request) => {
      try {
        const subject = "Réinitialisation de votre mot de passe";
        const html = `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:24px;background:#f8f9fa;border-radius:8px;">
          <h2 style="color:#764ba2;">Réinitialisez votre mot de passe</h2>
          <p>Bonjour ${user2.name || user2.email},</p>
          <p>Cliquez sur le bouton ci-dessous pour choisir un nouveau mot de passe :</p>
          <p style="text-align:center;margin:32px 0;">
            <a href="${url}" style="background:#764ba2;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:bold;">Réinitialiser mon mot de passe</a>
          </p>
          <p>Ou copiez-collez ce lien :</p>
          <p style="word-break:break-all;font-size:13px;color:#333;">${url}</p>
          <hr style="margin:32px 0;">
          <p style="font-size:12px;color:#888;">Cet email est automatique. Ne répondez pas.</p>
        </div>`;
        const text = `Bonjour ${user2.name || user2.email},

Réinitialisez votre mot de passe en cliquant sur ce lien : ${url}

Ne répondez pas.`;
        await sendEmail({ to: user2.email, subject, html, text });
        console.log(`Reset password email sent to ${user2.email}`);
      } catch (err) {
        console.error("Error sending reset password email:", err);
      }
    }
  },
  emailVerification: {
    sendVerificationEmail: async ({ user: user2, url, token }, request) => {
      try {
        const subject = "Vérification de votre adresse email";
        const html = `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:24px;background:#f8f9fa;border-radius:8px;">
          <h2 style="color:#764ba2;">Confirmez votre adresse email</h2>
          <p>Bonjour ${user2.name || user2.email},</p>
          <p>Merci de vous être inscrit. Cliquez sur le bouton pour activer votre compte :</p>
          <p style="text-align:center;margin:32px 0;">
            <a href="${url}" style="background:#764ba2;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:bold;">Vérifier mon email</a>
          </p>
          <p>Ou copiez-collez ce lien :</p>
          <p style="word-break:break-all;font-size:13px;color:#333;">${url}</p>
          <hr style="margin:32px 0;">
          <p style="font-size:12px;color:#888;">Cet email est automatique. Ne répondez pas.</p>
        </div>`;
        const text = `Bonjour ${user2.name || user2.email},

Confirmez votre email en cliquant sur ce lien : ${url}

Ne répondez pas.`;
        await sendEmail({ to: user2.email, subject, html, text });
        console.log(`Verification email sent to ${user2.email}`);
      } catch (err) {
        console.error("Error sending verification email:", err);
      }
    }
  },
  plugins: [
    admin$1({
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

export { auth as a };
