// 📁 src/components/sections/solution/TherapistSection.tsx
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SnapSection } from "@/components/ui/SnapSection";
import { CheckList } from "@/components/ui/CheckList";
import { therapistHighlights } from "@/content/solution";

export function TherapistSection() {
  return (
    <SnapSection bg="muted" label="Terapist perspektifi">
      <Container className="py-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Görsel */}
          <Reveal>
            <img
              src="/images/Therapsit/Therapist.png"
              alt="Terapist platformu kullanırken"
              className="block h-auto w-full"
            />
          </Reveal>

          {/* Metin */}
          <Reveal delay={80}>
            <div className="space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-healing-teal/10 px-4 py-2 text-sm font-semibold text-healing-teal ring-1 ring-healing-teal/20">
                Terapist
              </div>
              <h2 className="text-balance text-4xl font-bold text-ink-black sm:text-5xl">
                Klinik Gücü,{" "}
                <span className="text-healing-teal">Uzaktan Erişim</span>
              </h2>
              <p className="text-lg leading-relaxed text-soft-gray">
                Terapist her danışanın ev egzersizini gerçek zamanlı izler. Seans başlamadan önce tüm veriye sahip olur.
              </p>
              <CheckList items={therapistHighlights} tone="healing-teal" />
            </div>
          </Reveal>
        </div>
      </Container>
    </SnapSection>
  );
}
