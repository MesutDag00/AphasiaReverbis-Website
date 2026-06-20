// 📁 src/components/ui/SectionHeading.tsx
// Ortalanmış bölüm başlığı: badge + h2 + alt başlık. Reveal animasyonunu da kapsar.

import { cn } from "@/lib/cn";
import { Reveal } from "@/components/Reveal";

export function SectionHeading({
  badge,
  title,
  subtitle,
  className,
}: {
  badge: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
}) {
  return (
    <Reveal>
      <div className={cn("mb-10 text-center", className)}>
        <div className="badge mb-3 inline-flex">{badge}</div>
        <h2 className="text-3xl font-bold text-ink-black sm:text-4xl">{title}</h2>
        {subtitle ? <p className="mt-3 text-soft-gray">{subtitle}</p> : null}
      </div>
    </Reveal>
  );
}
