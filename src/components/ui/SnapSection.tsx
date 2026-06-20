// 📁 src/components/ui/SnapSection.tsx
// Snap-scroll bölüm sarmalayıcısı. "min-h-[calc(100dvh-4rem)] + scrollSnapAlign" tekrarını tek yerde toplar.

import { cn } from "@/lib/cn";

type SnapBg = "white" | "muted" | "dark";

const BG: Record<SnapBg, string> = {
  white: "bg-clean-white",
  muted: "bg-[#f4f7fb]",
  dark: "bg-ink-black",
};

export function SnapSection({
  bg = "white",
  label,
  relative = false,
  className,
  children,
}: {
  bg?: SnapBg;
  label?: string;
  relative?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      aria-label={label}
      className={cn(
        "flex min-h-[calc(100dvh-4rem)] items-center",
        relative && "relative",
        BG[bg],
        className,
      )}
      style={{ scrollSnapAlign: "start" }}
    >
      {children}
    </section>
  );
}
