type Theme = 'dark' | 'light';

interface Props {
  theme?: Theme;
}

const PLAY_ICON = (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor">
    <path d="M3.18 23.76c.3.17.64.24.99.2L15.5 12 3.18.04A1.5 1.5 0 0 0 3 .75v22.5c0 .18.06.35.18.51z" opacity=".8" />
    <path d="m19.5 9.62-2.92-1.67L13.41 12l3.17 3.17 2.92-1.67A2.01 2.01 0 0 0 19.5 9.62z" opacity=".6" />
    <path d="M3.18 23.76 15.5 12 5.25 1.75 3.18.04A1.5 1.5 0 0 0 3 .75v22.5c0 .18.06.35.18.51z" opacity=".4" />
    <path d="M3.18.04 16.58 13.45l2.92-1.67a2.01 2.01 0 0 0 0-3.56L5.25 1.75 3.18.04z" opacity=".2" />
  </svg>
);

const APPLE_ICON = (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const BADGES = [
  { key: 'play',  icon: PLAY_ICON,  eyebrow: 'Get it on',        name: 'Google Play', title: "Google Play'de yakında" },
  { key: 'apple', icon: APPLE_ICON, eyebrow: 'Download on the',  name: 'App Store',   title: "App Store'da yakında"  },
];

export function AppDownloadBadges({ theme = 'dark' }: Props) {
  const dark = theme === 'dark';

  const badgeBase = dark
    ? 'bg-white/5 text-white ring-white/20 hover:bg-white/10 hover:ring-white/35'
    : 'bg-ink-black/5 text-ink-black ring-ink-black/10 hover:bg-ink-black/8 hover:ring-ink-black/20';

  const eyebrowClass = dark ? 'opacity-60' : 'opacity-50';

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {BADGES.map(({ key, icon, eyebrow, name, title }) => (
        <div key={key} className="relative" title={title}>
          <div
            className={`flex cursor-not-allowed select-none items-center gap-2.5 rounded-xl px-3.5 py-2 opacity-70 ring-1 transition ${badgeBase}`}
          >
            {icon}
            <div className="text-left leading-none">
              <div className={`text-[9px] font-medium uppercase tracking-wide ${eyebrowClass}`}>
                {eyebrow}
              </div>
              <div className="mt-0.5 text-sm font-semibold">{name}</div>
            </div>
          </div>
          <span className="pointer-events-none absolute -right-1.5 -top-1.5 inline-flex items-center rounded-full bg-healing-teal px-1.5 py-0.5 text-[9px] font-bold text-white">
            Yakında
          </span>
        </div>
      ))}
    </div>
  );
}
