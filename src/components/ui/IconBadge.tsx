// 📁 src/components/ui/IconBadge.tsx
// Tone'lu, yuvarlatılmış ikon/etiket kabı. Aktivite, panel ve güvenlik kartlarında ortak atom.

import { cn } from "@/lib/cn";
import { TONES } from "@/lib/tones";
import type { ToneColor } from "@/types/content";

type Size = "sm" | "md" | "lg";

const SIZES: Record<Size, string> = {
  sm: "h-9 w-9",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

export function IconBadge({
  tone,
  size = "md",
  className,
  children,
}: {
  tone: ToneColor;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-xl ring-1",
        SIZES[size],
        TONES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
