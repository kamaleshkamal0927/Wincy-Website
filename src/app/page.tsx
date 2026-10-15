import React from 'react';
import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustMarquee } from '@/components/home/TrustMarquee';
import { OfferingCards } from '@/components/home/OfferingCards';
import { FeatureCarousel } from '@/components/home/FeatureCarousel';
import { AssessmentCtaBand } from '@/components/home/AssessmentCtaBand';
import { LaptopDashboardShowcase } from '@/components/home/LaptopDashboardShowcase';
import { StatsSection } from '@/components/home/StatsSection';
import { ProjectsSection } from '@/components/home/ProjectsSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection';
import { FAQSection } from '@/components/home/FAQSection';
import { ContactSection } from '@/components/home/ContactSection';
import { SITE_CONFIG, FAQ_CONTENT } from '@/content/site';

export const metadata: Metadata = {
  title: 'Wincy Software Solutions | AI-Powered Legacy System Modernization',
  description:
    'Accelerate enterprise digital transformation with AI-powered legacy application modernization, cloud migration, code transformation, and automated documentation.',
  alternates: {
    canonical: SITE_CONFIG.siteUrl,
  },
};

export default function HomePage() {
  // JSON-LD Structured Data: Organization & FAQPage
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_CONFIG.siteUrl}/#organization`,
        name: SITE_CONFIG.name,
        legalName: SITE_CONFIG.legalName,
        url: SITE_CONFIG.siteUrl,
        logo: `${SITE_CONFIG.siteUrl}/images/logo-dark.svg`,
        email: SITE_CONFIG.contact.email,
        telephone: SITE_CONFIG.contact.phone,
        address: {
          '@type': 'PostalAddress',
          addressLocality: SITE_CONFIG.location.city,
          addressRegion: SITE_CONFIG.location.region,
          addressCountry: SITE_CONFIG.location.country,
        },
        sameAs: SITE_CONFIG.socials
          .filter((s) => s.url && s.url.trim() !== '')
          .map((s) => s.url),
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE_CONFIG.siteUrl}/#faq`,
        mainEntity: FAQ_CONTENT.items.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main-content" className="home-page">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Trust marquee */}
        <TrustMarquee />

        {/* 3. Offerings (2 big cards) */}
        <OfferingCards />

        {/* 4. Feature Carousel */}
        <FeatureCarousel />

        {/* 5. Free Assessment CTA Band */}
        <AssessmentCtaBand />

        {/* 6. Dashboard / Laptop Showcase */}
        <LaptopDashboardShowcase />

        {/* 7. Stats Counter */}
        <StatsSection />

        {/* 8. Projects / Case Studies */}
        <ProjectsSection />

        {/* 9. Testimonials */}
        <TestimonialsSection />

        {/* 10. Why Choose Us */}
        <WhyChooseUsSection />

        {/* 11. FAQ Accordion */}
        <FAQSection />

        {/* 12. Final CTA & Contact Form */}
        <ContactSection />
      </main>
    </>
  );
}
