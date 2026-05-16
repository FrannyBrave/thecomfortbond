import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = 'src/assets';
const MAX_W = 1400;
let totalBefore = 0, totalAfter = 0;

const files = fs.readdirSync(dir).filter(f => /\.(png|jpe?g)$/i.test(f));

for (const f of files) {
  const p = path.join(dir, f);
  const before = fs.statSync(p).size;
  if (before < 150 * 1024) { totalBefore += before; totalAfter += before; continue; }
  try {
    const img = sharp(p, { failOn: 'none' });
    const meta = await img.metadata();
    const w = meta.width > MAX_W ? MAX_W : meta.width;
    let pipeline = sharp(p, { failOn: 'none' }).resize({ width: w, withoutEnlargement: true });
    const ext = path.extname(f).toLowerCase();
    let buf;
    if (ext === '.png') {
      buf = await pipeline.png({ quality: 82, compressionLevel: 9, effort: 10, palette: true }).toBuffer();
    } else {
      buf = await pipeline.jpeg({ quality: 82, mozjpeg: true, progressive: true }).toBuffer();
    }
    if (buf.length < before) {
      fs.writeFileSync(p, buf);
      totalBefore += before;
      totalAfter += buf.length;
      console.log(`${f}: ${(before/1024).toFixed(0)}KB → ${(buf.length/1024).toFixed(0)}KB`);
    } else {
      totalBefore += before; totalAfter += before;
      console.log(`${f}: skipped (no gain)`);
    }
  } catch (e) {
    console.log(`${f}: ERROR ${e.message}`);
    totalBefore += before; totalAfter += before;
  }
}
console.log(`\nTotal: ${(totalBefore/1024/1024).toFixed(1)}MB → ${(totalAfter/1024/1024).toFixed(1)}MB`);
