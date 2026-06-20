// 📁 src/components/sections/solution/iconRegistry.tsx
// content/solution.ts'teki iconKey -> ReactNode çözümü. İçerik React'tan bağımsız kalsın diye burada.

import type { ActivityIconKey } from "@/types/content";
import { ShieldCheckIcon, LockIcon, UsersIcon, ClipboardListIcon } from "@/components/Icons";

const svgProps = {
  "aria-hidden": true,
  viewBox: "0 0 24 24",
  className: "h-5 w-5",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Aktivite kategorisi ikonları (h-5 w-5). */
export const ACTIVITY_ICONS: Record<ActivityIconKey, React.ReactNode> = {
  "word-access": (
    <svg {...svgProps}>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
    </svg>
  ),
  syntax: (
    <svg {...svgProps}>
      <path d="M4 6h16M4 12h10M4 18h6" />
    </svg>
  ),
  comprehension: (
    <svg {...svgProps}>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  production: (
    <svg {...svgProps}>
      <path d="M12 14a3 3 0 0 0 3-3V7a3 3 0 0 0-6 0v4a3 3 0 0 0 3 3z" />
      <path d="M19 11a7 7 0 0 1-14 0" />
      <path d="M12 19v3" />
    </svg>
  ),
  asha: (
    <svg {...svgProps}>
      <polyline points="9 11 12 14 22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  ),
  "reading-writing": (
    <svg {...svgProps}>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
};

/** Güvenlik özelliği ikonları (Icons.tsx'ten, h-6 w-6). */
export const SECURITY_ICONS: Record<string, React.ReactNode> = {
  "shield-check": <ShieldCheckIcon />,
  lock: <LockIcon />,
  users: <UsersIcon />,
  clipboard: <ClipboardListIcon />,
};
