'use client';

import React from 'react';
import { LaptopDashboardMockup } from '@/components/mockups/LaptopDashboardMockup';
import { Reveal } from '@/components/ui/Reveal';
import { ShieldCheck, BarChart2, Activity } from 'lucide-react';

export function LaptopDashboardShowcase() {
  return (
    <section className="py-20 lg:py-28 bg-surface_grey_green select-none border-b border-border_light overflow-hidden">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border_light text-ink_black text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Activity className="w-3.5 h-3.5 text-lime_accent" />
            <span>REAL-TIME MODERNIZATION TELEMETRY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium tracking-tight text-ink_black">
            Continuous Governance & Architecture Observability
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text_muted">
            Track code transformation velocity, automated test suites, CVE risk elimination, and latency metrics in real-time as your codebase evolves.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <LaptopDashboardMockup />
        </Reveal>
      </div>
    </section>
  );
}
