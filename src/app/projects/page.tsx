import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PROJECTS_CONTENT, SITE_CONFIG } from '@/content/site';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight, Sparkles, Server, Laptop, Code } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Enterprise Modernization Projects',
  description: PROJECTS_CONTENT.subtitle,
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/projects`,
  },
};

export default function ProjectsPage() {
  const getProjectIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Server className="w-5 h-5 text-lime_accent" />;
      case 1:
        return <Laptop className="w-5 h-5 text-lime_accent" />;
      case 2:
      default:
        return <Code className="w-5 h-5 text-lime_accent" />;
    }
  };

  return (
    <main id="main-content" className="py-16 sm:py-24 bg-page_offwhite">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface_grey_green border border-border_light text-ink_black text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{PROJECTS_CONTENT.eyebrow}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-semibold text-ink_black tracking-tight leading-tight">
            {PROJECTS_CONTENT.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-text_muted leading-relaxed">
            {PROJECTS_CONTENT.subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_CONTENT.projects.map((project, idx) => (
            <Reveal key={project.slug} delay={idx * 0.1} className="h-full">
              <div className="rounded-card bg-surface_grey_green border border-border_light hover:border-ink_black/30 transition-all duration-300 p-8 flex flex-col justify-between h-full shadow-sm group">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-white border border-border_light text-ink_black">
                      {project.tag}
                    </span>
                    <div className="p-2.5 rounded-xl bg-ink_black">
                      {getProjectIcon(idx)}
                    </div>
                  </div>

                  <h2 className="text-2xl font-heading font-semibold text-ink_black tracking-tight mb-3 group-hover:text-ink_panel transition-colors">
                    {project.title}
                  </h2>

                  <p className="text-xs font-mono text-text_muted mb-4">
                    Sector: {project.clientIndustry} • {project.duration}
                  </p>

                  <p className="text-sm text-text_muted leading-relaxed mb-6">
                    {project.subtitle}
                  </p>

                  {/* Highlight Metrics */}
                  <div className="space-y-2 mb-6">
                    {project.results.map((res, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-3 rounded-lg bg-white border border-border_light flex items-center justify-between text-xs"
                      >
                        <span className="text-text_muted font-mono">{res.label}</span>
                        <span className="font-mono font-bold text-ink_black">{res.metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-border_light">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink_black hover:text-lime_accent transition-colors group/link font-mono"
                  >
                    <span>Read In-Depth Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
