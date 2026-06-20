import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Icon, HomeIcon, MapPinIcon } from "@/components/Icons";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Aphasia Reverbis'i kuran ekip ve vizyonumuz: afazi rehabilitasyonunu bilimsel temelli terapi yöntemleri ve modern mobil teknolojiyle herkes için erişilebilir kılmak.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Hakkımızda — Aphasia Reverbis",
    description: "Kurucu ekibimiz, vizyonumuz ve misyonumuz.",
    url: "/about",
  },
};

type TeamMember = {
  name: string;
  title: string;
  bio: string;
  skills: string[];
  imageSrc?: string;
  linkedinHref?: string;
};

const team: TeamMember[] = [
  {
    name: "Serhat POLAT",
    title: "Kurucu Ortak & Proje Koordinatörü",
    bio: "Aphasia Reverbis'in stratejik planlamasını ve AR-GE süreçlerini yönetir. Yatırımcı ilişkileri ve müşteri yönetiminde liderlik ederek projenin vizyonunu belirler.",
    skills: ["#Liderlik", "#Strateji", "#Python", "#AR-GE"],
    imageSrc: "/images/Founders/serhat-polat.jpeg",
    linkedinHref: "https://www.linkedin.com/in/serhat-polat-9624a6344/",
  },
  {
    name: "Mesut DAĞ",
    title: "Kurucu Ortak & Mid Software Developer",
    bio: "Projenin mobil uygulama mimarisinin geliştirilmesi ve teknik altyapı süreçlerinden sorumludur. Bulut tabanlı sistemlerin entegrasyonu, veri tabanı yönetimi ve yazılım test süreçlerini yürüterek platformun güvenli ve kararlı bir yapıda çalışmasını sağlar.",
    skills: ["#MobilGeliştirme", "#C#", "#AWS/Azure", "#SQL"],
    imageSrc: "/images/Founders/mesut-dag.jpeg",
    linkedinHref: "https://www.linkedin.com/in/mesut-da%C4%9F-b781a0215/",
  },
  {
    name: "Berk AĞBABA",
    title: "Kurucu Ortak & Tasarım Lideri (UI/UX)",
    bio: "Kullanıcı arayüzü ve deneyimi süreçlerinin başındadır. Projenin görsel kimliğini oluşturur ve tasarım odaklı düşünce yapısını AR-GE süreçlerine entegre eder.",
    skills: ["#UI/UX", "#Figma", "#Tasarım", "#Frontend"],
    imageSrc: "/images/Founders/berk-agbaba.jpeg",
    linkedinHref: "https://www.linkedin.com/in/berk-a%C4%9Fbaba-938315210/",
  },
  {
    name: "Yakup KARAAVCI",
    title: "Kurucu Ortak & Ürün Yöneticisi",
    bio: "Yeni teknolojilerin araştırılması ve kalite güvence (QA) süreçlerini yönetir. Ürün yönetimi ve kullanıcı deneyimi standartlarının belirlenmesinde aktif rol oynar.",
    skills: ["#ÜrünYönetimi", "#QA", "#C++", "#SQL"],
    imageSrc: "/images/Founders/yakup-karaavcı.jpeg",
    linkedinHref: "https://www.linkedin.com/in/yakup-karaavc%C4%B1-92316337b/",
  },
  {
    name: "Doğukan KALYON",
    title: "Kurucu Ortak & Müşteri İlişkileri Yöneticisi",
    bio: "Teknik altyapı çalışmalarının yanı sıra müşteri memnuniyeti, geri bildirim analizi ve dokümantasyon süreçlerini yöneterek kullanıcı ile ürün arasındaki köprüyü kurar.",
    skills: ["#Müşteriİlişkileri", "#HTML/CSS", "#Dokümantasyon", "#SQL"],
    imageSrc: "/images/Founders/dogukan-kalyon.jpeg",
    linkedinHref: "https://www.linkedin.com/in/do%C4%9Fukan-kalyon-0a8b2b37a/",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-clean-white">
      <Container className="py-12 sm:py-16">

        {/* ── Başlık ── */}
        <div className="max-w-2xl">
          <h1 className="text-balance text-4xl font-bold text-ink-black sm:text-5xl">
            Hakkımızda
          </h1>
          <p className="mt-4 text-lg text-soft-gray">
            Güven inşa eden şey sadece teknoloji değil; doğru klinik çerçeve, ölçülebilir ilerleme ve sürdürülebilir iş birliği.
          </p>
        </div>

        {/* ── Vizyon & Misyon ── */}
        <section aria-label="Vizyon ve Misyon" className="mt-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl bg-white p-8 ring-1 ring-soft-line shadow-soft-sm">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_10%_10%,rgba(0,82,204,0.10),transparent_55%),radial-gradient(700px_circle_at_90%_20%,rgba(0,163,191,0.08),transparent_55%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-40 bg-[linear-gradient(90deg,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(180deg,rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[size:32px_32px]" />
              <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-trust-blue/10 blur-2xl" />
              <div className="relative">
                <div className="text-sm font-semibold text-trust-blue">Neden Varız?</div>
                <h2 className="mt-2 text-2xl font-bold text-ink-black">Erişilebilir Rehabilitasyon</h2>
                <p className="mt-3 text-base leading-relaxed text-soft-gray">
                  Afazi rehabilitasyonunu klinik sınırlarının ötesine taşıyarak, zaman ve mekandan bağımsız, herkes için ulaşılabilir ve sürdürülebilir bir sağlık standardı haline getirmek.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-white p-8 ring-1 ring-soft-line shadow-soft-sm">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_10%_10%,rgba(0,82,204,0.08),transparent_55%),radial-gradient(700px_circle_at_90%_20%,rgba(0,163,191,0.10),transparent_55%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-40 bg-[linear-gradient(90deg,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(180deg,rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[size:32px_32px]" />
              <div className="pointer-events-none absolute -left-10 -bottom-10 h-48 w-48 rounded-full bg-healing-teal/10 blur-2xl" />
              <div className="relative">
                <div className="text-sm font-semibold text-trust-blue">Nasıl Yapıyoruz?</div>
                <h2 className="mt-2 text-2xl font-bold text-ink-black">Bilim + Teknoloji</h2>
                <p className="mt-3 text-base leading-relaxed text-soft-gray">
                  Bilimsel temelli terapi yöntemlerini modern mobil teknolojilerle dijitalleştirerek; danışanlar için motive edici, uzmanlar için ise ölçülebilir ve güvenilir bir uzaktan takip sistemi sunmak.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Takım ── */}
        <section aria-label="Takımımız" className="mt-12">
          <div className="max-w-2xl">
            <h2 className="text-balance text-3xl font-bold text-ink-black">
              Kurucu Ekip
            </h2>
            <p className="mt-3 text-base text-soft-gray">
              Her biri farklı uzmanlıkta, tek vizyonda.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {team.map((m, idx) => (
              <div
                key={`${m.title}-${idx}`}
                className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-md ring-1 ring-soft-line transition duration-200 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="relative">
                    <div className="relative h-20 w-20 overflow-hidden rounded-full ring-1 ring-soft-line bg-[radial-gradient(120%_120%_at_30%_20%,rgba(0,82,204,0.16),rgba(0,163,191,0.10),transparent_70%)]">
                      {m.imageSrc ? (
                        <Image
                          src={m.imageSrc}
                          alt={`${m.name} profil fotoğrafı`}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="grid h-full w-full place-items-center text-base font-bold text-trust-blue">
                          {m.name.split(" ").slice(0, 2).map((p) => p[0]).join("")}
                        </div>
                      )}
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/50" aria-hidden="true" />
                  </div>

                  <a
                    href={m.linkedinHref ?? "#"}
                    aria-label={`${m.name} LinkedIn profili`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-clean-white ring-1 ring-soft-line text-soft-gray transition hover:text-trust-blue hover:bg-white"
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <path d="M4.98 3.5A2.5 2.5 0 1 1 2.5 6a2.5 2.5 0 0 1 2.48-2.5zM3 8.98h4v12H3v-12zM9 8.98h3.8v1.64h.05c.53-1 1.83-2.06 3.76-2.06 4.02 0 4.77 2.65 4.77 6.09v6.33h-4v-5.62c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.72H9v-12z" />
                    </svg>
                  </a>
                </div>

                <div className="mt-4">
                  <div className="text-lg font-bold text-ink-black">{m.name}</div>
                  <div className="mt-1 text-sm font-semibold text-soft-gray">{m.title}</div>
                  <p className="mt-3 text-sm leading-relaxed text-soft-gray">{m.bio}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {m.skills.map((s) => (
                    <span
                      key={`${m.name}-${s}`}
                      className="inline-flex items-center rounded-full bg-clean-white px-3 py-1 text-xs font-semibold text-trust-blue ring-1 ring-soft-line"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Konum ── */}
        <section aria-labelledby="office" className="mt-12">
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-col items-center text-center">
              <Icon title="Konum ve ofis">
                <HomeIcon />
              </Icon>
              <h2 id="office" className="mt-4 text-2xl font-bold text-ink-black">
                Konum ve Ofis
              </h2>
              <p className="mt-2 text-base text-soft-gray">
                Fark Labs TEKMER bünyesinde, Sarıyer'de faaliyet gösteriyoruz. Klinik iş birlikleri ve pilot çalışmalar için iletişime geçebilirsiniz.
              </p>
            </div>

            <div className="mt-6 flex flex-col items-center border border-soft-line bg-white text-center shadow-2xl rounded-3xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-full p-12">
                <img
                  src="/images/farklabs-logo.png"
                  alt="Farklabs TEKMER Logo"
                  className="mx-auto h-auto w-full max-w-[350px] object-contain"
                />
              </div>
              <div className="w-full px-10 pb-10">
                <div className="text-sm font-semibold uppercase tracking-widest text-soft-gray">
                  MERKEZ OFİS &amp; STRATEJİK PARTNER
                </div>
                <div className="mt-2 text-2xl font-bold text-ink-black">Farklabs TEKMER</div>
                <div className="mt-4 flex items-center justify-center gap-2 text-soft-gray">
                  <MapPinIcon />
                  <span>4. Levent, İstanbul - Teknoloji Geliştirme Bölgesi</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </Container>
    </div>
  );
}
