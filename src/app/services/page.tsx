import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES_CONTENT, SITE_CONFIG } from '@/content/site';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import {
  ClipboardCheck,
  Wand2,
  Cloud,
  RefreshCw,
  Network,
  FileText,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Modernization Services',
  description: SERVICES_CONTENT.subtitle,
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/services`,
  },
};

export default function ServicesPage() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-6 h-6 text-lime_accent" />;
      case 'Wand2':
        return <Wand2 className="w-6 h-6 text-lime_accent" />;
      case 'Cloud':
        return <Cloud className="w-6 h-6 text-lime_accent" />;
      case 'RefreshCw':
        return <RefreshCw className="w-6 h-6 text-lime_accent" />;
      case 'Network':
        return <Network className="w-6 h-6 text-lime_accent" />;
      case 'FileText':
      default:
        return <FileText className="w-6 h-6 text-lime_accent" />;
    }
  };

  return (
    <main id="main-content" className="py-16 sm:py-24 bg-page_offwhite">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface_grey_green border border-border_light text-ink_black text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{SERVICES_CONTENT.eyebrow}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-semibold text-ink_black tracking-tight leading-tight">
            {SERVICES_CONTENT.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-text_muted leading-relaxed">
            {SERVICES_CONTENT.subtitle}
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_CONTENT.services.map((service, idx) => (
            <Reveal key={service.id} delay={idx * 0.08} className="h-full">
              <div className="rounded-card bg-surface_grey_green border border-border_light hover:border-ink_black/30 transition-all duration-300 p-8 flex flex-col justify-between h-full shadow-sm group">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-ink_black flex items-center justify-center shadow-sm">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-[11px] font-mono text-text_muted uppercase px-2.5 py-1 rounded bg-white border border-border_light">
                      {service.badge}
                    </span>
                  </div>

                  <h2 className="text-xl font-heading font-semibold text-ink_black tracking-tight mb-3 group-hover:text-ink_panel transition-colors">
                    {service.title}
                  </h2>

                  <p className="text-sm text-text_muted leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2 border-t border-border_light pt-4 mb-6">
                    <span className="text-xs font-mono uppercase tracking-wider text-text_muted block mb-1">
                      Key Outcomes:
                    </span>
                    {service.outcomes.map((outcome, oIdx) => (
                      <div key={oIdx} className="flex items-start gap-2 text-xs text-text_primary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-grade_good shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink_black hover:text-lime_accent transition-colors group/link font-mono"
                  >
                    <span>View Service Deep-Dive</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1 text-ink_black" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-panel bg-mint_soft border border-mint_light flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-heading font-semibold text-ink_black">
              Unsure which modernization pathway is right for your system?
            </h3>
            <p className="text-sm text-text_muted mt-1">
              Run our free architecture readiness scan to evaluate technical debt and migration priority.
            </p>
          </div>
          <Button variant="primary" size="lg" href="/free-assessment" withArrow>
            Run Free Assessment
          </Button>
        </div>
      </div>
    </main>
  );
}
