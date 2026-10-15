'use client';

import React from 'react';
import { TRUST_STRIP_ITEMS } from '@/content/site';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export function TrustMarquee() {
  // Double list for infinite seamless loop
  const items = [...TRUST_STRIP_ITEMS, ...TRUST_STRIP_ITEMS];

  return (
    <section className="py-6 bg-ink_black border-y border-border_dark overflow-hidden select-none relative">
      {/* Edge gradient fade masks */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-ink_black to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-ink_black to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] cursor-default">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-6 sm:px-8 text-xs sm:text-sm font-mono text-text_muted_on_dark hover:text-white transition-colors"
          >
            <CheckCircle2 className="w-4 h-4 text-lime_accent shrink-0" />
            <span className="whitespace-nowrap tracking-wide">{item}</span>
            <span className="text-border_dark ml-6 sm:ml-8">•</span>
          </div>
        ))}
      </div>
    </section>
  );
}
