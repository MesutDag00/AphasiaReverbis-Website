// 📁 src/components/sections/solution/AnalysisPanelsSection.tsx
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SnapSection } from "@/components/ui/SnapSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { analysisPanels } from "@/content/solution";

export function AnalysisPanelsSection() {
  return (
    <SnapSection bg="muted" label="8 Boyutlu Analiz">
      <Container className="py-12">
        <SectionHeading
          badge="Veri Odaklı Raporlama"
          title="8 Boyutlu İlerleme Analizi"
          subtitle="Her danışan için kapsamlı veri görselleştirme; terapist tek ekranda tüm gelişimi takip eder"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {analysisPanels.map(({ panel, title, desc, tone }) => (
            <Reveal key={panel}>
              <div className="card h-full p-5">
                <IconBadge tone={tone} size="sm" className="text-xs font-bold">
                  {panel}
                </IconBadge>
                <h3 className="mt-3 text-sm font-bold text-ink-black">{title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-soft-gray">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </SnapSection>
  );
}
