import { A as AstroError, o as LiveContentConfigError, p as AstroUserError, e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, n as renderSlot, r as renderTemplate, k as renderComponent, q as renderScript } from './astro/server_ILB7gN1T.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'neotraverse/modern';
import * as z from 'zod';
import { z as z$1 } from 'zod';
import 'clsx';
import { PrismaClient } from '@prisma/client';
import { $ as $$Section } from './Section_D3wqhrx4.mjs';
import { $ as $$Card, c as $$Icon, a as $$Button } from './Card_Bf7KbEzA.mjs';
/* empty css                          */

const CONTENT_LAYER_TYPE = "content_layer";

function getImporterFilename() {
  const stackLine = new Error().stack?.split("\n").find(
    (line) => !line.includes("defineCollection") && !line.includes("defineLiveCollection") && !line.includes("getImporterFilename") && !line.startsWith("Error")
  );
  if (!stackLine) {
    return void 0;
  }
  const match = /\/((?:src|chunks)\/.*?):\d+:\d+/.exec(stackLine);
  return match?.[1] ?? void 0;
}
function defineCollection$1(config) {
  const importerFilename = getImporterFilename();
  if (importerFilename?.includes("live.config")) {
    throw new AstroError({
      ...LiveContentConfigError,
      message: LiveContentConfigError.message(
        "Collections in a live config file must use `defineLiveCollection`.",
        importerFilename
      )
    });
  }
  if ("loader" in config) {
    if (config.type && config.type !== CONTENT_LAYER_TYPE) {
      throw new AstroUserError(
        `Collections that use the Content Layer API must have a \`loader\` defined and no \`type\` set. Check your collection definitions in ${importerFilename ?? "your content config file"}.`
      );
    }
    if (typeof config.loader === "object" && typeof config.loader.load !== "function" && ("loadEntry" in config.loader || "loadCollection" in config.loader)) {
      throw new AstroUserError(
        `Live content collections must be defined in "src/live.config.ts" file. Check your collection definitions in "${importerFilename ?? "your content config file"}" to ensure you are not using a live loader.`
      );
    }
    config.type = CONTENT_LAYER_TYPE;
  }
  if (!config.type) config.type = "content";
  return config;
}

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
z$1.object({
  tags: z$1.array(z$1.string()).optional(),
  maxAge: z$1.number().optional(),
  lastModified: z$1.date().optional()
});
function defineCollection(config) {
  if (config.type === "live") {
    throw new AstroError({
      ...LiveContentConfigError,
      message: LiveContentConfigError.message(
        "Collections with type `live` must be defined in a `src/live.config.ts` file."
      )
    });
  }
  return defineCollection$1(config);
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = "";
createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

new Set(Object.keys(lookupMap));

const renderEntryGlob = "";
createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

({
  utilisateurs: defineCollection({
    type: "data",
    schema: z.object({
      id: z.number(),
      nom: z.string(),
      email: z.string(),
      role: z.string(),
      password: z.string()
    })
  }),
  reservations: defineCollection({
    type: "data",
    schema: z.object({
      id: z.number(),
      userId: z.number(),
      serviceId: z.number(),
      date: z.string(),
      time: z.string(),
      status: z.string(),
      notes: z.string().optional()
    })
  }),
  factures: defineCollection({
    type: "data",
    schema: z.object({
      id: z.number(),
      reservationId: z.number(),
      userId: z.number(),
      amount: z.number(),
      status: z.string(),
      pdfUrl: z.string().optional(),
      createdAt: z.string(),
      updatedAt: z.string()
    })
  }),
  blockedSlots: defineCollection({
    type: "data",
    schema: z.object({
      id: z.number(),
      title: z.string(),
      start: z.string(),
      end: z.string().optional(),
      allDay: z.number().optional()
    })
  }),
  accounts: defineCollection({
    type: "data",
    schema: z.object({
      id: z.string(),
      userId: z.string(),
      type: z.string(),
      provider: z.string(),
      providerAccountId: z.string(),
      refreshToken: z.string().optional(),
      accessToken: z.string().optional(),
      expiresAt: z.number().optional(),
      tokenType: z.string().optional(),
      scope: z.string().optional(),
      idToken: z.string().optional(),
      sessionState: z.string().optional(),
      createdAt: z.string(),
      updatedAt: z.string()
    })
  }),
  sessions: defineCollection({
    type: "data",
    schema: z.object({
      id: z.string(),
      sessionToken: z.string(),
      userId: z.string(),
      expires: z.string(),
      createdAt: z.string(),
      updatedAt: z.string()
    })
  }),
  verificationTokens: defineCollection({
    type: "data",
    schema: z.object({
      identifier: z.string(),
      token: z.string(),
      expires: z.string()
    })
  }),
  services: defineCollection({
    type: "data",
    schema: z.object({
      id: z.number(),
      nom: z.string(),
      description: z.string().optional(),
      content: z.string().optional(),
      notes: z.string().optional(),
      prix: z.number(),
      image: z.string().optional(),
      imageAlt: z.string().optional(),
      icon: z.string().optional(),
      categorie: z.string().optional(),
      tags: z.string().optional(),
      steps: z.string().optional(),
      duree: z.string().optional(),
      durationMinutes: z.number().optional(),
      slug: z.string(),
      isActive: z.number().optional(),
      isFeatured: z.number().optional()
    })
  }),
  formations: defineCollection({
    type: "data",
    schema: z.object({
      id: z.number(),
      titre: z.string(),
      badge: z.string().optional(),
      subtitle: z.string().optional(),
      participants: z.number().optional(),
      level: z.string().optional(),
      program: z.string().optional(),
      advantages: z.string().optional(),
      description: z.string().optional(),
      content: z.string().optional(),
      notes: z.string().optional(),
      prix: z.number(),
      image: z.string().optional(),
      imageAlt: z.string().optional(),
      icon: z.string().optional(),
      categorie: z.string().optional(),
      tags: z.string().optional(),
      steps: z.string().optional(),
      duree: z.string().optional(),
      durationMinutes: z.number().optional(),
      slug: z.string(),
      isActive: z.number().optional(),
      isFeatured: z.number().optional(),
      certification: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional()
    })
  }),
  team: defineCollection({
    type: "data",
    schema: z.object({
      id: z.number(),
      nom: z.string(),
      role: z.string().optional(),
      bio: z.string().optional(),
      photo: z.string().optional(),
      email: z.string().optional(),
      telephone: z.string().optional(),
      linkedin: z.string().optional(),
      instagram: z.string().optional(),
      certifications: z.string().optional(),
      diplome: z.string().optional(),
      isActive: z.number().optional()
    })
  }),
  siteIdentity: defineCollection({
    type: "data",
    schema: z.object({
      id: z.number(),
      nom: z.string(),
      slogan: z.string().optional(),
      description: z.string().optional(),
      adresse: z.string().optional(),
      codePostal: z.string().optional(),
      ville: z.string().optional(),
      pays: z.string().optional(),
      telephone: z.string().optional(),
      email: z.string().optional(),
      siteUrl: z.string().optional(),
      logo: z.string().optional(),
      facebook: z.string().optional(),
      instagram: z.string().optional(),
      linkedin: z.string().optional(),
      tiktok: z.string().optional(),
      youtube: z.string().optional(),
      mentionsLegales: z.string().optional(),
      politiqueConfidentialite: z.string().optional(),
      diplomePrincipal: z.string().optional(),
      certifications: z.string().optional(),
      horaires: z.string().optional(),
      stats: z.string().optional()
    })
  }),
  faq: defineCollection({
    type: "data",
    schema: z.object({
      id: z.number(),
      question: z.string(),
      reponse: z.string(),
      global: z.number().optional(),
      servicesGlobal: z.number().optional(),
      formationsGlobal: z.number().optional(),
      serviceId: z.number().optional(),
      formationId: z.number().optional()
    })
  }),
  avis: defineCollection({
    type: "data",
    schema: z.object({
      id: z.number(),
      utilisateur: z.string(),
      commentaire: z.string().optional(),
      note: z.number(),
      global: z.number().optional(),
      servicesGlobal: z.number().optional(),
      formationsGlobal: z.number().optional(),
      serviceId: z.number().optional(),
      formationId: z.number().optional()
    })
  }),
  galerie: defineCollection({
    type: "data",
    schema: z.object({
      id: z.number(),
      title: z.string(),
      imageUrl: z.string(),
      alt: z.string().optional(),
      description: z.string().optional(),
      uploadedBy: z.string().optional(),
      createdAt: z.string(),
      global: z.number().optional(),
      servicesGlobal: z.number().optional(),
      formationsGlobal: z.number().optional(),
      serviceId: z.number().optional(),
      formationId: z.number().optional()
    })
  })
});
let prisma;
function getPrismaClient() {
  if (!prisma) {
    prisma = new PrismaClient();
  }
  return prisma;
}
function sanitizeArray(val) {
  if (!val) return [];
  if (Array.isArray(val)) return val.filter((v) => typeof v === "string");
  if (typeof val === "string") {
    try {
      const arr = JSON.parse(val);
      return Array.isArray(arr) ? arr.filter((v) => typeof v === "string") : [];
    } catch {
      return [];
    }
  }
  return [];
}
function normalizeImagePath(imagePath) {
  if (!imagePath) return "";
  let image = imagePath;
  image = image.replace(/^\/?assets\//, "");
  return "assets/" + image.replace(/^\//, "");
}
const contentLoader = {
  // --- CRUD Utilisateurs ---
  async createUtilisateur(data) {
    const db = getPrismaClient();
    return await db.user.create({
      data: {
        nom: data.nom,
        email: data.email,
        role: data.role,
        password: data.password
      }
    });
  },
  async updateUtilisateur(id, data) {
    const db = getPrismaClient();
    const updateData = {};
    const fields = ["nom", "email", "role", "password"];
    for (const key of fields) {
      if (key in data) {
        updateData[key] = data[key];
      }
    }
    return await db.user.update({
      where: { id },
      data: updateData
    });
  },
  async deleteUtilisateur(id) {
    const db = getPrismaClient();
    return await db.user.delete({ where: { id } });
  },
  // --- CRUD Reservations ---
  async createReservation(data) {
    const db = getPrismaClient();
    return await db.reservation.create({
      data: {
        userId: data.userId,
        serviceId: data.serviceId,
        date: data.date,
        time: data.time,
        status: data.status,
        notes: data.notes || null
      }
    });
  },
  async updateReservation(id, data) {
    const db = getPrismaClient();
    const updateData = {};
    const fields = ["userId", "serviceId", "date", "time", "status", "notes"];
    for (const key of fields) {
      if (key in data) {
        updateData[key] = data[key];
      }
    }
    return await db.reservation.update({
      where: { id },
      data: updateData
    });
  },
  async deleteReservation(id) {
    const db = getPrismaClient();
    return await db.reservation.delete({ where: { id } });
  },
  // --- CRUD Factures ---
  async createFacture(data) {
    const db = getPrismaClient();
    return await db.facture.create({
      data: {
        reservationId: data.reservationId,
        userId: data.userId,
        amount: data.amount,
        status: data.status,
        pdfUrl: data.pdfUrl || null,
        createdAt: data.createdAt || (/* @__PURE__ */ new Date()).toISOString(),
        updatedAt: data.updatedAt || (/* @__PURE__ */ new Date()).toISOString()
      }
    });
  },
  async updateFacture(id, data) {
    const db = getPrismaClient();
    const updateData = {};
    const fields = ["reservationId", "userId", "amount", "status", "pdfUrl", "updatedAt"];
    for (const key of fields) {
      if (key in data) {
        if (key === "updatedAt") {
          updateData[key] = data[key] || (/* @__PURE__ */ new Date()).toISOString();
        } else {
          updateData[key] = data[key];
        }
      }
    }
    return await db.facture.update({
      where: { id },
      data: updateData
    });
  },
  async deleteFacture(id) {
    const db = getPrismaClient();
    return await db.facture.delete({ where: { id } });
  },
  // --- CRUD BlockedSlots ---
  async createBlockedSlot(data) {
    const db = getPrismaClient();
    return await db.blockedSlot.create({
      data: {
        title: data.title,
        start: data.start,
        end: data.end || null,
        allDay: data.allDay || 0
      }
    });
  },
  async updateBlockedSlot(id, data) {
    const db = getPrismaClient();
    const updateData = {};
    const fields = ["title", "start", "end", "allDay"];
    for (const key of fields) {
      if (key in data) {
        updateData[key] = data[key];
      }
    }
    return await db.blockedSlot.update({
      where: { id },
      data: updateData
    });
  },
  async deleteBlockedSlot(id) {
    const db = getPrismaClient();
    return await db.blockedSlot.delete({ where: { id } });
  },
  // --- CRUD Accounts ---
  async createAccount(data) {
    const db = getPrismaClient();
    return await db.account.create({
      data: {
        id: data.id || crypto.randomUUID(),
        userId: data.userId,
        type: data.type,
        provider: data.provider,
        providerAccountId: data.providerAccountId,
        refreshToken: data.refreshToken || null,
        accessToken: data.accessToken || null,
        expiresAt: data.expiresAt || null,
        tokenType: data.tokenType || null,
        scope: data.scope || null,
        idToken: data.idToken || null,
        sessionState: data.sessionState || null,
        createdAt: data.createdAt || (/* @__PURE__ */ new Date()).toISOString(),
        updatedAt: data.updatedAt || (/* @__PURE__ */ new Date()).toISOString()
      }
    });
  },
  async updateAccount(id, data) {
    const db = getPrismaClient();
    const updateData = {};
    const fields = ["userId", "type", "provider", "providerAccountId", "refreshToken", "accessToken", "expiresAt", "tokenType", "scope", "idToken", "sessionState", "updatedAt"];
    for (const key of fields) {
      if (key in data) {
        if (key === "updatedAt") {
          updateData[key] = data[key] || (/* @__PURE__ */ new Date()).toISOString();
        } else {
          updateData[key] = data[key];
        }
      }
    }
    return await db.account.update({
      where: { id },
      data: updateData
    });
  },
  async deleteAccount(id) {
    const db = getPrismaClient();
    return await db.account.delete({ where: { id } });
  },
  // --- CRUD Sessions ---
  async createSession(data) {
    const db = getPrismaClient();
    return await db.session.create({
      data: {
        id: data.id || crypto.randomUUID(),
        sessionToken: data.sessionToken,
        userId: data.userId,
        expires: data.expires,
        createdAt: data.createdAt || (/* @__PURE__ */ new Date()).toISOString(),
        updatedAt: data.updatedAt || (/* @__PURE__ */ new Date()).toISOString()
      }
    });
  },
  async updateSession(id, data) {
    const db = getPrismaClient();
    const updateData = {};
    const fields = ["sessionToken", "userId", "expires", "updatedAt"];
    for (const key of fields) {
      if (key in data) {
        if (key === "updatedAt") {
          updateData[key] = data[key] || (/* @__PURE__ */ new Date()).toISOString();
        } else {
          updateData[key] = data[key];
        }
      }
    }
    return await db.session.update({
      where: { id },
      data: updateData
    });
  },
  async deleteSession(id) {
    const db = getPrismaClient();
    return await db.session.delete({ where: { id } });
  },
  // --- CRUD VerificationTokens ---
  async createVerificationToken(data) {
    const db = getPrismaClient();
    return await db.verificationToken.create({
      data: {
        identifier: data.identifier,
        token: data.token,
        expires: data.expires
      }
    });
  },
  async deleteVerificationToken(identifier, token) {
    const db = getPrismaClient();
    return await db.verificationToken.delete({
      where: {
        identifier_token: {
          identifier,
          token
        }
      }
    });
  },
  // --- CRUD Formations ---
  async createFormation(data) {
    const db = getPrismaClient();
    function sanitizeArray2(val) {
      if (!val) return [];
      if (Array.isArray(val)) return val.filter((v) => typeof v === "string");
      if (typeof val === "string") {
        try {
          const arr = JSON.parse(val);
          return Array.isArray(arr) ? arr.filter((v) => typeof v === "string") : [];
        } catch {
          return [];
        }
      }
      return [];
    }
    const { imageName, ...prismaData } = data;
    let image = prismaData.image || "";
    if (image) {
      image = image.replace(/^\/?assets\//, "");
      image = "assets/" + image.replace(/^\//, "");
    }
    const safeTags = sanitizeArray2(data.tags);
    const safeSteps = sanitizeArray2(data.steps);
    return await db.formation.create({
      data: {
        ...prismaData,
        image,
        tags: JSON.stringify(safeTags),
        steps: JSON.stringify(safeSteps),
        slug: data.slug || "",
        isActive: data.isActive ? 1 : 0,
        isFeatured: data.isFeatured ? 1 : 0
      }
    });
  },
  async updateFormation(id, data) {
    const db = getPrismaClient();
    const updateData = {};
    const fields = [
      "titre",
      "description",
      "content",
      "notes",
      "prix",
      "image",
      "imageAlt",
      "icon",
      "categorie",
      "tags",
      "steps",
      "duree",
      "durationMinutes",
      "slug",
      "isActive",
      "isFeatured",
      "certification",
      "createdAt",
      "updatedAt"
    ];
    for (const key of fields) {
      if (key in data) {
        if (key === "tags" || key === "steps") {
          updateData[key] = data[key] ? JSON.stringify(data[key]) : null;
        } else if (key === "isActive" || key === "isFeatured") {
          updateData[key] = data[key] ? 1 : 0;
        } else if (key === "image" && data[key]) {
          let image = data[key];
          image = image.replace(/^\/?assets\//, "");
          updateData[key] = "assets/" + image.replace(/^\//, "");
        } else {
          updateData[key] = data[key];
        }
      }
    }
    return await db.formation.update({
      where: { id },
      data: updateData
    });
  },
  async deleteFormation(id) {
    const db = getPrismaClient();
    return await db.formation.delete({ where: { id } });
  },
  // Chargement des formations
  /**
   * Load formations with optional pagination and filters.
   * @param options { page?: number, pageSize?: number, filters?: Record<string, any> }
   * @returns { data: Formation[], total: number }
   */
  async loadFormations(options = {}) {
    const db = getPrismaClient();
    try {
      const data = await db.formation.findMany({
        include: {
          galerie: true,
          avis: true,
          faq: true
        }
      });
      return data.map((f) => ({
        ...f,
        title: f.titre,
        subtitle: f.subtitle || "",
        badge: f.badge || "",
        participants: f.participants ?? null,
        level: f.level || "",
        program: Array.isArray(f.program) ? f.program : typeof f.program === "string" && f.program ? JSON.parse(f.program) : [],
        advantages: Array.isArray(f.advantages) ? f.advantages : typeof f.advantages === "string" && f.advantages ? JSON.parse(f.advantages) : [],
        tags: Array.isArray(f.tags) ? f.tags : typeof f.tags === "string" && f.tags ? JSON.parse(f.tags) : [],
        steps: Array.isArray(f.steps) ? f.steps : typeof f.steps === "string" && f.steps ? JSON.parse(f.steps) : [],
        price: f.prix,
        duration: f.duree || "",
        image: f.image || "",
        imageAlt: f.imageAlt || "",
        icon: f.icon || "",
        categorie: f.categorie || "",
        slug: f.slug,
        isActive: f.isActive,
        isFeatured: f.isFeatured,
        certification: f.certification || "",
        createdAt: f.createdAt || "",
        updatedAt: f.updatedAt || "",
        description: f.description || "",
        content: f.content || "",
        notes: f.notes || "",
        galerie: f.galerie || [],
        avis: f.avis || [],
        faq: f.faq || []
      }));
    } catch (error) {
      console.error("Error loading formations:", error);
      return [];
    }
  },
  // --- CRUD Services ---
  async createService(data) {
    const db = getPrismaClient();
    const { imageName, ...prismaData } = data;
    let image = prismaData.image || "";
    if (image) {
      image = normalizeImagePath(image);
    }
    const safeTags = sanitizeArray(data.tags);
    const safeSteps = sanitizeArray(data.steps);
    return await db.service.create({
      data: {
        ...prismaData,
        image,
        tags: JSON.stringify(safeTags),
        steps: JSON.stringify(safeSteps),
        slug: data.slug || "",
        isActive: data.isActive ? 1 : 0,
        isFeatured: data.isFeatured ? 1 : 0
      }
    });
  },
  async updateService(id, data) {
    const db = getPrismaClient();
    const updateData = {};
    const fields = [
      "nom",
      "description",
      "content",
      "notes",
      "prix",
      "image",
      "imageAlt",
      "icon",
      "categorie",
      "tags",
      "steps",
      "duree",
      "durationMinutes",
      "slug",
      "isActive",
      "isFeatured"
    ];
    for (const key of fields) {
      if (key in data) {
        if (key === "tags" || key === "steps") {
          updateData[key] = data[key] ? JSON.stringify(data[key]) : null;
        } else if (key === "isActive" || key === "isFeatured") {
          updateData[key] = data[key] ? 1 : 0;
        } else if (key === "image" && data[key]) {
          updateData[key] = normalizeImagePath(data[key]);
        } else {
          updateData[key] = data[key];
        }
      }
    }
    return await db.service.update({
      where: { id },
      data: updateData
    });
  },
  async deleteService(id) {
    const db = getPrismaClient();
    return await db.service.delete({ where: { id } });
  },
  // --- CRUD Team ---
  async createTeamMember(data) {
    const db = getPrismaClient();
    let photo = data.photo || "";
    if (photo) {
      photo = normalizeImagePath(photo);
    }
    return await db.team.create({
      data: {
        nom: data.nom,
        role: data.role || null,
        bio: data.bio || null,
        photo,
        email: data.email || null,
        telephone: data.telephone || null,
        linkedin: data.linkedin || null,
        instagram: data.instagram || null,
        certifications: data.certifications || null,
        diplome: data.diplome || null,
        isActive: data.isActive ? 1 : 0
      }
    });
  },
  async updateTeamMember(id, data) {
    const db = getPrismaClient();
    const updateData = {};
    const fields = [
      "nom",
      "role",
      "bio",
      "photo",
      "email",
      "telephone",
      "linkedin",
      "instagram",
      "certifications",
      "diplome",
      "isActive"
    ];
    for (const key of fields) {
      if (key in data) {
        if (key === "isActive") {
          updateData[key] = data[key] ? 1 : 0;
        } else if (key === "photo" && data[key]) {
          updateData[key] = normalizeImagePath(data[key]);
        } else {
          updateData[key] = data[key];
        }
      }
    }
    return await db.team.update({
      where: { id },
      data: updateData
    });
  },
  async deleteTeamMember(id) {
    const db = getPrismaClient();
    return await db.team.delete({ where: { id } });
  },
  // --- CRUD SiteIdentity ---
  async updateSiteIdentity(id, data) {
    const db = getPrismaClient();
    const updateData = {};
    const fields = [
      "nom",
      "slogan",
      "description",
      "adresse",
      "codePostal",
      "ville",
      "pays",
      "telephone",
      "email",
      "siteUrl",
      "logo",
      "facebook",
      "instagram",
      "linkedin",
      "tiktok",
      "youtube",
      "mentionsLegales",
      "politiqueConfidentialite",
      "diplomePrincipal",
      "certifications",
      "horaires",
      "stats"
    ];
    for (const key of fields) {
      if (key in data) {
        if (key === "logo" && data[key]) {
          updateData[key] = normalizeImagePath(data[key]);
        } else {
          updateData[key] = data[key];
        }
      }
    }
    return await db.siteIdentity.update({
      where: { id },
      data: updateData
    });
  },
  async createSiteIdentity(data) {
    const db = getPrismaClient();
    let logo = data.logo || "";
    if (logo) {
      logo = normalizeImagePath(logo);
    }
    return await db.siteIdentity.create({
      data: {
        nom: data.nom,
        slogan: data.slogan || null,
        description: data.description || null,
        adresse: data.adresse || null,
        codePostal: data.codePostal || null,
        ville: data.ville || null,
        pays: data.pays || null,
        telephone: data.telephone || null,
        email: data.email || null,
        siteUrl: data.siteUrl || null,
        logo,
        facebook: data.facebook || null,
        instagram: data.instagram || null,
        linkedin: data.linkedin || null,
        tiktok: data.tiktok || null,
        youtube: data.youtube || null,
        mentionsLegales: data.mentionsLegales || null,
        politiqueConfidentialite: data.politiqueConfidentialite || null,
        diplomePrincipal: data.diplomePrincipal || null,
        certifications: data.certifications || null,
        horaires: data.horaires || null,
        stats: data.stats || null
      }
    });
  },
  // --- CRUD FAQ ---
  async createFaq(data) {
    const db = getPrismaClient();
    return await db.faq.create({
      data: {
        question: data.question,
        reponse: data.reponse,
        global: data.global || 0,
        servicesGlobal: data.servicesGlobal || 0,
        formationsGlobal: data.formationsGlobal || 0,
        serviceId: data.serviceId || null,
        formationId: data.formationId || null
      }
    });
  },
  async updateFaq(id, data) {
    const db = getPrismaClient();
    const updateData = {};
    const fields = [
      "question",
      "reponse",
      "global",
      "servicesGlobal",
      "formationsGlobal",
      "serviceId",
      "formationId"
    ];
    for (const key of fields) {
      if (key in data) {
        if (["global", "servicesGlobal", "formationsGlobal"].includes(key)) {
          updateData[key] = data[key] ? 1 : 0;
        } else {
          updateData[key] = data[key];
        }
      }
    }
    return await db.faq.update({
      where: { id },
      data: updateData
    });
  },
  async deleteFaq(id) {
    const db = getPrismaClient();
    return await db.faq.delete({ where: { id } });
  },
  // --- CRUD Avis ---
  async createAvis(data) {
    const db = getPrismaClient();
    return await db.avis.create({
      data: {
        utilisateur: data.utilisateur,
        commentaire: data.commentaire || null,
        note: data.note,
        global: data.global || 0,
        servicesGlobal: data.servicesGlobal || 0,
        formationsGlobal: data.formationsGlobal || 0,
        serviceId: data.serviceId || null,
        formationId: data.formationId || null
      }
    });
  },
  async updateAvis(id, data) {
    const db = getPrismaClient();
    const updateData = {};
    const fields = [
      "utilisateur",
      "commentaire",
      "note",
      "global",
      "servicesGlobal",
      "formationsGlobal",
      "serviceId",
      "formationId"
    ];
    for (const key of fields) {
      if (key in data) {
        if (["global", "servicesGlobal", "formationsGlobal"].includes(key)) {
          updateData[key] = data[key] ? 1 : 0;
        } else {
          updateData[key] = data[key];
        }
      }
    }
    return await db.avis.update({
      where: { id },
      data: updateData
    });
  },
  async deleteAvis(id) {
    const db = getPrismaClient();
    return await db.avis.delete({ where: { id } });
  },
  // --- CRUD Galerie ---
  async createGalerie(data) {
    const db = getPrismaClient();
    let imageUrl = data.imageUrl || "";
    if (imageUrl) {
      imageUrl = normalizeImagePath(imageUrl);
    }
    return await db.galerie.create({
      data: {
        title: data.title,
        imageUrl,
        alt: data.alt || null,
        description: data.description || null,
        uploadedBy: data.uploadedBy || null,
        createdAt: data.createdAt || (/* @__PURE__ */ new Date()).toISOString(),
        global: data.global || 0,
        servicesGlobal: data.servicesGlobal || 0,
        formationsGlobal: data.formationsGlobal || 0,
        serviceId: data.serviceId || null,
        formationId: data.formationId || null
      }
    });
  },
  async updateGalerie(id, data) {
    const db = getPrismaClient();
    const updateData = {};
    const fields = [
      "title",
      "imageUrl",
      "alt",
      "description",
      "uploadedBy",
      "global",
      "servicesGlobal",
      "formationsGlobal",
      "serviceId",
      "formationId"
    ];
    for (const key of fields) {
      if (key in data) {
        if (["global", "servicesGlobal", "formationsGlobal"].includes(key)) {
          updateData[key] = data[key] ? 1 : 0;
        } else if (key === "imageUrl" && data[key]) {
          updateData[key] = normalizeImagePath(data[key]);
        } else {
          updateData[key] = data[key];
        }
      }
    }
    return await db.galerie.update({
      where: { id },
      data: updateData
    });
  },
  async deleteGalerie(id) {
    const db = getPrismaClient();
    return await db.galerie.delete({ where: { id } });
  },
  // --- MÉTHODES DE CHARGEMENT ---
  // Utilisateurs
  async loadUtilisateurs() {
    const db = getPrismaClient();
    try {
      return await db.user.findMany();
    } catch (error) {
      console.error("Error loading utilisateurs:", error);
      return [];
    }
  },
  // Reservations
  async loadReservations(options = {}) {
    const db = getPrismaClient();
    try {
      const where = {};
      if (options.userId) where.userId = options.userId;
      if (options.serviceId) where.serviceId = options.serviceId;
      return await db.reservation.findMany({
        where,
        include: {
          user: true,
          service: true,
          facture: true
        }
      });
    } catch (error) {
      console.error("Error loading reservations:", error);
      return [];
    }
  },
  // Factures
  async loadFactures(options = {}) {
    const db = getPrismaClient();
    try {
      const where = {};
      if (options.userId) where.userId = options.userId;
      if (options.reservationId) where.reservationId = options.reservationId;
      return await db.facture.findMany({
        where,
        include: {
          user: true,
          reservation: true
        }
      });
    } catch (error) {
      console.error("Error loading factures:", error);
      return [];
    }
  },
  // BlockedSlots
  async loadBlockedSlots(options = {}) {
    const db = getPrismaClient();
    try {
      const where = {};
      if (options.startDate) where.start = { gte: options.startDate };
      if (options.endDate) where.start = { ...where.start, lte: options.endDate };
      return await db.blockedSlot.findMany({ where });
    } catch (error) {
      console.error("Error loading blocked slots:", error);
      return [];
    }
  },
  // Accounts
  async loadAccounts(userId) {
    const db = getPrismaClient();
    try {
      const where = userId ? { userId } : {};
      return await db.account.findMany({ where });
    } catch (error) {
      console.error("Error loading accounts:", error);
      return [];
    }
  },
  // Sessions
  async loadSessions(userId) {
    const db = getPrismaClient();
    try {
      const where = userId ? { userId } : {};
      return await db.session.findMany({ where });
    } catch (error) {
      console.error("Error loading sessions:", error);
      return [];
    }
  },
  // VerificationTokens
  async loadVerificationTokens(identifier) {
    const db = getPrismaClient();
    try {
      const where = identifier ? { identifier } : {};
      return await db.verificationToken.findMany({ where });
    } catch (error) {
      console.error("Error loading verification tokens:", error);
      return [];
    }
  },
  // Services
  async loadServices(options = {}) {
    const db = getPrismaClient();
    try {
      const where = {};
      if (options.isActive !== void 0) where.isActive = options.isActive ? 1 : 0;
      if (options.isFeatured !== void 0) where.isFeatured = options.isFeatured ? 1 : 0;
      if (options.categorie) where.categorie = options.categorie;
      const data = await db.service.findMany({
        where,
        include: {
          galerie: true,
          avis: true,
          faq: true
        }
      });
      return data.map((s) => ({
        ...s,
        tags: Array.isArray(s.tags) ? s.tags : typeof s.tags === "string" ? s.tags ? JSON.parse(s.tags) : [] : [],
        steps: Array.isArray(s.steps) ? s.steps : typeof s.steps === "string" ? s.steps ? JSON.parse(s.steps) : [] : []
      }));
    } catch (error) {
      console.error("Error loading services:", error);
      return [];
    }
  },
  // Team
  async loadTeam(options = {}) {
    const db = getPrismaClient();
    try {
      const where = options.isActive !== void 0 ? { isActive: options.isActive ? 1 : 0 } : {};
      return await db.team.findMany({ where });
    } catch (error) {
      console.error("Error loading team:", error);
      return [];
    }
  },
  // Site Identity
  async loadSiteIdentity() {
    const db = getPrismaClient();
    try {
      const identities = await db.siteIdentity.findMany();
      return identities.map((identity) => ({
        ...identity,
        stats: identity.stats ? (() => {
          try {
            return JSON.parse(identity.stats);
          } catch {
            return [];
          }
        })() : [],
        certifications: identity.certifications && typeof identity.certifications === "string" ? identity.certifications.split(",").map((c) => c.trim()).filter(Boolean) : Array.isArray(identity.certifications) ? identity.certifications : []
      }));
    } catch (error) {
      console.error("Error loading site identity:", error);
      return [];
    }
  },
  // FAQ
  async loadFaq(options = {}) {
    const db = getPrismaClient();
    try {
      const where = {};
      if (options.global !== void 0) where.global = options.global ? 1 : 0;
      if (options.servicesGlobal !== void 0) where.servicesGlobal = options.servicesGlobal ? 1 : 0;
      if (options.formationsGlobal !== void 0) where.formationsGlobal = options.formationsGlobal ? 1 : 0;
      if (options.serviceId !== void 0) where.serviceId = options.serviceId;
      if (options.formationId !== void 0) where.formationId = options.formationId;
      return await db.faq.findMany({ where });
    } catch (error) {
      console.error("Error loading FAQ:", error);
      return [];
    }
  },
  // Avis/Testimonials
  async loadAvis(options = {}) {
    const db = getPrismaClient();
    try {
      const where = {};
      if (options.global !== void 0) where.global = options.global ? 1 : 0;
      if (options.servicesGlobal !== void 0) where.servicesGlobal = options.servicesGlobal ? 1 : 0;
      if (options.formationsGlobal !== void 0) where.formationsGlobal = options.formationsGlobal ? 1 : 0;
      if (options.serviceId !== void 0) where.serviceId = options.serviceId;
      if (options.formationId !== void 0) where.formationId = options.formationId;
      return await db.avis.findMany({ where });
    } catch (error) {
      console.error("Error loading avis:", error);
      return [];
    }
  },
  // Galerie/Media
  async loadGalerie(options = {}) {
    const db = getPrismaClient();
    try {
      const where = {};
      if (options.global !== void 0) where.global = options.global ? 1 : 0;
      if (options.servicesGlobal !== void 0) where.servicesGlobal = options.servicesGlobal ? 1 : 0;
      if (options.formationsGlobal !== void 0) where.formationsGlobal = options.formationsGlobal ? 1 : 0;
      if (options.serviceId !== void 0) where.serviceId = options.serviceId;
      if (options.formationId !== void 0) where.formationId = options.formationId;
      return await db.galerie.findMany({ where });
    } catch (error) {
      console.error("Error loading galerie:", error);
      return [];
    }
  },
  // Méthode générique pour charger toutes les données
  async loadAllContent() {
    return {
      services: await this.loadServices(),
      formations: (await this.loadFormations()).data,
      team: await this.loadTeam(),
      siteIdentity: await this.loadSiteIdentity(),
      faq: await this.loadFaq(),
      avis: await this.loadAvis(),
      galerie: await this.loadGalerie()
    };
  },
  // Méthode pour charger un service spécifique par slug
  async loadServiceBySlug(slug) {
    const db = getPrismaClient();
    try {
      const service = await db.service.findUnique({
        where: { slug },
        include: {
          galerie: true,
          avis: true,
          faq: true
        }
      });
      if (!service) return null;
      return {
        ...service,
        tags: Array.isArray(service.tags) ? service.tags : typeof service.tags === "string" ? service.tags ? JSON.parse(service.tags) : [] : [],
        steps: Array.isArray(service.steps) ? service.steps : typeof service.steps === "string" ? service.steps ? JSON.parse(service.steps) : [] : []
      };
    } catch (error) {
      console.error(`Error loading service with slug ${slug}:`, error);
      return null;
    }
  },
  // Méthode pour charger une formation spécifique par slug
  async loadFormationBySlug(slug) {
    const db = getPrismaClient();
    try {
      return await db.formation.findUnique({
        where: { slug },
        include: {
          galerie: true,
          avis: true,
          faq: true
        }
      });
    } catch (error) {
      console.error(`Error loading formation with slug ${slug}:`, error);
      return null;
    }
  },
  // Méthodes statistiques et analytiques
  async getServiceStats() {
    const db = getPrismaClient();
    try {
      const services = await db.service.findMany();
      const reservations = await db.reservation.groupBy({
        by: ["serviceId"],
        _count: { id: true }
      });
      const avisAvg = await db.avis.groupBy({
        by: ["serviceId"],
        _avg: { note: true },
        where: { serviceId: { not: null } }
      });
      return services.map((service) => {
        const serviceReservations = reservations.find((r) => r.serviceId === service.id);
        const serviceAvis = avisAvg.find((a) => a.serviceId === service.id);
        return {
          ...service,
          reservationsCount: serviceReservations?._count?.id || 0,
          averageRating: serviceAvis?._avg?.note || 0
        };
      });
    } catch (error) {
      console.error("Error getting service stats:", error);
      return [];
    }
  },
  async getFormationStats() {
    const db = getPrismaClient();
    try {
      const formations = await db.formation.findMany();
      const avisAvg = await db.avis.groupBy({
        by: ["formationId"],
        _avg: { note: true },
        where: { formationId: { not: null } }
      });
      return formations.map((formation) => {
        const formationAvis = avisAvg.find((a) => a.formationId === formation.id);
        return {
          ...formation,
          averageRating: formationAvis?._avg?.note || 0
        };
      });
    } catch (error) {
      console.error("Error getting formation stats:", error);
      return [];
    }
  },
  async getReservationAnalytics(period = "month") {
    const db = getPrismaClient();
    try {
      const now = /* @__PURE__ */ new Date();
      const startDate = /* @__PURE__ */ new Date();
      switch (period) {
        case "day":
          startDate.setDate(now.getDate() - 30);
          break;
        case "week":
          startDate.setDate(now.getDate() - 12 * 7);
          break;
        case "month":
          startDate.setMonth(now.getMonth() - 12);
          break;
        case "year":
          startDate.setFullYear(now.getFullYear() - 5);
          break;
      }
      const reservations = await db.reservation.findMany({
        where: {
          date: { gte: startDate.toISOString() }
        },
        include: {
          service: true
        }
      });
      const groupedData = {};
      reservations.forEach((reservation) => {
        let key = "";
        const date = new Date(reservation.date);
        switch (period) {
          case "day":
            key = date.toISOString().split("T")[0];
            break;
          case "week":
            const day = date.getDay();
            const diff = date.getDate() - day + (day === 0 ? -6 : 1);
            const monday = new Date(date.setDate(diff));
            key = monday.toISOString().split("T")[0];
            break;
          case "month":
            key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
            break;
          case "year":
            key = String(date.getFullYear());
            break;
        }
        if (!groupedData[key]) {
          groupedData[key] = { count: 0, revenue: 0 };
        }
        groupedData[key].count++;
        groupedData[key].revenue += reservation.service?.prix || 0;
      });
      return Object.entries(groupedData).map(([date, stats]) => ({
        date,
        count: stats.count,
        revenue: stats.revenue
      }));
    } catch (error) {
      console.error("Error getting reservation analytics:", error);
      return [];
    }
  }
};

const $$Astro$7 = createAstro();
const $$Badge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Badge;
  const { variant = "default", size = "md", class: className } = Astro2.props;
  const base = "badge inline-block rounded font-semibold transition-colors";
  const variants = {
    primary: "badge-primary",
    secondary: "badge-secondary",
    default: "badge-default"
  };
  const sizes = {
    sm: "badge-sm",
    md: "badge-md",
    lg: "badge-lg"
  };
  return renderTemplate`${maybeRenderHead()}<span${addAttribute([base, variants[variant], sizes[size], className], "class:list")} data-astro-cid-35zd7xm4> ${renderSlot($$result, $$slots["default"])} </span> `;
}, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/components/ui/Badge.astro", void 0);

const $$Astro$6 = createAstro();
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  function parseJsonArray(data) {
    if (!data) return [];
    if (typeof data === "string") {
      try {
        return JSON.parse(data);
      } catch {
        return [];
      }
    }
    return Array.isArray(data) ? data : [];
  }
  const tags = parseJsonArray(Astro2.props.entry.tags);
  const steps = parseJsonArray(Astro2.props.entry.steps);
  let averageRating = 0;
  let ratingCount = 0;
  if (Astro2.props.entry.avis && Array.isArray(Astro2.props.entry.avis) && Astro2.props.entry.avis.length > 0) {
    const sum = Astro2.props.entry.avis.reduce((acc, avis) => acc + (avis.note || 0), 0);
    averageRating = sum / Astro2.props.entry.avis.length;
    ratingCount = Astro2.props.entry.avis.length;
  }
  const formattedPrice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(Astro2.props.entry.prix);
  const galerieCount = Astro2.props.entry.galerie?.length || 0;
  const faqCount = Astro2.props.entry.faq?.length || 0;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "padding": "lg", "variant": "default", "class": "service-card", "data-astro-cid-a256tyoq": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="service-card-content" data-astro-cid-a256tyoq> <div class="service-card-image-block" data-astro-cid-a256tyoq> ${Astro2.props.entry.image && renderTemplate`<div class="service-card-image-wrapper" data-astro-cid-a256tyoq> <img${addAttribute(Astro2.props.entry.image, "src")}${addAttribute(Astro2.props.entry.imageAlt || Astro2.props.entry.nom, "alt")} class="service-card-img" data-astro-cid-a256tyoq> ${Astro2.props.entry.isFeatured === 1 && renderTemplate`<div class="service-card-featured-badge" data-astro-cid-a256tyoq> ${renderComponent($$result2, "Badge", $$Badge, { "variant": "primary", "size": "sm", "data-astro-cid-a256tyoq": true }, { "default": ($$result3) => renderTemplate`Populaire` })} </div>`} ${Astro2.props.entry.categorie && renderTemplate`<div class="service-card-category-badge" data-astro-cid-a256tyoq> ${renderComponent($$result2, "Badge", $$Badge, { "variant": "secondary", "size": "sm", "data-astro-cid-a256tyoq": true }, { "default": ($$result3) => renderTemplate`${Astro2.props.entry.categorie}` })} </div>`} </div>`} ${!Astro2.props.entry.image && Astro2.props.entry.icon && renderTemplate`<div class="service-card-icon-block" data-astro-cid-a256tyoq> ${renderComponent($$result2, "Icon", $$Icon, { "name": Astro2.props.entry.icon, "class": "service-card-icon", "data-astro-cid-a256tyoq": true })} </div>`} ${!Astro2.props.entry.image && !Astro2.props.entry.icon && renderTemplate`<div class="service-card-empty-block" data-astro-cid-a256tyoq></div>`} <div class="service-card-info" data-astro-cid-a256tyoq> <h3 class="service-card-title" data-astro-cid-a256tyoq>${Astro2.props.entry.nom}</h3> ${ratingCount > 0 && renderTemplate`<div class="service-card-rating-row" data-astro-cid-a256tyoq> <div class="service-card-rating-stars"${addAttribute(`Note: ${averageRating.toFixed(1)} sur 5`, "aria-label")} data-astro-cid-a256tyoq>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"${addAttribute(`service-card-star${averageRating >= 1 ? " active" : ""}`, "class")} data-astro-cid-a256tyoq> <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" data-astro-cid-a256tyoq></path> </svg>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"${addAttribute(`service-card-star${averageRating >= 2 ? " active" : ""}`, "class")} data-astro-cid-a256tyoq> <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" data-astro-cid-a256tyoq></path> </svg>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"${addAttribute(`service-card-star${averageRating >= 3 ? " active" : ""}`, "class")} data-astro-cid-a256tyoq> <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" data-astro-cid-a256tyoq></path> </svg>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"${addAttribute(`service-card-star${averageRating >= 4 ? " active" : ""}`, "class")} data-astro-cid-a256tyoq> <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" data-astro-cid-a256tyoq></path> </svg>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"${addAttribute(`service-card-star${averageRating >= 5 ? " active" : ""}`, "class")} data-astro-cid-a256tyoq> <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" data-astro-cid-a256tyoq></path> </svg> </div> <span class="text-sm font-semibold" data-astro-cid-a256tyoq>${averageRating.toFixed(1)}</span> <span class="text-xs text-muted-foreground ml-1" data-astro-cid-a256tyoq>(${ratingCount} avis)</span> </div>`} </div>  <p class="service-card-description" data-astro-cid-a256tyoq> ${Astro2.props.entry.description} </p>  <div class="service-card-infos" data-astro-cid-a256tyoq>  <div class="service-card-info-block" data-astro-cid-a256tyoq> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:clock", "class": "service-card-info-icon", "data-astro-cid-a256tyoq": true })} <p class="service-card-info-label" data-astro-cid-a256tyoq>Durée</p> <p class="service-card-info-value" data-astro-cid-a256tyoq>${Astro2.props.entry.duree || (Astro2.props.entry.durationMinutes ? `${Astro2.props.entry.durationMinutes} min` : "Variable")}</p> </div>  <div class="service-card-info-block" data-astro-cid-a256tyoq> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:tag", "class": "service-card-info-icon", "data-astro-cid-a256tyoq": true })} <p class="service-card-info-label" data-astro-cid-a256tyoq>Catégorie</p> <p class="service-card-info-value" data-astro-cid-a256tyoq>${Astro2.props.entry.categorie || "G\xE9n\xE9ral"}</p> </div>  <div class="service-card-info-block" data-astro-cid-a256tyoq> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:image-multiple", "class": "service-card-info-icon", "data-astro-cid-a256tyoq": true })} <p class="service-card-info-label" data-astro-cid-a256tyoq>Photos</p> <p class="service-card-info-value" data-astro-cid-a256tyoq>${galerieCount || "0"}</p> </div> </div>  ${steps.length > 0 && renderTemplate`<div class="service-card-steps" data-astro-cid-a256tyoq> <h4 class="service-card-steps-title" data-astro-cid-a256tyoq>Ce service comprend :</h4> <ul class="service-card-steps-list" data-astro-cid-a256tyoq> ${steps.slice(0, 3).map((step) => renderTemplate`<li class="service-card-step" data-astro-cid-a256tyoq> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:check-circle", "class": "service-card-step-icon", "data-astro-cid-a256tyoq": true })} ${step} </li>`)} ${steps.length > 3 && renderTemplate`<li class="service-card-step-more" data-astro-cid-a256tyoq>+ ${steps.length - 3} autres étapes</li>`} </ul> </div>`}  ${tags.length > 0 && renderTemplate`<div class="service-card-tags" data-astro-cid-a256tyoq> ${tags.slice(0, 3).map((tag) => renderTemplate`${renderComponent($$result2, "Badge", $$Badge, { "variant": "default", "data-astro-cid-a256tyoq": true }, { "default": ($$result3) => renderTemplate`${tag}` })}`)} ${tags.length > 3 && renderTemplate`${renderComponent($$result2, "Badge", $$Badge, { "variant": "default", "data-astro-cid-a256tyoq": true }, { "default": ($$result3) => renderTemplate`+${tags.length - 3} autres` })}`} </div>`}  ${faqCount > 0 && renderTemplate`<div class="service-card-faq-info" data-astro-cid-a256tyoq> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:frequently-asked-questions", "class": "service-card-faq-icon", "data-astro-cid-a256tyoq": true })} <span class="service-card-faq-text" data-astro-cid-a256tyoq>${faqCount} question${faqCount > 1 ? "s" : ""} fréquente${faqCount > 1 ? "s" : ""}</span> </div>`}  <div class="service-card-action-row" data-astro-cid-a256tyoq> <div class="service-card-price-block" data-astro-cid-a256tyoq> <span class="service-card-price" data-astro-cid-a256tyoq>${formattedPrice}</span> <span class="service-card-price-unit" data-astro-cid-a256tyoq>/ session</span> </div> ${renderComponent($$result2, "Button", $$Button, { "href": `/services/${Astro2.props.entry.slug}`, "variant": "primary", "size": "md", "data-astro-cid-a256tyoq": true }, { "default": ($$result3) => renderTemplate`
Réserver
${renderComponent($$result3, "Icon", $$Icon, { "name": "mdi:arrow-right", "class": "service-card-action-icon", "data-astro-cid-a256tyoq": true })} ` })} </div> </div> </div> ` })} `;
}, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/components/cards/ServiceCard.astro", void 0);

const $$Astro$5 = createAstro();
const $$FormationCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$FormationCard;
  function parseArray(data) {
    if (!data) return [];
    if (typeof data === "string") {
      try {
        const parsed = JSON.parse(data);
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    }
    return Array.isArray(data) ? data : [];
  }
  const program = parseArray(Astro2.props.entry.program);
  const advantages = parseArray(Astro2.props.entry.advantages);
  let averageRating = 0;
  let ratingCount = 0;
  const avis = Array.isArray(Astro2.props.entry.avis) ? Astro2.props.entry.avis : [];
  if (avis.length > 0) {
    const sum = avis.reduce((acc, item) => {
      return acc + (typeof item.note === "number" ? item.note : 0);
    }, 0);
    averageRating = avis.length > 0 ? sum / avis.length : 0;
    ratingCount = avis.length;
  }
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "class": "formation-card", "data-astro-cid-5nwihxue": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-0" data-astro-cid-5nwihxue> <div class="relative" data-astro-cid-5nwihxue> <!-- Image avec badges --> ${Astro2.props.entry.image && renderTemplate`<div class="formation-card-image-wrapper" data-astro-cid-5nwihxue> <img${addAttribute(Astro2.props.entry.image, "src")}${addAttribute(Astro2.props.entry.imageAlt || Astro2.props.entry.title || Astro2.props.entry.titre, "alt")} class="formation-card-img" data-astro-cid-5nwihxue> <!-- Overlay pour améliorer le contraste des badges --> <div class="formation-card-image-overlay" data-astro-cid-5nwihxue></div> <!-- Badge principal (populaire, nouveau, etc.) --> ${Astro2.props.entry.badge && renderTemplate`<div class="formation-card-featured-badge" data-astro-cid-5nwihxue> ${renderComponent($$result2, "Badge", $$Badge, { "variant": "primary", "size": "sm", "data-astro-cid-5nwihxue": true }, { "default": ($$result3) => renderTemplate`${Astro2.props.entry.badge}` })} </div>`} <!-- Badge certification --> ${Astro2.props.entry.certification && renderTemplate`<div class="formation-card-certification-badge" data-astro-cid-5nwihxue> ${renderComponent($$result2, "Badge", $$Badge, { "variant": "secondary", "size": "sm", "data-astro-cid-5nwihxue": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "mdi:certificate", "class": "w-3 h-3", "data-astro-cid-5nwihxue": true })}
Certifiante
` })} </div>`} </div>`} ${!Astro2.props.entry.image && renderTemplate`<div class="formation-card-empty-block" data-astro-cid-5nwihxue></div>`} <div class="formation-card-content" data-astro-cid-5nwihxue> <!-- Titre et sous-titre --> <div data-astro-cid-5nwihxue> <h3 class="formation-card-title" data-astro-cid-5nwihxue> ${Astro2.props.entry.title || Astro2.props.entry.titre} </h3> <p class="formation-card-subtitle" data-astro-cid-5nwihxue>${Astro2.props.entry.subtitle}</p> <!-- Système d'évaluation --> ${ratingCount > 0 && renderTemplate`<div class="formation-card-rating-row" data-astro-cid-5nwihxue> <div class="formation-card-rating-stars"${addAttribute(`Note: ${averageRating.toFixed(1)} sur 5`, "aria-label")} data-astro-cid-5nwihxue> <!-- Étoile 1 --> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"${addAttribute(`formation-card-star${averageRating >= 1 ? " active" : ""}`, "class")} data-astro-cid-5nwihxue> <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" data-astro-cid-5nwihxue></path> </svg> <!-- Étoile 2 --> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"${addAttribute(`w-4 h-4 ${averageRating >= 2 ? "text-yellow-400 dark:text-yellow-300" : "text-gray-300 dark:text-gray-600"}`, "class")} data-astro-cid-5nwihxue> <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" data-astro-cid-5nwihxue></path> </svg> <!-- Étoile 3 --> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"${addAttribute(`w-4 h-4 ${averageRating >= 3 ? "text-yellow-400 dark:text-yellow-300" : "text-gray-300 dark:text-gray-600"}`, "class")} data-astro-cid-5nwihxue> <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" data-astro-cid-5nwihxue></path> </svg> <!-- Étoile 4 --> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"${addAttribute(`w-4 h-4 ${averageRating >= 4 ? "text-yellow-400 dark:text-yellow-300" : "text-gray-300 dark:text-gray-600"}`, "class")} data-astro-cid-5nwihxue> <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" data-astro-cid-5nwihxue></path> </svg> <!-- Étoile 5 --> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"${addAttribute(`w-4 h-4 ${averageRating >= 5 ? "text-yellow-400 dark:text-yellow-300" : "text-gray-300 dark:text-gray-600"}`, "class")} data-astro-cid-5nwihxue> <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" data-astro-cid-5nwihxue></path> </svg> </div> <span class="formation-card-rating-value" data-astro-cid-5nwihxue>${averageRating.toFixed(1)}</span> <span class="formation-card-rating-count" data-astro-cid-5nwihxue>(${ratingCount} avis)</span> </div>`} </div> <!-- Description --> <p class="formation-card-description" data-astro-cid-5nwihxue> ${Astro2.props.entry.description} </p> <!-- Infos clés --> <div class="formation-card-infos" data-astro-cid-5nwihxue> <div class="formation-card-info-block" data-astro-cid-5nwihxue> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:clock", "class": "formation-card-info-icon", "data-astro-cid-5nwihxue": true })} <p class="formation-card-info-label" data-astro-cid-5nwihxue>Durée</p> <p class="formation-card-info-value" data-astro-cid-5nwihxue>${Astro2.props.entry.duration || Astro2.props.entry.duree}</p> </div> <div class="formation-card-info-block" data-astro-cid-5nwihxue> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:users", "class": "formation-card-info-icon", "data-astro-cid-5nwihxue": true })} <p class="formation-card-info-label" data-astro-cid-5nwihxue>Participants</p> <p class="formation-card-info-value" data-astro-cid-5nwihxue>${Astro2.props.entry.participants}</p> </div> <div class="formation-card-info-block" data-astro-cid-5nwihxue> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:award", "class": "formation-card-info-icon", "data-astro-cid-5nwihxue": true })} <p class="formation-card-info-label" data-astro-cid-5nwihxue>Niveau</p> <p class="formation-card-info-value" data-astro-cid-5nwihxue>${Astro2.props.entry.level}</p> </div> </div> <!-- Programme --> ${program.length > 0 && renderTemplate`<div class="formation-card-program" data-astro-cid-5nwihxue> <h4 class="formation-card-program-title" data-astro-cid-5nwihxue>Programme inclus :</h4> <ul class="formation-card-program-list" data-astro-cid-5nwihxue> ${program.map((item) => renderTemplate`<li class="formation-card-program-step" data-astro-cid-5nwihxue> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:check-circle", "class": "formation-card-program-step-icon", "data-astro-cid-5nwihxue": true })} ${item} </li>`)} </ul> </div>`} <!-- Avantages --> ${advantages.length > 0 && renderTemplate`<div class="formation-card-advantages" data-astro-cid-5nwihxue> ${advantages.slice(0, 3).map((advantage) => renderTemplate`${renderComponent($$result2, "Badge", $$Badge, { "variant": "default", "data-astro-cid-5nwihxue": true }, { "default": ($$result3) => renderTemplate`${advantage}` })}`)} ${advantages.length > 3 && renderTemplate`${renderComponent($$result2, "Badge", $$Badge, { "variant": "default", "data-astro-cid-5nwihxue": true }, { "default": ($$result3) => renderTemplate`+${advantages.length - 3} autres` })}`} </div>`} <!-- Information sur FAQ et galerie --> <div class="formation-card-faq-row" data-astro-cid-5nwihxue> ${Astro2.props.entry.faq && Astro2.props.entry.faq.length > 0 && renderTemplate`<div class="formation-card-faq-info" data-astro-cid-5nwihxue> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:frequently-asked-questions", "class": "formation-card-faq-icon", "data-astro-cid-5nwihxue": true })} <span class="formation-card-faq-text" data-astro-cid-5nwihxue>${Astro2.props.entry.faq.length} FAQ</span> </div>`} ${Astro2.props.entry.galerie && Astro2.props.entry.galerie.length > 0 && renderTemplate`<div class="formation-card-galerie-info" data-astro-cid-5nwihxue> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:image-multiple", "class": "formation-card-galerie-icon", "data-astro-cid-5nwihxue": true })} <span class="formation-card-galerie-text" data-astro-cid-5nwihxue>${Astro2.props.entry.galerie.length} photos</span> </div>`} </div> <!-- Prix et bouton d'action --> <div class="formation-card-action-row" data-astro-cid-5nwihxue> <div class="formation-card-price-block" data-astro-cid-5nwihxue> <span class="formation-card-price" data-astro-cid-5nwihxue>${Astro2.props.entry.price || Astro2.props.entry.prix}€</span> <span class="formation-card-price-unit" data-astro-cid-5nwihxue>/ personne</span> </div> ${renderComponent($$result2, "Button", $$Button, { "href": `/formations/${Astro2.props.entry.slug}`, "variant": "primary", "size": "md", "data-astro-cid-5nwihxue": true }, { "default": ($$result3) => renderTemplate`
Découvrir
${renderComponent($$result3, "Icon", $$Icon, { "name": "mdi:arrow-right", "class": "formation-card-action-icon", "data-astro-cid-5nwihxue": true })} ` })} </div></div></div></div>` })}`;
}, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/components/cards/FormationCard.astro", void 0);

const $$Astro$4 = createAstro();
const $$Avatar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Avatar;
  const { src, alt = "", size = "md", class: className, fallback = "" } = Astro2.props;
  const sizes = {
    sm: "avatar-sm",
    md: "avatar-md",
    lg: "avatar-lg"
  };
  return renderTemplate`${src ? renderTemplate`${maybeRenderHead()}<img${addAttribute(src, "src")}${addAttribute(alt, "alt")}${addAttribute([sizes[size], "avatar", className], "class:list")} data-astro-cid-iusywdof>` : renderTemplate`<div${addAttribute([sizes[size], "avatar avatar-fallback", className], "class:list")} data-astro-cid-iusywdof>${fallback}</div>`}`;
}, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/components/ui/Avatar.astro", void 0);

const $$Astro$3 = createAstro();
const $$TeamCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TeamCard;
  function getInitials(name) {
    if (!name) return "??";
    return name.split(" ").map((part) => part.charAt(0).toUpperCase()).slice(0, 2).join("");
  }
  const initiales = getInitials(Astro2.props.entry.nom);
  const hasSocialLinks = Astro2.props.entry.linkedin || Astro2.props.entry.instagram || Astro2.props.entry.twitter || Astro2.props.entry.facebook;
  const certifications = Astro2.props.entry.certifications ? Astro2.props.entry.certifications.split(",").map((cert) => cert.trim()) : [];
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "padding": "lg", "variant": "default", "class": "team-card", "data-astro-cid-gb7plamr": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="team-card-content" data-astro-cid-gb7plamr> <!-- Photo/Avatar du membre avec positionnement amélioré --> <div class="team-card-avatar-wrapper" data-astro-cid-gb7plamr> ${renderComponent($$result2, "Avatar", $$Avatar, { "src": Astro2.props.entry.photo, "alt": Astro2.props.entry.nom, "size": "lg", "class": "team-card-avatar", "fallback": initiales, "data-astro-cid-gb7plamr": true })} ${Astro2.props.entry.role && renderTemplate`<div class="team-card-role-badge" data-astro-cid-gb7plamr> ${renderComponent($$result2, "Badge", $$Badge, { "variant": "secondary", "data-astro-cid-gb7plamr": true }, { "default": ($$result3) => renderTemplate`${Astro2.props.entry.role}` })} </div>`} </div> <!-- Nom et informations avec espacement amélioré --> <div class="team-card-info" data-astro-cid-gb7plamr> <h3 class="team-card-name" data-astro-cid-gb7plamr>${Astro2.props.entry.nom}</h3> ${Astro2.props.entry.diplome && renderTemplate`<div class="team-card-diplome" data-astro-cid-gb7plamr> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:school", "class": "team-card-diplome-icon", "data-astro-cid-gb7plamr": true })} <span class="team-card-diplome-text" data-astro-cid-gb7plamr>${Astro2.props.entry.diplome}</span> </div>`} ${Astro2.props.entry.bio && renderTemplate`<p class="team-card-bio" data-astro-cid-gb7plamr> ${Astro2.props.entry.bio.length > 120 ? Astro2.props.entry.bio.substring(0, 120) + "..." : Astro2.props.entry.bio} </p>`} ${certifications.length > 0 && renderTemplate`<div class="team-card-certifications" data-astro-cid-gb7plamr> ${certifications.slice(0, 2).map((cert) => renderTemplate`${renderComponent($$result2, "Badge", $$Badge, { "variant": "default", "data-astro-cid-gb7plamr": true }, { "default": ($$result3) => renderTemplate`${cert}` })}`)} ${certifications.length > 2 && renderTemplate`${renderComponent($$result2, "Badge", $$Badge, { "variant": "default", "data-astro-cid-gb7plamr": true }, { "default": ($$result3) => renderTemplate`+${certifications.length - 2}` })}`} </div>`} </div>
)}
</div>
)}
 <div class="team-card-contacts" data-astro-cid-gb7plamr> ${Astro2.props.entry.email && renderTemplate`<a${addAttribute(`mailto:${Astro2.props.entry.email}`, "href")} class="team-card-contact-link" data-astro-cid-gb7plamr> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:email", "class": "team-card-contact-icon", "data-astro-cid-gb7plamr": true })} ${Astro2.props.entry.email} </a>`} ${Astro2.props.entry.telephone && renderTemplate`<a${addAttribute(`tel:${Astro2.props.entry.telephone}`, "href")} class="team-card-contact-link" data-astro-cid-gb7plamr> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:phone", "class": "team-card-contact-icon", "data-astro-cid-gb7plamr": true })} ${Astro2.props.entry.telephone} </a>`} </div>  ${hasSocialLinks && renderTemplate`<div class="team-card-socials" data-astro-cid-gb7plamr> ${Astro2.props.entry.linkedin && renderTemplate`<a${addAttribute(Astro2.props.entry.linkedin, "href")} target="_blank" rel="noopener" class="team-card-social-link" aria-label="LinkedIn" data-astro-cid-gb7plamr> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:linkedin", "class": "team-card-social-icon", "data-astro-cid-gb7plamr": true })} </a>`} ${Astro2.props.entry.instagram && renderTemplate`<a${addAttribute(Astro2.props.entry.instagram, "href")} target="_blank" rel="noopener" class="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-primary-300 transition-colors p-1 rounded-full hover:bg-primary/5 dark:hover:bg-primary-900/20 focus:outline-none focus:ring-2 focus:ring-primary/30 dark:focus:ring-primary-300/20" aria-label="Instagram" data-astro-cid-gb7plamr> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:instagram", "class": "h-5 w-5", "data-astro-cid-gb7plamr": true })} </a>`} ${Astro2.props.entry.twitter && renderTemplate`<a${addAttribute(Astro2.props.entry.twitter, "href")} target="_blank" rel="noopener" class="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-primary-300 transition-colors p-1 rounded-full hover:bg-primary/5 dark:hover:bg-primary-900/20 focus:outline-none focus:ring-2 focus:ring-primary/30 dark:focus:ring-primary-300/20" aria-label="Twitter" data-astro-cid-gb7plamr> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:twitter", "class": "h-5 w-5", "data-astro-cid-gb7plamr": true })} </a>`} ${Astro2.props.entry.facebook && renderTemplate`<a${addAttribute(Astro2.props.entry.facebook, "href")} target="_blank" rel="noopener" class="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-primary-300 transition-colors p-1 rounded-full hover:bg-primary/5 dark:hover:bg-primary-900/20 focus:outline-none focus:ring-2 focus:ring-primary/30 dark:focus:ring-primary-300/20" aria-label="Facebook" data-astro-cid-gb7plamr> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:facebook", "class": "h-5 w-5", "data-astro-cid-gb7plamr": true })} </a>`} </div>`} ${Astro2.props.entry.slug && renderTemplate`<div class="team-card-profile-btn-row" data-astro-cid-gb7plamr> ${renderComponent($$result2, "Button", $$Button, { "variant": "primary", "size": "sm", "href": `/equipe/${Astro2.props.entry.slug}`, "data-astro-cid-gb7plamr": true }, { "default": ($$result3) => renderTemplate`
Voir profil complet
${renderComponent($$result3, "Icon", $$Icon, { "name": "mdi:arrow-right", "class": "team-card-profile-btn-icon", "data-astro-cid-gb7plamr": true })} ` })} </div>`} ` })} `;
}, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/components/cards/TeamCard.astro", void 0);

const $$Astro$2 = createAstro();
const $$GalerieCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$GalerieCard;
  let galerieType = "";
  let galerieVariant = "default";
  if (Astro2.props.entry.global === 1) {
    galerieType = "Galerie g\xE9n\xE9rale";
    galerieVariant = "default";
  } else if (Astro2.props.entry.servicesGlobal === 1 || Astro2.props.entry.serviceId) {
    galerieType = Astro2.props.entry.servicesGlobal === 1 ? "Services" : "Service";
    galerieVariant = "primary";
  } else if (Astro2.props.entry.formationsGlobal === 1 || Astro2.props.entry.formationId) {
    galerieType = Astro2.props.entry.formationsGlobal === 1 ? "Formations" : "Formation";
    galerieVariant = "secondary";
  }
  let formattedDate = "";
  if (Astro2.props.entry.createdAt) {
    try {
      const date = new Date(Astro2.props.entry.createdAt);
      formattedDate = new Intl.DateTimeFormat("fr-FR", {
        day: "numeric",
        month: "short",
        year: "numeric"
      }).format(date);
    } catch (e) {
      formattedDate = Astro2.props.entry.createdAt;
    }
  }
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "class": "galerie-card", "data-astro-cid-nkplyixa": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="galerie-card-content" data-astro-cid-nkplyixa> <div class="galerie-card-image-block" data-astro-cid-nkplyixa> <!-- Image principale avec zoom au survol --> <div class="galerie-card-image-wrapper" data-astro-cid-nkplyixa> <img${addAttribute(Astro2.props.entry.imageUrl, "src")}${addAttribute(Astro2.props.entry.alt || Astro2.props.entry.title, "alt")} class="galerie-card-img" loading="lazy" data-astro-cid-nkplyixa> </div> <!-- Badge type de galerie --> ${galerieType && renderTemplate`<div class="galerie-card-type-badge" data-astro-cid-nkplyixa> ${renderComponent($$result2, "Badge", $$Badge, { "variant": galerieVariant, "size": "sm", "data-astro-cid-nkplyixa": true }, { "default": ($$result3) => renderTemplate`${galerieType}` })} </div>`} <!-- Overlay au survol avec bouton preview --> <div class="galerie-card-overlay" data-astro-cid-nkplyixa> ${renderComponent($$result2, "Button", $$Button, { "variant": "secondary", "size": "sm", "data-lightbox": "gallery", "data-image": Astro2.props.entry.imageUrl, "data-title": Astro2.props.entry.title, "data-astro-cid-nkplyixa": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "mdi:eye", "class": "galerie-card-overlay-icon", "data-astro-cid-nkplyixa": true })}
Preview
` })} </div> </div> <!-- Contenu texte --> <div class="galerie-card-text-block" data-astro-cid-nkplyixa> <h3 class="galerie-card-title" data-astro-cid-nkplyixa> ${Astro2.props.entry.title} </h3> <!-- Description si disponible (tronquée) --> ${Astro2.props.entry.description && renderTemplate`<p class="galerie-card-description" data-astro-cid-nkplyixa> ${Astro2.props.entry.description} </p>`} <!-- Meta informations --> <div class="galerie-card-meta-row" data-astro-cid-nkplyixa> <!-- Auteur --> ${Astro2.props.entry.uploadedBy && renderTemplate`<div class="galerie-card-meta-author" data-astro-cid-nkplyixa> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:account", "class": "galerie-card-meta-icon", "data-astro-cid-nkplyixa": true })} <span data-astro-cid-nkplyixa>${Astro2.props.entry.uploadedBy}</span> </div>`} <!-- Date --> ${formattedDate && renderTemplate`<div class="galerie-card-meta-date" data-astro-cid-nkplyixa> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:calendar", "class": "galerie-card-meta-icon", "data-astro-cid-nkplyixa": true })} <span data-astro-cid-nkplyixa>${formattedDate}</span> </div>`} </div> <!-- Lien vers service ou formation associé --> ${(Astro2.props.entry.service || Astro2.props.entry.formation) && renderTemplate`<div class="galerie-card-meta-link-row" data-astro-cid-nkplyixa> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:link", "class": "galerie-card-meta-link-icon", "data-astro-cid-nkplyixa": true })} <a${addAttribute(Astro2.props.entry.service ? `/services/${Astro2.props.entry.service.slug}` : `/formations/${Astro2.props.entry.formation.slug}`, "href")} class="galerie-card-meta-link" data-astro-cid-nkplyixa> ${Astro2.props.entry.service ? Astro2.props.entry.service.nom : Astro2.props.entry.formation.title || Astro2.props.entry.formation.titre} </a> </div>`}  </div> </div> ` })} ${renderScript($$result, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/components/cards/GalerieCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/components/cards/GalerieCard.astro", void 0);

const $$Astro$1 = createAstro();
const $$AvisCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AvisCard;
  function getInitials(name) {
    if (!name) return "??";
    return name.split(" ").map((part) => part.charAt(0).toUpperCase()).slice(0, 2).join("");
  }
  const initiales = getInitials(Astro2.props.entry.utilisateur);
  let avisType = "";
  let avisVariant = "default";
  if (Astro2.props.entry.global === 1) {
    avisType = "G\xE9n\xE9ral";
    avisVariant = "default";
  } else if (Astro2.props.entry.servicesGlobal === 1 || Astro2.props.entry.serviceId) {
    avisType = Astro2.props.entry.servicesGlobal === 1 ? "Services" : "Service sp\xE9cifique";
    avisVariant = "primary";
  } else if (Astro2.props.entry.formationsGlobal === 1 || Astro2.props.entry.formationId) {
    avisType = Astro2.props.entry.formationsGlobal === 1 ? "Formations" : "Formation sp\xE9cifique";
    avisVariant = "secondary";
  }
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "class": "avis-card", "data-astro-cid-4kkxfslq": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="avis-card-content" data-astro-cid-4kkxfslq> <!-- Entête de l'avis avec avatar et note --> <div class="avis-card-header-row" data-astro-cid-4kkxfslq> <div class="avis-card-user-block" data-astro-cid-4kkxfslq> <!-- Avatar avec fallback pour les initiales --> ${renderComponent($$result2, "Avatar", $$Avatar, { "size": "md", "fallback": initiales, "class": "avis-card-avatar", "data-astro-cid-4kkxfslq": true })} <div class="avis-card-user-info" data-astro-cid-4kkxfslq> <h3 class="avis-card-user-name" data-astro-cid-4kkxfslq>${Astro2.props.entry.utilisateur}</h3> ${avisType && renderTemplate`${renderComponent($$result2, "Badge", $$Badge, { "variant": avisVariant, "size": "sm", "class": "avis-card-type-badge", "data-astro-cid-4kkxfslq": true }, { "default": ($$result3) => renderTemplate`${avisType}` })}`} </div> </div> <!-- Note avec étoiles --> <div class="avis-card-rating-row" data-astro-cid-4kkxfslq> <div class="avis-card-rating-stars" data-astro-cid-4kkxfslq> ${Array.from({ length: 5 }).map((_, i) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"${addAttribute(`avis-card-star${i < Astro2.props.entry.note ? " active" : ""}`, "class")} aria-hidden="true" data-astro-cid-4kkxfslq> <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" data-astro-cid-4kkxfslq></path> </svg>`)} </div> <span class="avis-card-rating-value" data-astro-cid-4kkxfslq>${Astro2.props.entry.note}/5</span> </div> </div> <!-- Corps du commentaire --> ${Astro2.props.entry.commentaire && renderTemplate`<div class="avis-card-comment-block" data-astro-cid-4kkxfslq> <p class="avis-card-comment-text" data-astro-cid-4kkxfslq> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:format-quote-open", "class": "avis-card-quote-icon avis-card-quote-open", "data-astro-cid-4kkxfslq": true })} <span class="avis-card-comment-content" data-astro-cid-4kkxfslq>${Astro2.props.entry.commentaire}</span> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:format-quote-close", "class": "avis-card-quote-icon avis-card-quote-close", "data-astro-cid-4kkxfslq": true })} </p> </div>`} <!-- Métadonnées - Lié à un service ou formation spécifique --> ${(Astro2.props.entry.service || Astro2.props.entry.formation) && renderTemplate`<div class="avis-card-meta-row" data-astro-cid-4kkxfslq> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:link", "class": "avis-card-meta-link-icon", "data-astro-cid-4kkxfslq": true })} <span class="avis-card-meta-label" data-astro-cid-4kkxfslq>Avis pour :</span> <a${addAttribute(Astro2.props.entry.service ? `/services/${Astro2.props.entry.service.slug}` : `/formations/${Astro2.props.entry.formation.slug}`, "href")} class="avis-card-meta-link" data-astro-cid-4kkxfslq> ${Astro2.props.entry.service ? Astro2.props.entry.service.nom : Astro2.props.entry.formation.title || Astro2.props.entry.formation.titre} </a> </div>`}  </div> ` })}`;
}, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/components/cards/AvisCard.astro", void 0);

const $$Astro = createAstro();
const $$QueryLoop = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$QueryLoop;
  const CardComponents = {
    services: $$ServiceCard,
    formations: $$FormationCard,
    team: $$TeamCard,
    galerie: $$GalerieCard,
    avis: $$AvisCard
  };
  const {
    collection,
    filters = {},
    sort,
    limit,
    references = [],
    categoryFilter,
    currentId,
    featured,
    active,
    formationId,
    serviceId,
    global,
    servicesGlobal,
    formationsGlobal,
    columns = 3,
    gap = 6,
    className = "",
    debug = false
  } = Astro2.props;
  function logPerformance(label, startTime, endTime, length) {
    const executionTime = endTime - startTime;
    if (debug) {
      console.log(`[QueryLoop:${collection}] ${label} - Time: ${executionTime.toFixed(2)}ms | Length: ${length}`);
    }
  }
  const startTotalTime = performance.now();
  if (debug) console.log(`[QueryLoop:${collection}] D\xE9marrage du chargement des donn\xE9es...`);
  const loadOptions = { ...filters };
  if (active !== void 0) loadOptions.isActive = active;
  if (featured !== void 0) loadOptions.isFeatured = featured;
  if (categoryFilter) loadOptions.categorie = categoryFilter;
  if (["avis", "faq", "galerie"].includes(collection)) {
    if (global !== void 0) loadOptions.global = global;
    if (servicesGlobal !== void 0) loadOptions.servicesGlobal = servicesGlobal;
    if (formationsGlobal !== void 0) loadOptions.formationsGlobal = formationsGlobal;
    if (serviceId !== void 0) loadOptions.serviceId = serviceId;
    if (formationId !== void 0) loadOptions.formationId = formationId;
  }
  const startFetch = performance.now();
  const methodName = `load${collection.charAt(0).toUpperCase() + collection.slice(1)}`;
  let entries = [];
  try {
    if (typeof contentLoader[methodName] === "function") {
      const result = await contentLoader[methodName](loadOptions);
      if (Array.isArray(result)) {
        entries = result;
      } else if (result && typeof result === "object") {
        if (result.id) {
          entries = [result];
        } else if (Array.isArray(result.data)) {
          entries = result.data;
        }
      }
    } else {
      throw new Error(`M\xE9thode ${methodName} non disponible dans contentLoader`);
    }
  } catch (error) {
    console.error(`[QueryLoop:${collection}] Erreur lors du chargement des donn\xE9es:`, error);
  }
  const endFetch = performance.now();
  logPerformance("R\xE9cup\xE9ration des donn\xE9es", startFetch, endFetch, entries.length);
  if (currentId !== void 0) {
    const numId = typeof currentId === "string" ? parseInt(currentId, 10) : currentId;
    entries = entries.filter((entry) => entry.id !== numId);
  }
  let autoRelations = [];
  if (collection === "services" || collection === "formations") {
    autoRelations = ["avis", "faq", "galerie"];
  } else if (collection === "team") {
    autoRelations = [];
  }
  const allRelations = [.../* @__PURE__ */ new Set([...references, ...autoRelations])];
  if (allRelations.length > 0) {
    const startRels = performance.now();
    for (const entry of entries) {
      for (const relation of allRelations) {
        try {
          let relationData = [];
          const idKey = collection === "formations" ? "formationId" : "serviceId";
          const relMethodName = `load${relation.charAt(0).toUpperCase() + relation.slice(1)}`;
          if (typeof contentLoader[relMethodName] === "function") {
            const filter = { [idKey]: entry.id };
            relationData = await contentLoader[relMethodName](filter);
            entry[relation] = relationData;
          }
        } catch (error) {
          console.error(`[QueryLoop:${collection}] Erreur lors du chargement de la relation ${relation}:`, error);
          entry[relation] = [];
        }
      }
    }
    const endRels = performance.now();
    logPerformance("Chargement des relations", startRels, endRels, entries.length);
  }
  if (sort) {
    const startSort = performance.now();
    const { field, order } = sort;
    entries.sort((a, b) => {
      let aValue = a[field];
      let bValue = b[field];
      if (typeof aValue === "string") aValue = aValue.toLowerCase();
      if (typeof bValue === "string") bValue = bValue.toLowerCase();
      if (aValue === void 0 || aValue === null) return order === "asc" ? -1 : 1;
      if (bValue === void 0 || bValue === null) return order === "asc" ? 1 : -1;
      if (aValue < bValue) return order === "asc" ? -1 : 1;
      if (aValue > bValue) return order === "asc" ? 1 : -1;
      return 0;
    });
    const endSort = performance.now();
    logPerformance("Tri des donn\xE9es", startSort, endSort, entries.length);
  }
  if (limit !== void 0 && entries.length > limit) {
    entries = entries.slice(0, limit);
  }
  const CardComponent = CardComponents[collection];
  if (!CardComponent) {
    console.error(`[QueryLoop:${collection}] Composant de carte non trouv\xE9 pour la collection "${collection}"`);
  }
  const endTotalTime = performance.now();
  if (debug) {
    console.log(`[QueryLoop:${collection}] Traitement termin\xE9 en ${(endTotalTime - startTotalTime).toFixed(2)}ms`);
    console.log(`[QueryLoop:${collection}] ${entries.length} \xE9l\xE9ments pr\xEAts pour l'affichage`);
  }
  return renderTemplate`${entries.length === 0 ? renderTemplate`${renderComponent($$result, "Section", $$Section, { "padding": "lg", "layout": "flex", "justify": "center", "align": "center" }, { "default": async ($$result2) => renderTemplate`${maybeRenderHead()}<p style="color: var(--theme-muted-foreground); padding: var(--space-12) 0; text-align: center;">Aucun élément trouvé</p>` })}` : renderTemplate`${renderComponent($$result, "Section", $$Section, { "layout": "grid", "cols": columns, "gap": "var(--space-6)", "class": className }, { "default": async ($$result2) => renderTemplate`${entries.map((entry) => renderTemplate`${renderComponent($$result2, "CardComponent", CardComponent, { "entry": entry })}`)}` })}`}`;
}, "/home/runner/work/test-astro-neon-better/test-astro-neon-better/src/components/QueryLoop.astro", void 0);

export { $$TeamCard as $, $$QueryLoop as a, $$Badge as b, contentLoader as c, $$GalerieCard as d };
