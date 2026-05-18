# Palinga Website QA and Risks

## Son Dogrulama

2026-05-11 tarihinde calistirilan kontroller:

- `npm.cmd run lint`: basarili, 0 hata, 3 uyari.
- `npm.cmd run build`: basarili.

PowerShell `npm run ...` komutunu `npm.ps1` execution policy nedeniyle engelledi. Windows ortaminda `npm.cmd run ...` kullanildi.

## Lint Uyarilari

ESLint `@next/next/no-img-element` uyarisi veriyor:

- `src/app/about/page.tsx`: Fark Labs logosunda `<img>` kullanimi.
- `src/components/Footer.tsx`: PALINGA logosunda `<img>` kullanimi.
- `src/components/Header.tsx`: Aphasia Reverbis logosunda `<img>` kullanimi.

Risk: Next Image optimizasyonu kullanilmadigi icin LCP ve bant genisligi etkilenebilir. Ancak proje `output: "export"` ve `images.unoptimized: true` kullandigi icin statik export gereksinimleriyle birlikte degerlendirilmelidir.

## Build Durumu

Build basariyla 12 static page uretti. Gorunen static route'lar:

- `/`
- `/about`
- `/cerez-politikasi`
- `/contact`
- `/faq`
- `/gizlilik-sozlesmesi`
- `/kvkk`
- `/solution`
- `/sss`
- `/_not-found`

## Teknik Riskler ve Borclar

### Backend yok / demo akislar

Bu repo sadece frontend icerir. Backend, API, veritabani veya kalici form kaydi yoktur.

Etki:

- Demo/partnerlik basvuru akisi gercek lead toplamiyor.
- PDF rapor indirme ozelligi urun vaadi olarak gorunup henuz calismiyor.
- Terapist ve danisan panelleri statik demo arayuzleridir.

### Turkce karakter / encoding riski

Kod dosyalarinda Turkce metinlerin bir kismi bozuk karakterlerle gorunuyor. Ornekler: `TÃœBÄ°TAK`, `HakkÄ±mÄ±zda`, `Ä°letiÅŸim`. Bu durum kaynak dosyalarin daha once yanlis encoding ile kaydedilmis olabilecegini gosterir.

Etki:

- UI metinleri tarayicida bozuk gorunebilir.
- Dosya path'lerinde Turkce karakter varsa gorsel eslesmesi bozulabilir.
- SEO metadata metinleri bozuk cikabilir.

### Cift SSS route'u

Hem `/faq` hem `/sss` route'u var ve icerikleri farkli. Bu bilincli degilse bilgi mimarisinde tekrar yaratabilir.

### Node API kullanimi

`src/app/page.tsx`, `node:fs` ve `node:path` ile build-time public asset kontrolu yapiyor. Static build icin calisiyor, ancak runtime edge/browser beklentisi olan bir ortama tasinirsa dikkat ister.

### Sosyal medya placeholder linkleri

Footer sosyal medya linkleri `#` olarak duruyor. Gercek URL'lerle degistirilmezse kullanici deneyimi eksik kalir.

## Oncelikli Iyilestirme Adaylari

1. Turkce karakter encoding sorununu temizle.
2. Header/Footer/About icindeki `<img>` kullanimlarini `next/image` ile uyumlu hale getir veya bilincli istisna olarak dokumante et.
3. Backend veya harici form servisi karari verilirse demo formunu gercek iletisim/lead toplama akisiyle entegre et.
4. `/faq` ve `/sss` route'larini birlestirme kararini ver.
5. Sosyal medya URL'lerini gercek hesaplarla degistir.

## Ilgili

- [[Palinga Website Technical Stack]]
- [[Palinga Website Architecture]]
- [[Palinga Website Assets]]
