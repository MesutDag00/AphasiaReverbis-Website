import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "Aphasia Reverbis kişisel verilerin korunması (KVKK, 6698 sayılı Kanun) aydınlatma metni: işlenen veriler, amaçlar, haklarınız ve veri güvenliği.",
  alternates: { canonical: "/kvkk" },
};

export default function KvkkPage() {
  return (
    <div className="bg-white text-slate-800">
      <Container className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl font-sans">
          <Link
            href="/"
            className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            ← Ana Sayfaya Dön
          </Link>

          <h1 className="mb-8 mt-6 text-4xl font-bold">KVKK Aydınlatma Metni</h1>

          <p className="text-base leading-relaxed text-slate-700">
            Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, veri sorumlusu sıfatıyla
            PALINGA Yazılım A.Ş.’nin Aphasia Reverbis ürünü kapsamında işlediği kişisel veriler hakkında bilgilendirme
            amacıyla hazırlanmıştır.
          </p>

          <h2 className="mb-3 mt-6 text-xl font-semibold">İşlenen veri kategorileri</h2>
          <p className="text-base leading-relaxed text-slate-700">
            Aphasia Reverbis kapsamında; kullanıcıların rehabilitasyon süreçlerinin yürütülmesi ve destek hizmetlerinin
            sağlanması amacıyla iletişim verileri (örn. e‑posta, telefon) ile sağlık verileri (örn. egzersiz/performans
            kayıtları ve rehabilitasyon sürecine ilişkin değerlendirme verileri) işlenebilir.
          </p>

          <h2 className="mb-3 mt-6 text-xl font-semibold">Veri işleme amaçları</h2>
          <p className="text-base leading-relaxed text-slate-700">
            Kişisel verileriniz; rehabilitasyon süreçlerini iyileştirmek, platform işlevlerinin sağlıklı şekilde
            çalışmasını temin etmek, kullanıcı destek süreçlerini yürütmek ve mevzuattan doğan yükümlülükleri yerine
            getirmek amaçlarıyla işlenir.
          </p>

          <h2 className="mb-3 mt-6 text-xl font-semibold">Saklama ve güvenlik</h2>
          <p className="text-base leading-relaxed text-slate-700">
            Verileriniz, yetkisiz erişime karşı teknik ve idari tedbirlerle korunur; güvenli altyapılarda ve şifreli
            sunucularda saklanır. Erişimler, “ihtiyaç kadar erişim” prensibiyle sınırlandırılır ve kayıt altına alınabilir.
          </p>

          <h2 className="mb-3 mt-6 text-xl font-semibold">Haklarınız</h2>
          <p className="text-base leading-relaxed text-slate-700">
            KVKK’nın 11. maddesi kapsamındaki haklarınızı kullanmak için bizimle iletişime geçebilirsiniz. Hesap ve
            veri silme süreci için{" "}
            <Link href="/hesap-silme" className="font-semibold text-trust-blue hover:underline">
              Hesap ve Veri Silme
            </Link>{" "}
            sayfamıza bakabilirsiniz. Başvurular, kimlik doğrulaması sonrasında mevzuatta öngörülen sürelerde
            sonuçlandırılır.
          </p>
        </div>
      </Container>
    </div>
  );
}



