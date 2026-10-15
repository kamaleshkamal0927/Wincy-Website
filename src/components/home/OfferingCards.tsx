'use client';

import React from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Wand2, Cloud } from 'lucide-react';

export function OfferingCards() {
  const card1Bullets = [
    'AST-based code analysis that preserves embedded business logic',
    'COBOL, Java 6, and legacy .NET monolith decomposition',
    'Deterministic translation with generated tests targeting >85% coverage',
    'Shadow-traffic validation and continuously updated documentation',
  ];

  const card2Bullets = [
    'Zero-downtime migration using the Strangler Fig pattern',
    'Cloud-native deployments across AWS, Azure, and Google Cloud',
    'Event-driven services with infrastructure-as-code and CI/CD',
    '24/7 observability with potential cloud-cost reductions of up to 45%',
  ];

  return (
    <section className="py-20 lg:py-28 bg-page_offwhite select-none">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface_grey_green border border-border_light text-ink_black text-xs font-semibold uppercase tracking-wider mb-4">
            <span>CORE ENGAGEMENT MODELS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium tracking-tight text-ink_black">
            Comprehensive Modernization Frameworks
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text_muted">
            Tailored engineering pathways engineered for enterprise CTOs needing deterministic execution with zero operational disruption.
          </p>
        </Reveal>

        {/* Two big offering cards side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Code & Logic Transformation */}
          <Reveal delay={0.1} className="h-full">
            <div className="rounded-panel overflow-hidden border border-border_light shadow-card flex flex-col h-full bg-white transition-transform duration-300 hover:-translate-y-1">
              <div className="p-8 sm:p-10 bg-white text-ink_black relative flex-1">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-lime_accent font-semibold">
                    PATHWAY 01 // APPLICATION RE-ARCHITECTURE
                  </span>
                  <div className="p-3 rounded-full bg-mint_soft border border-border_light text-lime_accent">
                    <Wand2 className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-ink_black tracking-tight mb-4">
                  AI-Powered Code & Logic Transformation
                </h3>

                <p className="text-sm sm:text-base text-text_muted leading-relaxed">
                  Convert legacy procedural codebases into modular, cloud-ready services. Our AST compiler technology guarantees 100% logic preservation while modernizing technical debt.
                </p>
              </div>

              <div className="p-8 sm:p-10 bg-surface_grey_green text-ink_black flex flex-col justify-between border-t border-border_light">
                <ul className="space-y-3.5 mb-8">
                  {card1Bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-text_primary">
                      <CheckCircle2 className="w-4 h-4 text-grade_good shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="primary"
                  size="lg"
                  href="/services/ai-code-transformation"
                  className="w-full text-center"
                  withArrow
                >
                  Explore Code Transformation
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Cloud Migration & Modern Microservices */}
          <Reveal delay={0.2} className="h-full">
            <div className="rounded-panel overflow-hidden border border-border_light shadow-card flex flex-col h-full bg-white transition-transform duration-300 hover:-translate-y-1">
              <div className="p-8 sm:p-10 bg-white text-ink_black relative flex-1">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-lime_accent font-semibold">
                    PATHWAY 02 // CLOUD-NATIVE EVOLUTION
                  </span>
                  <div className="p-3 rounded-full bg-mint_soft border border-border_light text-lime_accent">
                    <Cloud className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-ink_black tracking-tight mb-4">
                  Zero-Downtime Cloud Migration & APIs
                </h3>

                <p className="text-sm sm:text-base text-text_muted leading-relaxed">
                  Decompose brittle monoliths into resilient, autoscaling microservices on AWS, Azure, or GCP. Designed for elastic throughput and strict SOC2/HIPAA compliance.
                </p>
              </div>

              <div className="p-8 sm:p-10 bg-surface_grey_green text-ink_black flex flex-col justify-between border-t border-border_light">
                <ul className="space-y-3.5 mb-8">
                  {card2Bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-text_primary">
                      <CheckCircle2 className="w-4 h-4 text-grade_good shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="primary"
                  size="lg"
                  href="/services/cloud-migration"
                  className="w-full text-center"
                  withArrow
                >
                  Explore Cloud Migration
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
