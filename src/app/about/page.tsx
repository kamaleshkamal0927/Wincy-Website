import React from 'react';
import type { Metadata } from 'next';
import { ABOUT_CONTENT, SITE_CONFIG } from '@/content/site';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import {
  CheckCircle2,
  Sparkles,
  Users,
  ShieldCheck,
  Cpu,
  Layers,
  Award,
  Globe2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Enterprise Modernization Leaders',
  description: ABOUT_CONTENT.body,
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/about`,
  },
};

export default function AboutPage() {
  const featureIcons = [Cpu, Layers, ShieldCheck, Award];

  return (
    <main id="main-content" className="py-16 sm:py-24 bg-page_offwhite select-none">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface_grey_green border border-border_light text-ink_black text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{ABOUT_CONTENT.eyebrow}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-ink_black tracking-tight leading-tight">
              {ABOUT_CONTENT.title}
            </h1>

            <p className="text-base sm:text-lg text-text_muted leading-relaxed">
              {ABOUT_CONTENT.body}
            </p>

            {/* Checklist */}
            <div className="space-y-3 pt-2">
              {ABOUT_CONTENT.checklist.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-text_primary">
                  <CheckCircle2 className="w-4 h-4 text-grade_good shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href="/contact" withArrow>
                Work With Us
              </Button>
              <Button variant="secondary" size="lg" href="/projects">
                View Past Deliverables
              </Button>
            </div>
          </div>

          {/* Right Column: Visual Graphic & Floating Badge */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-panel bg-ink_black text-white p-8 sm:p-10 border border-border_dark shadow-device relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-lime_accent/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 rounded-xl bg-ink_card border border-border_dark text-lime_accent flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-heading font-semibold text-white">
                  Chennai Engineering Headquarters
                </h3>

                <p className="text-sm text-text_muted_on_dark leading-relaxed">
                  Headquartered in Chennai, India, Wincy Software Solutions houses specialized compiler engineers, cloud architects, and AST modernization specialists dedicated to mission-critical transformations.
                </p>

                {/* Floating Badge */}
                <div className="p-4 rounded-card bg-ink_card border border-lime_accent/40 shadow-card">
                  <div className="text-3xl font-heading font-bold text-lime_accent">
                    {ABOUT_CONTENT.floatingBadge.number}
                  </div>
                  <div className="text-xs font-semibold text-white mt-1">
                    {ABOUT_CONTENT.floatingBadge.text}
                  </div>
                  <div className="text-[10px] text-text_muted_on_dark font-mono mt-0.5">
                    Verified zero-downtime cutover SLA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Cards */}
        <div className="pt-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-ink_black">
              Engineering Disciplines That Set Us Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_CONTENT.cards.map((card, idx) => {
              const Icon = featureIcons[idx % featureIcons.length];
              return (
                <Reveal
                  key={card.title}
                  delay={idx * 0.08}
                  className="p-6 rounded-card bg-surface_grey_green border border-border_light shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-ink_black text-lime_accent flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-ink_black mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text_muted leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
