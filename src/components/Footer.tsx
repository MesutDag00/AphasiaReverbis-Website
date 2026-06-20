import { Container } from "@/components/Container";
import Link from "next/link";
import { AppDownloadBadges } from "@/components/AppDownloadBadges";

const NAV: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Platform",
    links: [
      { label: "Ana Sayfa",     href: "/" },
      { label: "Platformumuz",  href: "/solution" },
      { label: "Fiyatlandırma", href: "/pricing" },
      { label: "Hakkımızda",   href: "/about" },
      { label: "SSS",          href: "/sss" },
    ],
  },
  {
    heading: "Yasal",
    links: [
      { label: "KVKK",                href: "/kvkk" },
      { label: "Gizlilik Sözleşmesi", href: "/gizlilik-sozlesmesi" },
      { label: "Çerez Politikası",    href: "/cerez-politikasi" },
      { label: "Hesap ve Veri Silme", href: "/hesap-silme" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-ink-black text-white">
      {/* Üst ince gradyan çizgi */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, rgba(0,82,204,0.55) 35%, rgba(0,163,191,0.55) 65%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr_1.5fr] lg:gap-12">

          {/* ── MARKA ── */}
          <div className="space-y-6">
            {/* Wordmark */}
            <div>
              <p className="text-xl font-bold tracking-tight text-white">
                Aphasia Reverbis
              </p>
              <a
                href="https://palingayazilim.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-[11px] font-medium uppercase tracking-[0.14em] text-white/30 transition-colors hover:text-white/60"
              >
                by PALINGA Yazılım A.Ş. ↗
              </a>
            </div>

            <p className="max-w-[220px] text-sm leading-relaxed text-white/50">
              Afazi rehabilitasyonunda veri odaklı dijital çözümler.
            </p>

            {/* TÜBİTAK */}
            <div className="inline-flex items-center gap-2 rounded-full bg-trust-blue/10 px-3 py-1.5 text-xs font-semibold text-trust-blue ring-1 ring-trust-blue/20">
              <span className="h-1.5 w-1.5 rounded-full bg-trust-blue" aria-hidden="true" />
              TÜBİTAK Destekli
            </div>

            {/* Mobil Uygulama */}
            <AppDownloadBadges theme="dark" />

            {/* Sosyal */}
            <div className="flex gap-2 pt-1">
              <a
                href="https://www.linkedin.com/company/palingayazilim/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-white/50 ring-1 ring-white/10 transition-colors hover:bg-white/10 hover:text-white"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M4.98 3.5A2.5 2.5 0 0 1 2.5 6a2.5 2.5 0 0 1 2.48-2.5zM3 8.98h4v12H3v-12zM9 8.98h3.8v1.64h.05c.53-1 1.83-2.06 3.76-2.06 4.02 0 4.77 2.65 4.77 6.09v6.33h-4v-5.62c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.72H9v-12z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/aphasiareverbis/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-white/50 ring-1 ring-white/10 transition-colors hover:bg-white/10 hover:text-white"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <path d="M16 11.37a4 4 0 1 1-7.5 1.53" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── NAV KOLONLARI ── */}
          {NAV.map(({ heading, links }) => (
            <nav key={heading} aria-label={`${heading} bağlantıları`}>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.13em] text-trust-blue/70">
                {heading}
              </p>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-white/50 transition-colors duration-150 hover:text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* ── İLETİŞİM ── */}
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.13em] text-trust-blue/70">
              İletişim
            </p>
            <ul className="space-y-3.5">
              {[
                {
                  href: "tel:+905318658144",
                  text: "0531 865 81 44",
                  icon: (
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L9.1 10.5a16 16 0 0 0 4.4 4.4l1.1-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
                  ),
                },
                {
                  href: "mailto:aphasiareverbis@palingayazilim.com",
                  text: "aphasiareverbis@palingayazilim.com",
                  icon: (
                    <>
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </>
                  ),
                },
              ].map(({ href, text, icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="group flex items-start gap-3 text-sm text-white/50 transition-colors hover:text-white"
                  >
                    <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-trust-blue ring-1 ring-white/10 transition group-hover:bg-white/8 group-hover:text-white">
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {icon}
                      </svg>
                    </span>
                    <span className="leading-snug">{text}</span>
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3 text-sm text-white/40">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-white/25 ring-1 ring-white/10">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s7-4.4 7-11a7 7 0 0 0-14 0c0 6.6 7 11 7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                İstanbul, Türkiye
              </li>
            </ul>
          </div>
        </div>

        {/* ── ALT BAR ── */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs text-white/25">
            © 2026 PALINGA Yazılım A.Ş. Tüm hakları saklıdır.
          </span>
          <div className="flex items-center gap-2.5 text-xs text-white/20">
            <span>TÜBİTAK Destekli</span>
            <span className="h-px w-3 bg-white/15" />
            <span>KVKK Uyumlu</span>
            <span className="h-px w-3 bg-white/15" />
            <span>AES-256 Şifreli</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
