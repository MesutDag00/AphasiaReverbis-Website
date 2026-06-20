// 📁 src/components/StructuredData.tsx
// Server component — Google'a yapılandırılmış (JSON-LD) kurumsal veri sağlar.
// Bu, arama sonucundaki "yüzeysel/eksik bilgi" sorununun asıl çözümüdür.

const SITE_URL = "https://aphasiareverbis.com";

/** JSON-LD'yi XSS'e karşı güvenli biçimde gömer (</script> ve < kaçışı). */
function JsonLd({ data }: { data: Record<string, unknown> }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}

/** Organization + WebSite + SoftwareApplication — layout'ta global enjekte edilir. */
export function OrganizationJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Aphasia Reverbis",
    legalName: "PALINGA Yazılım A.Ş.",
    url: SITE_URL,
    logo: `${SITE_URL}/logo-512.png`,
    description:
      "Afazi tanısı almış bireylerin dil-konuşma terapisi süreçlerini dijitalleştiren, terapist kontrollü ve veri odaklı rehabilitasyon platformu.",
    email: "aphasiareverbis@palingayazilim.com",
    telephone: "+90-531-865-81-44",
    sameAs: [
      "https://www.linkedin.com/company/palingayazilim/",
      "https://www.instagram.com/aphasiareverbis/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+90-531-865-81-44",
      email: "aphasiareverbis@palingayazilim.com",
      contactType: "customer support",
      areaServed: "TR",
      availableLanguage: ["Turkish"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sarıyer",
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Aphasia Reverbis",
    url: SITE_URL,
    inLanguage: "tr-TR",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  const software = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Aphasia Reverbis",
    applicationCategory: "HealthApplication",
    operatingSystem: "Android, iOS, Web",
    inLanguage: "tr-TR",
    description:
      "Terapist kontrollü, 24 bilimsel aktivite ve 8 boyutlu analiz paneli ile afazi rehabilitasyonu için mobil uygulama ve web tabanlı terapist paneli.",
    publisher: { "@id": `${SITE_URL}/#organization` },
    offers: {
      "@type": "Offer",
      category: "subscription",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <JsonLd data={organization} />
      <JsonLd data={website} />
      <JsonLd data={software} />
    </>
  );
}

/** FAQPage — /sss ve /pricing gibi soru-cevap içeren sayfalarda kullanılır. */
export function FaqJsonLd({ items }: { items: { q: string; a: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  return <JsonLd data={data} />;
}
