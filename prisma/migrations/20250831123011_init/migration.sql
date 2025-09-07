-- CreateTable
CREATE TABLE "public"."utilisateurs" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "utilisateurs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."services" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "description" TEXT,
    "content" TEXT,
    "notes" TEXT,
    "prix" DOUBLE PRECISION NOT NULL,
    "image" TEXT,
    "imageAlt" TEXT,
    "icon" TEXT,
    "categorie" TEXT,
    "tags" TEXT,
    "steps" TEXT,
    "duree" TEXT,
    "durationMinutes" INTEGER,
    "slug" TEXT NOT NULL,
    "isActive" INTEGER NOT NULL DEFAULT 1,
    "isFeatured" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."formations" (
    "id" SERIAL NOT NULL,
    "titre" TEXT NOT NULL,
    "badge" TEXT,
    "subtitle" TEXT,
    "participants" INTEGER,
    "level" TEXT,
    "program" TEXT,
    "advantages" TEXT,
    "description" TEXT,
    "content" TEXT,
    "notes" TEXT,
    "prix" DOUBLE PRECISION NOT NULL,
    "image" TEXT,
    "imageAlt" TEXT,
    "icon" TEXT,
    "categorie" TEXT,
    "tags" TEXT,
    "steps" TEXT,
    "duree" TEXT,
    "durationMinutes" INTEGER,
    "slug" TEXT NOT NULL,
    "isActive" INTEGER NOT NULL DEFAULT 1,
    "isFeatured" INTEGER NOT NULL DEFAULT 0,
    "certification" TEXT,
    "createdAt" TEXT,
    "updatedAt" TEXT,

    CONSTRAINT "formations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."reservations" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "serviceId" INTEGER NOT NULL,
    "date" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "notes" TEXT,

    CONSTRAINT "reservations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."factures" (
    "id" SERIAL NOT NULL,
    "reservationId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL,
    "pdfUrl" TEXT,
    "createdAt" TEXT NOT NULL,
    "updatedAt" TEXT NOT NULL,

    CONSTRAINT "factures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."galerie" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "alt" TEXT,
    "description" TEXT,
    "uploadedBy" TEXT,
    "createdAt" TEXT NOT NULL,
    "global" INTEGER NOT NULL DEFAULT 0,
    "servicesGlobal" INTEGER NOT NULL DEFAULT 0,
    "formationsGlobal" INTEGER NOT NULL DEFAULT 0,
    "serviceId" INTEGER,
    "formationId" INTEGER,

    CONSTRAINT "galerie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."avis" (
    "id" SERIAL NOT NULL,
    "utilisateur" TEXT NOT NULL,
    "commentaire" TEXT,
    "note" INTEGER NOT NULL,
    "global" INTEGER NOT NULL DEFAULT 0,
    "servicesGlobal" INTEGER NOT NULL DEFAULT 0,
    "formationsGlobal" INTEGER NOT NULL DEFAULT 0,
    "serviceId" INTEGER,
    "formationId" INTEGER,

    CONSTRAINT "avis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."site_identity" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "slogan" TEXT,
    "description" TEXT,
    "adresse" TEXT,
    "codePostal" TEXT,
    "ville" TEXT,
    "pays" TEXT,
    "telephone" TEXT,
    "email" TEXT,
    "siteUrl" TEXT,
    "logo" TEXT,
    "heroImage" TEXT,
    "facebook" TEXT,
    "instagram" TEXT,
    "linkedin" TEXT,
    "tiktok" TEXT,
    "youtube" TEXT,
    "mentionsLegales" TEXT,
    "politiqueConfidentialite" TEXT,
    "diplomePrincipal" TEXT,
    "certifications" TEXT,
    "horaires" TEXT,
    "stats" TEXT,

    CONSTRAINT "site_identity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."team" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "role" TEXT,
    "bio" TEXT,
    "photo" TEXT,
    "email" TEXT,
    "telephone" TEXT,
    "linkedin" TEXT,
    "instagram" TEXT,
    "certifications" TEXT,
    "diplome" TEXT,
    "isActive" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."blocked_slots" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "start" TEXT NOT NULL,
    "end" TEXT,
    "allDay" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "blocked_slots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."accounts" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."sessions" (
    "id" TEXT NOT NULL,
    "session_token" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."verification_tokens" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "public"."faq" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "reponse" TEXT NOT NULL,
    "global" INTEGER NOT NULL DEFAULT 0,
    "servicesGlobal" INTEGER NOT NULL DEFAULT 0,
    "formationsGlobal" INTEGER NOT NULL DEFAULT 0,
    "serviceId" INTEGER,
    "formationId" INTEGER,

    CONSTRAINT "faq_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "utilisateurs_email_key" ON "public"."utilisateurs"("email");

-- CreateIndex
CREATE UNIQUE INDEX "services_slug_key" ON "public"."services"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "formations_slug_key" ON "public"."formations"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_provider_account_id_key" ON "public"."accounts"("provider", "provider_account_id");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_session_token_key" ON "public"."sessions"("session_token");

-- CreateIndex
CREATE UNIQUE INDEX "verification_tokens_identifier_token_key" ON "public"."verification_tokens"("identifier", "token");

-- AddForeignKey
ALTER TABLE "public"."reservations" ADD CONSTRAINT "reservations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."utilisateurs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."reservations" ADD CONSTRAINT "reservations_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "public"."services"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."factures" ADD CONSTRAINT "factures_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "public"."reservations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."factures" ADD CONSTRAINT "factures_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."utilisateurs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."galerie" ADD CONSTRAINT "galerie_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "public"."services"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."galerie" ADD CONSTRAINT "galerie_formationId_fkey" FOREIGN KEY ("formationId") REFERENCES "public"."formations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."avis" ADD CONSTRAINT "avis_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "public"."services"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."avis" ADD CONSTRAINT "avis_formationId_fkey" FOREIGN KEY ("formationId") REFERENCES "public"."formations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."faq" ADD CONSTRAINT "faq_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "public"."services"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."faq" ADD CONSTRAINT "faq_formationId_fkey" FOREIGN KEY ("formationId") REFERENCES "public"."formations"("id") ON DELETE CASCADE ON UPDATE CASCADE;
