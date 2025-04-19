'use client';

import { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import AnimatedBackground from '@/components/AnimatedBackground';
import AnimatedCursor from '@/components/AnimatedCursor';
import { PropsWithChildren } from 'react';

export default function ClientLayout({ children }: PropsWithChildren) {
  useEffect(() => {
    // Handle initial navigation if URL contains a hash
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <AnimatedCursor />
        <AnimatedBackground />
        <Navbar />
        <ScrollProgress />
        {children}
      </div>
    </ThemeProvider>
  );
}