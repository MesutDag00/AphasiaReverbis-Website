import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";
import { BadgeCheckIcon, TrophyIcon, ShieldCheckIcon, UserCheckIcon, BarChart3Icon, ZapIcon, TrendingUpIcon, UsersIcon, ClipboardListIcon } from "@/components/Icons";
import { CountUp } from "@/components/CountUp";
import { Reveal } from "@/components/Reveal";
import { StepCard } from "@/components/StepCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-clean-white">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(0,82,204,0.14),transparent_55%),radial-gradient(700px_circle_at_80%_20%,rgba(0,163,191,0.12),transparent_50%)]" />
        <Container className="relative">
          <div className="grid min-h-[calc(100svh-4rem)] gap-x-10 gap-y-16 py-12 sm:py-16 lg:grid-cols-2 lg:items-center lg:py-20">
            <div className="space-y-5">
              <h1 className="fade-in-up text-balance text-3xl font-bold leading-tight text-ink-black sm:text-4xl lg:text-5xl" style={{ animationDelay: "0ms" }}>
                Afazi Terapisinde{" "}
                <span className="whitespace-nowrap text-trust-blue">Veri Odaklı</span>{" "}
                Süreç Yönetimi
              </h1>
              <p className="fade-in-up max-w-xl text-lg text-soft-gray" style={{ animationDelay: "100ms" }}>
                Terapistler için gerçek zamanlı ilerleme takibi; hastalar için güdüleyici ev egzersizi deneyimi — TÜBİTAK destekli tek ekosistemde.
              </p>
              <div className="fade-in-up flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "160ms" }}>
                <ButtonLink href="/solution" variant="primary" className="w-full sm:w-auto">Platformu Keşfet</ButtonLink>
                <ButtonLink href="/demo" variant="secondary" className="w-full sm:w-auto">Hemen Başlayın</ButtonLink>
              </div>
              <div className="fade-in-up flex flex-wrap items-center gap-2 pt-1" style={{ animationDelay: "220ms" }}>
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-ink-black ring-1 ring-soft-line">
                  <span className="inline-flex h-5 w-5 items-center justify-center text-trust-blue" aria-hidden="true"><BadgeCheckIcon /></span>
                  TÜBİTAK 1812 Destekli
                </div>
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-ink-black ring-1 ring-soft-line">
                  <span className="inline-flex h-5 w-5 items-center justify-center text-healing-teal" aria-hidden="true"><TrophyIcon /></span>
                  IDEATHON 2025 Birincisi
                </div>
              </div>
            </div>

            <div className="fade-in-up mt-8 flex justify-center lg:mt-0" style={{ animationDelay: "220ms" }}>
              <div className="relative">
                <div className="pointer-events-none absolute -inset-12 rounded-full bg-[radial-gradient(ellipse_at_50%_40%,rgba(0,82,204,0.20),rgba(0,163,191,0.12),transparent_70%)] blur-3xl" aria-hidden="true" />
                <Image
                  src="/images/Phone/Demo-Telefon.png"
                  alt="Aphasia Reverbis mobil uygulama ekran görüntüsü"
                  width={433}
                  height={576}
                  quality={100}
                  sizes="(max-width: 640px) 90vw, 433px"
                  className="relative block max-h-[min(580px,calc(100svh-12rem))] w-auto [mix-blend-mode:multiply]"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Koyu Bölüm: Stats + Süreç + Destekçiler ────────────── */}
      <section aria-label="Platform ve Süreç" className="relative overflow-hidden bg-ink-black h-[calc(100svh-4rem)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_50%_0%,rgba(0,82,204,0.18),transparent_60%)]" aria-hidden="true" />
        <Container className="relative h-full flex flex-col justify-center py-8">

          {/* İstatistikler */}
          <Reveal>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { value: 35,   prefix: "%",     label: "Türkiye'de inme sonrası afazi oranı" },
                { value: 9500, suffix: "+",     label: "Karşılanamayan terapist talebi" },
                { value: 94,   prefix: "%",     label: "Egzersiz uyum oranı (pilot)" },
                { value: 2,    suffix: "+ Yıl", label: "Kesintisiz AR-GE süreci" },
              ].map(({ value, prefix, suffix, label }) => (
                <div key={label} className="text-center">
                  <div className="text-3xl font-bold text-white sm:text-4xl">
                    <CountUp to={value} prefix={prefix} suffix={suffix} startWhenVisible />
                  </div>
                  <div className="mt-1.5 text-xs font-semibold leading-snug text-white/45">{label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="my-10 h-px bg-white/10" aria-hidden="true" />

          {/* Nasıl Çalışır */}
          <Reveal>
            <div className="mb-8 text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold text-white/80 ring-1 ring-white/15">
                Süreç
              </div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Nasıl Çalışır?</h2>
              <p className="mt-3 text-white/55">Kayıttan ilk seansa 4 adımda başlayın</p>
            </div>
          </Reveal>
          <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-8 hidden h-0.5 bg-gradient-to-r from-trust-blue/30 via-healing-teal/50 to-trust-blue/30 lg:block" aria-hidden="true" />
            <StepCard step={1} title="Terapist Profil Oluşturur" description="Danışan bilgileri ve klinik değerlendirme." icon={<UserCheckIcon />} delay={0} dark />
            <StepCard step={2} title="Kişisel Plan Atanır" description="Kişisel egzersiz planı mobil uygulamaya yüklenir." icon={<ZapIcon />} delay={80} dark />
            <StepCard step={3} title="Hasta Evde Çalışır" description="Hasta egzersizlerini kendi temposunda tamamlar." icon={<BarChart3Icon />} delay={160} dark />
            <StepCard step={4} title="Terapist Analiz Eder" description="Gerçek zamanlı takip, güncelleme ve raporlama." icon={<ShieldCheckIcon />} delay={240} dark />
          </div>
          <Reveal>
            <div className="mt-8 text-center">
              <ButtonLink href="/solution" variant="ghost" className="border border-white/25 text-white hover:border-white/50 hover:bg-white/10">
                Platform Detaylarını İncele
              </ButtonLink>
            </div>
          </Reveal>


        </Container>
      </section>

      {/* ── Problem Bölümü ──────────────────────────────────────── */}
      <section aria-label="Afazi terapisinde karşılaşılan zorluklar" className="bg-clean-white">
        <Container className="py-16 sm:py-20">
          <Reveal>
            <div className="mb-12 text-center">
              <div className="badge mb-3 inline-flex">Zorluklar</div>
              <h2 className="text-3xl font-bold text-ink-black sm:text-4xl">Terapistlerin Günlük Gerçeği</h2>
              <p className="mt-3 text-soft-gray">Klinik ortamında dijitale taşınmamış üç kritik süreç</p>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-3">
            {([
              { icon: <ClipboardListIcon />, title: "Ev Egzersizi Takibi",      desc: "Hasta uyumu kâğıt notlar veya hafıza ile izleniyor; seans arası gelişim görünmez kalıyor.", blue: true  },
              { icon: <BarChart3Icon />,     title: "İdari Raporlama Yükü",    desc: "Seans notları ve raporlama terapistin klinik zamanını tüketiyor.",                           blue: false },
              { icon: <UsersIcon />,         title: "Aile Sürece Dahil Değil", desc: "Yakınlar için standart rehberlik yok; terapist anlatıyor, aile unutuyor.",                  blue: true  },
            ] as { icon: React.ReactNode; title: string; desc: string; blue: boolean }[]).map(({ icon, title, desc, blue }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="card h-full p-7">
                  <div className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl ${blue ? "bg-trust-blue/10 text-trust-blue" : "bg-healing-teal/10 text-healing-teal"}`}>
                    {icon}
                  </div>
                  <h3 className="mb-2 text-base font-bold text-ink-black">{title}</h3>
                  <p className="text-sm leading-relaxed text-soft-gray">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Özellikler Özeti ─────────────────────────────────────── */}
      <section aria-label="Platform özellikleri" className="bg-[#f4f7fb]">
        <Container className="py-16 sm:py-20">
          <Reveal>
            <div className="mb-12 text-center">
              <div className="badge mb-3 inline-flex">Çözüm</div>
              <h2 className="text-3xl font-bold text-ink-black sm:text-4xl">Her Soruna Karşılık Bir Araç</h2>
              <p className="mt-3 text-soft-gray">Platformun üç temel farkı</p>
            </div>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-3">
            {([
              { icon: <TrendingUpIcon />, title: "Gerçek Zamanlı Takip", desc: "Ev egzersizi verileri anlık görünür. Seans başlamadan önce terapist tüm gelişimi bilir." },
              { icon: <ZapIcon />,        title: "Otomatik Raporlama",   desc: "8 analiz paneli ile hazır görsel raporlar. İdari yük azalır, klinik zamana daha fazla yer kalır." },
              { icon: <UsersIcon />,      title: "Aile Modülü",          desc: "Yakınlar için özel yönlendirici ekranlar. Ev ortamında terapist rehberliği kesintisiz sürer." },
            ] as { icon: React.ReactNode; title: string; desc: string }[]).map(({ icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 100}>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-trust-blue text-white shadow-soft">
                    {icon}
                  </div>
                  <h3 className="mb-2 text-base font-bold text-ink-black">{title}</h3>
                  <p className="text-sm leading-relaxed text-soft-gray">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-12 text-center">
              <ButtonLink href="/solution" variant="secondary">Tüm Özellikleri Gör</ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>


      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section aria-label="İletişime Geç" className="bg-white">
        <Container className="py-16 sm:py-20">
          <Reveal>
            <div className="overflow-hidden rounded-3xl bg-trust-blue p-10 text-center shadow-soft">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Aphasia Reverbis'i Kurumunuzda Deneyin
              </h2>
              <p className="mt-3 text-white/80">
                İletişime geçin, uzmanlarımız 24 saat içinde dönüş yapsın.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <ButtonLink href="/demo" variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-trust-blue">
                  İletişime Geç
                </ButtonLink>
                <ButtonLink href="/pricing" variant="ghost" className="text-white/80 hover:text-white">
                  Fiyatlandırmayı İncele
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

    </div>
  );
}
