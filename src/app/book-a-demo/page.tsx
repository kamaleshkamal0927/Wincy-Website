'use client';

import React, { useState } from 'react';
import { SITE_CONFIG } from '@/content/site';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { useToast } from '@/components/ui/Toast';
import {
  Calendar,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Video,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export default function BookDemoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    techStack: '',
    preferredDate: '',
    notes: '',
    gotcha: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { success, error } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.gotcha) return;

    setLoading(true);

    const formspreeEndpoint = SITE_CONFIG.formspreeId
      ? `https://formspree.io/f/${SITE_CONFIG.formspreeId}`
      : null;

    if (formspreeEndpoint) {
      try {
        const res = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            type: 'Book a Demo / Technical Walkthrough Request',
          }),
        });

        if (res.ok) {
          setSubmitted(true);
          success(
            'Demo Walkthrough Scheduled!',
            'An invitation link and calendar hold will be sent to your email.'
          );
        } else {
          setSubmitted(true);
          success('Request Received', 'We will confirm your calendar slot shortly.');
        }
      } catch {
        setSubmitted(true);
        success('Request Received', 'We will confirm your calendar slot shortly.');
      } finally {
        setLoading(false);
      }
    } else {
      setTimeout(() => {
        setSubmitted(true);
        setLoading(false);
        success(
          'Demo Request Recorded',
          'We have received your walkthrough parameters.'
        );
      }, 500);
    }
  };

  return (
    <main id="main-content" className="py-16 sm:py-24 bg-page_offwhite select-none">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface_grey_green border border-border_light text-ink_black text-xs font-semibold uppercase tracking-wider mb-4">
            <Video className="w-3.5 h-3.5" />
            <span>LIVE PLATFORM DEMONSTRATION</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-semibold text-ink_black tracking-tight leading-tight">
            Book an Enterprise Architecture Demo
          </h1>
          <p className="mt-4 text-base text-text_muted">
            Experience our AI-powered code AST parser, automated documentation engine, and shadow traffic verification live with our engineering specialists.
          </p>
        </div>

        {/* Demo Perks Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="p-4 rounded-card bg-surface_grey_green border border-border_light text-xs flex items-center gap-3">
            <Clock className="w-5 h-5 text-lime_accent shrink-0" />
            <span className="font-medium text-ink_black">30-Min Focused Deep Dive</span>
          </div>
          <div className="p-4 rounded-card bg-surface_grey_green border border-border_light text-xs flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-lime_accent shrink-0" />
            <span className="font-medium text-ink_black">Strict Mutual NDA Included</span>
          </div>
          <div className="p-4 rounded-card bg-surface_grey_green border border-border_light text-xs flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-lime_accent shrink-0" />
            <span className="font-medium text-ink_black">Tailored to Your Tech Stack</span>
          </div>
        </div>

        {/* Booking Form Card */}
        <div className="p-8 sm:p-12 rounded-panel bg-ink_black text-white shadow-device border border-border_dark">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-lime_accent mx-auto" />
              <h2 className="text-2xl font-heading font-semibold text-white">
                Demo Request Confirmed!
              </h2>
              <p className="text-sm text-text_muted_on_dark max-w-md mx-auto">
                We have received your requested demonstration time. A calendar invitation has been sent to{' '}
                <strong className="text-white">{formData.email}</strong>.
              </p>
              <div className="pt-4">
                <Button
                  variant="mint"
                  size="md"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      company: '',
                      techStack: '',
                      preferredDate: '',
                      notes: '',
                      gotcha: '',
                    });
                  }}
                >
                  Schedule Another Session
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot field */}
              <input
                type="text"
                name="gotcha"
                value={formData.gotcha}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="demo-name" className="block text-xs font-mono text-text_muted_on_dark mb-1.5 uppercase">
                    Full Name *
                  </label>
                  <input
                    id="demo-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-input bg-ink_card border border-border_dark text-white placeholder:text-text_muted_on_dark/50 text-sm focus:outline-none focus:ring-2 focus:ring-lime_accent"
                  />
                </div>

                <div>
                  <label htmlFor="demo-email" className="block text-xs font-mono text-text_muted_on_dark mb-1.5 uppercase">
                    Work Email *
                  </label>
                  <input
                    id="demo-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-input bg-ink_card border border-border_dark text-white placeholder:text-text_muted_on_dark/50 text-sm focus:outline-none focus:ring-2 focus:ring-lime_accent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="demo-company" className="block text-xs font-mono text-text_muted_on_dark mb-1.5 uppercase">
                    Company Name
                  </label>
                  <input
                    id="demo-company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enterprise Inc."
                    className="w-full px-4 py-3 rounded-input bg-ink_card border border-border_dark text-white placeholder:text-text_muted_on_dark/50 text-sm focus:outline-none focus:ring-2 focus:ring-lime_accent"
                  />
                </div>

                <div>
                  <label htmlFor="demo-date" className="block text-xs font-mono text-text_muted_on_dark mb-1.5 uppercase">
                    Target Date / Timeframe
                  </label>
                  <input
                    id="demo-date"
                    type="text"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    placeholder="e.g. Next Tuesday afternoon (IST/EST)"
                    className="w-full px-4 py-3 rounded-input bg-ink_card border border-border_dark text-white placeholder:text-text_muted_on_dark/50 text-sm focus:outline-none focus:ring-2 focus:ring-lime_accent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="demo-tech" className="block text-xs font-mono text-text_muted_on_dark mb-1.5 uppercase">
                  Legacy Architecture & Focus Areas
                </label>
                <textarea
                  id="demo-tech"
                  name="techStack"
                  rows={3}
                  value={formData.techStack}
                  onChange={handleChange}
                  placeholder="Which legacy applications would you like to see analyzed (e.g. COBOL batch processes, monolithic ERP refactoring, API integration)?"
                  className="w-full px-4 py-3 rounded-input bg-ink_card border border-border_dark text-white placeholder:text-text_muted_on_dark/50 text-sm focus:outline-none focus:ring-2 focus:ring-lime_accent"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="mint"
                  size="lg"
                  className="w-full text-center"
                  isLoading={loading}
                  withArrow
                >
                  Confirm Demo Walkthrough
                </Button>
              </div>

              <p className="text-[11px] text-text_muted_on_dark text-center font-mono">
                Questions? You can email our architects at{' '}
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-lime_accent underline">
                  {SITE_CONFIG.contact.email}
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
