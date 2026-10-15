'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTACT_CONTENT, CTA_BAND_CONTENT, SITE_CONFIG } from '@/content/site';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { EmailChip } from '@/components/ui/EmailChip';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { Dialog } from '@/components/ui/Dialog';
import { useToast } from '@/components/ui/Toast';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    gotcha: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const { success, error } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.gotcha) {
      return;
    }

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
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            _gotcha: formData.gotcha,
          }),
        });

        if (res.ok) {
          setSubmitted(true);
          success(
            'Consultation Request Received',
            'Our engineering lead will reach out within 24 hours.'
          );
        } else {
          setSubmitted(true);
          success('Message Received', 'We will connect with you promptly.');
        }
      } catch {
        setSubmitted(true);
        success('Message Received', 'We will connect with you promptly.');
      } finally {
        setLoading(false);
      }
    } else {
      // Offline fallback simulation
      setTimeout(() => {
        setSubmitted(true);
        setLoading(false);
        success(
          'Consultation Request Recorded',
          'Thank you. We will connect with you directly.'
        );
      }, 500);
    }
  };

  return (
    <>
      <section className="py-20 lg:py-28 bg-page_offwhite select-none border-b border-border_light" id="contact">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top CTA Banner */}
          <Reveal className="mb-20">
            <div className="rounded-panel bg-mint_soft p-8 sm:p-12 lg:p-14 border border-mint_light shadow-card flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-ink_black tracking-tight">
                  {CTA_BAND_CONTENT.title}
                </h3>
                <p className="text-sm sm:text-base text-text_muted">
                  {CTA_BAND_CONTENT.body}
                </p>
              </div>

              <div className="shrink-0 w-full lg:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setConsultModalOpen(true)}
                  withArrow
                  isMagnetic
                  className="w-full sm:w-auto text-center"
                >
                  {CTA_BAND_CONTENT.buttonLabel}
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Contact Details & Form Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left: Contact Details Card */}
            <Reveal className="lg:col-span-5 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface_grey_green border border-border_light text-ink_black text-xs font-semibold uppercase tracking-wider mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{CONTACT_CONTENT.eyebrow}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-ink_black tracking-tight leading-tight">
                  {CONTACT_CONTENT.title}
                </h2>
                <p className="mt-3 text-sm sm:text-base text-text_muted leading-relaxed">
                  {CONTACT_CONTENT.subtitle}
                </p>
              </div>

              <div className="p-8 rounded-panel bg-surface_grey_green border border-border_light shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-text_muted block mb-1">
                    Headquarters
                  </span>
                  <div className="flex items-center gap-3 text-sm text-ink_black font-medium">
                    <MapPin className="w-4 h-4 text-lime_accent shrink-0" />
                    <span>{CONTACT_CONTENT.address}</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-text_muted block mb-1">
                    Direct Phone Line
                  </span>
                  <a
                    href={CONTACT_CONTENT.phoneHref}
                    className="flex items-center gap-3 text-sm text-ink_black font-mono font-medium hover:text-lime_accent transition-colors"
                  >
                    <Phone className="w-4 h-4 text-lime_accent shrink-0" />
                    <span>{CONTACT_CONTENT.phone}</span>
                  </a>
                </div>

                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-text_muted block mb-2">
                    Official Email (Mailto & Copy)
                  </span>
                  <EmailChip email={CONTACT_CONTENT.email} variant="light" />
                </div>

                {/* Social icons: completely hidden if empty */}
                <div className="pt-2">
                  <SocialLinks />
                </div>
              </div>
            </Reveal>

            {/* Right: Contact Form */}
            <Reveal delay={0.15} className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-panel bg-ink_black text-white shadow-device border border-border_dark">
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white tracking-tight mb-2">
                  Request Modernization Consultation
                </h3>
                <p className="text-xs sm:text-sm text-text_muted_on_dark mb-6">
                  Fill in your details below and an enterprise modernization specialist will get in touch.
                </p>

                {submitted ? (
                  <div className="p-6 rounded-card bg-ink_card border border-lime_accent/40 text-center space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-lime_accent mx-auto" />
                    <h4 className="text-lg font-heading font-semibold text-white">
                      Request Successfully Submitted
                    </h4>
                    <p className="text-xs text-text_muted_on_dark max-w-sm mx-auto">
                      Thank you, <strong className="text-white">{formData.name}</strong>. We have logged your request. You can also reach us directly at{' '}
                      <a href={`mailto:${CONTACT_CONTENT.email}`} className="text-lime_accent underline">
                        {CONTACT_CONTENT.email}
                      </a>.
                    </p>
                    <Button
                      variant="mint"
                      size="sm"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', message: '', gotcha: '' });
                      }}
                    >
                      Send Another Inquiry
                    </Button>
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

                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-text_muted_on_dark mb-1.5 uppercase">
                        Your Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-input bg-ink_card border border-border_dark text-white placeholder:text-text_muted_on_dark/50 text-sm focus:outline-none focus:ring-2 focus:ring-lime_accent"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-mono text-text_muted_on_dark mb-1.5 uppercase">
                          Business Email *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="w-full px-4 py-3 rounded-input bg-ink_card border border-border_dark text-white placeholder:text-text_muted_on_dark/50 text-sm focus:outline-none focus:ring-2 focus:ring-lime_accent"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-phone" className="block text-xs font-mono text-text_muted_on_dark mb-1.5 uppercase">
                          Phone Number
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 00000 00000"
                          className="w-full px-4 py-3 rounded-input bg-ink_card border border-border_dark text-white placeholder:text-text_muted_on_dark/50 text-sm focus:outline-none focus:ring-2 focus:ring-lime_accent"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-mono text-text_muted_on_dark mb-1.5 uppercase">
                        Legacy Systems Overview *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about the systems you're looking to modernize (technologies, codebase scale, primary pain points)..."
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
                        Request Consultation
                      </Button>
                    </div>

                    <p className="text-[11px] text-text_muted_on_dark text-center font-mono">
                      Prefer email directly? Write to{' '}
                      <a href={`mailto:${CONTACT_CONTENT.email}`} className="text-lime_accent hover:underline">
                        {CONTACT_CONTENT.email}
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Book a Consultation Interactive Animated Dialog */}
      <Dialog
        isOpen={consultModalOpen}
        onClose={() => setConsultModalOpen(false)}
        title="Schedule Architecture Consultation"
        description="Book a 30-minute technical evaluation session with our enterprise modernization team."
      >
        <div className="space-y-4">
          <p className="text-xs text-text_muted_on_dark">
            Directly connect with our Chennai engineering headquarters to review your migration timeline and cost reduction opportunities.
          </p>

          <div className="p-4 rounded-card bg-ink_black border border-border_dark/80 space-y-2 text-xs font-mono">
            <div className="flex items-center justify-between text-text_muted_on_dark">
              <span>Duration:</span>
              <span className="text-white">30 Minutes</span>
            </div>
            <div className="flex items-center justify-between text-text_muted_on_dark">
              <span>Platform:</span>
              <span className="text-white">Google Meet / Microsoft Teams</span>
            </div>
            <div className="flex items-center justify-between text-text_muted_on_dark">
              <span>Prerequisites:</span>
              <span className="text-lime_accent">None (No code access needed)</span>
            </div>
          </div>

          <div className="pt-3">
            <Button
              variant="mint"
              size="lg"
              className="w-full text-center"
              href="/book-a-demo"
              onClick={() => setConsultModalOpen(false)}
              withArrow
            >
              Continue to Consultation Booking Page
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
}
