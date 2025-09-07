
import 'dotenv/config';



import { PrismaClient } from '@prisma/client';


function color(text: string, code: number) {
  return `\x1b[${code}m${text}\x1b[0m`;
}

const prisma = new PrismaClient({
  datasources: { db: { url: process.env.DATABASE_URL } }
});


async function main() {
  const url = process.env.DATABASE_URL;
  console.log(`\nURL utilisée   : ${color(url || 'non définie', 36)}`);
  try {
    await prisma.$connect();
    console.log(color('✔ Connexion à la base de données réussie !', 32));

    // Liste des tables et count
    const tables = [
      { name: 'utilisateurs', label: 'User', fn: () => prisma.user.count() },
      { name: 'services', label: 'Service', fn: () => prisma.service.count() },
      { name: 'formations', label: 'Formation', fn: () => prisma.formation.count() },
      { name: 'reservations', label: 'Reservation', fn: () => prisma.reservation.count() },
      { name: 'factures', label: 'Facture', fn: () => prisma.facture.count() },
      { name: 'galerie', label: 'Galerie', fn: () => prisma.galerie.count() },
      { name: 'avis', label: 'Avis', fn: () => prisma.avis.count() },
      { name: 'site_identity', label: 'SiteIdentity', fn: () => prisma.siteIdentity.count() },
      { name: 'team', label: 'Team', fn: () => prisma.team.count() },
      { name: 'blocked_slots', label: 'BlockedSlot', fn: () => prisma.blockedSlot.count() },
      { name: 'faq', label: 'Faq', fn: () => prisma.faq.count() },
    ];
    console.log('\nTables et nombre de lignes :');
    for (const t of tables) {
      try {
        const count = await t.fn();
        console.log(`  ${color(t.label.padEnd(16), 36)} : ${color(count.toString(), 32)}`);
      } catch (e) {
        console.log(`  ${color(t.label.padEnd(16), 36)} : ${color('inconnue', 31)}`);
      }
    }
    await prisma.$disconnect();
    process.exit(0);
  } catch (error) {
    console.error(color('✖ Erreur de connexion à la base de données :', 31), error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

main();
