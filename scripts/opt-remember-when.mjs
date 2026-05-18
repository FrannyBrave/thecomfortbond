import sharp from 'sharp';
import fs from 'fs';
const files = [
  'the-comfort-bond-remember-when-kit-conversation-cards-for-parents-grandparents',
  'remember-when-kit-conversation-cards-family-memories-1950s-1960s',
  'remember-when-kit-vintage-picture-cards-conversation-starters-grandparents',
  'remember-when-kit-picture-word-memory-bingo-game-grandparents-grandchildren',
  'remember-when-kit-grandmother-conversation-cards-tea',
];
for (const base of files) {
  const src = `src/assets/${base}.png`;
  if (!fs.existsSync(src)) continue;
  const isHero = base.includes('hero');
  const widths = isHero ? [800, 1200, 1600] : [600, 900, 1200];
  for (const w of widths) {
    await sharp(src).resize({ width: w }).webp({ quality: 80 }).toFile(`src/assets/${base}-${w}.webp`);
    await sharp(src).resize({ width: w }).avif({ quality: 55 }).toFile(`src/assets/${base}-${w}.avif`);
  }
  // fallback jpg
  await sharp(src).resize({ width: isHero ? 1200 : 900 }).jpeg({ quality: 82, mozjpeg: true }).toFile(`src/assets/${base}.jpg`);
  console.log('done', base);
}
