'use client';

import React from 'react';
import { WHY_CHOOSE_US_CONTENT } from '@/content/site';
import { Reveal } from '@/components/ui/Reveal';
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  Timer,
  BadgeDollarSign,
  Layers,
  Sparkles,
} from 'lucide-react';

export function WhyChooseUsSection() {
  const icons = [
    ShieldCheck,
    Zap,
    Timer,
    BadgeDollarSign,
    Layers,
    Sparkles,
  ];

  return (
    <section className="py-20 lg:py-28 bg-page_offwhite border-b border-border_light select-none" id="why-choose-us">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface_grey_green border border-border_light text-ink_black text-xs font-semibold uppercase tracking-wider mb-4">
            <span>{WHY_CHOOSE_US_CONTENT.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium tracking-tight text-ink_black">
            {WHY_CHOOSE_US_CONTENT.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text_muted">
            {WHY_CHOOSE_US_CONTENT.subtitle}
          </p>
        </Reveal>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US_CONTENT.reasons.map((reason, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <Reveal
                key={reason.title}
                delay={idx * 0.08}
                className="p-8 rounded-card bg-surface_grey_green border border-border_light hover:border-ink_black/30 transition-all duration-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-ink_black text-lime_accent flex items-center justify-center mb-6 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-heading font-semibold text-ink_black tracking-tight mb-3">
                    {reason.title}
                  </h3>

                  <p className="text-sm text-text_muted leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border_light/80 flex items-center gap-2 text-xs font-mono text-ink_black/70">
                  <CheckCircle2 className="w-3.5 h-3.5 text-grade_good" />
                  <span>Enterprise SLA Guaranteed</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
