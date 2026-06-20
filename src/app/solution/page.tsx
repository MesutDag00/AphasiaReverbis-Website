import type { Metadata } from "next";
import { SolutionScrollWrapper } from "@/components/SolutionScrollWrapper";
import { Footer } from "@/components/Footer";
import { ClientSection } from "@/components/sections/solution/ClientSection";
import { TherapistSection } from "@/components/sections/solution/TherapistSection";
import { ActivitiesSection } from "@/components/sections/solution/ActivitiesSection";
import { AnalysisPanelsSection } from "@/components/sections/solution/AnalysisPanelsSection";
import { SecuritySection } from "@/components/sections/solution/SecuritySection";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Danışanlar için 24 bilimsel aktivite içeren mobil uygulama, terapistler için 8 boyutlu analiz paneliyle gerçek zamanlı ilerleme takibi. Terapist kontrollü, KVKK uyumlu, veri odaklı afazi rehabilitasyon platformu.",
  alternates: { canonical: "/solution" },
  openGraph: {
    title: "Platform — Aphasia Reverbis",
    description:
      "24 bilimsel aktivite, 8 boyutlu analiz paneli ve terapist kontrollü ev egzersizi ekosistemi.",
    url: "/solution",
  },
};

export default function SolutionPage() {
  return (
    <SolutionScrollWrapper>
      <ClientSection />
      <TherapistSection />
      <ActivitiesSection />
      <AnalysisPanelsSection />
      <SecuritySection />
      <Footer />
    </SolutionScrollWrapper>
  );
}
