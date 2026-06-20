import { Container } from "@/components/Container";
import {
  WalletIcon,
  UserCheckIcon,
  UsersIcon,
  BarChart3Icon,
  SearchIcon,
  TrendingUpIcon,
  ShieldCheckIcon,
  LockIcon,
  ClipboardListIcon,
  CheckIcon,
} from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { PhoneCarousel } from "@/components/PhoneCarousel";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { SolutionScrollWrapper } from "@/components/SolutionScrollWrapper";
import { Footer } from "@/components/Footer";
import { AppDownloadBadges } from "@/components/AppDownloadBadges";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Danışanlar için 24 bilimsel aktivite içeren mobil uygulama, terapistler için 8 boyutlu analiz paneliyle gerçek zamanlı ilerleme takibi. Terapist kontrollü, KVKK uyumlu, veri odaklı afazi rehabilitasyon platformu.",
  alternates: { canonical: "/solution" },
  openGraph: {
    title: "Platform — Aphasia Reverbis",
    description:
      "24 bilimsel aktivite, 8 boyutlu analiz paneli ve terapist kontrollü ev egzersizi ekosistemi.",
    url: "/solution",
  },
};

const CATEGORY_STYLES = {
  "trust-blue":   "bg-trust-blue/10 text-trust-blue ring-trust-blue/20",
  "healing-teal": "bg-healing-teal/10 text-healing-teal ring-healing-teal/20",
} as const satisfies Record<string, string>;

type CategoryColor = keyof typeof CATEGORY_STYLES;

const FEATURE_ICON_STYLES = {
  "trust-blue":   "bg-trust-blue/10 text-trust-blue ring-trust-blue/15",
  "healing-teal": "bg-healing-teal/10 text-healing-teal ring-healing-teal/15",
} as const;

function Feature({
  title,
  desc,
  icon,
  color = "trust-blue",
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  color?: keyof typeof FEATURE_ICON_STYLES;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-soft-sm ring-1 ring-soft-line/50 transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-soft">
      <span className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ring-1 ${FEATURE_ICON_STYLES[color]}`}>
        <span className="sr-only">{title}</span>
        {icon}
      </span>
      <div>
        <div className="text-[14px] font-semibold text-ink-black leading-tight">{title}</div>
        <p className="mt-0.5 text-[12px] leading-snug text-slate-500">{desc}</p>
      </div>
    </div>
  );
}

export default function SolutionPage() {
  return (
    <SolutionScrollWrapper>
      {/* ── Bölüm A: Danışan ── */}
      <section aria-label="Danışan perspektifi" className="relative bg-clean-white flex items-center min-h-[calc(100dvh-4rem)]" style={{ scrollSnapAlign: 'start' }}>
        <Container className="py-12">
          <div className="grid items-center gap-16 lg:grid-cols-[50fr_50fr]">
            {/* Metin */}
            <Reveal>
              <div className="space-y-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-trust-blue/10 px-4 py-2 text-sm font-semibold text-trust-blue ring-1 ring-trust-blue/20">
                  Danışan &amp; Aile
                </div>
                <h2 className="text-balance text-4xl font-bold text-ink-black sm:text-5xl">
                  Ev Konforunda{" "}
                  <span className="text-trust-blue">Profesyonel Terapi</span>
                </h2>
                <p className="text-lg leading-relaxed text-soft-gray">
                  Danışan kendi temposunda çalışır, aile de sürece dahil olur. Güdüleyici arayüz egzersiz uyumunu artırır.
                </p>
                <ul className="space-y-4">
                  {[
                    "Kişiselleştirilmiş günlük program",
                    "Aile rehberlik modülü",
                    "%94 egzersiz uyum oranı (pilot)",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-trust-blue/10 text-trust-blue">
                        <CheckIcon />
                      </span>
                      <span className="text-base font-semibold text-ink-black">{item}</span>
                    </li>
                  ))}
                </ul>
                <AppDownloadBadges theme="light" />
              </div>
            </Reveal>

            {/* Görsel — otomatik geçişli carousel */}
            <Reveal delay={80}>
              <div className="flex justify-center">
                <PhoneCarousel />
              </div>
            </Reveal>
          </div>
        </Container>

        <ScrollIndicator />
      </section>

      {/* ── Bölüm B: Terapist — açık arka plan, görsel sol ── */}
      <section aria-label="Terapist perspektifi" className="bg-[#f4f7fb] flex items-center min-h-[calc(100dvh-4rem)]" style={{ scrollSnapAlign: 'start' }}>
        <Container className="py-12">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Görsel */}
            <Reveal>
              <img
                src="/images/Therapsit/Therapist.png"
                alt="Terapist platformu kullanırken"
                className="block h-auto w-full"
              />
            </Reveal>

            {/* Metin */}
            <Reveal delay={80}>
              <div className="space-y-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-healing-teal/10 px-4 py-2 text-sm font-semibold text-healing-teal ring-1 ring-healing-teal/20">
                  Terapist
                </div>
                <h2 className="text-balance text-4xl font-bold text-ink-black sm:text-5xl">
                  Klinik Gücü,{" "}
                  <span className="text-healing-teal">Uzaktan Erişim</span>
                </h2>
                <p className="text-lg leading-relaxed text-soft-gray">
                  Terapist her danışanın ev egzersizini gerçek zamanlı izler. Seans başlamadan önce tüm veriye sahip olur.
                </p>
                <ul className="space-y-4">
                  {[
                    "Gerçek zamanlı egzersiz verisi",
                    "8 boyutlu ilerleme analizi",
                    "Otomatik PDF rapor",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-healing-teal/10 text-healing-teal">
                        <CheckIcon />
                      </span>
                      <span className="text-base font-semibold text-ink-black">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section aria-label="24 Bilimsel Aktivite" className="bg-clean-white flex items-center min-h-[calc(100dvh-4rem)]" style={{ scrollSnapAlign: 'start' }}>
        <Container className="py-12">
          <Reveal>
            <div className="mb-10 text-center">
              <div className="badge mb-3 inline-flex">Kanıt Temelli Egzersizler</div>
              <h2 className="text-3xl font-bold text-ink-black sm:text-4xl">24 Bilimsel Aktivite</h2>
              <p className="mt-3 text-soft-gray">
                ASHA tavsiyeli, afazinin tüm boyutlarını kapsayan kapsamlı egzersiz kütüphanesi
              </p>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                category: "Sözcük Erişimi",
                count: 4,
                color: "trust-blue" as CategoryColor,
                activities: ["Görsel Adlandırma", "Kademeli İpucu", "Bellek Tekrarı", "Duygusal Sözcük"],
                icon: (
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                  </svg>
                ),
              },
              {
                category: "Sözdizim & Cümle",
                count: 4,
                color: "healing-teal" as CategoryColor,
                activities: ["Sözdizim Tamamlama", "Bağlamlı Kelime", "Sözdizim Seçimi", "Kategori Gruplama"],
                icon: (
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 6h16M4 12h10M4 18h6" />
                  </svg>
                ),
              },
              {
                category: "Anlama",
                count: 4,
                color: "trust-blue" as CategoryColor,
                activities: ["Ses-Görsel Eşleştirme", "Metin Dinleme", "Cümle-Resim Eşleştirme", "Nesne Gösterme"],
                icon: (
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                  </svg>
                ),
              },
              {
                category: "Konuşma Üretimi",
                count: 4,
                color: "healing-teal" as CategoryColor,
                activities: ["MOR Sesli Okuma", "Konuşma Hızı Metronomu", "Akıcılık Testi", "Senaryo Tekrarı"],
                icon: (
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 14a3 3 0 0 0 3-3V7a3 3 0 0 0-6 0v4a3 3 0 0 0 3 3z" /><path d="M19 11a7 7 0 0 1-14 0" /><path d="M12 19v3" />
                  </svg>
                ),
              },
              {
                category: "ASHA Kanıt Temelli",
                count: 5,
                color: "trust-blue" as CategoryColor,
                activities: ["VNeST – Fiil Ağı", "PCA – Fonolojik Analiz", "RET – Yanıt Genişletme", "Minimal Çift Ayrımı", "Tekrar Köprüsü"],
                icon: (
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                ),
              },
              {
                category: "Okuma & Yazma",
                count: 3,
                color: "healing-teal" as CategoryColor,
                activities: ["Harf-Ses Eşleştirme", "Okuma Anlama", "Dijital Günlük"],
                icon: (
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                ),
              },
            ].map(({ category, count, color, icon }) => (
              <Reveal key={category}>
                <div className="card p-5">
                  <div className="flex items-center gap-3">
                    <span className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 ${CATEGORY_STYLES[color]}`}>
                      {icon}
                    </span>
                    <div>
                      <div className="text-sm font-bold text-ink-black">{category}</div>
                      <div className="text-xs font-semibold text-soft-gray">{count} aktivite</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 8 Analiz Paneli Section */}
      <section aria-label="8 Boyutlu Analiz" className="bg-[#f4f7fb] flex items-center min-h-[calc(100dvh-4rem)]" style={{ scrollSnapAlign: 'start' }}>
        <Container className="py-12">
          <Reveal>
            <div className="mb-10 text-center">
              <div className="badge mb-3 inline-flex">Veri Odaklı Raporlama</div>
              <h2 className="text-3xl font-bold text-ink-black sm:text-4xl">8 Boyutlu İlerleme Analizi</h2>
              <p className="mt-3 text-soft-gray">
                Her danışan için kapsamlı veri görselleştirme; terapist tek ekranda tüm gelişimi takip eder
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                panel: "A",
                title: "Genel Gelişim",
                desc: "Haftalık trend, 6 alt skor ve bütünleşik rehabilitasyon skoru",
                tone: "bg-trust-blue/10 text-trust-blue ring-trust-blue/20",
              },
              {
                panel: "B",
                title: "Kelime Analizi",
                desc: "Kelime erişimi aktiviteleri, hece kırılımı ve kelime başarı oranları",
                tone: "bg-healing-teal/10 text-healing-teal ring-healing-teal/20",
              },
              {
                panel: "C",
                title: "Hata Dağılımı",
                desc: "Fonetik, semantik ve üretim hatalarının otomatik sınıflandırması",
                tone: "bg-trust-blue/10 text-trust-blue ring-trust-blue/20",
              },
              {
                panel: "E",
                title: "Bağımsızlık Analizi",
                desc: "İpucu seviye dağılımı (L0–L3) ile öz-yönetim kapasitesi ölçümü",
                tone: "bg-healing-teal/10 text-healing-teal ring-healing-teal/20",
              },
              {
                panel: "F",
                title: "Bellek Kalıcılık",
                desc: "Aralıklı tekrar ve uzun vadeli konsolidasyon oranı analizi",
                tone: "bg-trust-blue/10 text-trust-blue ring-trust-blue/20",
              },
              {
                panel: "G",
                title: "Sözel Akıcılık",
                desc: "Kelime/dakika metriği ve yaşa-cinsiyete göre normlaştırılmış karşılaştırma",
                tone: "bg-healing-teal/10 text-healing-teal ring-healing-teal/20",
              },
              {
                panel: "H",
                title: "Alfabe Ustalık Haritası",
                desc: "29-harfli Türkçe alfabeye göre harf-ses hakimiyeti ısı haritası",
                tone: "bg-trust-blue/10 text-trust-blue ring-trust-blue/20",
              },
              {
                panel: "PDF",
                title: "Otomatik Rapor",
                desc: "Tüm panelleri tek tıkla PDF raporuna dönüştür; danışana veya kuruma ilet",
                tone: "bg-ink-black/5 text-ink-black ring-soft-line",
              },
            ].map(({ panel, title, desc, tone }) => (
              <Reveal key={panel}>
                <div className="card h-full p-5">
                  <span className={`inline-flex h-9 w-9 items-center justify-center rounded-xl text-xs font-bold ring-1 ${tone}`}>
                    {panel}
                  </span>
                  <h3 className="mt-3 text-sm font-bold text-ink-black">{title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-soft-gray">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Security Section */}
      <section aria-label="Güvenlik ve Uyumluluk" className="bg-clean-white flex items-center min-h-[calc(100dvh-4rem)]" style={{ scrollSnapAlign: 'start' }}>
        <Container className="py-12">
          <Reveal>
            <div className="mb-10 text-center">
              <div className="badge mb-3 inline-flex">Güvenlik & Uyumluluk</div>
              <h2 className="text-3xl font-bold text-ink-black sm:text-4xl">Verileriniz Güvende</h2>
              <p className="mt-3 text-soft-gray">Sağlık verisi işleme standartları ve KVKK uyumu önceliğimizdir</p>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <ShieldCheckIcon />,
                title: "KVKK Uyumluluğu",
                desc: "6698 sayılı Kanun kapsamında açık rıza, veri minimizasyonu ve erişim kısıtlaması ilkeleriyle çalışır.",
              },
              {
                icon: <LockIcon />,
                title: "Uçtan Uca Şifreleme",
                desc: "Tüm veriler TLS 1.3 aktarım ve AES-256 depolama şifrelemesiyle korunur.",
              },
              {
                icon: <UsersIcon />,
                title: "Rol Tabanlı Erişim",
                desc: "Her kullanıcı yalnızca kendi yetkisindeki verilere erişebilir. Terapist, yönetici ve danışan rolleri ayrıdır.",
              },
              {
                icon: <ClipboardListIcon />,
                title: "Denetim Kaydı",
                desc: "Tüm veri erişimleri ve işlemler zaman damgalı audit log ile kayıt altına alınır.",
              },
            ].map(({ icon, title, desc }) => (
              <Reveal key={title} className="h-full">
                <div className="card h-full p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-trust-blue/10 text-trust-blue ring-1 ring-trust-blue/20">
                    {icon}
                  </span>
                  <h3 className="mt-4 text-base font-bold text-ink-black">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-soft-gray">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </SolutionScrollWrapper>
  );
}
