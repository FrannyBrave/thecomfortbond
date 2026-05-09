import sharp from 'sharp';
const src = '/dev-server/src/assets/blueprint-hero-flatlay.png';
const base = '/dev-server/public/lcp/blueprint-hero';
for (const w of [480, 768, 1280]) {
  await sharp(src).resize({ width: w }).avif({ quality: 55 }).toFile(`${base}-${w}.avif`);
  await sharp(src).resize({ width: w }).webp({ quality: 78 }).toFile(`${base}-${w}.webp`);
}
console.log('done');
