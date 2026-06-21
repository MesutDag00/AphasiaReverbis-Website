// 📁 src/components/ui/CheckList.tsx
// Check-ikonlu madde listesi. Danışan/terapist highlight'larında ortak.

import { cn } from "@/lib/cn";
import { CHECK_TONES } from "@/lib/tones";
import { CheckIcon } from "@/components/Icons";

export function CheckList({
  items,
  tone,
}: {
  items: string[];
  tone: "trust-blue" | "healing-teal";
}) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3">
          <span className={cn("h-4 w-4 shrink-0", CHECK_TONES[tone])}>
            <CheckIcon />
          </span>
          <span className="text-base font-medium text-ink-black">{item}</span>
        </li>
      ))}
    </ul>
  );
}
