import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { OrganizationJsonLd } from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});


const SITE_URL = "https://aphasiareverbis.com";
const DEFAULT_TITLE = "Aphasia Reverbis | Terapist Kontrollü Dijital Afazi Rehabilitasyonu";
const DEFAULT_DESCRIPTION =
  "TÜBİTAK destekli dijital afazi rehabilitasyon platformu. Terapistler için 8 boyutlu analiz paneli ve gerçek zamanlı takip; danışanlar için 24 bilimsel aktivite içeren mobil uygulama. KVKK uyumlu.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s — Aphasia Reverbis",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: "Aphasia Reverbis",
  category: "health",
  keywords: [
    "afazi",
    "afazi terapisi",
    "afazi rehabilitasyonu",
    "dil ve konuşma terapisi",
    "konuşma terapisi uygulaması",
    "teleterapi",
    "dijital rehabilitasyon",
    "terapist paneli",
    "TÜBİTAK destekli",
    "Aphasia Reverbis",
  ],
  authors: [{ name: "PALINGA Yazılım A.Ş.", url: "https://palingayazilim.com" }],
  creator: "PALINGA Yazılım A.Ş.",
  publisher: "PALINGA Yazılım A.Ş.",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "SQjyyo_alB67dweCc7zzLmTIUFlPYCwdozP92PJgdLA",
  },
  icons: {
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: "Aphasia Reverbis",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Aphasia Reverbis — Terapist Kontrollü Dijital Afazi Rehabilitasyonu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/og-cover.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="min-h-dvh">
        <OrganizationJsonLd />
        <Header />
        <main id="content" className="min-h-[calc(100dvh-4rem)]">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}

