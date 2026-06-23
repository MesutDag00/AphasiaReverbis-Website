"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";
import { CheckIcon } from "@/components/Icons";
import { cn } from "@/lib/cn";

type Plan = {
  name: string;
  monthlyPrice: string | null;
  yearlyPrice: string | null;
  description: string;
  features: string[];
  highlighted: boolean;
  ctaLabel: string;
  ctaHref: string;
  badge?: string;
};

const plans: Plan[] = [
  {
    name: "Bireysel Terapist",
    monthlyPrice: "İletişime Geç",
    yearlyPrice: "İletişime Geç",
    description: "Bağımsız çalışan dil ve konuşma terapistleri için temel platform.",
    features: [
      "1 terapist hesabı",
      "15 danışan kapasitesi",
      "Egzersiz kütüphanesi (200+ içerik)",
      "Temel ilerleme raporları",
      "Mobil uygulama erişimi",
      "E-posta desteği",
    ],
    highlighted: false,
    ctaLabel: "İletişime Geç",
    ctaHref: "/contact",
  },
  {
    name: "Klinik",
    monthlyPrice: "İletişime Geç",
    yearlyPrice: "İletişime Geç",
    description: "Küçük ve orta ölçekli rehabilitasyon klinikleri için kapsamlı çözüm.",
    features: [
      "5 terapist hesabı",
      "100 danışan kapasitesi",
      "Gelişmiş analitik dashboard",
      "Özelleştirilebilir egzersiz planları",
      "Aile katılım modülü",
      "PDF rapor dışa aktarma",
      "Öncelikli e-posta & telefon desteği",
      "Onboarding eğitimi",
    ],
    highlighted: true,
    ctaLabel: "Teklif Al",
    ctaHref: "/demo",
    badge: "En Çok Tercih Edilen",
  },
  {
    name: "Kurumsal",
    monthlyPrice: "Özel Fiyat",
    yearlyPrice: "Özel Fiyat",
    description: "Hastaneler ve büyük sağlık kurumları için özel çözüm.",
    features: [
      "Sınırsız terapist hesabı",
      "Sınırsız danışan",
      "Özel entegrasyon (HIS/EHR)",
      "SLA güvencesi (%99.9 uptime)",
      "Özel onboarding ve eğitim",
      "7/24 öncelikli destek",
      "KVKK uyumluluk raporlaması",
      "API erişimi",
    ],
    highlighted: false,
    ctaLabel: "Bizimle İletişime Geç",
    ctaHref: "/contact",
  },
];

export function PricingToggle() {
  const [yearly, setYearly] = useState(false);

  return (
    <div>
      <div className="mb-10 flex items-center justify-center gap-3">
        <span className={cn("text-sm font-semibold", !yearly ? "text-ink-black" : "text-soft-gray")}>Aylık</span>
        <button
          type="button"
          onClick={() => setYearly((v) => !v)}
          role="switch"
          aria-checked={yearly}
          className="relative h-6 w-11 rounded-full bg-soft-line transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust-blue"
        >
          <span
            className={cn(
              "absolute top-0.5 h-5 w-5 rounded-full bg-trust-blue shadow transition-transform",
              yearly ? "left-[calc(100%-1.375rem)]" : "left-0.5"
            )}
          />
        </button>
        <span className={cn("text-sm font-semibold", yearly ? "text-ink-black" : "text-soft-gray")}>
          Yıllık{" "}
          <span className="ml-1 rounded-full bg-healing-teal/10 px-2 py-0.5 text-xs text-healing-teal">%20 İndirim</span>
        </span>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative flex flex-col rounded-2xl p-8",
              plan.highlighted
                ? "bg-trust-blue text-white shadow-soft ring-2 ring-trust-blue"
                : "bg-white shadow-soft-sm ring-1 ring-soft-line"
            )}
          >
            {plan.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-healing-teal px-4 py-1 text-xs font-bold text-white shadow">
                  {plan.badge}
                </span>
              </div>
            )}
            <div>
              <div className={cn("text-sm font-semibold uppercase tracking-wide", plan.highlighted ? "text-white/70" : "text-soft-gray")}>
                {plan.name}
              </div>
              <div className="mt-2 text-3xl font-bold">
                {yearly ? plan.yearlyPrice : plan.monthlyPrice}
              </div>
              <p className={cn("mt-3 text-sm leading-relaxed", plan.highlighted ? "text-white/80" : "text-soft-gray")}>
                {plan.description}
              </p>
            </div>

            <ul className="my-8 flex flex-grow flex-col gap-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <span className={cn("mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center", plan.highlighted ? "text-healing-teal" : "text-trust-blue")}>
                    <CheckIcon />
                  </span>
                  <span className={plan.highlighted ? "text-white/90" : "text-ink-black"}>{f}</span>
                </li>
              ))}
            </ul>

            <ButtonLink
              href={plan.ctaHref}
              variant={plan.highlighted ? "ghost" : "primary"}
              className={cn("w-full justify-center", plan.highlighted && "border-2 border-white text-white hover:bg-white hover:text-trust-blue")}
            >
              {plan.ctaLabel}
            </ButtonLink>
          </div>
        ))}
      </div>
    </div>
  );
}
