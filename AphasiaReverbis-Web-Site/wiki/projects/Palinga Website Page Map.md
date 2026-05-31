# Palinga Website Page Map

## `/`

Ana sayfa. Aphasia Reverbis markasini, TUBITAK 1812 destegini, IDEATHON 2025 basarisini, demo mobil arayuzunu, afazi yukune dair istatistik kartlarini, basari hikayelerini ve paydas logolarini gosterir.

Kaynak: `src/app/page.tsx`

## `/solution`

Platform sayfasi. Iki ana kullanici akisini anlatir:

- Danisan ve aile paneli: dusuk maliyet, uzman kontrolunde egitim, aile katilimi.
- Terapist paneli: objektif analiz raporlari, uzaktan danisan takibi, is verimliligi.

Sayfada iki demo UI paneli vardir:

- Hasta/aile motivasyon paneli
- Terapist dashboard paneli

Kaynak: `src/app/solution/page.tsx`

## `/about`

Hakkimizda sayfasi. Vizyon, misyon, kurucu ekip, ekip rollerini, LinkedIn linklerini ve Fark Labs TEKMER ofis bilgisini sunar.

Kaynak: `src/app/about/page.tsx`

## `/contact`

Iletisim sayfasi. Telefon, e-posta, merkez adresi ve Google Maps linki sunar.

Iletisim bilgileri:

- Telefon: `0531 865 81 44`
- E-posta: `palingayazilim@gmail.com`
- Konum: Sariyer / Istanbul, Fark Labs TEKMER / 42 Maslak odakli adres bilgisi

Kaynak: `src/app/contact/page.tsx`

## `/faq`

Kisa SSS sayfasi. Demo talebi, kurumsal pilot sureci ve platform destegi sorularini icerir.

Kaynak: `src/app/faq/page.tsx`

## `/sss`

Alternatif SSS sayfasi. Aphasia Reverbis nedir, kimler kullanabilir, veri guvenligi ve ucretlendirme sorularini icerir.

Kaynak: `src/app/sss/page.tsx`

## `/kvkk`

KVKK aydinlatma metni. Kisisel veri kategorileri, veri isleme amaclari, saklama/guvenlik ve haklar bolumlerini icerir.

Kaynak: `src/app/kvkk/page.tsx`

## `/gizlilik-sozlesmesi`

Gizlilik politikasi. Temel ilkeler, ucuncu taraf paylasimlari ve guvenlik ilkelerini icerir.

Kaynak: `src/app/gizlilik-sozlesmesi/page.tsx`

## `/cerez-politikasi`

Cerez politikasi. Teknik cerezler, kullanim amaclari ve tarayici uzerinden cerez yonetimini anlatir.

Kaynak: `src/app/cerez-politikasi/page.tsx`

## `/hesap-silme`

Hesap ve veri silme bilgilendirme sayfasi. Uygulama ici silme adimlari, e-posta ile talep kanali (`aphasiareverbis@palingayazilim.com`), silinen/saklanan veri turleri tablosu. App Store / Google Play uyumluluk URL'si olarak kullanilabilir.

Kaynak: `src/app/hesap-silme/page.tsx`

## `/account-deletion`

Ingilizce alias; `/hesap-silme` sayfasina istemci tarafli yonlendirme yapar (statik export).

Kaynak: `src/app/account-deletion/page.tsx`

## Ortak Layout

Tum route'lar `src/app/layout.tsx` ile `Header`, `PageTransition` ve `Footer` icinde render edilir.

## Ilgili

- [[Palinga Website]]
- [[Palinga Website Architecture]]
