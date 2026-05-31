import Link from "next/link";
import { Container } from "@/components/Container";

export default function PrivacyPolicyPage() {
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

          <h1 className="mb-8 mt-6 text-4xl font-bold">Gizlilik Politikası</h1>

          <p className="text-base leading-relaxed text-slate-700">
            PALINGA Yazılım A.Ş. olarak, Aphasia Reverbis kapsamında işlenen kişisel verilerin gizliliğine ve güvenliğine
            önem veririz. Bu politika; platformu kullanan afazi danışanları, danışan yakınları ve uzman dil‑konuşma
            terapistleri için temel gizlilik prensiplerimizi açıklar.
          </p>

          <h2 className="mb-3 mt-6 text-xl font-semibold">Temel ilkeler</h2>
          <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-700">
            <li>Veriler, yalnızca platformun sunulması ve rehabilitasyon süreçlerinin yürütülmesi amacıyla kullanılır.</li>
            <li>Veriler, hiçbir şekilde reklam amaçlı üçüncü taraflara satılmaz.</li>
            <li>Terapist‑danışan gizliliği esastır; yetkisiz erişimi önlemek için erişim kontrolleri uygulanır.</li>
          </ul>

          <h2 className="mb-3 mt-6 text-xl font-semibold">Paylaşım ve üçüncü taraflar</h2>
          <p className="text-base leading-relaxed text-slate-700">
            Hizmetin sunulması için zorunlu durumlarda (örn. barındırma/altyapı hizmetleri), yalnızca gerekli ölçüde ve
            güvenlik yükümlülükleri altında sınırlı paylaşım yapılabilir. Bu kapsam dışında verileriniz üçüncü taraflarla
            paylaşılmaz.
          </p>

          <h2 className="mb-3 mt-6 text-xl font-semibold">Güvenlik</h2>
          <p className="text-base leading-relaxed text-slate-700">
            Verilerin güvenliği için teknik ve idari tedbirler uygulanır; erişim yetkileri sınırlandırılır ve uygun
            güvenlik kontrolleriyle izlenir.
          </p>

          <h2 className="mb-3 mt-6 text-xl font-semibold">Veri silme</h2>
          <p className="text-base leading-relaxed text-slate-700">
            Hesabınızı ve ilişkili verilerinizi nasıl silebileceğinizi, hangi verilerin kalıcı olarak silindiğini ve
            yasal saklama kapsamındaki kayıtları{" "}
            <Link href="/hesap-silme" className="font-semibold text-trust-blue hover:underline">
              Hesap ve Veri Silme
            </Link>{" "}
            sayfamızda bulabilirsiniz.
          </p>
        </div>
      </Container>
    </div>
  );
}



