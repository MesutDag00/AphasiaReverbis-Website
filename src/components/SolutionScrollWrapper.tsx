'use client';

import { useEffect } from 'react';

export function SolutionScrollWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    html.style.overflow = 'hidden';
    html.style.height = '100%';
    body.style.overflow = 'hidden';
    body.style.height = '100%';
    return () => {
      html.style.overflow = '';
      html.style.height = '';
      body.style.overflow = '';
      body.style.height = '';
    };
  }, []);

  return (
    <div
      className="overflow-y-scroll"
      style={{
        height: 'calc(100dvh - 4rem)',
        scrollSnapType: 'y proximity',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      {children}
    </div>
  );
}
