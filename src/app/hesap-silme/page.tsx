import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Hesap ve Veri Silme | Aphasia Reverbis",
  description:
    "Aphasia Reverbis hesabınızı ve ilişkili verilerinizi nasıl silebileceğinizi öğrenin.",
  robots: "index, follow",
};

export default function AccountDeletionPage() {
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

          <h1 className="mb-2 mt-6 text-4xl font-bold">Hesap ve Veri Silme Talebi</h1>
          <p className="mb-8 text-sm text-slate-500">Aphasia Reverbis — Palinga Yazılım A.Ş.</p>

          <p className="text-base leading-relaxed text-slate-700">
            Bu sayfa, <strong>Aphasia Reverbis</strong> uygulamasının kullanıcılarının hesaplarını ve
            hesaplarıyla ilişkili verilerini nasıl silebileceklerini açıklar. Aphasia Reverbis, Palinga
            Yazılım A.Ş. tarafından geliştirilmekte ve işletilmektedir.
          </p>

          <h2 className="mb-3 mt-8 text-xl font-semibold text-[#1E3A8A]">
            1. Uygulama içinden hesabınızı silme
          </h2>
          <p className="text-base leading-relaxed text-slate-700">
            Hesabınızı doğrudan uygulama üzerinden kalıcı olarak silebilirsiniz. Adımlar hem hasta/kullanıcı
            hem terapist hesapları için aynıdır:
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-base leading-relaxed text-slate-700">
            <li>Uygulamada hesabınıza giriş yapın.</li>
            <li>
              Ana sayfanın altındaki menüden <strong>Profil</strong> sekmesine dokunun.
            </li>
            <li>
              Profil sayfasında <strong>Uygulama Ayarları</strong> seçeneğine dokunun.
            </li>
            <li>
              Sayfanın en altındaki kırmızı <strong>Hesabımı Kalıcı Olarak Sil</strong> butonuna dokunun.
            </li>
            <li>
              Açılan <strong>“Hesabını Silmek İstediğine Emin Misin?”</strong> penceresinde{" "}
              <strong>Evet, Hesabımı Sil</strong> butonuna dokunun.
            </li>
            <li>
              Onayladıktan sonra hesabınız ve ilişkili tüm verileriniz (ilerlemeniz, egzersiz geçmişiniz ve
              profil bilgileriniz) kalıcı olarak silinir. Bu işlem geri alınamaz.
            </li>
          </ol>

          <h2 className="mb-3 mt-8 text-xl font-semibold text-[#1E3A8A]">
            2. Uygulamaya erişemiyorsanız
          </h2>
          <p className="text-base leading-relaxed text-slate-700">
            Uygulamaya giriş yapamıyorsanız veya hesabınızı uygulama dışından sildirmek istiyorsanız, kayıtlı
            e-posta adresinizden aşağıdaki adrese talep gönderebilirsiniz:
          </p>
          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-base leading-relaxed text-slate-700 sm:p-5">
            <p>
              <strong>E-posta:</strong>{" "}
              <a
                href="mailto:aphasiareverbis@palingayazilim.com"
                className="font-semibold text-trust-blue hover:underline"
              >
                aphasiareverbis@palingayazilim.com
              </a>
            </p>
            <p className="mt-2">
              <strong>Konu:</strong> Hesap Silme Talebi
            </p>
            <p className="mt-2">
              Talebinizde hesabınıza kayıtlı e-posta adresini belirtmeniz, kimliğinizi doğrulamamız için
              yeterlidir.
            </p>
          </div>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            Talepler en geç <strong>30 gün</strong> içinde sonuçlandırılır.
          </p>

          <h2 className="mb-3 mt-8 text-xl font-semibold text-[#1E3A8A]">
            3. Silinen ve saklanan veriler
          </h2>
          <p className="text-base leading-relaxed text-slate-700">
            Hesap silme talebiniz işleme alındığında aşağıdaki veriler işlenir:
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-sm text-slate-700">
              <thead>
                <tr>
                  <th className="border border-slate-200 bg-slate-100 px-3 py-2 text-left font-semibold">
                    Veri türü
                  </th>
                  <th className="border border-slate-200 bg-slate-100 px-3 py-2 text-left font-semibold">
                    Durum
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 align-top">
                    Ad-soyad, e-posta, telefon numarası, doğum tarihi
                  </td>
                  <td className="border border-slate-200 px-3 py-2 align-top">Kalıcı olarak silinir</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 align-top">
                    Egzersiz sonuçları, gelişim/analiz verileri (sağlık verisi)
                  </td>
                  <td className="border border-slate-200 px-3 py-2 align-top">Kalıcı olarak silinir</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 align-top">Dijital Günlük fotoğrafları</td>
                  <td className="border border-slate-200 px-3 py-2 align-top">Kalıcı olarak silinir</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 align-top">
                    Terapist doğrulama belgeleri (diploma vb.)
                  </td>
                  <td className="border border-slate-200 px-3 py-2 align-top">Kalıcı olarak silinir</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 align-top">
                    Yasal yükümlülük gereği saklanması zorunlu kayıtlar (ör. fatura/işlem kayıtları)
                  </td>
                  <td className="border border-slate-200 px-3 py-2 align-top">
                    İlgili mevzuatın öngördüğü süre boyunca (en fazla 10 yıl) saklanır, ardından silinir
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            Yasal saklama süresi boyunca tutulan veriler yalnızca yasal yükümlülüğün gerektirdiği amaçla
            saklanır ve başka hiçbir amaçla kullanılmaz.
          </p>

          <footer className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
            <p>Aphasia Reverbis — Palinga Yazılım A.Ş.</p>
            <p className="mt-1">
              Bu sayfa hesap ve veri silme taleplerine ilişkin bilgilendirme amacıyla yayımlanmıştır.
            </p>
            <p className="mt-1">Son güncelleme: 31 Mayıs 2026</p>
          </footer>
        </div>
      </Container>
    </div>
  );
}
