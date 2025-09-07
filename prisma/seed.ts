import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();


async function main() {
  console.log('Seeding database (intégral)...');

  // 1. SiteIdentity
  await prisma.siteIdentity.create({
    data: {
      nom: 'Neill Make Up à Annecy',
      slogan: 'Sublimez votre beauté, révélez votre personnalité',
      description: 'Neill Make Up à Annecy propose des prestations de maquillage professionnel, formations, conseils beauté et accompagnement personnalisé pour tous vos événements.',
      adresse: '12 rue Royale',
      codePostal: '74000',
      ville: 'Annecy',
      pays: 'France',
      telephone: '+33 6 12 34 56 78',
      email: 'contact@neillmakeup.fr',
      siteUrl: 'https://www.neillmakeup.fr',
      logo: '/assets/logo-neillmakeup-annecy.svg',
      heroImage: '/assets/mariee-annecy.jpg',
      facebook: 'https://facebook.com/neillmakeup',
      instagram: 'https://instagram.com/neillmakeup',
      linkedin: 'https://linkedin.com/company/neillmakeup',
      tiktok: 'https://tiktok.com/@neillmakeup',
      youtube: 'https://youtube.com/@neillmakeup',
      mentionsLegales: 'Mentions légales : Neill Make Up, 12 rue Royale, 74000 Annecy. SIRET 123 456 789 00012. Responsable : Neill Dupont.',
      politiqueConfidentialite: 'Politique de confidentialité conforme RGPD disponible sur le site.',
      diplomePrincipal: 'Diplôme d\'État Maquilleur Professionnel',
      certifications: 'Certifiée Make Up For Ever, MAC Pro, Lauréate Wedding Awards 2024',
      horaires: 'Lundi-samedi 9h-19h, sur rendez-vous',
      stats: JSON.stringify([
        { label: 'Clients', value: 1200 },
        { label: 'Années d\'expérience', value: 15 },
        { label: 'Formations', value: 20 },
        { label: 'Avis 5★', value: 350 },
        { label: 'Défilés', value: 12 }
      ])
    }
  });

  // 2. Team
  const team = await prisma.team.create({
    data: {
      nom: 'Neill Dupont',
      role: 'Maquilleuse Professionnelle & Formatrice',
      bio: 'Passionnée de beauté depuis plus de 10 ans, Neill vous accompagne dans la révélation de votre personnalité à travers un maquillage sur-mesure.',
      photo: '/assets/team-neill-dupont.webp',
      email: 'neill@neillmakeup.fr',
      telephone: '+33 6 12 34 56 78',
      linkedin: 'https://linkedin.com/in/neill-dupont-makeup',
      instagram: 'https://instagram.com/neill_makeup_annecy',
      certifications: 'Certifiée Make Up For Ever, MAC Pro',
      diplome: 'Diplôme d\'État Maquilleur Professionnel',
      isActive: 1
    }
  });

  // 3. Services (exemples variés avec images du dossier assets)
  const service1 = await prisma.service.create({
    data: {
      nom: 'Maquillage Mariée',
      description: 'Le jour J mérite un maquillage d\'exception. Sublimez votre beauté naturelle pour un look intemporel et romantique.',
      content: 'Prestation complète incluant essai, maquillage du jour J et retouches. Produits haut de gamme longue tenue.',
      notes: 'Essai obligatoire 2 semaines avant. Déplacement possible selon secteur.',
      prix: 250.0,
      image: '/assets/maquillage-mariee-annecy.webp',
      imageAlt: 'Maquillage mariée romantique et intemporel',
      icon: 'mdi:heart',
      categorie: 'Mariage',
      tags: JSON.stringify(['mariée', 'mariage', 'romantique', 'longue tenue']),
      steps: JSON.stringify(['Consultation', 'Essai maquillage', 'Jour J', 'Retouches']),
      duree: '3h (essai + jour J)',
      durationMinutes: 180,
      slug: 'maquillage-mariee',
      isActive: 1,
      isFeatured: 1
    }
  });
  const service2 = await prisma.service.create({
    data: {
      nom: 'Shooting Photo',
      description: 'Maquillage professionnel adapté à la photographie pour des clichés parfaits.',
      content: 'Technique spécifique photo/vidéo, jeu de lumières et ombres, correction des imperfections.',
      notes: 'Collaboration avec photographes professionnels d\'Annecy.',
      prix: 120.0,
      image: '/assets/maquillage-shooting-annecy.webp',
      imageAlt: 'Maquillage professionnel pour shooting photo',
      icon: 'mdi:camera',
      categorie: 'Professionnel',
      tags: JSON.stringify(['photo', 'shooting', 'professionnel', 'studio']),
      steps: JSON.stringify(['Brief créatif', 'Préparation peau', 'Maquillage', 'Retouches plateau']),
      duree: '2h',
      durationMinutes: 120,
      slug: 'shooting-photo',
      isActive: 1,
      isFeatured: 1
    }
  });
  const service3 = await prisma.service.create({
    data: {
      nom: 'Maquillage Soirée',
      description: 'Look glamour, smoky eyes, paillettes ou naturel sophistiqué pour vos soirées.',
      content: 'Maquillage longue tenue, conseils personnalisés, retouches incluses.',
      notes: 'Idéal pour mariages, galas, anniversaires.',
      prix: 90.0,
      image: '/assets/maquillage-soiree-annecy.webp',
      imageAlt: 'Maquillage soirée glamour',
      icon: 'mdi:star',
      categorie: 'Soirée',
      tags: JSON.stringify(['soirée', 'glamour', 'smoky', 'paillettes']),
      steps: JSON.stringify(['Conseil look', 'Préparation', 'Maquillage', 'Finitions']),
      duree: '1h30',
      durationMinutes: 90,
      slug: 'maquillage-soiree',
      isActive: 1,
      isFeatured: 1
    }
  });
  const service4 = await prisma.service.create({
    data: {
      nom: 'Effets Spéciaux (FX)',
      description: 'Maquillage FX pour Halloween, cinéma, shooting créatif ou festival.',
      content: 'Prothèses, faux sang, transformations, body painting.',
      notes: 'Sur devis selon projet.',
      prix: 180.0,
      image: '/assets/maquillage-fx-annecy.webp',
      imageAlt: 'Maquillage effets spéciaux FX',
      icon: 'mdi:emoticon-devil',
      categorie: 'FX',
      tags: JSON.stringify(['fx', 'halloween', 'cinéma', 'body painting']),
      steps: JSON.stringify(['Brief créatif', 'Préparation', 'Maquillage FX', 'Finitions']),
      duree: '2h30',
      durationMinutes: 150,
      slug: 'maquillage-fx',
      isActive: 1,
      isFeatured: 0
    }
  });
  const service5 = await prisma.service.create({
    data: {
      nom: 'Maquillage Enfant',
      description: 'Maquillage festif pour enfants : papillons, super-héros, princesses, animaux.',
      content: 'Produits hypoallergéniques, adaptés aux peaux sensibles.',
      notes: 'Idéal pour anniversaires, kermesses, festivals.',
      prix: 40.0,
      image: '/assets/maquillage-enfant-annecy.webp',
      imageAlt: 'Maquillage enfant papillon',
      icon: 'mdi:face',
      categorie: 'Enfant',
      tags: JSON.stringify(['enfant', 'festif', 'papillon', 'super-héros']),
      steps: JSON.stringify(['Choix du motif', 'Préparation', 'Maquillage', 'Photo souvenir']),
      duree: '30min',
      durationMinutes: 30,
      slug: 'maquillage-enfant',
      isActive: 1,
      isFeatured: 0
    }
  });

  // 4. Formations (plusieurs avec images du dossier assets)
  const formation1 = await prisma.formation.create({
  data: {
      titre: 'Formation Maquillage Professionnel',
      badge: 'Populaire',
      subtitle: 'Devenez maquilleur pro',
      participants: 12,
      level: 'Avancé',
      program: JSON.stringify(['Techniques de base', 'Maquillage beauté', 'Maquillage mode', 'Business du maquillage']),
      description: 'Formation complète pour devenir maquilleur professionnel. Techniques avancées et business.',
      content: 'Programme intensif couvrant toutes les techniques de maquillage professionnel.',
      prix: 1200.0,
      image: '/assets/formation-maquillage-pro-annecy.webp',
      imageAlt: 'Formation maquillage professionnel Annecy',
      icon: 'mdi:school',
      categorie: 'Professionnel',
      tags: JSON.stringify(['formation', 'professionnel', 'technique', 'diplôme']),
      steps: JSON.stringify(['Théorie', 'Pratique', 'Évaluation', 'Certification']),
      duree: '5 jours',
      durationMinutes: 2400,
      slug: 'formation-maquillage-professionnel',
      isActive: 1,
      isFeatured: 1,
  certification: 'Certificat Neill Make Up',
      advantages: JSON.stringify([
        {
          icon: 'mdi:school',
          title: 'Formateurs experts',
          description: 'Apprenez auprès de professionnels reconnus du maquillage.'
        },
        {
          icon: 'mdi:certificate',
          title: 'Certificats délivrés',
          description: "Obtenez une attestation ou un certificat à l'issue de chaque formation."
        },
        {
          icon: 'mdi:account-group',
          title: 'Groupes à taille humaine',
          description: 'Des sessions limitées pour un accompagnement personnalisé.'
        },
        {
          icon: 'mdi:star',
          title: 'Satisfaction garantie',
          description: 'Plus de 350 avis 5★ de stagiaires et clientes.'
        }
      ])
    }
  });
  const formation2 = await prisma.formation.create({
  data: {
      titre: 'Initiation Beauté',
      badge: 'Nouveau',
      subtitle: 'Bases du maquillage',
      participants: 16,
      level: 'Débutant',
      program: JSON.stringify(['Hygiène', 'Préparation de la peau', 'Maquillage naturel', 'Conseils personnalisés']),
      description: 'Atelier découverte pour apprendre les bases du maquillage beauté.',
      content: 'Techniques simples, conseils personnalisés, mise en pratique sur soi-même.',
      prix: 180.0,
      image: '/assets/formation-initiation-beaute-annecy.png',
      imageAlt: 'Atelier initiation beauté',
      icon: 'mdi:brush',
      categorie: 'Découverte',
      tags: JSON.stringify(['initiation', 'beauté', 'atelier', 'découverte']),
      steps: JSON.stringify(['Théorie', 'Démonstration', 'Pratique', 'Conseils']),
      duree: '1 jour',
      durationMinutes: 360,
      slug: 'initiation-beaute',
      isActive: 1,
      isFeatured: 1,
  certification: 'Attestation de participation',
      advantages: JSON.stringify([
        {
          icon: 'mdi:school',
          title: 'Formateurs experts',
          description: 'Apprenez auprès de professionnels reconnus du maquillage.'
        },
        {
          icon: 'mdi:certificate',
          title: 'Certificats délivrés',
          description: "Obtenez une attestation ou un certificat à l'issue de chaque formation."
        },
        {
          icon: 'mdi:account-group',
          title: 'Groupes à taille humaine',
          description: 'Des sessions limitées pour un accompagnement personnalisé.'
        },
        {
          icon: 'mdi:star',
          title: 'Satisfaction garantie',
          description: 'Plus de 350 avis 5★ de stagiaires et clientes.'
        }
      ])
    }
  });
  const formation3 = await prisma.formation.create({
  data: {
      titre: 'Perfectionnement Artistique',
      badge: 'Spécialisé',
      subtitle: 'Techniques artistiques avancées',
      participants: 8,
      level: 'Expert',
      program: JSON.stringify(['Face chart', 'Effets spéciaux', 'Créativité', 'Feedback personnalisé']),
      description: 'Techniques avancées, créativité, effets spéciaux, face chart.',
      content: 'Pour maquilleurs confirmés souhaitant se perfectionner.',
      prix: 350.0,
      image: '/assets/formation-perfectionnement-artistique-annecy.webp',
      imageAlt: 'Perfectionnement artistique',
      icon: 'mdi:palette',
      categorie: 'Avancé',
      tags: JSON.stringify(['artistique', 'avancé', 'fx', 'face chart']),
      steps: JSON.stringify(['Analyse', 'Démonstration', 'Pratique', 'Feedback']),
      duree: '2 jours',
      durationMinutes: 720,
      slug: 'perfectionnement-artistique',
      isActive: 1,
      isFeatured: 0,
  certification: 'Certificat avancé',
      advantages: JSON.stringify([
        {
          icon: 'mdi:school',
          title: 'Formateurs experts',
          description: 'Apprenez auprès de professionnels reconnus du maquillage.'
        },
        {
          icon: 'mdi:certificate',
          title: 'Certificats délivrés',
          description: "Obtenez une attestation ou un certificat à l'issue de chaque formation."
        },
        {
          icon: 'mdi:account-group',
          title: 'Groupes à taille humaine',
          description: 'Des sessions limitées pour un accompagnement personnalisé.'
        },
        {
          icon: 'mdi:star',
          title: 'Satisfaction garantie',
          description: 'Plus de 350 avis 5★ de stagiaires et clientes.'
        }
      ])
    }
  });
  const formation4 = await prisma.formation.create({
  data: {
      titre: 'Smoky Eyes Masterclass',
      badge: 'Certifiante',
      subtitle: 'Maîtrisez le smoky eyes',
      participants: 10,
      level: 'Intermédiaire',
      program: JSON.stringify(['Dégradé', 'Intensité', 'Choix des couleurs', 'Photo finale']),
      description: 'Maîtrisez le smoky eyes sous toutes ses formes.',
      content: 'Techniques dégradées, intensité, choix des couleurs.',
      prix: 120.0,
      image: '/assets/formation-smoky-eyes-annecy.webp',
      imageAlt: 'Masterclass smoky eyes',
      icon: 'mdi:eye',
      categorie: 'Masterclass',
      tags: JSON.stringify(['smoky', 'masterclass', 'yeux', 'intensité']),
      steps: JSON.stringify(['Théorie', 'Démonstration', 'Pratique', 'Photo finale']),
      duree: '1/2 journée',
      durationMinutes: 180,
      slug: 'smoky-eyes',
      isActive: 1,
      isFeatured: 0,
  certification: 'Attestation',
      advantages: JSON.stringify([
        {
          icon: 'mdi:school',
          title: 'Formateurs experts',
          description: 'Apprenez auprès de professionnels reconnus du maquillage.'
        },
        {
          icon: 'mdi:certificate',
          title: 'Certificats délivrés',
          description: "Obtenez une attestation ou un certificat à l'issue de chaque formation."
        },
        {
          icon: 'mdi:account-group',
          title: 'Groupes à taille humaine',
          description: 'Des sessions limitées pour un accompagnement personnalisé.'
        },
        {
          icon: 'mdi:star',
          title: 'Satisfaction garantie',
          description: 'Plus de 350 avis 5★ de stagiaires et clientes.'
        }
      ])
    }
  });

  // 5. Utilisateurs
  const hashAdmin = await bcrypt.hash('admin123', 10);
  const hash1 = await bcrypt.hash('sophie2025', 10);
  const hash2 = await bcrypt.hash('camille2025', 10);
  const hash3 = await bcrypt.hash('julie2025', 10);

  const admin = await prisma.user.create({
    data: {
      nom: 'Admin',
      email: 'admin@neillmakeup.fr',
      role: 'admin',
      password: hashAdmin
    }
  });
  const sophie = await prisma.user.create({
    data: {
      nom: 'Sophie Martin',
      email: 'sophie.martin@email.fr',
      role: 'client',
      password: hash1
    }
  });
  const camille = await prisma.user.create({
    data: {
      nom: 'Camille Dubois',
      email: 'camille.dubois@email.fr',
      role: 'client',
      password: hash2
    }
  });
  const julie = await prisma.user.create({
    data: {
      nom: 'Julie Rousseau',
      email: 'julie.rousseau@email.fr',
      role: 'client',
      password: hash3
    }
  });

  // 6. Réservations
  const resAdmin = await prisma.reservation.create({
    data: {
      userId: admin.id,
      serviceId: service1.id,
      date: '2025-09-01',
      time: '10:00',
      status: 'confirmée',
      notes: 'Réservation admin'
    }
  });
  const resSophie = await prisma.reservation.create({
    data: {
      userId: sophie.id,
      serviceId: service2.id,
      date: '2025-09-02',
      time: '14:00',
      status: 'confirmée',
      notes: 'Shooting photo'
    }
  });
  const resCamille = await prisma.reservation.create({
    data: {
      userId: camille.id,
      serviceId: service1.id,
      date: '2025-09-03',
      time: '11:00',
      status: 'confirmée',
      notes: 'Maquillage mariée'
    }
  });
  const resJulie = await prisma.reservation.create({
    data: {
      userId: julie.id,
      serviceId: service2.id,
      date: '2025-09-04',
      time: '16:00',
      status: 'confirmée',
      notes: 'Shooting photo'
    }
  });

  // 7. Factures
  await prisma.facture.create({
    data: {
      reservationId: resAdmin.id,
      userId: admin.id,
      amount: 250.0,
      status: 'payée',
      pdfUrl: '/factures/admin-1.pdf',
      createdAt: '2025-09-01',
      updatedAt: '2025-09-01'
    }
  });
  await prisma.facture.create({
    data: {
      reservationId: resSophie.id,
      userId: sophie.id,
      amount: 120.0,
      status: 'en attente',
      pdfUrl: '/factures/sophie-1.pdf',
      createdAt: '2025-09-02',
      updatedAt: '2025-09-02'
    }
  });
  await prisma.facture.create({
    data: {
      reservationId: resCamille.id,
      userId: camille.id,
      amount: 250.0,
      status: 'payée',
      pdfUrl: '/factures/camille-1.pdf',
      createdAt: '2025-09-03',
      updatedAt: '2025-09-03'
    }
  });
  await prisma.facture.create({
    data: {
      reservationId: resJulie.id,
      userId: julie.id,
      amount: 120.0,
      status: 'payée',
      pdfUrl: '/factures/julie-1.pdf',
      createdAt: '2025-09-04',
      updatedAt: '2025-09-04'
    }
  });

  // 6. Galerie (plusieurs images variées du dossier assets)
  await prisma.galerie.createMany({
    data: [
      {
        title: 'Atelier auto-maquillage',
        imageUrl: '/assets/galerie-atelier-auto-maquillage-annecy.webp',
        alt: 'Atelier auto-maquillage',
        description: 'Atelier pratique pour apprendre à se maquiller soi-même.',
        uploadedBy: 'Neill Dupont',
        createdAt: '2025-09-01',
        global: 1,
        servicesGlobal: 1,
        formationsGlobal: 1,
        serviceId: service1.id
      },
      {
        title: 'Maquillage festival',
        imageUrl: '/assets/galerie-festival-colore-annecy.webp',
        alt: 'Maquillage festival coloré',
        description: 'Looks colorés et créatifs pour festivals.',
        uploadedBy: 'Neill Dupont',
        createdAt: '2025-09-02',
        global: 1,
        servicesGlobal: 1,
        formationsGlobal: 0,
        serviceId: service3.id
      },
      {
        title: 'Effets spéciaux FX',
        imageUrl: '/assets/galerie-halloween-fx-annecy.webp',
        alt: 'FX Halloween',
        description: 'Maquillage FX pour Halloween et cinéma.',
        uploadedBy: 'Neill Dupont',
        createdAt: '2025-09-03',
        global: 1,
        servicesGlobal: 1,
        formationsGlobal: 1,
        serviceId: service4.id
      },
      {
        title: 'Shooting mode',
        imageUrl: '/assets/galerie-shooting-mode-annecy.webp',
        alt: 'Shooting mode',
        description: 'Maquillage pour shooting mode et studio.',
        uploadedBy: 'Neill Dupont',
        createdAt: '2025-09-04',
        global: 1,
        servicesGlobal: 1,
        formationsGlobal: 0,
        serviceId: service2.id
      },
      {
        title: 'Maquillage enfant papillon',
        imageUrl: '/assets/galerie-maquillage-enfant-papillon-annecy.webp',
        alt: 'Maquillage enfant papillon',
        description: 'Maquillage festif pour enfants.',
        uploadedBy: 'Neill Dupont',
        createdAt: '2025-09-05',
        global: 1,
        servicesGlobal: 1,
        formationsGlobal: 0,
        serviceId: service5.id
      }
    ]
  });
  await prisma.avis.create({
    data: {
      utilisateur: 'Sophie Martin',
      commentaire: 'Super prestation, je recommande !',
      note: 5,
      global: 1,
      servicesGlobal: 1,
      formationsGlobal: 0,
      serviceId: service1.id
    }
  });
  await prisma.faq.create({
    data: {
      question: 'Faut-il réserver longtemps à l\'avance ?',
      reponse: 'Oui, il est conseillé de réserver au moins 2 semaines à l\'avance.',
      global: 1,
      servicesGlobal: 1,
      formationsGlobal: 0,
      serviceId: service1.id
    }
  });

  // 7. BlockedSlot
  await prisma.blockedSlot.create({
    data: {
      title: 'Congés annuels',
      start: '2025-12-20',
      end: '2026-01-05',
      allDay: 1
    }
  });

  console.log('Database seeded successfully!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });