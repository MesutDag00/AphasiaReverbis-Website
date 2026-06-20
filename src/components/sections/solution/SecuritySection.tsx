// 📁 src/components/sections/solution/SecuritySection.tsx
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SnapSection } from "@/components/ui/SnapSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { securityFeatures } from "@/content/solution";
import { SECURITY_ICONS } from "./iconRegistry";

export function SecuritySection() {
  return (
    <SnapSection bg="white" label="Güvenlik ve Uyumluluk">
      <Container className="py-12">
        <SectionHeading
          badge="Güvenlik & Uyumluluk"
          title="Verileriniz Güvende"
          subtitle="Sağlık verisi işleme standartları ve KVKK uyumu önceliğimizdir"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {securityFeatures.map(({ iconKey, title, desc }) => (
            <Reveal key={title} className="h-full">
              <div className="card h-full p-6">
                <IconBadge tone="trust-blue" size="lg">
                  {SECURITY_ICONS[iconKey]}
                </IconBadge>
                <h3 className="mt-4 text-base font-bold text-ink-black">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-soft-gray">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </SnapSection>
  );
}
