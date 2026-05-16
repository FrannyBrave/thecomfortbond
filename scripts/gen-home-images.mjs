import sharp from 'sharp';
import { mkdirSync } from 'fs';

const outDir = '/dev-server/public/lcp';
mkdirSync(outDir, { recursive: true });

const jobs = [
  { src: '/dev-server/src/assets/conversation-cards-for-aging-parents-the-comfort-bond.png', base: 'home-hero', widths: [480, 768, 1024, 1280] },
  { src: '/dev-server/src/assets/conversation-starters-aging-parents-grandparents-family-stories.png', base: 'home-final-cta', widths: [480, 768, 1100] },
  { src: '/dev-server/src/assets/connection-companion-meaningful-visit-planner-aging-parents.png', base: 'home-connection-companion', widths: [480, 768] },
  { src: '/dev-server/src/assets/coffee-connection-sampler-free-conversation-starters-aging-parents.png', base: 'home-coffee-sampler', widths: [480, 768] },
  { src: '/dev-server/src/assets/comfort-bond-collection-family-video-call-conversation-cards.png', base: 'home-collection', widths: [480, 768, 1100] },
  { src: '/dev-server/src/assets/meaningful-gifts-aging-parents-grandparents-memory-kits.png', base: 'home-founder', widths: [480, 768] },
];

for (const { src, base, widths } of jobs) {
  for (const w of widths) {
    await sharp(src).resize({ width: w }).avif({ quality: 55 }).toFile(`${outDir}/${base}-${w}.avif`);
    await sharp(src).resize({ width: w }).webp({ quality: 78 }).toFile(`${outDir}/${base}-${w}.webp`);
  }
  console.log(`${base} done`);
}
