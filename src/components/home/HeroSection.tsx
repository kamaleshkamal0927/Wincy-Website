'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HERO_CONTENT } from '@/content/site';
import { Button } from '@/components/ui/Button';
import { HeroAssessmentMockup } from '@/components/mockups/HeroAssessmentMockup';
import { appleEase } from '@/lib/motion';
import { Sparkles, Zap } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative isolate pt-8 sm:pt-12 pb-16 lg:pb-24 overflow-hidden bg-page_offwhite">
      <div aria-hidden="true" className="hero-glow absolute inset-0 -z-10" />
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: appleEase }}
            className="lg:col-span-6 py-2 sm:py-8 lg:py-10 flex flex-col justify-between relative"
          >
            <div className="relative z-10 space-y-6 sm:space-y-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-border_light text-text_muted text-xs font-semibold tracking-wide select-none shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-lime_accent" />
                <span>{HERO_CONTENT.eyebrow}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[58px] xl:text-[64px] font-heading font-semibold tracking-[-0.055em] leading-[1.02] text-ink_black text-balance">
                {HERO_CONTENT.headlineStart}
                <span className="text-lime_accent">
                  {HERO_CONTENT.headlineHighlight}
                </span>
              </h1>

              <p className="text-lg sm:text-xl font-medium text-ink_black/85 font-heading tracking-tight max-w-xl">
                {HERO_CONTENT.subheading}
              </p>

              <p className="text-base sm:text-lg text-text_muted leading-relaxed max-w-lg">
                {HERO_CONTENT.body}
              </p>
            </div>

            <div className="relative z-10 pt-8 sm:pt-10 space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button
                  variant="primary"
                  size="lg"
                  href={HERO_CONTENT.primaryCta.href}
                  withArrow
                  isMagnetic
                >
                  {HERO_CONTENT.primaryCta.label}
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  href={HERO_CONTENT.secondaryCta.href}
                >
                  {HERO_CONTENT.secondaryCta.label}
                </Button>
              </div>

              <div className="flex items-center gap-2 text-sm text-text_muted font-medium pt-2">
                <Zap className="w-3.5 h-3.5 text-lime_accent" />
                <span>{HERO_CONTENT.freeAssessmentHint}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: appleEase }}
            className="lg:col-span-6 flex flex-col justify-center lg:translate-y-2"
          >
            <div className="hero-dashboard-float">
              <HeroAssessmentMockup />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
