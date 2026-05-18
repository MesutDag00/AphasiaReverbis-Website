# Palinga Website Architecture

## Uygulama Mimarisi

Proje Next.js App Router yapisini kullaniyor. Route'lar `src/app/` altinda dosya sistemiyle tanimlaniyor. Ortak layout `src/app/layout.tsx` dosyasinda:

- Google Inter fontu `next/font/google` ile yukleniyor.
- global metadata tanimlaniyor.
- tum sayfalar `Header`, `PageTransition`, `Footer` sarmali icinde render ediliyor.
- `html` dili `tr`.

## Frontend-Only Siniri

Bu mimari frontend-only bir web sitesi mimarisidir. Projede backend katmani yoktur.

Bulunmayan backend parcalari:

- API endpointleri
- Veritabani modelleri veya migrationlar
- Auth, session, rol/izin altyapisi
- Kalici form gonderimi
- Rapor ureten server-side servis

`src/app/page.tsx` icindeki `node:fs` ve `node:path` kullanimi sadece build-time asset kontrolu icindir; urun backend'i olarak degerlendirilmemelidir.

## Static Rendering Modeli

Build ciktisina gore tum route'lar static prerender ediliyor. `next.config.ts` icindeki `output: "export"` sebebiyle proje statik hosting icin hazirlanmis.

Static route'lar:

- `/`
- `/about`
- `/solution`
- `/contact`
- `/faq`
- `/sss`
- `/kvkk`
- `/gizlilik-sozlesmesi`
- `/cerez-politikasi`
- `/_not-found`

## Component Katmani

Tekrar kullanilan componentler `src/components/` altinda:

- `Header`: sticky navigasyon, desktop ve mobil menu, skip link.
- `Footer`: kurumsal linkler, politika linkleri, iletisim bilgileri.
- `Container`: merkezi max-width ve responsive padding yardimcisi.
- `Button` ve `ButtonLink`: varyantli buton sistemi.
- `Reveal`: IntersectionObserver ile scroll reveal animasyonu.
- `PageTransition`: route degisiminde fade animasyonu.
- `CountUp`: sayac animasyonu, `Intl.NumberFormat("tr-TR")` ile formatlama.
- `PdfReportButton`: demo PDF raporu indirme aksiyonu; su an alert gosteriyor.
- `ContactTherapistForm`: demo form; submit sirasinda alert gosteriyor.
- `Icons`: proje ici SVG ikon seti.

## Server ve Client Ayrimi

Varsayilan sayfalar server component mantiginda. Asagidaki componentlerde `"use client"` var:

- `ContactTherapistForm`
- `PdfReportButton`
- `Reveal`
- `PageTransition`
- `CountUp`

Bu ayrim interaktif/DOM API kullanan componentlerin client tarafinda calismasini sagliyor.

## Dikkat Ceken Uygulama Detaylari

- `src/app/page.tsx`, build-time dosya kontrolu icin `node:fs` ve `node:path` kullaniyor. Bu kontrol statik build sirasinda calisir ve mevcut logolara gore partner logo listesini belirler.
- `next/image` bircok yerde kullaniliyor, ancak `Header`, `Footer` ve `about` sayfasinda bazi `<img>` kullanimi var.
- `ContactTherapistForm` ve `PdfReportButton` demo davranisina sahip; backend/API entegrasyonu yok.

## Yardimci Fonksiyonlar

`src/lib/cn.ts`, class stringlerini filtreleyip birlestiren basit `cn` fonksiyonu saglar. Dis bagimli `clsx` veya `tailwind-merge` kullanilmiyor.

## Kaynaklar

- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/components/*.tsx`
- `src/lib/cn.ts`
