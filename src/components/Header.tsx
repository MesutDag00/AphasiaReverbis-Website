import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/solution", label: "Platform" },
  { href: "/pricing", label: "Fiyatlandırma" },
  { href: "/about", label: "Hakkımızda" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-soft-line bg-clean-white/80 backdrop-blur">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 rounded-lg bg-white px-4 py-2 text-sm font-semibold ring-1 ring-soft-line"
      >
        İçeriğe atla
      </a>
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-ink-black">
          <img
            src="/images/AphasiaReverbisLogo.svg"
            alt="Aphasia Reverbis Logo"
            className="mr-2 h-7 w-auto sm:h-8"
          />

        </Link>

        <nav aria-label="Ana navigasyon" className="hidden md:flex items-center gap-2">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-ink-black transition hover:bg-white hover:shadow-soft-sm"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button variant="primary" className="text-sm">
            Giriş Yap
          </Button>
        </nav>

        <details className="md:hidden">
          <summary className="list-none rounded-lg px-4 py-2 text-base font-semibold ring-1 ring-soft-line bg-white">
            Menü
          </summary>
          <div className="absolute right-4 top-16 mt-2 w-[min(92vw,22rem)] rounded-lg bg-white p-3 shadow-soft ring-1 ring-soft-line">
            <nav aria-label="Mobil navigasyon">
              <ul className="flex flex-col gap-1">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-lg px-4 py-3 text-base font-semibold text-ink-black hover:bg-clean-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-3 border-t border-soft-line pt-3">
              <Button variant="primary" className="w-full justify-center">
                Giriş Yap
              </Button>
            </div>
          </div>
        </details>
      </Container>
    </header>
  );
}


