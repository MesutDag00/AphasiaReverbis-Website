import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { BadgeCheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "İletişime Geçin",
  description: "Aphasia Reverbis'i kurumunuzda değerlendirmek, pilot program başlatmak veya bilgi almak için bizimle iletişime geçin. Uzmanlarımız 24 saat içinde dönüş yapar.",
  alternates: { canonical: "/demo" },
  openGraph: {
    title: "İletişime Geçin — Aphasia Reverbis",
    description: "Kurumunuza özel platform tanıtımı ve pilot program için bizimle iletişime geçin.",
    url: "/demo",
  },
};

const trustItems = [
  { icon: <BadgeCheckIcon />, label: "TÜBİTAK Destekli" },
  { icon: <BadgeCheckIcon />, label: "KVKK Uyumlu" },
  { icon: <BadgeCheckIcon />, label: "Mükemmeliyet Mührü" },
];

const steps = [
  { num: "1", text: "Talebinizi aldıktan sonra 24 saat içinde sizi ararız" },
  { num: "2", text: "Kurumunuza özel ihtiyaç analizi yaparız" },
  { num: "3", text: "Canlı platform tanıtımı gerçekleştiririz" },
  { num: "4", text: "Pilot program ve fiyat teklifini sunarız" },
];

export default function DemoPage() {
  return (
    <div className="bg-clean-white">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_circle_at_20%_0%,rgba(0,82,204,0.1),transparent_55%)]" />
        <Container className="relative py-16 sm:py-20">

          {/* ── İki Kolon ── */}
          <div className="grid gap-10 lg:grid-cols-[5fr_6fr] lg:items-start">

            {/* Sol — Giriş */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-trust-blue/8 px-3 py-1.5 text-sm font-semibold text-trust-blue ring-1 ring-trust-blue/20">
                İletişim
              </div>

              <h1 className="text-balance text-4xl font-bold text-ink-black sm:text-5xl">
                Platformu <span className="text-trust-blue">Keşfedin</span>
              </h1>

              <p className="text-lg text-soft-gray">
                Aphasia Reverbis'i kurumunuzda nasıl çalıştığını görmek için bizimle iletişime geçin. Uzmanlarımız 24 saat içinde dönüş yapar.
              </p>

              <div className="grid grid-cols-3 gap-3">
                {trustItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center justify-center gap-1.5 rounded-xl bg-white px-2 py-4 text-center ring-1 ring-soft-line shadow-soft-sm"
                  >
                    <span className="text-trust-blue">{item.icon}</span>
                    <span className="text-xs font-semibold leading-tight text-ink-black">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sağ — İletişim Kartları */}
            <div className="flex flex-col gap-4">
              {/* E-posta */}
              <a
                href="mailto:aphasiareverbis@palingayazilim.com"
                className="card card-hover flex items-center gap-4 p-6 no-underline"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-trust-blue/10 text-trust-blue ring-1 ring-trust-blue/20">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-soft-gray">E-posta</div>
                  <div className="mt-0.5 text-base font-bold text-ink-black">aphasiareverbis@palingayazilim.com</div>
                  <div className="mt-1 text-sm text-soft-gray">24 saat içinde yanıt veriyoruz</div>
                </div>
              </a>

              {/* Telefon / WhatsApp */}
              <a
                href="tel:+905318658144"
                className="card card-hover flex items-center gap-4 p-6 no-underline"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-healing-teal/10 text-healing-teal ring-1 ring-healing-teal/20">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
                  </svg>
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-soft-gray">Telefon / WhatsApp</div>
                  <div className="mt-0.5 text-base font-bold text-ink-black">0531 865 81 44</div>
                  <div className="mt-1 text-sm text-soft-gray">Hafta içi 09:00 – 18:00</div>
                </div>
              </a>

              {/* Admin Paneli */}
              <div className="card flex items-center gap-4 p-6">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-trust-blue/10 text-trust-blue ring-1 ring-trust-blue/20">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-soft-gray">Admin Paneli</div>
                  <div className="mt-0.5 text-base font-bold text-ink-black">Mevcut Hesabınızla Giriş Yapın</div>
                  <div className="mt-1 text-sm text-soft-gray">Klinik yönetim paneline erişin</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Süreç ── */}
          <div className="mt-12 rounded-2xl bg-trust-blue/5 p-8 ring-1 ring-trust-blue/10">
            <div className="mb-6 text-sm font-bold text-ink-black">Süreç Nasıl İşler?</div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map(({ num, text }) => (
                <div key={num} className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-trust-blue text-xs font-bold text-white">
                    {num}
                  </span>
                  <p className="text-sm leading-relaxed text-soft-gray">{text}</p>
                </div>
              ))}
            </div>
          </div>

        </Container>
      </section>

    </div>
  );
}
