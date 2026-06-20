'use client';

import { useState, useEffect } from 'react';

const SLIDES = [
  { src: '/images/Therapsit/Patient1.png', alt: 'Danışan egzersiz ekranı 1' },
  { src: '/images/Therapsit/Patient2.png', alt: 'Danışan egzersiz ekranı 2' },
  { src: '/images/Therapsit/Patient3.png', alt: 'Danışan egzersiz ekranı 3' },
];

const SHOW_MS = 5000;   // görsel ne kadar süre gösterilir
const FADE_MS = 600;    // fade out + fade in süresi

export function PhoneCarousel() {
  const [index, setIndex]     = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (SLIDES.length <= 1) return;

    const timer = setInterval(() => {
      // 1. Fade out
      setVisible(false);

      setTimeout(() => {
        // 2. Görsel değiştir (hâlâ gizli)
        setIndex(prev => (prev + 1) % SLIDES.length);
        // 3. Fade in
        setVisible(true);
      }, FADE_MS);

    }, SHOW_MS + FADE_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative w-[280px] overflow-hidden sm:w-[340px]"
      style={{ aspectRatio: '390 / 844', maxHeight: '520px' }}
    >
      <img
        src={SLIDES[index].src}
        alt={SLIDES[index].alt}
        className="absolute inset-0 h-full w-full object-cover object-top"
        style={{
          opacity:    visible ? 1 : 0,
          transform:  visible ? 'translateY(0) scale(1)' : 'translateY(6px) scale(0.98)',
          transition: `opacity ${FADE_MS}ms ease-in-out, transform ${FADE_MS}ms ease-in-out`,
        }}
      />
    </div>
  );
}
