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
} from "@/components/Icons";
import { ButtonLink } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

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
    <div className="bg-clean-white">
      <Container className="pt-12 pb-8 sm:pt-14 sm:pb-10">
        <div className="max-w-xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-trust-blue/8 px-3 py-1.5 text-sm font-semibold text-trust-blue ring-1 ring-trust-blue/20">
            Platform
          </div>
          <h1 className="text-balance text-3xl font-bold leading-tight text-ink-black sm:text-4xl">
            Afazi terapisi için{" "}
            <span className="text-trust-blue">tam ekosistem</span>
          </h1>
          <p className="mt-3 text-base text-soft-gray">
            Hasta evde çalışır, terapist her adımı görür.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">

          {/* ── Danışan & Aile ── */}
          <Reveal className="h-full">
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-b from-white to-healing-teal/5 p-5 ring-1 ring-soft-line/60">
              <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(0,163,191,0.12),transparent_70%)]" />

              <div className="self-start inline-flex items-center gap-2 rounded-full bg-healing-teal/10 px-3 py-1 text-xs font-semibold text-healing-teal ring-1 ring-healing-teal/20">
                Danışan &amp; Aile
              </div>
              <h2 id="hasta-aile" className="mt-2.5 text-base font-bold text-ink-black">
                Evde Sürdürülebilir Rehabilitasyon
              </h2>

              {/* Mobil uygulama mockup */}
              <div className="mt-3 flex flex-1 flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-soft-line/50">
                <div className="flex items-center justify-between border-b border-soft-line/40 px-4 py-2">
                  <span className="text-xs font-semibold text-ink-black">Bugünün Programı</span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-healing-teal/10 px-2 py-0.5 text-xs font-semibold text-healing-teal">
                    2 / 3 tamamlandı
                  </span>
                </div>

                <div className="flex-1 divide-y divide-soft-line/30 px-3">
                  {[
                    { name: "Görsel Adlandırma", done: true  },
                    { name: "Kademeli İpucu",    done: true  },
                    { name: "Bellek Tekrarı",    done: false },
                  ].map(({ name, done }) => (
                    <div key={name} className="flex items-center gap-3 py-2.5">
                      <span className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-1 ${done ? "bg-healing-teal/10 text-healing-teal ring-healing-teal/20" : "bg-slate-100 text-slate-400 ring-slate-200"}`}>
                        {done ? (
                          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                        ) : (
                          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 8v4l2 2" /></svg>
                        )}
                      </span>
                      <span className={`flex-1 text-sm font-semibold leading-tight ${done ? "text-slate-400 line-through" : "text-ink-black"}`}>{name}</span>
                      {!done && (
                        <span className="shrink-0 rounded-full bg-healing-teal/12 px-2.5 py-0.5 text-xs font-semibold text-healing-teal ring-1 ring-healing-teal/25">Başla</span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="border-t border-soft-line/40 bg-slate-50/60 px-4 py-2.5">
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-xs font-semibold text-soft-gray">Günlük hedef</span>
                    <span className="text-xs font-semibold text-healing-teal">%66</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-1.5 rounded-full bg-gradient-to-r from-healing-teal to-healing-teal/50" style={{ width: "66%" }} />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── Terapist ── */}
          <Reveal delay={80} className="h-full">
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-b from-white to-trust-blue/5 p-5 ring-1 ring-soft-line/60">
              <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(0,82,204,0.12),transparent_70%)]" />

              <div className="self-start inline-flex items-center gap-2 rounded-full bg-trust-blue/10 px-3 py-1 text-xs font-semibold text-trust-blue ring-1 ring-trust-blue/20">
                Terapist
              </div>
              <h2 id="terapist" className="mt-2.5 text-base font-bold text-ink-black">
                Veri Odaklı Uzaktan Yönetim
              </h2>

              {/* Admin dashboard mockup */}
              <div className="mt-3 flex-1 overflow-hidden rounded-2xl bg-white ring-1 ring-soft-line/50">
                <div className="flex items-center justify-between border-b border-soft-line/40 px-4 py-2">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-trust-blue/10 text-xs font-bold text-trust-blue">AY</span>
                    <span className="text-xs font-semibold text-ink-black">Ahmet Y.</span>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-trust-blue/10 px-2 py-0.5 text-xs font-semibold text-trust-blue">
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M3 17l6-6 4 4 7-7" /><path d="M14 8h6v6" /></svg>
                    Son 7 gün +12%
                  </span>
                </div>

                <div className="space-y-3 px-4 py-3">
                  {[
                    { label: "Kelime Bulma", value: 72 },
                    { label: "Akıcılık",     value: 58 },
                    { label: "Anlama",       value: 42 },
                    { label: "Bağımsızlık",  value: 35 },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between gap-3">
                      <span className="text-xs font-semibold text-slate-600">{label}</span>
                      <div className="flex shrink-0 items-center gap-1.5">
                        <div className="h-2 w-28 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className="h-2 rounded-full bg-gradient-to-r from-trust-blue to-healing-teal"
                            style={{ width: `${value}%` }}
                          />
                        </div>
                        <span className="w-7 text-right text-xs font-semibold text-slate-500">{value}%</span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </Reveal>

        </div>
      </Container>

      <section aria-label="24 Bilimsel Aktivite" className="bg-[#f4f7fb] py-16 sm:py-20">
        <Container>
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

      <Container className="py-16 sm:py-20">
        {/* 8 Analiz Paneli Section */}
        <section aria-label="8 Boyutlu Analiz">
          <Reveal>
            <div className="mb-10 text-center">
              <div className="badge mb-3 inline-flex">Veri Odaklı Raporlama</div>
              <h2 className="text-3xl font-bold text-ink-black sm:text-4xl">8 Boyutlu İlerleme Analizi</h2>
              <p className="mt-3 text-soft-gray">
                Her hasta için kapsamlı veri görselleştirme; terapist tek ekranda tüm gelişimi takip eder
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
                desc: "Tüm panelleri tek tıkla PDF raporuna dönüştür; hastaya veya kuruma ilet",
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
        </section>

        {/* Security Section */}
        <section aria-label="Güvenlik ve Uyumluluk" className="mt-16">
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
                desc: "Her kullanıcı yalnızca kendi yetkisindeki verilere erişebilir. Terapist, yönetici ve hasta rolleri ayrıdır.",
              },
              {
                icon: <ClipboardListIcon />,
                title: "Denetim Kaydı",
                desc: "Tüm veri erişimleri ve işlemler zaman damgalı audit log ile kayıt altına alınır.",
              },
            ].map(({ icon, title, desc }) => (
              <Reveal key={title}>
                <div className="card p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-trust-blue/10 text-trust-blue ring-1 ring-trust-blue/20">
                    {icon}
                  </span>
                  <h3 className="mt-4 text-base font-bold text-ink-black">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-soft-gray">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section aria-label="Partnerlik ve İletişim" className="mt-12">
          <div className="relative overflow-hidden rounded-3xl bg-trust-blue p-8 shadow-soft ring-1 ring-white/10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(255,255,255,0.14),transparent_55%),radial-gradient(800px_circle_at_85%_30%,rgba(0,163,191,0.22),transparent_55%)]" />
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/15" aria-hidden="true" />

            <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
              <div className="text-balance text-2xl font-semibold text-white sm:text-3xl">
                Aphasia Reverbis Teknolojisini Kurumunuzda Deneyimleyin
              </div>
              <p className="max-w-2xl text-[15px] font-medium leading-relaxed text-white/80">
                Rehabilitasyon süreçlerinizi dijitalleştirmek ve platform ortağımız olmak için bizimle iletişime geçin.
              </p>
              <ButtonLink
                href="/demo"
                variant="secondary"
                className="mt-1 w-full bg-white px-8 py-4 text-lg font-semibold text-trust-blue shadow-lg ring-0 hover:bg-clean-white sm:w-auto"
              >
                İletişime Geç
              </ButtonLink>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
