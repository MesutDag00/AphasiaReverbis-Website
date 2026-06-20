'use client';

import { useEffect } from 'react';

export function SnapLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.style.scrollSnapType = 'y proximity';
    return () => {
      document.documentElement.style.scrollSnapType = '';
    };
  }, []);

  return <>{children}</>;
}
