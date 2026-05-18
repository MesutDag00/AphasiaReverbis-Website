# Palinga Website Technical Stack

## Yazilim Dili ve Ana Teknolojiler

- Dil: TypeScript
- UI runtime: React 19.2.3
- Web framework: Next.js 16.1.2
- Styling: Tailwind CSS 4
- Paket yoneticisi: npm
- Lint: ESLint 9 + `eslint-config-next`
- Build sistemi: Next.js/Turbopack

## Backend Durumu

Bu projede backend yoktur. Kapsam sadece frontend web sitesidir.

Projede su an bulunmayan katmanlar:

- API route veya ayri backend servisi
- Veritabani baglantisi
- Authentication/session yonetimi
- Kalici form kaydi
- Server-side is mantigi

Next.js server component ve build-time Node kullanimi, backend oldugu anlamina gelmez. Bu projede bunlar frontend/static site uretim mimarisinin parcasidir.

## Next.js Konfigurasyonu

`next.config.ts` statik cikti hedefli calisir:

- `output: "export"` ile statik HTML cikti uretilir.
- `images.unoptimized: true` kullanilir; statik export icin Next Image optimizasyonu devre disi.
- `trailingSlash: true` ile route ciktilari slash ile biter.

Bu yapi projeyi klasik Node sunucusuna bagimli olmadan statik hosting uzerinde yayinlamaya uygun hale getirir.

## TypeScript Konfigurasyonu

`tsconfig.json` icinde:

- `strict: true` aktif.
- `jsx: "react-jsx"` kullaniliyor.
- `moduleResolution: "bundler"` kullaniliyor.
- `@/*` alias'i `./src/*` dizinine bagli.
- `noEmit: true`; derleme cikti uretimini Next.js yonetiyor.

## Tailwind ve Tema

Tema renkleri hem `tailwind.config.ts` hem de `src/app/globals.css` icindeki `@theme` bloklariyla tanimli:

- `trust.blue`: `#0052CC`
- `healing.teal`: `#00A3BF`
- `clean.white`: beyaz/yuzey rengi
- `ink.black`: koyu metin rengi
- `soft.gray`, `soft.line`, `soft.surface`: ikincil metin, cizgi ve yuzey tokenlari

Global CSS:

- `@import "tailwindcss";`
- temel font, focus, card, badge, glass, reveal ve fade animasyon yardimcilari
- `prefers-reduced-motion` destegi

## npm Scriptleri

- `npm run dev`: Next.js gelistirme sunucusu
- `npm run build`: production/static build
- `npm run start`: Next.js start komutu
- `npm run lint`: ESLint kontrolleri

PowerShell ortaminda `npm` komutu `npm.ps1` execution policy hatasi verebilir. Bu ortamda `npm.cmd run lint` ve `npm.cmd run build` basariyla calisti.

## Kaynaklar

- `package.json`
- `tsconfig.json`
- `next.config.ts`
- `tailwind.config.ts`
- `postcss.config.mjs`
- `eslint.config.mjs`
