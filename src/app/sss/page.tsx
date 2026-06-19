import { Container } from "@/components/Container";
import { AccordionItem } from "@/components/AccordionItem";

export const metadata = {
  title: "Sıkça Sorulan Sorular — Aphasia Reverbis",
  description: "Aphasia Reverbis platformu hakkında merak ettiğiniz her şey: teknik, güvenlik, fiyat ve entegrasyon.",
};

const categories = [
  {
    title: "Genel",
    items: [
      {
        q: "Aphasia Reverbis nedir?",
        a: "Aphasia Reverbis, afazi tanısı almış bireylerin dil-konuşma terapisi süreçlerini dijitalleştiren, terapist kontrollü ve veri odaklı bir rehabilitasyon platformudur. Mobil uygulama (hasta tarafı) ve web tabanlı terapist panelinden oluşur.",
      },
      {
        q: "Kimler kullanabilir?",
        a: "Platform; dil ve konuşma terapistleri, rehabilitasyon klinikleri, hastaneler ve afazi hastalarının bireysel veya kurumsal kullanımına yöneliktir. Hasta yakınları da aile katılım modülü aracılığıyla sürece dahil olabilir.",
      },
      {
        q: "TÜBİTAK desteği ne anlama geliyor?",
        a: "Aphasia Reverbis, TÜBİTAK BİGG 1812 programı kapsamında değerlendirilen ve Mükemmeliyet Mührü alan 107 seçkin projeden biridir. Bu destek, platformun bilimsel temelli, denetlenmiş ve yatırıma değer görüldüğünün kurumsal onayıdır.",
      },
      {
        q: "Platform Türkçe mi?",
        a: "Evet, platform tamamen Türkçe olarak tasarlanmıştır. İçerikler ve arayüz Türkçe dil yapısına ve afazi terapisinin kültürel bağlamına göre oluşturulmuştur.",
      },
      {
        q: "Platforma nasıl başvurabilirim?",
        a: "Evet. İletişim sayfamız üzerinden bizimle iletişime geçmeniz yeterli. Uzmanlarımız 24 saat içinde sizinle iletişime geçer ve kurumunuza özel bir sunum planlar.",
      },
    ],
  },
  {
    title: "Teknik",
    items: [
      {
        q: "Platform mobil mi, web tabanlı mı?",
        a: "Her ikisi de. Hasta tarafı iOS ve Android mobil uygulaması üzerinden çalışır. Terapist paneli ise web tarayıcısı üzerinden erişilebilir; ek bir yazılım kurulumu gerekmez.",
      },
      {
        q: "Mobil uygulama internet bağlantısı olmadan çalışır mı?",
        a: "Temel egzersiz içerikleri offline modda kullanılabilir. Tamamlanan egzersizler internet bağlantısı sağlandığında otomatik olarak senkronize edilir.",
      },
      {
        q: "Hangi cihazlar destekleniyor?",
        a: "iOS 14 ve üzeri iPhone/iPad ile Android 9 ve üzeri cihazlar desteklenmektedir. Terapist paneli Chrome, Safari, Edge ve Firefox'un güncel sürümlerinde çalışır.",
      },
      {
        q: "Kaç danışan aynı anda takip edilebilir?",
        a: "Bu, seçilen plan tipine göre değişir. Bireysel Terapist planında 15 danışan, Klinik planında 100 danışan kapasitesi mevcuttur. Kurumsal planda sınır yoktur.",
      },
      {
        q: "Terapist ve hasta arasında gerçek zamanlı iletişim var mı?",
        a: "Mevcut sürümde terapist, danışanın egzersiz verilerini ve ilerleme raporlarını gerçek zamanlı izleyebilir. Doğrudan mesajlaşma özelliği yol haritamızdaki bir sonraki büyük güncellemede yer almaktadır.",
      },
    ],
  },
  {
    title: "Güvenlik & KVKK",
    items: [
      {
        q: "Kişisel sağlık verilerim güvende mi?",
        a: "Evet. Platform, uçtan uca şifreleme (TLS 1.3) ve AES-256 veri şifreleme standartları ile korunmaktadır. Veriler Türkiye'de veya AB sınırları içinde tutulan güvenli bulut altyapısında saklanmaktadır.",
      },
      {
        q: "KVKK uyumluluğu nasıl sağlanıyor?",
        a: "Tüm kişisel ve sağlık verileri KVKK'nın (6698 sayılı Kanun) gerektirdiği açık rıza, veri minimizasyonu ve erişim kısıtlaması ilkeleri doğrultusunda işlenmektedir. Kullanıcı verisi yalnızca hizmet kapsamında kullanılır, üçüncü taraflarla paylaşılmaz.",
      },
      {
        q: "Verilerime kim erişebilir?",
        a: "Yalnızca danışanın atanmış terapisti ve kurum yöneticisi erişebilir. Rol tabanlı erişim kontrolü (RBAC) ile her kullanıcı sadece kendi yetkisi dahilindeki verileri görebilir.",
      },
      {
        q: "Verilerimi silme hakkım var mı?",
        a: "Evet. KVKK kapsamında 'Unutulma Hakkı' dahilinde verilerinizin silinmesini talep edebilirsiniz. Hesap Silme sayfamız üzerinden başvurabilir ya da palingayazilim@gmail.com adresine e-posta gönderebilirsiniz.",
      },
    ],
  },
  {
    title: "Fiyatlandırma",
    items: [
      {
        q: "Ücretsiz deneme imkânı var mı?",
        a: "Kurumsal değerlendirme sürecine dahil olan kliniklere pilot program kapsamında sınırlı süreli ücretsiz erişim sağlanmaktadır. İletişime geçerken belirtmeniz yeterli.",
      },
      {
        q: "Fiyatlar nasıl belirleniyor?",
        a: "Fiyatlar; danışan kapasitesi, terapist sayısı ve entegrasyon gereksinimlerine göre şekillenmektedir. Güncel plan seçenekleri için Fiyatlandırma sayfamızı inceleyebilir ya da iletişime geçebilirsiniz.",
      },
      {
        q: "Kurumsal fatura kesilebilir mi?",
        a: "Evet. Tüm planlar için kurumsal fatura (e-fatura dahil) kesilmektedir.",
      },
      {
        q: "Sözleşme süresi var mı?",
        a: "Aylık planlarda herhangi bir taahhüt yoktur. Yıllık planlarda 12 aylık anlaşma yapılmakta, %20 indirim uygulanmaktadır.",
      },
    ],
  },
  {
    title: "Entegrasyon",
    items: [
      {
        q: "Mevcut hastane yönetim sistemleriyle entegrasyon mümkün mü?",
        a: "Evet. Kurumsal plan kapsamında HIS (Hastane Bilgi Sistemi) ve EHR (Elektronik Sağlık Kaydı) entegrasyon desteği sunulmaktadır. Entegrasyon gereksinimleri proje bazında değerlendirilmektedir.",
      },
      {
        q: "API erişimi sağlıyor musunuz?",
        a: "API erişimi yalnızca Kurumsal plan kapsamında sunulmaktadır. Endpoint dokümantasyonu ve sandbox ortamı ilgili ekibimizle paylaşılmaktadır.",
      },
      {
        q: "Mevcut hasta veritabanını aktarabilir miyim?",
        a: "Evet. Kurumsal onboarding sürecinde standart formatlardaki (CSV, FHIR) hasta verilerinin platform veritabanına aktarılması için teknik destek sağlanmaktadır.",
      },
    ],
  },
];

export default function SssPage() {
  return (
    <div className="bg-clean-white">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_circle_at_50%_0%,rgba(0,163,191,0.06),transparent_55%)]" />
        <Container className="relative py-16 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <div className="badge mb-3 inline-flex">SSS</div>
              <h1 className="text-4xl font-bold text-ink-black sm:text-5xl">Sıkça Sorulan Sorular</h1>
              <p className="mt-4 text-soft-gray">
                Aradığınız cevabı bulamadıysanız{" "}
                <a href="/contact" className="font-semibold text-trust-blue hover:underline">bize yazın</a>.
              </p>
            </div>

            <div className="space-y-10">
              {categories.map((cat) => (
                <section key={cat.title}>
                  <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-trust-blue">{cat.title}</h2>
                  <div className="space-y-2">
                    {cat.items.map((item) => (
                      <AccordionItem key={item.q} question={item.q} answer={item.a} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
