import sharp from 'sharp';
import fs from 'fs';
const files = [
  ['places-weve-been-kit-hero-two-people-using-kit', true],
  ['places-weve-been-kit-cover-on-table', false],
  ['places-weve-been-kit-visual-spark-cards', false],
  ['places-weve-been-kit-conversation-card-family-road-trip', false],
  ['places-weve-been-kit-games-trivia-word-bingo-cards', false],
  ['places-weve-been-kit-picture-word-bingo-board', false],
];
for (const [base, isHero] of files) {
  const src = `src/assets/${base}.png`;
  if (!fs.existsSync(src)) { console.log('missing', src); continue; }
  const widths = isHero ? [800, 1200, 1600] : [600, 900, 1200];
  for (const w of widths) {
    await sharp(src).resize({ width: w }).webp({ quality: 80 }).toFile(`src/assets/${base}-${w}.webp`);
    await sharp(src).resize({ width: w }).avif({ quality: 55 }).toFile(`src/assets/${base}-${w}.avif`);
  }
  await sharp(src).resize({ width: isHero ? 1200 : 900 }).jpeg({ quality: 82, mozjpeg: true }).toFile(`src/assets/${base}.jpg`);
  fs.unlinkSync(src);
  console.log('done', base);
}
