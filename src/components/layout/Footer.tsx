import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG, FOOTER_CONTENT, SERVICES_CONTENT } from '@/content/site';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { EmailChip } from '@/components/ui/EmailChip';
import { MapPin, Phone, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Featured Projects', href: '/projects' },
    { label: 'Achievements', href: '/achievements' },
    { label: 'Insights & Blog', href: '/insights' },
    { label: 'Book a Consultation', href: '/book-a-demo' },
    { label: 'Free Assessment', href: '/free-assessment' },
    { label: 'Contact Specialsts', href: '/contact' },
  ];

  return (
    <footer className="bg-ink_black border-t border-border_dark text-white select-none">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-border_dark/60">
          {/* Col 1: Brand Info & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block" aria-label="Wincy Home">
              <div className="relative h-11 w-52">
                <Image
                  src="/images/logo-dark.svg"
                  alt="Wincy Software Solutions"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-sm text-text_muted_on_dark leading-relaxed max-w-sm">
              {FOOTER_CONTENT.description}
            </p>

            <div className="pt-2">
              <p className="text-xs uppercase font-mono tracking-wider text-text_muted_on_dark mb-2">
                Direct Contact
              </p>
              <div className="flex flex-col gap-2.5 items-start">
                <EmailChip email={SITE_CONFIG.contact.email} variant="pill" />
                <a
                  href={SITE_CONFIG.contact.phoneHref}
                  className="inline-flex items-center gap-2 text-xs font-mono text-text_muted_on_dark hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-lime_accent" />
                  <span>{SITE_CONFIG.contact.phone}</span>
                </a>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-text_muted_on_dark">
                  <MapPin className="w-3.5 h-3.5 text-lime_accent" />
                  <span>{SITE_CONFIG.location.addressString}</span>
                </div>
              </div>
            </div>

            {/* Social Links (Strictly hidden when URLs are empty) */}
            <div className="pt-2">
              <SocialLinks />
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-lime_accent mb-4">
              Modernization Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_CONTENT.services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-text_muted_on_dark hover:text-white transition-colors block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-lime_accent mb-4">
              Company & Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-text_muted_on_dark hover:text-white transition-colors block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Modernization Guarantee & Badge */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-lime_accent mb-4">
              Enterprise Grade
            </h4>
            <div className="p-4 rounded-card bg-ink_card border border-border_dark/80 space-y-3">
              <div className="text-xs text-white font-medium">
                100% Business Logic Preservation
              </div>
              <p className="text-[11px] text-text_muted_on_dark leading-normal">
                Dual-run synthetic shadow replay ensures deterministic AST code transformations with zero production disruption.
              </p>
              <div className="pt-2">
                <Link
                  href="/free-assessment"
                  className="inline-flex items-center gap-1.5 text-xs text-lime_accent hover:underline font-mono"
                >
                  <span>Free Architecture Scan</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text_muted_on_dark">
          <p>© {new Date().getFullYear()} {FOOTER_CONTENT.copyright}</p>
          <div className="flex items-center gap-6">
            <span>Chennai, India</span>
            <span>•</span>
            <span className="font-mono text-lime_text_on_dark">SOC2 & HIPAA Compliant Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
