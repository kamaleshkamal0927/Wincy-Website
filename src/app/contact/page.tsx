import React from 'react';
import type { Metadata } from 'next';
import { ContactSection } from '@/components/home/ContactSection';
import { SITE_CONFIG } from '@/content/site';

export const metadata: Metadata = {
  title: 'Contact Modernization Specialists',
  description:
    'Connect with Wincy Software Solutions engineering specialists in Chennai to evaluate your existing legacy systems and build an AI-powered modernization roadmap.',
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/contact`,
  },
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <ContactSection />
    </main>
  );
}
