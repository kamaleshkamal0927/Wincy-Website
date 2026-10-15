import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PROJECTS_CONTENT, SITE_CONFIG } from '@/content/site';
import { Button } from '@/components/ui/Button';
import {
  ArrowLeft,
  CheckCircle2,
  Cpu,
  Clock,
  Layers,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS_CONTENT.projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS_CONTENT.projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.subtitle,
    alternates: {
      canonical: `${SITE_CONFIG.siteUrl}/projects/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS_CONTENT.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // JSON-LD Article Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: project.title,
    description: project.subtitle,
    author: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: `${SITE_CONFIG.siteUrl}/images/logo-dark.svg`,
    },
  };

  return (
    <main id="main-content" className="py-16 sm:py-24 bg-page_offwhite select-none">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-text_muted hover:text-ink_black transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Case Studies</span>
          </Link>
        </div>

        {/* Hero Card */}
        <div className="rounded-panel bg-ink_black text-white p-8 sm:p-12 border border-border_dark shadow-device mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-lime_accent/10 border border-lime_accent/30 text-lime_text_on_dark">
              {project.tag}
            </span>
            <span className="text-xs font-mono text-text_muted_on_dark">
              Industry: {project.clientIndustry}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-white tracking-tight leading-tight mb-4">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-text_muted_on_dark leading-relaxed mb-8 max-w-2xl">
            {project.subtitle}
          </p>

          {/* Metric Badges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-border_dark/60">
            {project.results.map((res, idx) => (
              <div key={idx} className="p-4 rounded-card bg-ink_card border border-border_dark">
                <span className="text-xs font-mono text-text_muted_on_dark block">
                  {res.label}
                </span>
                <span className="text-2xl font-bold font-mono text-lime_accent mt-1 block">
                  {res.metric}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Challenge Section */}
        <div className="p-8 sm:p-10 rounded-panel bg-white border border-border_light shadow-sm mb-10 space-y-4">
          <h2 className="text-2xl font-heading font-semibold text-ink_black">
            The Enterprise Challenge
          </h2>
          <p className="text-sm sm:text-base text-text_muted leading-relaxed">
            {project.challenge}
          </p>
        </div>

        {/* Approach Section */}
        <div className="p-8 sm:p-10 rounded-panel bg-surface_grey_green border border-border_light shadow-sm mb-10 space-y-6">
          <h2 className="text-2xl font-heading font-semibold text-ink_black">
            Transformation Approach & Phased Execution
          </h2>

          <div className="space-y-4">
            {project.approach.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-text_primary">
                <div className="w-6 h-6 rounded-full bg-ink_black text-lime_accent font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <span className="leading-relaxed font-medium">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Used */}
        <div className="p-8 rounded-panel bg-white border border-border_light shadow-sm mb-12">
          <h2 className="text-sm font-mono uppercase tracking-wider text-text_muted mb-4 font-semibold">
            Technology Stack & Tools Utilized:
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techUsed.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-full bg-ink_black text-white text-xs font-mono border border-border_dark shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="p-8 rounded-panel bg-mint_soft border border-mint_light text-center space-y-4">
          <h3 className="text-2xl font-heading font-semibold text-ink_black">
            Ready to achieve similar modernization results?
          </h3>
          <p className="text-sm text-text_muted max-w-lg mx-auto">
            Schedule an architectural deep dive with our engineering leads to discuss your transformation objectives.
          </p>
          <div className="pt-2">
            <Button variant="primary" size="lg" href="/contact" withArrow>
              Contact Our Modernization Team
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
