import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Aphasia Reverbis | Terapist Kontrollü Dijital Rehabilitasyon",
  description:
    "Türkiye'nin ilk terapist kontrollü afazi rehabilitasyon platformu. TÜBİTAK 1812 destekli veri odaklı çözüm.",
  icons: {
    icon: [{ url: "/images/AphasiaReverbisico.ico", type: "image/x-icon" }],
    apple: [{ url: "/images/AphasiaReverbisico.ico", type: "image/x-icon" }],
  },
  openGraph: {
    title: "Aphasia Reverbis | Terapist Kontrollü Dijital Rehabilitasyon",
    description:
      "Türkiye'nin ilk terapist kontrollü afazi rehabilitasyon platformu. TÜBİTAK 1812 destekli veri odaklı çözüm.",
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aphasia Reverbis | Terapist Kontrollü Dijital Rehabilitasyon",
    description:
      "Türkiye'nin ilk terapist kontrollü afazi rehabilitasyon platformu. TÜBİTAK 1812 destekli veri odaklı çözüm.",
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
        <Header />
        <main id="content" className="min-h-[calc(100dvh-4rem)]">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}

