import '@/app/globals.css';
import type { Metadata, Viewport } from 'next';
import { SITE_CONFIG } from '@/content/site';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { BackToTop } from '@/components/ui/BackToTop';
import { SmoothScrollProvider } from '@/components/ui/SmoothScrollProvider';
import { ToastProvider } from '@/components/ui/Toast';

export const viewport: Viewport = {
  themeColor: '#130C12',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: `${SITE_CONFIG.name} | AI-Powered Legacy System Modernization`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.author }],
  creator: SITE_CONFIG.author,
  publisher: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.siteUrl,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | AI-Powered Legacy System Modernization`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: '/images/og/og-image.png',
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - AI-Powered Legacy Modernization`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} | AI-Powered Legacy System Modernization`,
    description: SITE_CONFIG.description,
    images: ['/images/og/og-image.png'],
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
    other: [{ rel: 'mask-icon', url: '/icon.svg' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* ========================================================================= */}
        {/* ANALYTICS PLACEHOLDER (DECISION #4):                                      */}
        {/* Client can add Google Tag Manager, Plausible, or PostHog script tags here. */}
        {/* Example: <script async src="https://..." />                              */}
        {/* ========================================================================= */}
      </head>
      <body className="bg-page_offwhite text-text_primary antialiased font-sans selection:bg-mint_light selection:text-ink_black min-h-screen flex flex-col">
        {/* Skip to Main Content Link for WCAG Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-lime_accent focus:text-ink_black focus:font-semibold focus:rounded-md focus:shadow-md"
        >
          Skip to main content
        </a>

        <ToastProvider>
          <SmoothScrollProvider>
            {/* Top 3px Lime Scroll Progress Bar */}
            <ScrollProgress />

            {/* Top Black Announcement Bar */}
            <AnnouncementBar />

            {/* Sticky Translucent Navbar */}
            <Navbar />

            {/* Page Content */}
            <div className="flex-1">{children}</div>

            {/* Black Enterprise Footer */}
            <Footer />

            {/* Floating Back to Top Button */}
            <BackToTop />
          </SmoothScrollProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
