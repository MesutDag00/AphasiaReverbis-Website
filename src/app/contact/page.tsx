import { Container } from "@/components/Container";

export default function ContactPage() {
  return (
    <div className="bg-clean-white">
      <Container className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-bold text-ink-black sm:text-5xl">
            PALINGA Yazılım İletişim Merkezi
          </h1>
          <p className="mt-4 text-lg font-medium text-soft-gray">
            Size en hızlı şekilde geri dönebilmemiz için aşağıdaki kanalları kullanabilirsiniz.
          </p>
          <p className="mt-3 text-base font-semibold text-slate-600">
            Size yardımcı olmak için buradayız.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-6">
          <a
            aria-label="Telefon ile ara"
            href="tel:05318658144"
            className="group block rounded-2xl bg-slate-50 p-10 ring-1 ring-soft-line shadow-soft-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mx-auto grid max-w-2xl gap-6 text-center">
              <div className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white ring-1 ring-soft-line text-trust-blue shadow-soft-sm transition group-hover:shadow-soft">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L9.1 10.5a16 16 0 0 0 4.4 4.4l1.1-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
                </svg>
              </div>

              <div>
                <div className="text-sm font-semibold text-slate-500">Telefon</div>
                <div className="mt-2 text-3xl font-semibold tracking-tight text-ink-black sm:text-4xl">
                  0531 865 81 44
                </div>
                <div className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-base font-semibold text-slate-600 ring-1 ring-soft-line">
                  Hafta içi 09:00 - 18:00
                </div>
              </div>
            </div>
          </a>

          <a
            aria-label="E-posta gönder"
            href="mailto:palingayazilim@gmail.com"
            className="group block rounded-2xl bg-slate-50 p-10 ring-1 ring-soft-line shadow-soft-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mx-auto grid max-w-2xl gap-6 text-center">
              <div className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white ring-1 ring-soft-line text-trust-blue shadow-soft-sm transition group-hover:shadow-soft">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
              </div>

              <div>
                <div className="text-sm font-semibold text-slate-500">E-Posta</div>
                <div className="mt-2 break-all text-2xl font-semibold tracking-tight text-ink-black sm:text-3xl">
                  palingayazilim@gmail.com
                </div>
                <div className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-base font-semibold text-slate-600 ring-1 ring-soft-line">
                  24 saat içinde dönüş hedefi
                </div>
              </div>
            </div>
          </a>

          <section aria-label="Konum" className="overflow-hidden rounded-2xl bg-slate-50 ring-1 ring-soft-line shadow-soft-sm">
            <div className="p-10 text-center">
              <div className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white ring-1 ring-soft-line text-trust-blue shadow-soft-sm">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s7-4.4 7-11a7 7 0 0 0-14 0c0 6.6 7 11 7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>

              <div className="mt-5 text-sm font-semibold text-slate-500">Genel Merkez</div>
              <div className="mt-2 text-2xl font-semibold text-ink-black">Sarıyer / İstanbul</div>
              <div className="mt-3 text-base font-medium text-slate-600">
                Maslak Mah. AOS 55. Sk 42 Maslak A Blok No: 2 İç Kapı No: 9
                <br />
                Sarıyer, İstanbul
              </div>
              <div className="mt-3 text-base font-medium text-slate-600">
                Haritada görüntüleyerek yol tarifi alabilirsiniz.
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Maslak+Mah.+AOS+55.+Sk+42+Maslak+A+Blok+No+2+%C4%B0%C3%A7+Kap%C4%B1+No+9+Sar%C4%B1yer+%C4%B0stanbul"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-2xl bg-trust-blue px-6 py-3 text-base font-semibold text-white shadow-soft transition hover:bg-[#0047B3] hover:shadow-xl"
              >
                Haritada Görüntüle
              </a>
            </div>

            <div className="relative aspect-[16/7] w-full bg-[radial-gradient(900px_circle_at_20%_20%,rgba(0,82,204,0.14),transparent_55%),radial-gradient(900px_circle_at_70%_70%,rgba(0,163,191,0.12),transparent_60%)]">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(148,163,184,0.22)_1px,transparent_1px),linear-gradient(180deg,rgba(148,163,184,0.22)_1px,transparent_1px)] bg-[size:26px_26px] opacity-60" />
              <div className="absolute inset-0 opacity-70 [mask-image:radial-gradient(60%_70%_at_50%_55%,#000_35%,transparent_78%)]">
                <div className="absolute left-[18%] top-[30%] h-20 w-24 rounded-[999px] border border-slate-400/25 bg-white/15 blur-[0.2px]" />
                <div className="absolute left-[40%] top-[38%] h-16 w-28 rounded-[999px] border border-slate-400/25 bg-white/10" />
                <div className="absolute left-[58%] top-[32%] h-24 w-28 rounded-[999px] border border-slate-400/25 bg-white/10" />
                <div className="absolute left-[48%] top-[52%] h-16 w-24 rounded-[999px] border border-slate-400/25 bg-white/10" />
              </div>
              <div className="absolute inset-0 grid place-items-center">
                <div className="flex flex-col items-center gap-2">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-trust-blue text-white shadow-soft">
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </span>
                  <div className="rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-slate-700 ring-1 ring-white/70 shadow-soft-sm backdrop-blur">
                    Sarıyer / İstanbul
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}


