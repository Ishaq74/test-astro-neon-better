import { defineCollection, z } from "astro:content";
import { PrismaClient } from "@prisma/client";

// Définition des schémas de collections pour Astro
export const collections = {
  utilisateurs: defineCollection({
    type: "data",
    schema: z.object({
      id: z.number(),
      nom: z.string(),
      email: z.string(),
      role: z.string(),
      password: z.string(),
    }),
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
      notes: z.string().optional(),
    }),
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
      updatedAt: z.string(),
    }),
  }),

  blockedSlots: defineCollection({
    type: "data",
    schema: z.object({
      id: z.number(),
      title: z.string(),
      start: z.string(),
      end: z.string().optional(),
      allDay: z.number().optional(),
    }),
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
      updatedAt: z.string(),
    }),
  }),

  sessions: defineCollection({
    type: "data",
    schema: z.object({
      id: z.string(),
      sessionToken: z.string(),
      userId: z.string(),
      expires: z.string(),
      createdAt: z.string(),
      updatedAt: z.string(),
    }),
  }),

  verificationTokens: defineCollection({
    type: "data",
    schema: z.object({
      identifier: z.string(),
      token: z.string(),
      expires: z.string(),
    }),
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
      isFeatured: z.number().optional(),
    }),
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
  updatedAt: z.string().optional(),
    }),
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
      isActive: z.number().optional(),
    }),
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
      stats: z.string().optional(),
    }),
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
      formationId: z.number().optional(),
    }),
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
      formationId: z.number().optional(),
    }),
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
      formationId: z.number().optional(),
    }),
  }),
};

// Singleton pour PrismaClient
let prisma: PrismaClient | undefined;

export function getPrismaClient() {
  if (!prisma) {
    prisma = new PrismaClient();
  }
  return prisma;
}

// Fonction utilitaire pour sanitizer les tableaux
function sanitizeArray(val: unknown): string[] {
  if (!val) return [];
  if (Array.isArray(val)) return val.filter(v => typeof v === 'string');
  if (typeof val === 'string') {
    try {
      const arr = JSON.parse(val);
      return Array.isArray(arr) ? arr.filter(v => typeof v === 'string') : [];
    } catch { return []; }
  }
  return [];
}

// Fonction utilitaire pour normaliser les chemins d'images
function normalizeImagePath(imagePath: string): string {
  if (!imagePath) return '';
  let image = imagePath;
  image = image.replace(/^\/?assets\//, '');
  return 'assets/' + image.replace(/^\//, '');
}

// Content Loader pour Astro
export const contentLoader = {
  // --- CRUD Utilisateurs ---
  async createUtilisateur(data: any) {
    const db = getPrismaClient();
    return await db.user.create({
      data: {
        nom: data.nom,
        email: data.email,
        role: data.role,
        password: data.password,
      }
    });
  },

  async updateUtilisateur(id: number, data: any) {
    const db = getPrismaClient();
    const updateData: any = {};
    const fields = ['nom', 'email', 'role', 'password'];
    
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

  async deleteUtilisateur(id: number) {
    const db = getPrismaClient();
    return await db.user.delete({ where: { id } });
  },

  // --- CRUD Reservations ---
  async createReservation(data: any) {
    const db = getPrismaClient();
    return await db.reservation.create({
      data: {
        userId: data.userId,
        serviceId: data.serviceId,
        date: data.date,
        time: data.time,
        status: data.status,
        notes: data.notes || null,
      }
    });
  },

  async updateReservation(id: number, data: any) {
    const db = getPrismaClient();
    const updateData: any = {};
    const fields = ['userId', 'serviceId', 'date', 'time', 'status', 'notes'];
    
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

  async deleteReservation(id: number) {
    const db = getPrismaClient();
    return await db.reservation.delete({ where: { id } });
  },

  // --- CRUD Factures ---
  async createFacture(data: any) {
    const db = getPrismaClient();
    return await db.facture.create({
      data: {
        reservationId: data.reservationId,
        userId: data.userId,
        amount: data.amount,
        status: data.status,
        pdfUrl: data.pdfUrl || null,
        createdAt: data.createdAt || new Date().toISOString(),
        updatedAt: data.updatedAt || new Date().toISOString(),
      }
    });
  },

  async updateFacture(id: number, data: any) {
    const db = getPrismaClient();
    const updateData: any = {};
    const fields = ['reservationId', 'userId', 'amount', 'status', 'pdfUrl', 'updatedAt'];
    
    for (const key of fields) {
      if (key in data) {
        if (key === 'updatedAt') {
          updateData[key] = data[key] || new Date().toISOString();
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

  async deleteFacture(id: number) {
    const db = getPrismaClient();
    return await db.facture.delete({ where: { id } });
  },

  // --- CRUD BlockedSlots ---
  async createBlockedSlot(data: any) {
    const db = getPrismaClient();
    return await db.blockedSlot.create({
      data: {
        title: data.title,
        start: data.start,
        end: data.end || null,
        allDay: data.allDay || 0,
      }
    });
  },

  async updateBlockedSlot(id: number, data: any) {
    const db = getPrismaClient();
    const updateData: any = {};
    const fields = ['title', 'start', 'end', 'allDay'];
    
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

  async deleteBlockedSlot(id: number) {
    const db = getPrismaClient();
    return await db.blockedSlot.delete({ where: { id } });
  },

  // --- CRUD Accounts ---
  async createAccount(data: any) {
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
        createdAt: data.createdAt || new Date().toISOString(),
        updatedAt: data.updatedAt || new Date().toISOString(),
      }
    });
  },

  async updateAccount(id: string, data: any) {
    const db = getPrismaClient();
    const updateData: any = {};
    const fields = ['userId', 'type', 'provider', 'providerAccountId', 'refreshToken', 'accessToken', 'expiresAt', 'tokenType', 'scope', 'idToken', 'sessionState', 'updatedAt'];
    
    for (const key of fields) {
      if (key in data) {
        if (key === 'updatedAt') {
          updateData[key] = data[key] || new Date().toISOString();
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

  async deleteAccount(id: string) {
    const db = getPrismaClient();
    return await db.account.delete({ where: { id } });
  },

  // --- CRUD Sessions ---
  async createSession(data: any) {
    const db = getPrismaClient();
    return await db.session.create({
      data: {
        id: data.id || crypto.randomUUID(),
        sessionToken: data.sessionToken,
        userId: data.userId,
        expires: data.expires,
        createdAt: data.createdAt || new Date().toISOString(),
        updatedAt: data.updatedAt || new Date().toISOString(),
      }
    });
  },

  async updateSession(id: string, data: any) {
    const db = getPrismaClient();
    const updateData: any = {};
    const fields = ['sessionToken', 'userId', 'expires', 'updatedAt'];
    
    for (const key of fields) {
      if (key in data) {
        if (key === 'updatedAt') {
          updateData[key] = data[key] || new Date().toISOString();
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

  async deleteSession(id: string) {
    const db = getPrismaClient();
    return await db.session.delete({ where: { id } });
  },

  // --- CRUD VerificationTokens ---
  async createVerificationToken(data: any) {
    const db = getPrismaClient();
    return await db.verificationToken.create({
      data: {
        identifier: data.identifier,
        token: data.token,
        expires: data.expires,
      }
    });
  },

  async deleteVerificationToken(identifier: string, token: string) {
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
  async createFormation(data: any) {
    const db = getPrismaClient();
    function sanitizeArray(val: unknown): string[] {
      if (!val) return [];
      if (Array.isArray(val)) return val.filter(v => typeof v === 'string');
      if (typeof val === 'string') {
        try {
          const arr = JSON.parse(val);
          return Array.isArray(arr) ? arr.filter(v => typeof v === 'string') : [];
        } catch { return []; }
      }
      return [];
    }
    const { imageName, ...prismaData } = data;
    let image = prismaData.image || '';
    if (image) {
      image = image.replace(/^\/?assets\//, '');
      image = 'assets/' + image.replace(/^\//, '');
    }
    const safeTags = sanitizeArray(data.tags);
    const safeSteps = sanitizeArray(data.steps);
    return await db.formation.create({
      data: {
        ...prismaData,
        image,
        tags: JSON.stringify(safeTags),
        steps: JSON.stringify(safeSteps),
        slug: data.slug || '',
        isActive: data.isActive ? 1 : 0,
        isFeatured: data.isFeatured ? 1 : 0
      }
    });
  },

  async updateFormation(id: number, data: any) {
    const db = getPrismaClient();
    const updateData: any = {};
    const fields = [
      'titre', 'description', 'content', 'notes', 'prix', 'image', 'imageAlt', 'icon', 'categorie', 'tags', 'steps', 'duree', 'durationMinutes', 'slug', 'isActive', 'isFeatured', 'certification', 'createdAt', 'updatedAt'
    ];
    for (const key of fields) {
      if (key in data) {
        if (key === 'tags' || key === 'steps') {
          updateData[key] = data[key] ? JSON.stringify(data[key]) : null;
        } else if (key === 'isActive' || key === 'isFeatured') {
          updateData[key] = data[key] ? 1 : 0;
        } else if (key === 'image' && data[key]) {
          let image = data[key];
          image = image.replace(/^\/?assets\//, '');
          updateData[key] = 'assets/' + image.replace(/^\//, '');
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

  async deleteFormation(id: number) {
    const db = getPrismaClient();
    return await db.formation.delete({ where: { id } });
  },

  // Chargement des formations
  /**
   * Load formations with optional pagination and filters.
   * @param options { page?: number, pageSize?: number, filters?: Record<string, any> }
   * @returns { data: Formation[], total: number }
   */
  async loadFormations(options: { page?: number, pageSize?: number, filters?: Record<string, any> } = {}) {
    const db = getPrismaClient();
    try {
      const data = await db.formation.findMany({
        include: {
          galerie: true,
          avis: true,
          faq: true,
        },
      });
      // Normalize all fields for frontend
      return data.map((f: any) => ({
        ...f,
        title: f.titre,
        subtitle: f.subtitle || '',
        badge: f.badge || '',
        participants: f.participants ?? null,
        level: f.level || '',
        program: Array.isArray(f.program) ? f.program : (typeof f.program === 'string' && f.program ? JSON.parse(f.program) : []),
        advantages: Array.isArray(f.advantages) ? f.advantages : (typeof f.advantages === 'string' && f.advantages ? JSON.parse(f.advantages) : []),
        tags: Array.isArray(f.tags) ? f.tags : (typeof f.tags === 'string' && f.tags ? JSON.parse(f.tags) : []),
        steps: Array.isArray(f.steps) ? f.steps : (typeof f.steps === 'string' && f.steps ? JSON.parse(f.steps) : []),
        price: f.prix,
        duration: f.duree || '',
        image: f.image || '',
        imageAlt: f.imageAlt || '',
        icon: f.icon || '',
        categorie: f.categorie || '',
        slug: f.slug,
        isActive: f.isActive,
        isFeatured: f.isFeatured,
        certification: f.certification || '',
        createdAt: f.createdAt || '',
        updatedAt: f.updatedAt || '',
        description: f.description || '',
        content: f.content || '',
        notes: f.notes || '',
        galerie: f.galerie || [],
        avis: f.avis || [],
        faq: f.faq || [],
      }));
    } catch (error) {
      console.error("Error loading formations:", error);
      return [];
    }
  },
  
  // --- CRUD Services ---
  async createService(data: any) {
    const db = getPrismaClient();
    const { imageName, ...prismaData } = data;
    let image = prismaData.image || '';
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
        slug: data.slug || '',
        isActive: data.isActive ? 1 : 0,
        isFeatured: data.isFeatured ? 1 : 0
      }
    });
  },

  async updateService(id: number, data: any) {
    const db = getPrismaClient();
    const updateData: any = {};
    const fields = [
      'nom', 'description', 'content', 'notes', 'prix', 'image', 'imageAlt', 'icon', 'categorie', 'tags', 'steps', 'duree', 'durationMinutes', 'slug', 'isActive', 'isFeatured'
    ];
    for (const key of fields) {
      if (key in data) {
        if (key === 'tags' || key === 'steps') {
          updateData[key] = data[key] ? JSON.stringify(data[key]) : null;
        } else if (key === 'isActive' || key === 'isFeatured') {
          updateData[key] = data[key] ? 1 : 0;
        } else if (key === 'image' && data[key]) {
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

  async deleteService(id: number) {
    const db = getPrismaClient();
    return await db.service.delete({ where: { id } });
  },
  
  // --- CRUD Team ---
  async createTeamMember(data: any) {
    const db = getPrismaClient();
    let photo = data.photo || '';
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

  async updateTeamMember(id: number, data: any) {
    const db = getPrismaClient();
    const updateData: any = {};
    const fields = [
      'nom', 'role', 'bio', 'photo', 'email', 'telephone', 'linkedin', 'instagram', 'certifications', 'diplome', 'isActive'
    ];
    
    for (const key of fields) {
      if (key in data) {
        if (key === 'isActive') {
          updateData[key] = data[key] ? 1 : 0;
        } else if (key === 'photo' && data[key]) {
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

  async deleteTeamMember(id: number) {
    const db = getPrismaClient();
    return await db.team.delete({ where: { id } });
  },

  // --- CRUD SiteIdentity ---
  async updateSiteIdentity(id: number, data: any) {
    const db = getPrismaClient();
    const updateData: any = {};
    const fields = [
      'nom', 'slogan', 'description', 'adresse', 'codePostal', 'ville', 'pays', 
      'telephone', 'email', 'siteUrl', 'logo', 'facebook', 'instagram', 'linkedin', 
      'tiktok', 'youtube', 'mentionsLegales', 'politiqueConfidentialite', 'diplomePrincipal', 
      'certifications', 'horaires', 'stats'
    ];
    
    for (const key of fields) {
      if (key in data) {
        if (key === 'logo' && data[key]) {
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

  async createSiteIdentity(data: any) {
    const db = getPrismaClient();
    let logo = data.logo || '';
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
  async createFaq(data: any) {
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

  async updateFaq(id: number, data: any) {
    const db = getPrismaClient();
    const updateData: any = {};
    const fields = [
      'question', 'reponse', 'global', 'servicesGlobal', 'formationsGlobal', 'serviceId', 'formationId'
    ];
    
    for (const key of fields) {
      if (key in data) {
        if (['global', 'servicesGlobal', 'formationsGlobal'].includes(key)) {
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

  async deleteFaq(id: number) {
    const db = getPrismaClient();
    return await db.faq.delete({ where: { id } });
  },

  // --- CRUD Avis ---
  async createAvis(data: any) {
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

  async updateAvis(id: number, data: any) {
    const db = getPrismaClient();
    const updateData: any = {};
    const fields = [
      'utilisateur', 'commentaire', 'note', 'global', 'servicesGlobal', 'formationsGlobal', 'serviceId', 'formationId'
    ];
    
    for (const key of fields) {
      if (key in data) {
        if (['global', 'servicesGlobal', 'formationsGlobal'].includes(key)) {
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

  async deleteAvis(id: number) {
    const db = getPrismaClient();
    return await db.avis.delete({ where: { id } });
  },

  // --- CRUD Galerie ---
  async createGalerie(data: any) {
    const db = getPrismaClient();
    let imageUrl = data.imageUrl || '';
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
        createdAt: data.createdAt || new Date().toISOString(),
        global: data.global || 0,
        servicesGlobal: data.servicesGlobal || 0,
        formationsGlobal: data.formationsGlobal || 0,
        serviceId: data.serviceId || null,
        formationId: data.formationId || null
      }
    });
  },

  async updateGalerie(id: number, data: any) {
    const db = getPrismaClient();
    const updateData: any = {};
    const fields = [
      'title', 'imageUrl', 'alt', 'description', 'uploadedBy', 'global', 'servicesGlobal', 
      'formationsGlobal', 'serviceId', 'formationId'
    ];
    
    for (const key of fields) {
      if (key in data) {
        if (['global', 'servicesGlobal', 'formationsGlobal'].includes(key)) {
          updateData[key] = data[key] ? 1 : 0;
        } else if (key === 'imageUrl' && data[key]) {
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

  async deleteGalerie(id: number) {
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
  async loadReservations(options: { userId?: number, serviceId?: number } = {}) {
    const db = getPrismaClient();
    try {
      const where: any = {};
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
  async loadFactures(options: { userId?: number, reservationId?: number } = {}) {
    const db = getPrismaClient();
    try {
      const where: any = {};
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
  async loadBlockedSlots(options: { startDate?: string, endDate?: string } = {}) {
    const db = getPrismaClient();
    try {
      const where: any = {};
      if (options.startDate) where.start = { gte: options.startDate };
      if (options.endDate) where.start = { ...where.start, lte: options.endDate };
      
      return await db.blockedSlot.findMany({ where });
    } catch (error) {
      console.error("Error loading blocked slots:", error);
      return [];
    }
  },

  // Accounts
  async loadAccounts(userId?: string) {
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
  async loadSessions(userId?: string) {
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
  async loadVerificationTokens(identifier?: string) {
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
  async loadServices(options: { isActive?: boolean, isFeatured?: boolean, categorie?: string } = {}) {
    const db = getPrismaClient();
    try {
      const where: any = {};
      if (options.isActive !== undefined) where.isActive = options.isActive ? 1 : 0;
      if (options.isFeatured !== undefined) where.isFeatured = options.isFeatured ? 1 : 0;
      if (options.categorie) where.categorie = options.categorie;
      
      const data = await db.service.findMany({
        where,
        include: {
          galerie: true,
          avis: true,
          faq: true,
        },
      });
      
      // Normalize tags/steps fields for each service
  return data.map((s: any) => ({
        ...s,
        tags: Array.isArray(s.tags) ? s.tags : (typeof s.tags === 'string' ? (s.tags ? JSON.parse(s.tags) : []) : []),
        steps: Array.isArray(s.steps) ? s.steps : (typeof s.steps === 'string' ? (s.steps ? JSON.parse(s.steps) : []) : []),
      }));
    } catch (error) {
      console.error("Error loading services:", error);
      return [];
    }
  },


  // Team
  async loadTeam(options: { isActive?: boolean } = {}) {
    const db = getPrismaClient();
    try {
      const where = options.isActive !== undefined ? { isActive: options.isActive ? 1 : 0 } : {};
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
      return identities.map((identity: any) => ({
        ...identity,
        stats: identity.stats ? (() => { try { return JSON.parse(identity.stats); } catch { return []; } })() : [],
        certifications: identity.certifications && typeof identity.certifications === 'string'
          ? identity.certifications.split(',').map((c: string) => c.trim()).filter(Boolean)
          : Array.isArray(identity.certifications) ? identity.certifications : [],
      }));
    } catch (error) {
      console.error("Error loading site identity:", error);
      return [];
    }
  },

  // FAQ
  async loadFaq(options: { global?: boolean, servicesGlobal?: boolean, formationsGlobal?: boolean, serviceId?: number, formationId?: number } = {}) {
    const db = getPrismaClient();
    try {
      const where: any = {};
      if (options.global !== undefined) where.global = options.global ? 1 : 0;
      if (options.servicesGlobal !== undefined) where.servicesGlobal = options.servicesGlobal ? 1 : 0;
      if (options.formationsGlobal !== undefined) where.formationsGlobal = options.formationsGlobal ? 1 : 0;
      if (options.serviceId !== undefined) where.serviceId = options.serviceId;
      if (options.formationId !== undefined) where.formationId = options.formationId;
      
      return await db.faq.findMany({ where });
    } catch (error) {
      console.error("Error loading FAQ:", error);
      return [];
    }
  },

  // Avis/Testimonials
  async loadAvis(options: { global?: boolean, servicesGlobal?: boolean, formationsGlobal?: boolean, serviceId?: number, formationId?: number } = {}) {
    const db = getPrismaClient();
    try {
      const where: any = {};
      if (options.global !== undefined) where.global = options.global ? 1 : 0;
      if (options.servicesGlobal !== undefined) where.servicesGlobal = options.servicesGlobal ? 1 : 0;
      if (options.formationsGlobal !== undefined) where.formationsGlobal = options.formationsGlobal ? 1 : 0;
      if (options.serviceId !== undefined) where.serviceId = options.serviceId;
      if (options.formationId !== undefined) where.formationId = options.formationId;
      
      return await db.avis.findMany({ where });
    } catch (error) {
      console.error("Error loading avis:", error);
      return [];
    }
  },

  // Galerie/Media
  async loadGalerie(options: { global?: boolean, servicesGlobal?: boolean, formationsGlobal?: boolean, serviceId?: number, formationId?: number } = {}) {
    const db = getPrismaClient();
    try {
      const where: any = {};
      if (options.global !== undefined) where.global = options.global ? 1 : 0;
      if (options.servicesGlobal !== undefined) where.servicesGlobal = options.servicesGlobal ? 1 : 0;
      if (options.formationsGlobal !== undefined) where.formationsGlobal = options.formationsGlobal ? 1 : 0;
      if (options.serviceId !== undefined) where.serviceId = options.serviceId;
      if (options.formationId !== undefined) where.formationId = options.formationId;
      
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
      galerie: await this.loadGalerie(),
    };
  },

  // Méthode pour charger un service spécifique par slug
  async loadServiceBySlug(slug: string) {
    const db = getPrismaClient();
    try {
      const service = await db.service.findUnique({
        where: { slug },
        include: {
          galerie: true,
          avis: true,
          faq: true,
        },
      });
      
      if (!service) return null;
      
      // Normalize tags and steps
      return {
        ...service,
        tags: Array.isArray(service.tags) ? service.tags : (typeof service.tags === 'string' ? (service.tags ? JSON.parse(service.tags) : []) : []),
        steps: Array.isArray(service.steps) ? service.steps : (typeof service.steps === 'string' ? (service.steps ? JSON.parse(service.steps) : []) : []),
      };
    } catch (error) {
      console.error(`Error loading service with slug ${slug}:`, error);
      return null;
    }
  },


  // Méthode pour charger une formation spécifique par slug
  async loadFormationBySlug(slug: string) {
    const db = getPrismaClient();
    try {
      return await db.formation.findUnique({
        where: { slug },
        include: {
          galerie: true,
          avis: true,
          faq: true,
        },
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
        by: ['serviceId'],
        _count: { id: true }
      });
      
      const avisAvg = await db.avis.groupBy({
        by: ['serviceId'],
        _avg: { note: true },
        where: { serviceId: { not: null } }
      });
      
      return services.map((service: any) => {
        const serviceReservations = reservations.find((r: any) => r.serviceId === service.id);
        const serviceAvis = avisAvg.find((a: any) => a.serviceId === service.id);
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
        by: ['formationId'],
        _avg: { note: true },
        where: { formationId: { not: null } }
      });
      
      return formations.map((formation: any) => {
        const formationAvis = avisAvg.find((a: any) => a.formationId === formation.id);
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

  async getReservationAnalytics(period: 'day' | 'week' | 'month' | 'year' = 'month') {
    const db = getPrismaClient();
    try {
      // Date basée sur le serveur, à ajuster selon les besoins
      const now = new Date();
      const startDate = new Date();
      
      switch (period) {
        case 'day':
          startDate.setDate(now.getDate() - 30); // 30 derniers jours
          break;
        case 'week':
          startDate.setDate(now.getDate() - 12 * 7); // 12 dernières semaines
          break;
        case 'month':
          startDate.setMonth(now.getMonth() - 12); // 12 derniers mois
          break;
        case 'year':
          startDate.setFullYear(now.getFullYear() - 5); // 5 dernières années
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
      
      // Organiser les données selon la période
      const groupedData: Record<string, { count: number, revenue: number }> = {};
      
  reservations.forEach((reservation: any) => {
        let key = '';
        const date = new Date(reservation.date);
        
        switch (period) {
          case 'day':
            key = date.toISOString().split('T')[0]; // YYYY-MM-DD
            break;
          case 'week':
            // Calcul du premier jour de la semaine (lundi)
            const day = date.getDay();
            const diff = date.getDate() - day + (day === 0 ? -6 : 1);
            const monday = new Date(date.setDate(diff));
            key = monday.toISOString().split('T')[0];
            break;
          case 'month':
            key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
            break;
          case 'year':
            key = String(date.getFullYear());
            break;
        }
        
        if (!groupedData[key]) {
          groupedData[key] = { count: 0, revenue: 0 };
        }
        
        groupedData[key].count++;
        groupedData[key].revenue += reservation.service?.prix || 0;
      });
      
      // Convertir en tableau pour le front-end
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

export default {
  collections,
  contentLoader,
};