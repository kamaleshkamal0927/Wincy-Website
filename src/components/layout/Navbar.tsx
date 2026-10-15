'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { NAVIGATION_DATA, SITE_CONFIG } from '@/content/site';
import { appleEase } from '@/lib/motion';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const pathname = usePathname();

  // Handle scroll backdrop blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        'sticky top-0 left-0 right-0 z-40 transition-all duration-300 select-none',
        scrolled
          ? 'bg-ink_black/90 backdrop-blur-md border-b border-border_dark/80 py-3 shadow-md'
          : 'bg-ink_black border-b border-border_dark/40 py-4'
      )}
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime_accent rounded-lg"
          aria-label="Wincy Software Solutions Home"
        >
          <div className="relative h-10 w-44 sm:w-52">
            <Image
              src="/images/logo-dark.svg"
              alt="Wincy Software Solutions"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAVIGATION_DATA.map((link) => {
            if (link.isCta) return null;

            const hasDropdown = Boolean(link.children && link.children.length > 0);
            const isOpen = openDropdown === link.label;

            if (hasDropdown) {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={cn(
                      'flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer',
                      isOpen
                        ? 'text-lime_accent bg-white/5'
                        : 'text-text_muted_on_dark hover:text-white'
                    )}
                    aria-expanded={isOpen}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={cn(
                        'w-3.5 h-3.5 transition-transform duration-200',
                        isOpen ? 'rotate-180 text-lime_accent' : ''
                      )}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: appleEase }}
                        className="absolute top-full left-0 mt-2 w-80 p-3 rounded-card bg-ink_card border border-border_dark shadow-device z-50 glass-dropdown"
                      >
                        {link.children?.map((group) => (
                          <div key={group.category} className="space-y-1">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-text_muted_on_dark px-3 py-1 block">
                              {group.category}
                            </span>
                            {group.items.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                className="block p-2.5 rounded-lg hover:bg-white/5 transition-colors group/item"
                              >
                                <div className="text-sm font-medium text-white group-hover/item:text-lime_accent transition-colors flex items-center justify-between">
                                  <span>{item.label}</span>
                                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-lime_accent" />
                                </div>
                                {item.description && (
                                  <p className="text-xs text-text_muted_on_dark mt-0.5 line-clamp-1">
                                    {item.description}
                                  </p>
                                )}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            const isActive = pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  'px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200',
                  isActive
                    ? 'text-lime_accent bg-white/5'
                    : 'text-text_muted_on_dark hover:text-white'
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button at Far Right */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/book-a-demo"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide bg-white text-ink_black hover:bg-lime_accent hover:text-ink_black shadow-sm transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime_accent"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg text-text_muted_on_dark hover:text-white bg-white/5 hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime_accent cursor-pointer"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Slide-in Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: appleEase }}
            className="lg:hidden border-t border-border_dark bg-ink_black/98 px-4 py-6 overflow-y-auto max-h-[85vh] shadow-device"
          >
            <div className="space-y-4">
              {NAVIGATION_DATA.map((link) => {
                if (link.isCta) return null;

                const hasDropdown = Boolean(link.children && link.children.length > 0);
                const isAccordionOpen = mobileAccordion === link.label;

                if (hasDropdown) {
                  return (
                    <div key={link.label} className="border-b border-border_dark/50 pb-3">
                      <button
                        onClick={() =>
                          setMobileAccordion(isAccordionOpen ? null : link.label)
                        }
                        className="flex items-center justify-between w-full text-left text-base font-medium text-white py-2"
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={cn(
                            'w-4 h-4 transition-transform duration-200',
                            isAccordionOpen ? 'rotate-180 text-lime_accent' : ''
                          )}
                        />
                      </button>

                      {isAccordionOpen && (
                        <div className="pl-3 pt-2 space-y-2">
                          {link.children?.map((group) => (
                            <div key={group.category} className="space-y-1">
                              {group.items.map((item) => (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block py-2 text-sm text-text_muted_on_dark hover:text-lime_accent transition-colors"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-base font-medium text-white hover:text-lime_accent transition-colors border-b border-border_dark/50"
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-4 space-y-3">
                <Link
                  href="/book-a-demo"
                  onClick={() => setMobileOpen(false)}
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-semibold bg-lime_accent text-ink_black hover:bg-mint_light transition-colors"
                >
                  Get Started
                </Link>
                <div className="text-center pt-2">
                  <a
                    href={SITE_CONFIG.contact.phoneHref}
                    className="text-xs font-mono text-text_muted_on_dark hover:text-white"
                  >
                    {SITE_CONFIG.contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
