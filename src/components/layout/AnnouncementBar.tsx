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
      className="bg-ink_black border-b border-border_dark/70 text-xs sm:text-sm py-2.5 px-4 text-center z-50 relative select-none"
    >
      <div className="max-w-container mx-auto flex items-center justify-center flex-wrap gap-x-2 gap-y-1">
        <span className="font-bold text-lime_accent tracking-wide uppercase text-[11px] sm:text-xs">
          {ANNOUNCEMENT_BAR.badge}
        </span>
        <span className="text-white font-medium">
          {ANNOUNCEMENT_BAR.text}
        </span>
        <Link
          href={ANNOUNCEMENT_BAR.linkHref}
          className="text-lime_accent underline underline-offset-4 hover:text-white transition-colors duration-150 font-semibold inline-flex items-center"
        >
          {ANNOUNCEMENT_BAR.linkText}
        </Link>
      </div>
    </motion.aside>
  );
}
