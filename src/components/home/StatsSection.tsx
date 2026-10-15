'use client';

import React, { useEffect, useState, useRef } from 'react';
import { STATS_DATA } from '@/content/site';
import { Reveal } from '@/components/ui/Reveal';
import { Shield, Award, CheckCircle } from 'lucide-react';

export function StatsSection() {
  const [hasCounted, setHasCounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasCounted) {
          setHasCounted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasCounted]);

  return (
    <section
      ref={containerRef}
      className="py-16 lg:py-24 bg-page_offwhite border-b border-border_light select-none"
      id="stats"
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS_DATA.map((stat, idx) => (
            <Reveal
              key={stat.label}
              delay={idx * 0.1}
              className="p-6 sm:p-8 rounded-card bg-surface_grey_green border border-border_light shadow-sm flex flex-col justify-between hover:border-lime_accent/60 transition-colors"
            >
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-ink_black tracking-tight mb-2">
                  <span className="text-ink_black">{stat.value}</span>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-ink_black tracking-tight mb-1">
                  {stat.label}
                </h3>
              </div>

              <p className="text-xs text-text_muted leading-relaxed mt-3 pt-3 border-t border-border_light/60">
                {stat.subtext}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
