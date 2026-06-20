// scripts/generate-og.mjs
// Tek seferlik görsel üretimi: OG paylaşım kartı + kare marka logosu + apple-icon.
// Kaynak: public/images/AphasiaReverbisLogo.svg içindeki base64 gömülü PNG (wordmark).
// Çalıştır: node scripts/generate-og.mjs  (çıktılar commit'lenir; statik export runtime'ı etkilenmez)

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

// Marka renkleri (design token'larla aynı)
const TRUST_BLUE = "#0052CC";
const HEALING_TEAL = "#00A3BF";
const INK = "#0B1220";

// 1) Wordmark PNG'yi SVG'den çıkar
const svg = readFileSync(resolve(root, "public/images/AphasiaReverbisLogo.svg"), "utf8");
const m = svg.match(/data:image\/png;base64,([A-Za-z0-9+/=]+)/);
if (!m) {
  console.error("HATA: SVG içinde gömülü PNG bulunamadı.");
  process.exit(1);
}
const logoBuf = Buffer.from(m[1], "base64");

// Logoyu kenar boşluklarından kırp (tight bounds)
const logoTrimmed = await sharp(logoBuf).trim().png().toBuffer();
const logoMeta = await sharp(logoTrimmed).metadata();
console.log(`Trimlenmiş logo: ${logoMeta.width}x${logoMeta.height}`);

// ── Çıktı 1: public/og-cover.png (1200×630) ──
const OG_W = 1200;
const OG_H = 630;

// Logoyu OG kartına sığdır: maks genişlik 760px, maks yükseklik 300px
const ogLogoMaxW = 760;
const ogLogoMaxH = 300;
const ogLogo = await sharp(logoTrimmed)
  .resize(ogLogoMaxW, ogLogoMaxH, { fit: "inside", withoutEnlargement: true })
  .toBuffer();
const ogLogoMeta = await sharp(ogLogo).metadata();
const ogLogoLeft = Math.round((OG_W - ogLogoMeta.width) / 2);
const ogLogoTop = Math.round(OG_H / 2 - ogLogoMeta.height / 2 - 40);

const ogBackground = Buffer.from(`
<svg width="${OG_W}" height="${OG_H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#eef4ff"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${TRUST_BLUE}"/>
      <stop offset="100%" stop-color="${HEALING_TEAL}"/>
    </linearGradient>
  </defs>
  <rect width="${OG_W}" height="${OG_H}" fill="url(#bg)"/>
  <rect x="0" y="0" width="${OG_W}" height="8" fill="url(#accent)"/>
  <rect x="0" y="${OG_H - 8}" width="${OG_W}" height="8" fill="url(#accent)"/>
  <text x="${OG_W / 2}" y="${OG_H - 120}" text-anchor="middle"
        font-family="Inter, Arial, sans-serif" font-size="38" font-weight="700" fill="${INK}">
    Terapist Kontrollü Dijital Afazi Rehabilitasyonu
  </text>
  <text x="${OG_W / 2}" y="${OG_H - 70}" text-anchor="middle"
        font-family="Inter, Arial, sans-serif" font-size="26" font-weight="500" fill="${TRUST_BLUE}">
    TÜBİTAK Destekli · KVKK Uyumlu · Veri Odaklı Takip
  </text>
</svg>`);

await sharp(ogBackground)
  .composite([{ input: ogLogo, left: ogLogoLeft, top: ogLogoTop }])
  .png()
  .toFile(resolve(root, "public/og-cover.png"));
console.log("✓ public/og-cover.png (1200×630)");

// ── Çıktı 2: public/logo-512.png (512×512, beyaz kare zemin) ──
const SQ = 512;
const sqLogo = await sharp(logoTrimmed)
  .resize(SQ - 96, SQ - 96, { fit: "inside", withoutEnlargement: true })
  .toBuffer();
const sqLogoMeta = await sharp(sqLogo).metadata();
await sharp({
  create: { width: SQ, height: SQ, channels: 4, background: "#ffffff" },
})
  .composite([
    {
      input: sqLogo,
      left: Math.round((SQ - sqLogoMeta.width) / 2),
      top: Math.round((SQ - sqLogoMeta.height) / 2),
    },
  ])
  .png()
  .toFile(resolve(root, "public/logo-512.png"));
console.log("✓ public/logo-512.png (512×512)");

// ── Çıktı 3: src/app/apple-icon.png (180×180) ──
mkdirSync(resolve(root, "src/app"), { recursive: true });
await sharp(resolve(root, "public/logo-512.png"))
  .resize(180, 180)
  .png()
  .toFile(resolve(root, "src/app/apple-icon.png"));
console.log("✓ src/app/apple-icon.png (180×180)");

console.log("\nTüm görseller üretildi.");
