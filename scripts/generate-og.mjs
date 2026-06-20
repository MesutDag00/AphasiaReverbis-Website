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

// 1) Wordmark PNG'yi SVG'den çıkar (logo-512 ve apple-icon için)
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
// Kaynak: public/images/og-source.png (cihaz mockup'lı marka görseli).
// 1.90 ≈ 1.91 oran olduğundan cover ile kırpma neredeyse yok.
const OG_W = 1200;
const OG_H = 630;
await sharp(resolve(root, "public/images/og-source.png"))
  .resize(OG_W, OG_H, { fit: "cover", position: "centre" })
  .png({ quality: 90 })
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
