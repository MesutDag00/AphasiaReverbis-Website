import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PricingToggle } from "@/components/PricingToggle";
import { SolutionScrollWrapper } from "@/components/SolutionScrollWrapper";
import { Footer } from "@/components/Footer";
import { FaqJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Fiyatlandırma",
  description: "Bağımsız terapistlerden büyük hastanelere kadar her ölçek için esnek fiyat planları: Bireysel, Klinik ve Kurumsal seçenekler.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Fiyatlandırma — Aphasia Reverbis",
    description: "Terapistler ve klinikler için esnek fiyat planları: Bireysel, Klinik ve Kurumsal.",
    url: "/pricing",
  },
};

const pricingFaq = [
  {
    q: "Ücretsiz deneme var mı?",
    a: "Evet, kurumsal değerlendirme sürecine dahil olan kliniklere pilot program kapsamında ücretsiz deneme imkânı sunuyoruz. İletişime geçerken belirtebilirsiniz.",
  },
  {
    q: "Yıllık ödeme ne zaman fatura edilir?",
    a: "Yıllık planda ödeme yıllık başında tek seferlik alınır. Fatura kesilir, KDV dahil olarak sunulur.",
  },
  {
    q: "Plan değiştirebilir miyim?",
    a: "Evet, ihtiyacınıza göre her zaman plan yükseltmesi yapılabilir. Alçaltma ise dönem sonunda geçerli olur.",
  },
  {
    q: "Kurumsal fatura kesilebilir mi?",
    a: "Tüm planlar için fatura kesilmektedir. E-fatura entegrasyonu da mevcuttur.",
  },
  {
    q: "Sözleşme süresi zorunlu mu?",
    a: "Aylık planlar için sözleşme zorunluluğu yoktur. Yıllık planlar 12 aylık taahhüt içerir.",
  },
];

export default function PricingPage() {
  return (
    <SolutionScrollWrapper>
      <FaqJsonLd items={pricingFaq} />

      {/* ── Kartlar ── */}
      <section
        className="relative overflow-hidden bg-clean-white min-h-[calc(100dvh-4rem)]"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_circle_at_50%_0%,rgba(0,82,204,0.08),transparent_60%)]" />
        <Container className="relative pt-10 pb-8 sm:pt-12">
          <div className="mx-auto max-w-2xl text-center">
            <div className="badge mb-3 inline-flex">Şeffaf Fiyatlandırma</div>
            <h1 className="text-balance text-3xl font-bold text-ink-black sm:text-4xl">
              İhtiyacınıza Uygun <span className="text-trust-blue">Plan</span>
            </h1>
            <p className="mt-3 text-base text-soft-gray">
              Bağımsız terapistlerden büyük hastanelere kadar her ölçek için esnek çözümler.
            </p>
          </div>
          <div className="mt-8">
            <PricingToggle />
          </div>
        </Container>
      </section>

      {/* ── SSS ── */}
      <section
        className="border-t border-soft-line bg-white min-h-[calc(100dvh-4rem)] flex items-center"
        style={{ scrollSnapAlign: 'start' }}
      >
        <Container className="w-full py-14">
          <h2 className="mb-8 text-center text-2xl font-bold text-ink-black">
            Fiyatlandırma Hakkında Sık Sorulanlar
          </h2>
          <div className="mx-auto max-w-3xl divide-y divide-soft-line rounded-2xl bg-clean-white ring-1 ring-soft-line overflow-hidden">
            {pricingFaq.map(({ q, a }) => (
              <div key={q} className="px-6 py-5">
                <div className="text-sm font-bold text-ink-black">{q}</div>
                <div className="mt-2 text-sm leading-relaxed text-soft-gray">{a}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Footer />

    </SolutionScrollWrapper>
  );
}
