'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ANNOUNCEMENT_BAR } from '@/content/site';
import { appleEase } from '@/lib/motion';

export function AnnouncementBar() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: appleEase }}
      aria-label="Announcement"
      className="bg-white border-b border-border_light text-xs sm:text-sm py-2.5 px-4 text-center z-50 relative select-none"
    >
      <div className="max-w-container mx-auto flex items-center justify-center flex-wrap gap-x-2 gap-y-1">
        <span className="font-semibold text-ink_black tracking-wide text-[11px] sm:text-xs">
          {ANNOUNCEMENT_BAR.badge}
        </span>
        <span className="text-text_muted font-medium">
          {ANNOUNCEMENT_BAR.text}
        </span>
        <Link
          href={ANNOUNCEMENT_BAR.linkHref}
          className="text-ink_black underline underline-offset-4 hover:text-lime_accent transition-colors duration-150 font-semibold inline-flex items-center"
        >
          {ANNOUNCEMENT_BAR.linkText}
        </Link>
      </div>
    </motion.aside>
  );
}
