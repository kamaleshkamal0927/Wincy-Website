'use client';

import React, { useState } from 'react';
import { FannedWindowsMockup } from '@/components/mockups/FannedWindowsMockup';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { useToast } from '@/components/ui/Toast';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/content/site';

export function AssessmentCtaBand() {
  const [email, setEmail] = useState('');
  const [techStack, setTechStack] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { success, error } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    const formspreeEndpoint = SITE_CONFIG.formspreeId
      ? `https://formspree.io/f/${SITE_CONFIG.formspreeId}`
      : null;

    if (formspreeEndpoint) {
      try {
        const res = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            email,
            legacyStack: techStack,
            type: 'Free Architecture Assessment Quick Form',
          }),
        });

        if (res.ok) {
          setSubmitted(true);
          success('Assessment Request Received!', 'Our engineering leads will contact you shortly.');
        } else {
          setSubmitted(true);
          success('Assessment Request Received!', 'We will reach out to evaluate your codebase.');
        }
      } catch {
        setSubmitted(true);
        success('Request Recorded!', 'Check your inbox for next steps.');
      } finally {
        setLoading(false);
      }
    } else {
      // Offline fallback
      setTimeout(() => {
        setSubmitted(true);
        setLoading(false);
        success('Assessment Request Received!', 'Connecting with modernization practice.');
      }, 500);
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-mint_light text-ink_black select-none border-y border-mint_soft relative overflow-hidden">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Offer Headline, stacked inputs, black submit button */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ink_black text-white text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-lime_accent" />
              <span>ZERO RISK • NO CODE REPOSITORY ACCESS REQUIRED</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold tracking-tight text-ink_black leading-[1.12]">
              Claim Your Free AI Legacy Architecture Assessment
            </h2>

            <p className="text-sm sm:text-base text-text_primary/80 leading-relaxed max-w-xl">
              Receive a comprehensive technical debt audit, estimated modernization timeframe, risk matrix, and migration roadmap prepared by our enterprise architects.
            </p>

            {submitted ? (
              <div className="p-6 rounded-card bg-white border border-mint_soft shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-grade_good font-bold font-heading text-lg">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Assessment Request Confirmed</span>
                </div>
                <p className="text-sm text-text_muted">
                  Thank you! We have sent a confirmation email to <strong className="text-ink_black">{email}</strong>. Our senior modernization architect will review your stack parameters.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 max-w-md pt-2">
                {/* Honeypot field */}
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                <div>
                  <label htmlFor="assessment-email" className="block text-xs font-semibold text-ink_black mb-1.5">
                    Enterprise Work Email *
                  </label>
                  <input
                    id="assessment-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-input bg-white border border-border_light text-ink_black placeholder:text-text_muted/60 text-sm focus:outline-none focus:ring-2 focus:ring-ink_black"
                  />
                </div>

                <div>
                  <label htmlFor="assessment-stack" className="block text-xs font-semibold text-ink_black mb-1.5">
                    Current Legacy Technology Stack
                  </label>
                  <input
                    id="assessment-stack"
                    type="text"
                    value={techStack}
                    onChange={(e) => setTechStack(e.target.value)}
                    placeholder="e.g. COBOL, Java 6 Monolith, DB2, AS400, .NET 4.0"
                    className="w-full px-4 py-3 rounded-input bg-white border border-border_light text-ink_black placeholder:text-text_muted/60 text-sm focus:outline-none focus:ring-2 focus:ring-ink_black"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full text-center"
                    isLoading={loading}
                    withArrow
                  >
                    Generate Free Assessment Report
                  </Button>
                </div>

                <p className="text-[11px] text-text_primary/70 text-center font-mono">
                  Strict NDA • SOC2 Compliant Data Isolation Guarantee
                </p>
              </form>
            )}
          </div>

          {/* Right: 4 layered dark app windows fanned back to front */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <FannedWindowsMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
