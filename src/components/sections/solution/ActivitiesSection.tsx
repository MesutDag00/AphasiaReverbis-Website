// 📁 src/components/sections/solution/ActivitiesSection.tsx
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SnapSection } from "@/components/ui/SnapSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { activities } from "@/content/solution";
import { ACTIVITY_ICONS } from "./iconRegistry";

export function ActivitiesSection() {
  return (
    <SnapSection bg="white" label="24 Bilimsel Aktivite">
      <Container className="py-12">
        <SectionHeading
          badge="Kanıt Temelli Egzersizler"
          title="24 Bilimsel Aktivite"
          subtitle="ASHA tavsiyeli, afazinin tüm boyutlarını kapsayan kapsamlı egzersiz kütüphanesi"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map(({ category, count, color, iconKey }) => (
            <Reveal key={category}>
              <div className="card p-5">
                <div className="flex items-center gap-3">
                  <IconBadge tone={color}>{ACTIVITY_ICONS[iconKey]}</IconBadge>
                  <div>
                    <div className="text-sm font-bold text-ink-black">{category}</div>
                    <div className="text-xs font-semibold text-soft-gray">{count} aktivite</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </SnapSection>
  );
}
