'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_CONTENT } from '@/content/site';
import { EmailChip } from '@/components/ui/EmailChip';
import { Reveal } from '@/components/ui/Reveal';
import { Plus, HelpCircle } from 'lucide-react';
import { appleEase } from '@/lib/motion';

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-surface_grey_green text-ink_black select-none relative overflow-hidden" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Centered Heading & Muted Subtext with dark pill */}
        <Reveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border_light text-lime_accent text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{FAQ_CONTENT.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium tracking-tight text-ink_black mb-4">
            {FAQ_CONTENT.title}
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4 text-sm text-text_muted">
            <span>{FAQ_CONTENT.subtitle}</span>
            <EmailChip email={FAQ_CONTENT.supportEmail} variant="light" />
          </div>
        </Reveal>

        {/* Accordion Rows */}
        <div className="space-y-3.5">
          {FAQ_CONTENT.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-card bg-white border border-border_light overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime_accent"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-heading font-semibold text-ink_black tracking-tight">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all duration-200 ${
                      isOpen
                        ? 'bg-lime_accent text-ink_black border-lime_accent rotate-45'
                        : 'bg-surface_grey_green text-text_muted border-border_light'
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: appleEase }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-text_muted leading-relaxed border-t border-border_light">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
