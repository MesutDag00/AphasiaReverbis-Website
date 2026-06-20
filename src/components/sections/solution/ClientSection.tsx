// 📁 src/components/sections/solution/ClientSection.tsx
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { PhoneCarousel } from "@/components/PhoneCarousel";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { AppDownloadBadges } from "@/components/AppDownloadBadges";
import { SnapSection } from "@/components/ui/SnapSection";
import { CheckList } from "@/components/ui/CheckList";
import { clientHighlights } from "@/content/solution";

export function ClientSection() {
  return (
    <SnapSection bg="white" relative label="Danışan perspektifi">
      <Container className="py-12">
        <div className="grid items-center gap-16 lg:grid-cols-[50fr_50fr]">
          {/* Metin */}
          <Reveal>
            <div className="space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-trust-blue/10 px-4 py-2 text-sm font-semibold text-trust-blue ring-1 ring-trust-blue/20">
                Danışan &amp; Aile
              </div>
              <h2 className="text-balance text-4xl font-bold text-ink-black sm:text-5xl">
                Ev Konforunda{" "}
                <span className="text-trust-blue">Profesyonel Terapi</span>
              </h2>
              <p className="text-lg leading-relaxed text-soft-gray">
                Danışan kendi temposunda çalışır, aile de sürece dahil olur. Güdüleyici arayüz egzersiz uyumunu artırır.
              </p>
              <CheckList items={clientHighlights} tone="trust-blue" />
              <AppDownloadBadges theme="light" />
            </div>
          </Reveal>

          {/* Görsel — otomatik geçişli carousel */}
          <Reveal delay={80}>
            <div className="flex justify-center">
              <PhoneCarousel />
            </div>
          </Reveal>
        </div>
      </Container>

      <ScrollIndicator />
    </SnapSection>
  );
}
