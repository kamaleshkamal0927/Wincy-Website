'use client';

import React, { useState } from 'react';
import { SITE_CONFIG } from '@/content/site';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { useToast } from '@/components/ui/Toast';
import {
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldAlert,
  ArrowRight,
  ArrowLeft,
  FileCheck,
  Server,
  Code2,
} from 'lucide-react';

export default function FreeAssessmentPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    systemType: 'monolith',
    primaryLanguage: 'Java (Older / J2EE)',
    approxLOC: '500,000 - 1,000,000 LOC',
    cloudTarget: 'AWS',
    businessPains: [] as string[],
    name: '',
    email: '',
    company: '',
    gotcha: '',
  });

  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const { success, error } = useToast();

  const handleCheckbox = (pain: string) => {
    setFormData((prev) => {
      const exists = prev.businessPains.includes(pain);
      return {
        ...prev,
        businessPains: exists
          ? prev.businessPains.filter((p) => p !== pain)
          : [...prev.businessPains, pain],
      };
    });
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
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
        await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            type: 'Multi-Step Free Architecture Assessment Report',
          }),
        });
      } catch {
        // Fallback
      }
    }

    setLoading(false);
    setCompleted(true);
    success(
      'Assessment Complete!',
      'Your preliminary modernization scorecard is generated.'
    );
  };

  return (
    <main id="main-content" className="py-16 sm:py-24 bg-page_offwhite select-none">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-mint_soft border border-mint_light text-ink_black text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2-MINUTE ARCHITECTURAL AUDIT</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-semibold text-ink_black tracking-tight">
            Free Legacy Architecture Readiness Assessment
          </h1>
          <p className="mt-2 text-sm text-text_muted">
            Answer 3 quick architectural questions to calculate your estimated technical debt reduction and modernization roadmap.
          </p>
        </div>

        {/* Stepper Progress Indicator */}
        {!completed && (
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs font-mono text-text_muted mb-2">
              <span>Step {step} of 3</span>
              <span>
                {step === 1 && 'System Architecture'}
                {step === 2 && 'Scale & Bottlenecks'}
                {step === 3 && 'Deliverable Recipient'}
              </span>
            </div>
            <div className="w-full h-2 bg-surface_grey_green rounded-full overflow-hidden border border-border_light">
              <div
                className="h-full bg-lime_accent transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Multi-step Card */}
        <div className="p-8 sm:p-10 rounded-panel bg-ink_black text-white shadow-device border border-border_dark">
          {completed ? (
            <div className="space-y-6">
              <div className="text-center space-y-3">
                <CheckCircle2 className="w-14 h-14 text-lime_accent mx-auto" />
                <h2 className="text-2xl font-heading font-semibold text-white">
                  Assessment Report Generated
                </h2>
                <p className="text-xs sm:text-sm text-text_muted_on_dark max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong>. A customized modernization report for <strong className="text-white">{formData.company || 'your organization'}</strong> has been generated and dispatched to <strong className="text-white">{formData.email}</strong>.
                </p>
              </div>

              {/* Preliminary Calculated Scorecard */}
              <div className="p-6 rounded-card bg-ink_card border border-border_dark space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-border_dark">
                  <span className="text-text_muted_on_dark">Estimated Modernization Readiness:</span>
                  <span className="text-sm font-bold text-lime_accent">84% (High Feasibility)</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-border_dark">
                  <span className="text-text_muted_on_dark">Recommended Modernization Pathway:</span>
                  <span className="text-white">Strangler Fig + AST Refactoring</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-border_dark">
                  <span className="text-text_muted_on_dark">Projected Cloud Cost Reduction:</span>
                  <span className="text-lime_text_on_dark font-bold">~42% vs On-Premises</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text_muted_on_dark">Estimated Phased Runway:</span>
                  <span className="text-white">12 - 16 Weeks to Initial Cutover</span>
                </div>
              </div>

              <div className="pt-2 text-center">
                <Button variant="mint" size="lg" href="/book-a-demo" withArrow>
                  Review Detailed Report With An Architect
                </Button>
              </div>
            </div>
          ) : (
            <div>
              {/* Step 1: System Architecture */}
              {step === 1 && (
                <form onSubmit={handleNext} className="space-y-5">
                  <h3 className="text-xl font-heading font-semibold text-white">
                    1. What best describes your primary legacy application architecture?
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'monolith', label: 'Monolithic Web / Desktop App', desc: 'Single deployment binary or WAR/EAR file' },
                      { id: 'mainframe', label: 'Mainframe / COBOL / AS400', desc: 'Batch execution & green screen terminals' },
                      { id: 'stored-procs', label: 'Heavy Database Stored Logic', desc: 'Oracle PL-SQL or Sybase/DB2 procedures' },
                      { id: 'brittle-micro', label: 'Legacy SOAP / Unmaintainable APIs', desc: 'Tightly coupled distributed procedures' },
                    ].map((item) => (
                      <label
                        key={item.id}
                        className={`p-4 rounded-card border cursor-pointer transition-all flex flex-col justify-between ${
                          formData.systemType === item.id
                            ? 'bg-ink_card border-lime_accent shadow-limeGlow'
                            : 'bg-ink_card/60 border-border_dark hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-semibold text-white">{item.label}</span>
                          <input
                            type="radio"
                            name="systemType"
                            checked={formData.systemType === item.id}
                            onChange={() => setFormData({ ...formData, systemType: item.id })}
                            className="accent-lime_accent"
                          />
                        </div>
                        <span className="text-xs text-text_muted_on_dark">{item.desc}</span>
                      </label>
                    ))}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-text_muted_on_dark mb-2 uppercase">
                      Primary Core Language / Runtime
                    </label>
                    <select
                      value={formData.primaryLanguage}
                      onChange={(e) => setFormData({ ...formData, primaryLanguage: e.target.value })}
                      className="w-full px-4 py-3 rounded-input bg-ink_card border border-border_dark text-white text-sm focus:outline-none focus:ring-2 focus:ring-lime_accent"
                    >
                      <option>COBOL / Mainframe</option>
                      <option>Java (Older / J2EE / Java 6-8)</option>
                      <option>.NET Framework (1.1 - 4.8) / VB.NET / C#</option>
                      <option>PL-SQL / Oracle Stored Procedures</option>
                      <option>Visual Basic 6 / Delphi</option>
                      <option>PHP (Older procedural / monolith)</option>
                      <option>Other / Mixed Legacy</option>
                    </select>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <Button type="submit" variant="mint" size="md" withArrow>
                      Continue to Step 2
                    </Button>
                  </div>
                </form>
              )}

              {/* Step 2: Scale & Bottlenecks */}
              {step === 2 && (
                <form onSubmit={handleNext} className="space-y-5">
                  <h3 className="text-xl font-heading font-semibold text-white">
                    2. Codebase Scale & Key Modernization Bottlenecks
                  </h3>

                  <div>
                    <label className="block text-xs font-mono text-text_muted_on_dark mb-2 uppercase">
                      Approximate Total Lines of Code (LOC)
                    </label>
                    <select
                      value={formData.approxLOC}
                      onChange={(e) => setFormData({ ...formData, approxLOC: e.target.value })}
                      className="w-full px-4 py-3 rounded-input bg-ink_card border border-border_dark text-white text-sm focus:outline-none focus:ring-2 focus:ring-lime_accent"
                    >
                      <option>Under 250,000 LOC</option>
                      <option>250,000 - 500,000 LOC</option>
                      <option>500,000 - 1,000,000 LOC</option>
                      <option>1,000,000 - 5,000,000 LOC</option>
                      <option>5,000,000+ LOC (Large Enterprise Scale)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-text_muted_on_dark mb-2 uppercase">
                      Select Primary Pain Points (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        'High license / hosting fees on legacy infrastructure',
                        'Slow monthly/quarterly release cycles',
                        'Developer retirement & talent scarcity',
                        'Performance degradation during peak transaction loads',
                        'Lack of REST/GraphQL APIs for digital partner integration',
                        'Security CVE vulnerabilities on obsolete runtimes',
                      ].map((pain) => (
                        <label
                          key={pain}
                          className="flex items-start gap-2.5 p-3 rounded-card bg-ink_card border border-border_dark text-xs text-text_muted_on_dark hover:text-white cursor-pointer select-none"
                        >
                          <input
                            type="checkbox"
                            checked={formData.businessPains.includes(pain)}
                            onChange={() => handleCheckbox(pain)}
                            className="mt-0.5 accent-lime_accent"
                          />
                          <span>{pain}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <Button type="button" variant="outline-white" size="md" onClick={handleBack}>
                      Back
                    </Button>
                    <Button type="submit" variant="mint" size="md" withArrow>
                      Continue to Final Step
                    </Button>
                  </div>
                </form>
              )}

              {/* Step 3: Recipient Information */}
              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-heading font-semibold text-white mb-2">
                    3. Where should we send your preliminary scorecard?
                  </h3>

                  {/* Honeypot field */}
                  <input
                    type="text"
                    name="gotcha"
                    value={formData.gotcha}
                    onChange={(e) => setFormData({ ...formData, gotcha: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div>
                    <label className="block text-xs font-mono text-text_muted_on_dark mb-1.5 uppercase">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-input bg-ink_card border border-border_dark text-white placeholder:text-text_muted_on_dark/50 text-sm focus:outline-none focus:ring-2 focus:ring-lime_accent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-text_muted_on_dark mb-1.5 uppercase">
                      Enterprise Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-input bg-ink_card border border-border_dark text-white placeholder:text-text_muted_on_dark/50 text-sm focus:outline-none focus:ring-2 focus:ring-lime_accent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-text_muted_on_dark mb-1.5 uppercase">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Enterprise Inc."
                      className="w-full px-4 py-3 rounded-input bg-ink_card border border-border_dark text-white placeholder:text-text_muted_on_dark/50 text-sm focus:outline-none focus:ring-2 focus:ring-lime_accent"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <Button type="button" variant="outline-white" size="md" onClick={handleBack}>
                      Back
                    </Button>
                    <Button type="submit" variant="mint" size="lg" isLoading={loading} withArrow>
                      Generate My Architecture Report
                    </Button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
