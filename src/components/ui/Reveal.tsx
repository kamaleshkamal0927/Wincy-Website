'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { appleEase } from '@/lib/motion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  once?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 24,
  className = '',
  once = true,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: appleEase,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
