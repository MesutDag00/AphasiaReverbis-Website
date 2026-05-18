# Palinga Website Assets

## Public Asset Klasoru

Statik dosyalar `public/` altinda tutulur. Next.js public dosyalari site kokunden servis eder; ornegin `public/images/palinga-logo.jpeg` dosyasi `/images/palinga-logo.jpeg` olarak kullanilir.

## Marka ve Urun Gorselleri

- `public/images/AphasiaReverbisLogo.png`: header logo.
- `public/images/AphasiaReverbisico.ico`: favicon/ikon metadata.
- `public/images/palinga-logo.jpeg`: PALINGA logosu; footer ve partner alaninda kullaniliyor.

## Basari ve Paydas Gorselleri

- `public/images/IDEATHON-Main.jpg`: IDEATHON 2025 basari karti.
- `public/images/Beginer.jpeg`: TUBITAK BIG 1812 / kurulus karti.
- `public/images/sanayi.jpg`: Sanayi ve Teknoloji Bakanligi paydas logosu.
- `public/images/tubitak.jpg`: TUBITAK paydas logosu.
- `public/images/farklabs-logo.png`: Fark Labs TEKMER ofis/partner bolumu.

## Kurucu Ekip Gorselleri

`public/images/Founders/` altinda kurucu ekip fotograf dosyalari:

- `berk-agbaba.jpeg`
- `dogukan-kalyon.jpeg`
- `mesut-dag.jpeg`
- `serhat-polat.jpeg`
- `yakup-karaavcı.jpeg`

Not: Kodda Yakup icin `yakup-karaavcÄ±.jpeg` gibi bozuk karakterli bir path gorunuyor; dosya sisteminde ise `yakup-karaavcı.jpeg` var. Bu encoding/path eslesmesi gorselin render edilmesini etkileyebilir ve kontrol edilmelidir.

## Varsayilan Next Assetleri

Kok `public/` altinda varsayilan Next/Vercel SVG'leri de var:

- `file.svg`
- `globe.svg`
- `next.svg`
- `vercel.svg`
- `window.svg`

Bu dosyalar mevcut kodda ana marka deneyiminin parcasi gibi gorunmuyor.

## Ilgili

- [[Palinga Website]]
- [[Palinga Website QA and Risks]]
