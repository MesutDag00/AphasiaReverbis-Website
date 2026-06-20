// 📁 src/lib/tones.ts
// Tone sınıflarının TEK kaynağı. Inline "bg-trust-blue/10 text-trust-blue ring-..." tekrarını bitirir.
// Not: Tailwind JIT için sınıflar statik literal olmalı — bu yüzden tam string map kullanılır.

import type { ToneColor } from "@/types/content";

/** İkon kabı / kart rozeti tonu (bg + text + ring). */
export const TONES: Record<ToneColor, string> = {
  "trust-blue": "bg-trust-blue/10 text-trust-blue ring-trust-blue/20",
  "healing-teal": "bg-healing-teal/10 text-healing-teal ring-healing-teal/20",
  ink: "bg-ink-black/5 text-ink-black ring-soft-line",
};

/** Check-list yuvarlağı tonu (ring yok). */
export const CHECK_TONES: Record<"trust-blue" | "healing-teal", string> = {
  "trust-blue": "bg-trust-blue/10 text-trust-blue",
  "healing-teal": "bg-healing-teal/10 text-healing-teal",
};
