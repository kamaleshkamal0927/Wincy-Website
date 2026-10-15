import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { INSIGHTS_CONTENT, SITE_CONFIG } from '@/content/site';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Clock, Calendar, User, Share2 } from 'lucide-react';

interface InsightPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INSIGHTS_CONTENT.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = INSIGHTS_CONTENT.find((p) => p.slug === slug);

  if (!post) {
    return { title: 'Article Not Found' };
  }

  return {
    title: `${post.title} | Insights`,
    description: post.excerpt,
    alternates: {
      canonical: `${SITE_CONFIG.siteUrl}/insights/${post.slug}`,
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      authors: [post.author.name],
      publishedTime: post.publishedDate,
    },
  };
}

export default async function InsightDetailPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const post = INSIGHTS_CONTENT.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // JSON-LD Article Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedDate,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
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

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-mono text-text_muted hover:text-ink_black transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Insights</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-10 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-text_muted">
            <span className="px-2.5 py-0.5 rounded bg-surface_grey_green border border-border_light text-ink_black font-medium">
              {post.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
            <span>•</span>
            <span>{post.publishedDate}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-ink_black tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 pt-2 text-xs text-text_muted font-mono">
            <div className="w-8 h-8 rounded-full bg-ink_black text-lime_accent flex items-center justify-center font-bold">
              W
            </div>
            <div>
              <p className="font-semibold text-ink_black">{post.author.name}</p>
              <p className="text-[11px] text-text_muted">{post.author.role}</p>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none text-text_primary leading-relaxed space-y-6 pt-6 border-t border-border_light font-sans">
          {post.content.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="text-base sm:text-lg text-text_primary/90 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Call to action footer */}
        <div className="mt-14 p-8 rounded-panel bg-mint_soft border border-mint_light text-center space-y-4">
          <h3 className="text-2xl font-heading font-semibold text-ink_black">
            Modernize Your Mission-Critical Stack
          </h3>
          <p className="text-sm text-text_muted max-w-md mx-auto">
            Contact our engineering specialists to discuss your application architecture roadmap.
          </p>
          <div className="pt-2">
            <Button variant="primary" size="lg" href="/contact" withArrow>
              Schedule Technical Discussion
            </Button>
          </div>
        </div>
      </article>
    </main>
  );
}
