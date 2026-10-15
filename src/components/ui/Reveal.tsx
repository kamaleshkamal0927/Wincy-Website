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
  direction?: 'up' | 'left' | 'right' | 'none';
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.65,
  yOffset = 28,
  className = '',
  once = true,
  direction = 'up',
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const initial =
    direction === 'left'
      ? { opacity: 0, x: -32 }
      : direction === 'right'
      ? { opacity: 0, x: 32 }
      : direction === 'none'
      ? { opacity: 0 }
      : { opacity: 0, y: yOffset };

  const animate =
    direction === 'left' || direction === 'right'
      ? { opacity: 1, x: 0 }
      : direction === 'none'
      ? { opacity: 1 }
      : { opacity: 1, y: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration, delay, ease: appleEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
