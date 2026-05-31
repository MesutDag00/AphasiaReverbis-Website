import { Container } from "@/components/Container";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#0f172a] text-white">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex flex-row items-center">
              <span className="mr-3 inline-flex h-12 w-14 items-center justify-center overflow-hidden rounded-xl bg-white p-2 shadow-sm">
                <img
                  src="/images/palinga-logo.jpeg"
                  alt="PALINGA Yazılım Logo"
                  className="h-full w-full object-contain"
                />
              </span>
              <div className="text-lg font-bold tracking-tight">PALINGA Yazılım A.Ş.</div>
            </div>
            <p className="text-[15px] leading-relaxed text-gray-400">
              Afazi rehabilitasyonunda teknoloji tabanlı ve erişilebilir dijital çözümler.
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-sm font-semibold text-white">Kurumsal</div>
            <ul className="grid gap-2">
              <li>
                <Link className="text-[15px] font-semibold text-gray-400 transition hover:text-trust-blue" href="/">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link className="text-[15px] font-semibold text-gray-400 transition hover:text-trust-blue" href="/about">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link className="text-[15px] font-semibold text-gray-400 transition hover:text-trust-blue" href="/solution">
                  Platformumuz
                </Link>
              </li>
              <li>
                <Link className="text-[15px] font-semibold text-gray-400 transition hover:text-trust-blue" href="/sss">
                  SSS
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="text-sm font-semibold text-white">Politikalar</div>
            <ul className="grid gap-2">
              <li>
                <Link className="text-[15px] font-semibold text-gray-400 transition hover:text-trust-blue" href="/kvkk">
                  KVKK
                </Link>
              </li>
              <li>
                <Link
                  className="text-[15px] font-semibold text-gray-400 transition hover:text-trust-blue"
                  href="/gizlilik-sozlesmesi"
                >
                  Gizlilik Sözleşmesi
                </Link>
              </li>
              <li>
                <Link
                  className="text-[15px] font-semibold text-gray-400 transition hover:text-trust-blue"
                  href="/cerez-politikasi"
                >
                  Çerez Politikası
                </Link>
              </li>
              <li>
                <Link
                  className="text-[15px] font-semibold text-gray-400 transition hover:text-trust-blue"
                  href="/hesap-silme"
                >
                  Hesap ve Veri Silme
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="text-sm font-semibold text-white">Bize Ulaşın</div>
            <ul className="grid gap-3 text-[15px] font-semibold text-gray-400">
              <li>
                <a className="inline-flex items-center gap-3 transition hover:text-trust-blue" href="tel:+905318658144">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 text-trust-blue">
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L9.1 10.5a16 16 0 0 0 4.4 4.4l1.1-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
                    </svg>
                  </span>
                  0531 865 81 44
                </a>
              </li>
              <li>
                <a className="inline-flex items-center gap-3 transition hover:text-trust-blue" href="mailto:palingayazilim@gmail.com">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 text-trust-blue">
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                      <path d="m22 6-10 7L2 6" />
                    </svg>
                  </span>
                  palingayazilim@gmail.com
                </a>
              </li>
              <li className="inline-flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 text-trust-blue">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s7-4.4 7-11a7 7 0 0 0-14 0c0 6.6 7 11 7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                İstanbul, Türkiye
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 PALINGA Yazılım A.Ş. Tüm hakları saklıdır.</span>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:text-trust-blue"
              aria-label="LinkedIn"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M4.98 3.5A2.5 2.5 0 0 1 2.5 6a2.5 2.5 0 0 1 2.48-2.5zM3 8.98h4v12H3v-12zM9 8.98h3.8v1.64h.05c.53-1 1.83-2.06 3.76-2.06 4.02 0 4.77 2.65 4.77 6.09v6.33h-4v-5.62c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.72H9v-12z" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:text-trust-blue"
              aria-label="Instagram"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <path d="M16 11.37a4 4 0 1 1-7.5 1.53" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:text-trust-blue"
              aria-label="X"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l16 16" />
                <path d="M20 4 4 20" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}


