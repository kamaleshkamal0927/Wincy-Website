import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark surfaces (unchanged — universal)
        ink_black:  '#130C12',   // deep wine-black
        ink_panel:  '#1E1020',   // dark maroon panel
        ink_card:   '#271529',   // card on dark bg

        // Brand accent — hot pink (replaces lime)
        mint_light:          '#F9C5E0',  // soft blush pink (replaces mint_light)
        mint_soft:           '#F5E0EE',  // lightest rose surface (replaces mint_soft)
        lime_accent:         '#E00070',  // hot pink — PRIMARY accent
        lime_text_on_dark:   '#F07DB8',  // softer pink readable on dark

        // Page surfaces — warm whites
        page_offwhite:       '#FDF9FB',  // warm near-white
        surface_grey_green:  '#F5EDF4',  // rose-tinted surface panel

        // Text
        text_primary:       '#1A0F18',
        text_muted:         '#6B5F6A',
        text_on_dark:       '#FFFFFF',
        text_muted_on_dark: '#C4A8BE',

        // Borders
        border_light: '#E8D4E2',
        border_dark:  '#3D2040',

        // Semantic grades (kept for mock UI accuracy)
        grade_good: '#16A765',
        grade_ok:   '#A4D500',
        grade_warn: '#F5C400',
        grade_bad:  '#E5484D',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        sans: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        panel: '30px',
        card: '24px',
        input: '11px',
        button: '9999px',
        pill: '9999px',
      },
      boxShadow: {
        device: '0 32px 72px -24px rgba(0,0,0,0.42)',
        card: '0 12px 32px rgba(29,29,31,0.06)',
        limeGlow: '0 0 0 4px rgba(224,0,112,0.25)',
      },
      maxWidth: {
        container: '1280px',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
