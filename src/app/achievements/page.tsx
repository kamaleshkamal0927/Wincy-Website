import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { STATS_DATA, SITE_CONFIG } from '@/content/site';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { Award, ShieldCheck, CheckCircle2, Trophy, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Enterprise Achievements & Milestones',
  description:
    'Key milestones, performance SLAs, and proven customer satisfaction metrics achieved by Wincy Software Solutions.',
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/achievements`,
  },
};

export default function AchievementsPage() {
  const milestones = [
    {
      year: '2026',
      title: 'Proprietary AST Code Translation Engine',
      description:
        'Launched zero-hallucination semantic compiler AST pipeline ensuring 100% calculation parity between legacy COBOL/Java and modern cloud microservices.',
    },
    {
      year: '2025',
      title: 'Zero Production Downtime Track Record',
      description:
        'Maintained 100% SLA uptime across all production cutover and Strangler Fig migrations for enterprise clients.',
    },
    {
      year: '2024',
      title: 'Chennai Advanced Modernization Lab',
      description:
        'Established dedicated research center in Chennai focusing on compiler theory, automated unit test generation, and enterprise cloud migrations.',
    },
  ];

  return (
    <main id="main-content" className="py-16 sm:py-24 bg-page_offwhite select-none">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface_grey_green border border-border_light text-ink_black text-xs font-semibold uppercase tracking-wider mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>DELIVERY TRACK RECORD</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-semibold text-ink_black tracking-tight leading-tight">
            Enterprise Milestones & Achievements
          </h1>
          <p className="mt-4 text-base sm:text-lg text-text_muted leading-relaxed">
            A testament to our unwavering dedication to engineering rigor, deterministic modernization delivery, and 100% client satisfaction.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {STATS_DATA.map((stat, idx) => (
            <Reveal
              key={stat.label}
              delay={idx * 0.08}
              className="p-6 sm:p-8 rounded-card bg-surface_grey_green border border-border_light shadow-sm"
            >
              <div className="text-3xl sm:text-4xl font-heading font-bold text-ink_black tracking-tight mb-2">
                {stat.value}
              </div>
              <h3 className="text-sm font-semibold text-ink_black mb-1">{stat.label}</h3>
              <p className="text-xs text-text_muted mt-2">{stat.subtext}</p>
            </Reveal>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto space-y-8 mb-20">
          <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-ink_black text-center mb-8">
            Modernization Journey Milestones
          </h2>

          <div className="space-y-6">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-card bg-white border border-border_light shadow-sm flex flex-col sm:flex-row gap-6 items-start"
              >
                <span className="px-3.5 py-1.5 rounded-full bg-ink_black text-lime_accent font-mono text-sm font-bold shrink-0">
                  {m.year}
                </span>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-ink_black mb-2">
                    {m.title}
                  </h3>
                  <p className="text-sm text-text_muted leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="p-8 sm:p-12 rounded-panel bg-mint_soft border border-mint_light text-center space-y-4 max-w-3xl mx-auto">
          <h3 className="text-2xl font-heading font-semibold text-ink_black">
            Partner With a Proven Engineering Team
          </h3>
          <p className="text-sm text-text_muted max-w-lg mx-auto">
            Experience deterministic legacy application modernization designed from the ground up to protect your core business operations.
          </p>
          <div className="pt-2">
            <Button variant="primary" size="lg" href="/contact" withArrow>
              Start Your Modernization Project
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
