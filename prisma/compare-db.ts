#!/usr/bin/env node
// compare-db.ts : Compare les tables, le nombre de lignes et les valeurs entre deux bases (dev/prod)
// Usage: tsx prisma/compare-db.ts [--from dev|prod] [--to dev|prod] [--force]

import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';
import * as process from 'process';

// Load .env
dotenv.config();

const urlDev = process.env.DATABASE_URL_DEV;
const urlProd = process.env.DATABASE_URL_PROD;

function getPrisma(url: string) {
  return new PrismaClient({ datasources: { db: { url } } });
}

function color(text: string, code: number) {
  return `\x1b[${code}m${text}\x1b[0m`;
}

const TABLES = [
  { name: 'user', label: 'User' },
  { name: 'service', label: 'Service' },
  { name: 'formation', label: 'Formation' },
  { name: 'reservation', label: 'Reservation' },
  { name: 'facture', label: 'Facture' },
  { name: 'galerie', label: 'Galerie' },
  { name: 'avis', label: 'Avis' },
  { name: 'siteIdentity', label: 'SiteIdentity' },
  { name: 'team', label: 'Team' },
  { name: 'blockedSlot', label: 'BlockedSlot' },
  { name: 'faq', label: 'Faq' },
];

async function getTableRows(prisma: PrismaClient, table: string) {
  // @ts-ignore
  return await prisma[table].findMany();
}

async function compareTables(prismaA: PrismaClient, prismaB: PrismaClient, labelA: string, labelB: string, forceSync: boolean, direction: 'AtoB' | 'BtoA') {
  let allOk = true;
  for (const t of TABLES) {
    const rowsA = await getTableRows(prismaA, t.name);
    const rowsB = await getTableRows(prismaB, t.name);
    const countA = rowsA.length;
    const countB = rowsB.length;
    const sameCount = countA === countB;
    const sameContent = sameCount && JSON.stringify(rowsA) === JSON.stringify(rowsB);
    const status = sameContent ? color('OK', 32) : color('DIFF', 31);
    console.log(`${t.label.padEnd(16)} : ${labelA}=${countA} | ${labelB}=${countB} [${status}]`);
    if (!sameContent) allOk = false;
    if (forceSync) {
      if (direction === 'AtoB') {
        // @ts-ignore
        await prismaB[t.name].deleteMany();
        // @ts-ignore
        await prismaB[t.name].createMany({ data: rowsA });
        console.log(color(`→ ${t.label}: ${labelA} → ${labelB} (synchronisé)`, 36));
      } else {
        // @ts-ignore
        await prismaA[t.name].deleteMany();
        // @ts-ignore
        await prismaA[t.name].createMany({ data: rowsB });
        console.log(color(`→ ${t.label}: ${labelB} → ${labelA} (synchronisé)`, 36));
      }
    }
  }
  return allOk;
}

async function main() {
  const args = process.argv.slice(2);
  const from = args.includes('--from') ? args[args.indexOf('--from') + 1] : 'dev';
  const to = args.includes('--to') ? args[args.indexOf('--to') + 1] : 'prod';
  const force = args.includes('--force');
  const direction = args.includes('--from') && args.includes('--to') && from !== to ? (from === 'dev' ? 'AtoB' : 'BtoA') : 'AtoB';

  const urlA = from === 'dev' ? urlDev : urlProd;
  const urlB = to === 'dev' ? urlDev : urlProd;
  if (!urlA || !urlB) {
    console.error('DATABASE_URL_DEV et DATABASE_URL_PROD doivent être définies dans .env');
    process.exit(1);
  }
  const labelA = from.toUpperCase();
  const labelB = to.toUpperCase();
  const prismaA = getPrisma(urlA);
  const prismaB = getPrisma(urlB);
  console.log(color(`Comparaison des bases : ${labelA} <-> ${labelB}`, 36));
  const allOk = await compareTables(prismaA, prismaB, labelA, labelB, force, direction as 'AtoB' | 'BtoA');
  await prismaA.$disconnect();
  await prismaB.$disconnect();
  if (allOk) {
    console.log(color('Les deux bases sont identiques.', 32));
    process.exit(0);
  } else if (!force) {
    console.log(color('Des différences ont été détectées.', 33));
    process.exit(2);
  } else {
    console.log(color('Synchronisation terminée.', 32));
    process.exit(0);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
