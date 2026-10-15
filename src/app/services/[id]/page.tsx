import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SERVICES_CONTENT, SITE_CONFIG } from '@/content/site';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  ShieldCheck,
  Zap,
  ArrowLeft,
} from 'lucide-react';

interface ServicePageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return SERVICES_CONTENT.services.map((svc) => ({
    id: svc.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { id } = await params;
  const service = SERVICES_CONTENT.services.find((s) => s.slug === id || s.id === id);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${service.title} | Modernization Services`,
    description: service.shortDesc,
    alternates: {
      canonical: `${SITE_CONFIG.siteUrl}/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { id } = await params;
  const service = SERVICES_CONTENT.services.find((s) => s.slug === id || s.id === id);

  if (!service) {
    notFound();
  }

  // JSON-LD Service Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.shortDesc,
    provider: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.siteUrl,
    },
    areaServed: 'Worldwide',
  };

  return (
    <main id="main-content" className="py-16 sm:py-24 bg-page_offwhite select-none">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-mono text-text_muted hover:text-ink_black transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Modernization Services</span>
          </Link>
        </div>

        {/* Hero Card */}
        <div className="rounded-panel bg-ink_black text-white p-8 sm:p-12 border border-border_dark shadow-device mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime_accent/10 border border-lime_accent/30 text-lime_accent text-xs font-mono font-medium mb-4">
            <span>{service.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-white tracking-tight leading-tight mb-6">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg text-text_muted_on_dark leading-relaxed mb-8 max-w-2xl">
            {service.shortDesc}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="mint" size="lg" href="/book-a-demo" withArrow>
              Schedule Technical Consultation
            </Button>
            <Button variant="outline-white" size="lg" href="/free-assessment">
              Free Assessment
            </Button>
          </div>
        </div>

        {/* Deep Dive Description */}
        <div className="p-8 sm:p-10 rounded-panel bg-white border border-border_light shadow-sm mb-10 space-y-6">
          <h2 className="text-2xl font-heading font-semibold text-ink_black">
            Modernization Approach & Technical Execution
          </h2>
          <p className="text-sm sm:text-base text-text_muted leading-relaxed">
            {service.fullDesc}
          </p>

          <div className="pt-4 border-t border-border_light">
            <h3 className="text-sm font-mono uppercase tracking-wider text-ink_black mb-4 font-semibold">
              Core Technical Features:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {service.features.map((feat, fIdx) => (
                <div
                  key={fIdx}
                  className="p-4 rounded-card bg-surface_grey_green border border-border_light text-xs font-medium text-ink_black flex items-start gap-2"
                >
                  <Zap className="w-4 h-4 text-lime_accent shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Outcomes & Guarantees */}
        <div className="p-8 sm:p-10 rounded-panel bg-surface_grey_green border border-border_light shadow-sm mb-12">
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-ink_black mb-6">
            Enterprise Deliverables & Guaranteed Outcomes
          </h2>

          <div className="space-y-4">
            {service.outcomes.map((outcome, oIdx) => (
              <div key={oIdx} className="flex items-start gap-3 text-sm text-text_primary">
                <CheckCircle2 className="w-5 h-5 text-grade_good shrink-0 mt-0.5" />
                <span className="font-medium">{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Consultation Prompt */}
        <div className="p-8 rounded-panel bg-mint_soft border border-mint_light text-center space-y-4">
          <h3 className="text-2xl font-heading font-semibold text-ink_black">
            Modernize with Confidence
          </h3>
          <p className="text-sm text-text_muted max-w-lg mx-auto">
            Discuss your system architecture with our engineering practice in Chennai. We analyze risks and provide deterministic delivery timelines.
          </p>
          <div className="pt-2">
            <Button variant="primary" size="lg" href="/contact" withArrow>
              Connect with Specialists
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
