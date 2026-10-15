'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HERO_CONTENT } from '@/content/site';
import { Button } from '@/components/ui/Button';
import { HeroAssessmentMockup } from '@/components/mockups/HeroAssessmentMockup';
import { appleEase } from '@/lib/motion';
import { Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative pt-6 sm:pt-10 pb-16 lg:pb-24 overflow-hidden bg-page_offwhite">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* LEFT: Soft mint panel with huge headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: appleEase }}
            className="lg:col-span-6 rounded-panel bg-mint_soft p-6 sm:p-10 lg:p-12 flex flex-col justify-between border border-mint_light shadow-card relative overflow-hidden"
          >
            {/* Background subtle light aura */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-mint_light/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

            <div className="relative z-10 space-y-6">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ink_black text-white text-xs font-semibold tracking-wider uppercase select-none shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-lime_accent" />
                <span>{HERO_CONTENT.eyebrow}</span>
              </div>

              {/* Huge Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] font-heading font-medium tracking-[-0.02em] leading-[1.08] text-ink_black text-balance">
                {HERO_CONTENT.headlineStart}
                <span className="font-semibold underline decoration-lime_accent decoration-wavy decoration-2 underline-offset-6">
                  {HERO_CONTENT.headlineHighlight}
                </span>
              </h1>

              {/* Subheading & Body */}
              <p className="text-base sm:text-lg font-medium text-ink_black/80 font-heading">
                {HERO_CONTENT.subheading}
              </p>

              <p className="text-sm sm:text-base text-text_muted leading-relaxed max-w-xl">
                {HERO_CONTENT.body}
              </p>
            </div>

            {/* CTAs and trust indicators */}
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

              <div className="flex items-center gap-2 text-xs text-text_muted font-medium pt-2">
                <Zap className="w-3.5 h-3.5 text-ink_black" />
                <span>{HERO_CONTENT.freeAssessmentHint}</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Near-black rounded device frame showing the live "legacy-assessment.ai" mockup */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: appleEase }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <HeroAssessmentMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
