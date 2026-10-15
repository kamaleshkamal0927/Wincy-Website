'use client';

import React, { useState } from 'react';
import { Mail, Copy, Check } from 'lucide-react';
import { useToast } from './Toast';
import { cn } from '@/lib/utils';

interface EmailChipProps {
  email: string;
  className?: string;
  variant?: 'dark' | 'light' | 'pill';
}

export function EmailChip({ email, className, variant = 'dark' }: EmailChipProps) {
  const [copied, setCopied] = useState(false);
  const { success } = useToast();

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      success('Email copied to clipboard', email);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const variantStyles = {
    dark: 'bg-ink_card border-border_dark text-white hover:border-lime_accent/60',
    light: 'bg-surface_grey_green border-border_light text-ink_black hover:border-ink_black',
    pill: 'bg-ink_black/90 border-border_dark text-white hover:border-lime_accent',
  }[variant];

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full border text-xs sm:text-sm transition-all duration-200 select-all group',
        variantStyles,
        className
      )}
    >
      <a
        href={`mailto:${email}`}
        className="flex items-center gap-2 hover:text-lime_accent transition-colors"
        title="Send email"
      >
        <Mail className="w-4 h-4 text-lime_accent shrink-0" />
        <span className="font-mono tracking-tight select-text">{email}</span>
      </a>

      <button
        type="button"
        onClick={handleCopy}
        className="p-1 rounded hover:bg-white/10 text-text_muted_on_dark hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lime_accent cursor-pointer ml-1"
        aria-label="Copy email address"
        title="Copy email to clipboard"
      >
        {copied ? (
          <Check className="w-3.5 h-3.5 text-lime_accent" />
        ) : (
          <Copy className="w-3.5 h-3.5" />
        )}
      </button>
    </div>
  );
}
