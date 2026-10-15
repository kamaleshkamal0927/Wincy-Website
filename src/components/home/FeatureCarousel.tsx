'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FEATURE_CAROUSEL_TABS } from '@/content/site';
import { CarouselTabMockup } from '@/components/mockups/CarouselTabMockup';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { appleEase } from '@/lib/motion';

export function FeatureCarousel() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const activeTab = FEATURE_CAROUSEL_TABS[activeTabIdx];

  const handlePrev = () => {
    setActiveTabIdx((prev) =>
      prev === 0 ? FEATURE_CAROUSEL_TABS.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveTabIdx((prev) =>
      prev === FEATURE_CAROUSEL_TABS.length - 1 ? 0 : prev + 1
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-surface_grey_green text-ink_black select-none relative overflow-hidden" id="tech-stack">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border_light text-lime_accent text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MODERNIZATION ENGINE CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium tracking-tight text-ink_black">
            Engineered for Modern Enterprise Architectures
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text_muted">
            Explore how each stage of our AI-driven modernization pipeline operates with deterministic precision.
          </p>
        </Reveal>

        {/* Pill Tabs (active = solid mint, others outlined white) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {FEATURE_CAROUSEL_TABS.map((tab, idx) => {
            const isActive = idx === activeTabIdx;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabIdx(idx)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime_accent ${
                  isActive
                    ? 'bg-mint_light text-ink_black shadow-limeGlow'
                    : 'bg-white text-text_muted border border-border_light hover:border-lime_accent/50 hover:text-ink_black'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Big White Rounded Card with Content + Dark UI Screenshot on right */}
        <div className="rounded-panel bg-white text-ink_black p-6 sm:p-10 lg:p-12 shadow-card border border-border_light">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: appleEase }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Italic label, H3, paragraph, black rounded chips */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs sm:text-sm font-serif italic text-text_muted block mb-2">
                    {`// ${activeTab.tagline}`}
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-ink_black tracking-tight leading-snug">
                    {activeTab.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-text_muted leading-relaxed">
                  {activeTab.description}
                </p>

                {/* Black Rounded Chips */}
                <div className="space-y-2.5 pt-2">
                  {activeTab.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ink_black text-white text-xs font-mono mr-2 mb-2 shadow-sm"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime_accent shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Dark UI Mockup */}
              <div className="lg:col-span-6">
                <CarouselTabMockup tabType={activeTab.mockupType} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation arrows & CTA underneath */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white border border-border_light text-ink_black hover:bg-lime_accent hover:text-white transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime_accent cursor-pointer"
              aria-label="Previous tab"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white border border-border_light text-ink_black hover:bg-lime_accent hover:text-white transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime_accent cursor-pointer"
              aria-label="Next tab"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-text_muted ml-2">
              0{activeTabIdx + 1} / 0{FEATURE_CAROUSEL_TABS.length}
            </span>
          </div>

          <Button variant="mint" size="lg" href="/free-assessment" withArrow>
            Request Your Technical Deep Dive
          </Button>
        </div>
      </div>
    </section>
  );
}
