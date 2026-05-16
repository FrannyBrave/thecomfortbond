import sharp from 'sharp';
import { mkdirSync } from 'fs';

const outDir = '/dev-server/public/lcp';
mkdirSync(outDir, { recursive: true });

const jobs = [
  { src: '/dev-server/src/assets/shop-hero-garden-memories.png', base: 'shop-hero', widths: [480, 768, 1024, 1280] },
  { src: '/dev-server/src/assets/comfort-bond-collection.png', base: 'collection', widths: [480, 768, 1100] },
  { src: '/dev-server/src/assets/connection-season-summer-edition-family-memory-kit-grandparents.png', base: 'summer-edition', widths: [480, 768, 1100] },
];

for (const { src, base, widths } of jobs) {
  for (const w of widths) {
    await sharp(src).resize({ width: w }).avif({ quality: 55 }).toFile(`${outDir}/${base}-${w}.avif`);
    await sharp(src).resize({ width: w }).webp({ quality: 78 }).toFile(`${outDir}/${base}-${w}.webp`);
    console.log(`${base}-${w} done`);
  }
}
