'use client';

import React from 'react';
import Link from 'next/link';
import { PROJECTS_CONTENT } from '@/content/site';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight, Sparkles, Server, Laptop, Code } from 'lucide-react';

export function ProjectsSection() {
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
    <section className="py-20 lg:py-28 bg-ink_black text-white select-none relative overflow-hidden" id="projects">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-lime_accent text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{PROJECTS_CONTENT.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium tracking-tight text-white">
            {PROJECTS_CONTENT.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text_muted_on_dark">
            {PROJECTS_CONTENT.subtitle}
          </p>
        </Reveal>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {PROJECTS_CONTENT.projects.map((project, idx) => (
            <Reveal key={project.slug} delay={idx * 0.1} className="h-full">
              <div className="rounded-card bg-ink_card border border-border_dark hover:border-lime_accent/60 transition-all duration-300 shadow-card flex flex-col justify-between h-full group overflow-hidden">
                {/* Visual Top Banner / Badge */}
                <div className="p-6 bg-gradient-to-br from-ink_panel to-ink_black border-b border-border_dark/70 relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-lime_accent/10 border border-lime_accent/30 text-lime_text_on_dark">
                      {project.tag}
                    </span>
                    <div className="p-2.5 rounded-full bg-white/5 text-lime_accent">
                      {getProjectIcon(idx)}
                    </div>
                  </div>

                  <h3 className="text-xl font-heading font-semibold text-white tracking-tight group-hover:text-lime_accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-text_muted_on_dark mt-1">
                    Industry: {project.clientIndustry}
                  </p>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <p className="text-sm text-text_muted_on_dark leading-relaxed">
                    {project.subtitle}
                  </p>

                  {/* Highlight Metric */}
                  {project.results[0] && (
                    <div className="p-3.5 rounded-lg bg-ink_black/60 border border-border_dark/60 flex items-center justify-between">
                      <span className="text-xs text-text_muted_on_dark font-mono">
                        {project.results[0].label}
                      </span>
                      <span className="text-sm font-bold font-mono text-lime_accent">
                        {project.results[0].metric}
                      </span>
                    </div>
                  )}

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techUsed.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-text_muted_on_dark border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techUsed.length > 3 && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-text_muted_on_dark">
                        +{project.techUsed.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Read More Link */}
                  <div className="pt-2 border-t border-border_dark/50">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-lime_accent hover:text-white transition-colors group/link"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
