'use client';

import React, { forwardRef, useRef } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, type HTMLMotionProps } from 'framer-motion';
import { ArrowRight, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { appleEase } from '@/lib/motion';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'mint' | 'outline-white';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  withArrow?: boolean;
  isLoading?: boolean;
  isMagnetic?: boolean;
  children?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      withArrow = false,
      isLoading = false,
      isMagnetic = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    // Magnetic hover effect (desktop)
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 250, damping: 20 });
    const springY = useSpring(y, { stiffness: 250, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isMagnetic || !buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set((e.clientX - centerX) * 0.25);
      y.set((e.clientY - centerY) * 0.25);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    const sizeStyles = {
      sm: 'px-4 py-2 text-xs font-medium rounded-button',
      md: 'px-6 py-3 text-sm font-semibold rounded-button',
      lg: 'px-8 py-4 text-base font-semibold rounded-button',
    }[size];

    const variantStyles = {
      // Primary: solid black on light/mint backgrounds
      primary:
        'bg-ink_black text-white hover:bg-ink_panel shadow-sm hover:shadow-md border border-ink_black active:scale-[0.98]',
      // Mint: solid mint with black text on dark surfaces
      mint:
        'bg-mint_light text-ink_black hover:bg-lime_accent shadow-sm hover:shadow-limeGlow border border-mint_light active:scale-[0.98]',
      // Secondary: outlined black on light backgrounds
      secondary:
        'bg-transparent text-ink_black border border-ink_black/30 hover:border-ink_black hover:bg-ink_black/5 active:scale-[0.98]',
      // Outline-white: outlined white on dark backgrounds
      'outline-white':
        'bg-transparent text-white border border-white/30 hover:border-lime_accent hover:text-lime_accent hover:bg-white/5 active:scale-[0.98]',
      // Ghost: transparent
      ghost:
        'bg-transparent text-text_primary hover:bg-black/5 hover:text-ink_black active:scale-[0.98]',
    }[variant];

    const content = (
      <>
        {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
        <span className="relative z-10 flex items-center justify-center gap-1.5">
          {children}
          {withArrow && (
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          )}
        </span>
      </>
    );

    const commonClasses = cn(
      'group inline-flex items-center justify-center select-none tracking-tight transition-all duration-200',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime_accent focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed cursor-pointer',
      sizeStyles,
      variantStyles,
      className
    );

    if (href) {
      return (
        <Link href={href} className={commonClasses}>
          {content}
        </Link>
      );
    }

    return (
      <motion.button
        ref={(node) => {
          buttonRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node;
        }}
        style={{ x: springX, y: springY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ y: isMagnetic ? 0 : -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: appleEase }}
        disabled={disabled || isLoading}
        className={commonClasses}
        {...props}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
