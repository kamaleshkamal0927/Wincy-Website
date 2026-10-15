import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { INSIGHTS_CONTENT, SITE_CONFIG } from '@/content/site';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight, BookOpen, Clock, Calendar, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Engineering Insights & Research',
  description:
    'Deep architectural analysis, whitepapers, and technical commentary on enterprise legacy modernization, compiler AST transformation, and cloud native architectures.',
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/insights`,
  },
};

export default function InsightsPage() {
  return (
    <main id="main-content" className="py-16 sm:py-24 bg-page_offwhite select-none">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface_grey_green border border-border_light text-ink_black text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KNOWLEDGE & RESEARCH</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-semibold text-ink_black tracking-tight leading-tight">
            Engineering Insights & Modernization Whitepapers
          </h1>
          <p className="mt-4 text-base sm:text-lg text-text_muted leading-relaxed">
            Practical architectural insights and technical guidance authored by Wincy Software Solutions engineering specialists in Chennai.
          </p>
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INSIGHTS_CONTENT.map((post, idx) => (
            <Reveal key={post.slug} delay={idx * 0.1} className="h-full">
              <article className="rounded-card bg-surface_grey_green border border-border_light hover:border-ink_black/30 transition-all duration-300 p-8 flex flex-col justify-between h-full shadow-sm group">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-text_muted mb-4">
                    <span className="px-2.5 py-0.5 rounded bg-white border border-border_light text-ink_black font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-heading font-semibold text-ink_black tracking-tight mb-3 group-hover:text-ink_panel transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-sm text-text_muted leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-border_light flex items-center justify-between">
                  <div className="text-xs text-text_muted font-mono">
                    {post.publishedDate}
                  </div>
                  <Link
                    href={`/insights/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink_black hover:text-lime_accent transition-colors group/link font-mono"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
