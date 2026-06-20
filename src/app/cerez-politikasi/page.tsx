import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description:
    "Aphasia Reverbis çerez politikası: web sitemizde kullanılan çerez türleri, kullanım amaçları ve çerez tercihlerinizi nasıl yönetebileceğiniz.",
  alternates: { canonical: "/cerez-politikasi" },
};

export default function CookiePolicyPage() {
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

          <h1 className="mb-8 mt-6 text-4xl font-bold">Çerez Politikası</h1>

          <p className="text-base leading-relaxed text-slate-700">
            Aphasia Reverbis web sitesinde, kullanıcı deneyimini iyileştirmek ve sitenin doğru şekilde çalışmasını sağlamak
            amacıyla yalnızca performans ve kullanıcı deneyimi için gerekli teknik çerezler kullanılabilir.
          </p>

          <h2 className="mb-3 mt-6 text-xl font-semibold">Çerezler neden kullanılır?</h2>
          <p className="text-base leading-relaxed text-slate-700">
            Teknik çerezler; sayfa geçişlerinin doğru çalışması, temel güvenlik kontrolleri ve performans iyileştirmeleri
            gibi işlevler için kullanılabilir. Bu çerezler, platformun sağlıklı çalışması açısından gereklidir.
          </p>

          <h2 className="mb-3 mt-6 text-xl font-semibold">Çerez yönetimi</h2>
          <p className="text-base leading-relaxed text-slate-700">
            Tarayıcı ayarlarınız üzerinden çerezleri kontrol edebilir veya silebilirsiniz. Çerezleri devre dışı bırakmanız,
            sitenin bazı işlevlerinin beklenen şekilde çalışmamasına neden olabilir.
          </p>
        </div>
      </Container>
    </div>
  );
}



