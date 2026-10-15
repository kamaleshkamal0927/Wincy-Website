import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Terminal, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main id="main-content" className="py-24 sm:py-32 bg-page_offwhite select-none">
      <div className="max-w-xl mx-auto px-4 text-center space-y-6">
        <div className="w-16 h-16 rounded-panel bg-ink_black text-lime_accent flex items-center justify-center mx-auto shadow-sm">
          <Terminal className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono font-bold uppercase tracking-wider text-lime_accent bg-ink_black px-3 py-1 rounded-full">
          HTTP 404 // RESOURCE UNRESOLVED
        </span>

        <h1 className="text-4xl sm:text-5xl font-heading font-semibold text-ink_black tracking-tight">
          Page Not Found
        </h1>

        <p className="text-sm sm:text-base text-text_muted leading-relaxed">
          The requested system node or document does not exist in our modernization cluster. It may have been refactored or moved to a modern endpoint.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg" href="/" withArrow>
            Return to Modernization Home
          </Button>
          <Button variant="secondary" size="lg" href="/services">
            Explore Services
          </Button>
        </div>
      </div>
    </main>
  );
}
