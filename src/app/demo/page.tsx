import { Container } from "@/components/Container";
import { BadgeCheckIcon, TrophyIcon } from "@/components/Icons";

export const metadata = {
  title: "İletişime Geçin — Aphasia Reverbis",
  description: "Aphasia Reverbis platformu hakkında bilgi almak ve başvuru yapmak için bizimle iletişime geçin.",
};

const trustItems = [
  { icon: <BadgeCheckIcon />, label: "TÜBİTAK 1812 Destekli" },
  { icon: <TrophyIcon />, label: "IDEATHON 2025 Birincisi" },
  { icon: <BadgeCheckIcon />, label: "KVKK Uyumlu" },
  { icon: <BadgeCheckIcon />, label: "Mükemmeliyet Mührü" },
];

export default function DemoPage() {
  return (
    <div className="bg-clean-white">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_circle_at_20%_0%,rgba(0,82,204,0.1),transparent_55%)]" />
        <Container className="relative py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Sol — Bilgi */}
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-bold text-ink-black sm:text-5xl">
                Platformu <span className="text-trust-blue">Keşfedin</span>
              </h1>
              <p className="text-lg text-soft-gray">
                Aphasia Reverbis'i kurumunuzda nasıl çalıştığını görmek için bizimle iletişime geçin. Uzmanlarımız 24 saat içinde dönüş yapar.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {trustItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 ring-1 ring-soft-line shadow-soft-sm">
                    <span className="text-trust-blue">{item.icon}</span>
                    <span className="text-sm font-semibold text-ink-black">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-trust-blue/5 p-6 ring-1 ring-trust-blue/10">
                <div className="text-sm font-bold text-ink-black mb-3">Süreç Nasıl İşler?</div>
                <ol className="space-y-2 text-sm text-soft-gray">
                  <li className="flex gap-2"><span className="font-bold text-trust-blue">1.</span> Talebinizi aldıktan sonra 24 saat içinde sizi ararız</li>
                  <li className="flex gap-2"><span className="font-bold text-trust-blue">2.</span> Kurumunuza özel ihtiyaç analizi yaparız</li>
                  <li className="flex gap-2"><span className="font-bold text-trust-blue">3.</span> Canlı platform demosu gerçekleştiririz</li>
                  <li className="flex gap-2"><span className="font-bold text-trust-blue">4.</span> Pilot program ve fiyat teklifini sunarız</li>
                </ol>
              </div>
            </div>

            {/* Sağ — İletişim Kartları */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-ink-black">Bize Ulaşın</h2>

              {/* E-posta */}
              <a
                href="mailto:palingayazilim@gmail.com"
                className="card card-hover flex items-start gap-4 p-6 no-underline"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-trust-blue/10 text-trust-blue ring-1 ring-trust-blue/20">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <div>
                  <div className="text-sm font-semibold text-soft-gray">E-posta</div>
                  <div className="mt-1 text-base font-bold text-ink-black">palingayazilim@gmail.com</div>
                  <div className="mt-1 text-sm text-soft-gray">24 saat içinde yanıt veriyoruz</div>
                </div>
              </a>

              {/* Telefon / WhatsApp */}
              <a
                href="tel:+905318658144"
                className="card card-hover flex items-start gap-4 p-6 no-underline"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-healing-teal/10 text-healing-teal ring-1 ring-healing-teal/20">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
                  </svg>
                </span>
                <div>
                  <div className="text-sm font-semibold text-soft-gray">Telefon / WhatsApp</div>
                  <div className="mt-1 text-base font-bold text-ink-black">0531 865 81 44</div>
                  <div className="mt-1 text-sm text-soft-gray">Hafta içi 09:00 – 18:00</div>
                </div>
              </a>

              {/* Admin Girişi */}
              <a
                href="http://89.45.45.31/admin"
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover flex items-start gap-4 p-6 no-underline"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-trust-blue/10 text-trust-blue ring-1 ring-trust-blue/20">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </span>
                <div>
                  <div className="text-sm font-semibold text-soft-gray">Admin Paneli</div>
                  <div className="mt-1 text-base font-bold text-ink-black">Terapist / Yönetici Girişi</div>
                  <div className="mt-1 text-sm text-soft-gray flex items-center gap-1">
                    Panele erişmek için tıklayın
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
