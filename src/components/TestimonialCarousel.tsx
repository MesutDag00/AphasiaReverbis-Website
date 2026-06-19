"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/images/Therapsit/Therapist kadın.png",
    badge: "Pilot Program Geri Bildirimi",
    quote:
      "Danışanlarımın ev egzersizi uyumu ilk haftada belirgin şekilde arttı. Takip süreci artık çok daha kolay.",
    name: "Uzm. Dil ve Konuşma Terapisti",
    location: "İstanbul — Pilot Katılımcı",
  },
  {
    image: "/images/Therapsit/Hasta-1.png",
    badge: "Hasta Deneyimi",
    quote:
      "Her gün ne yapacağımı biliyorum. Terapistim egzersizlerimi takip ediyor, bu beni çok motive ediyor.",
    name: "Afazi Rehabilitasyon Hastası",
    location: "Ev Programı Katılımcısı",
  },
];

const INTERVAL = 5000;

export function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((index: number) => {
    setFading(true);
    setTimeout(() => {
      setActive(index);
      setFading(false);
    }, 350);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((active + 1) % slides.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [active, goTo]);

  const slide = slides[active];

  return (
    <div className="relative h-svh overflow-hidden">
      {/* Preload tüm görseller, aktif olan görünür */}
      {slides.map((s, i) => (
        <Image
          key={s.image}
          src={s.image}
          alt=""
          fill
          quality={100}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1400px"
          className={`object-cover object-center transition-opacity duration-500 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          priority={i === 0}
          aria-hidden={i !== active}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink-black/80 via-ink-black/40 to-transparent" />

      {/* İçerik */}
      <div
        className={`absolute inset-0 flex items-center px-8 py-8 sm:px-14 transition-opacity duration-350 ${
          fading ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="max-w-md">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90 ring-1 ring-white/20 backdrop-blur-sm">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-healing-teal" aria-hidden="true" />
            {slide.badge}
          </div>
          <blockquote className="mt-5">
            <p className="text-lg font-semibold leading-relaxed text-white sm:text-xl">
              "{slide.quote}"
            </p>
            <footer className="mt-5 flex items-center gap-3">
              <div className="h-px w-8 bg-healing-teal" aria-hidden="true" />
              <div>
                <div className="text-sm font-bold text-white">{slide.name}</div>
                <div className="mt-0.5 text-xs font-semibold text-white/60">{slide.location}</div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Nokta navigasyonu */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slayt ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active
                ? "w-6 bg-white"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
