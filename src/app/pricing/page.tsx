import { Container } from "@/components/Container";
import { PricingToggle } from "@/components/PricingToggle";
import { ButtonLink } from "@/components/Button";

export const metadata = {
  title: "Fiyatlandırma — Aphasia Reverbis",
  description: "Terapistler ve klinikler için esnek fiyat planları. Bireysel, Klinik ve Kurumsal seçenekler.",
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
    <div className="bg-clean-white">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_circle_at_50%_0%,rgba(0,82,204,0.08),transparent_60%)]" />
        <Container className="relative py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <div className="badge mb-4 inline-flex">Şeffaf Fiyatlandırma</div>
            <h1 className="text-balance text-4xl font-bold text-ink-black sm:text-5xl">
              İhtiyacınıza Uygun <span className="text-trust-blue">Plan</span>
            </h1>
            <p className="mt-4 text-lg text-soft-gray">
              Bağımsız terapistlerden büyük hastanelere kadar her ölçek için esnek çözümler. Gerçek fiyat teklifi için bizimle iletişime geçin.
            </p>
          </div>

          <div className="mt-14">
            <PricingToggle />
          </div>
        </Container>
      </section>

      {/* Pricing FAQ */}
      <section className="border-t border-soft-line bg-white">
        <Container className="py-16">
          <h2 className="mb-8 text-center text-2xl font-bold text-ink-black">Fiyatlandırma Hakkında Sık Sorulanlar</h2>
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

      {/* Bottom CTA */}
      <section className="bg-trust-blue">
        <Container className="py-14 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Hangi planın size uygun olduğundan emin değil misiniz?
          </h2>
          <p className="mt-3 text-white/80">
            Uzmanlarımız ihtiyacınızı analiz edip size özel teklif hazırlasın.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <ButtonLink href="/demo" variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-trust-blue">
              İletişime Geç
            </ButtonLink>
          </div>
        </Container>
      </section>
    </div>
  );
}
