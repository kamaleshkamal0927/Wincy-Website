'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS_CONTENT } from '@/content/site';
import { Reveal } from '@/components/ui/Reveal';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { appleEase } from '@/lib/motion';

export function TestimonialsSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const items = TESTIMONIALS_CONTENT.items;
  const current = items[currentIdx];

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 lg:py-28 bg-page_offwhite select-none border-b border-border_light relative overflow-hidden" id="testimonials">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface_grey_green border border-border_light text-ink_black text-xs font-semibold uppercase tracking-wider mb-4">
            <span>{TESTIMONIALS_CONTENT.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium tracking-tight text-ink_black">
            {TESTIMONIALS_CONTENT.title}
          </h2>
        </Reveal>

        {/* Large Quote Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-panel bg-ink_black text-white p-8 sm:p-12 lg:p-14 shadow-device border border-border_dark overflow-hidden">
            {/* Oversized faded quote mark */}
            <div className="absolute right-6 top-6 text-white/[0.04] pointer-events-none select-none">
              <Quote className="w-40 h-40" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: appleEase }}
                className="relative z-10 space-y-6"
              >
                {/* 5 Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-lime_accent text-lime_accent" />
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="text-xl sm:text-2xl font-heading font-normal text-white leading-relaxed">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="pt-4 border-t border-border_dark/80 flex items-center justify-between">
                  <div>
                    <p className="font-heading font-semibold text-white text-base">
                      {current.author}
                    </p>
                    <p className="text-xs sm:text-sm text-text_muted_on_dark">
                      {current.role} • {current.companyPlaceholder}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Controls */}
            <div className="relative z-10 mt-8 pt-6 border-t border-border_dark/40 flex items-center justify-between">
              {/* Pill-style pagination dots */}
              <div className="flex items-center gap-2">
                {items.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrentIdx(dotIdx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      dotIdx === currentIdx
                        ? 'w-8 bg-lime_accent'
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to testimonial ${dotIdx + 1}`}
                  />
                ))}
              </div>

              {/* Circular Prev/Next Buttons */}
              <div className="flex items-center gap-2.5">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-full bg-ink_card border border-border_dark text-white hover:text-lime_accent hover:border-lime_accent transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime_accent"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-full bg-ink_card border border-border_dark text-white hover:text-lime_accent hover:border-lime_accent transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime_accent"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
