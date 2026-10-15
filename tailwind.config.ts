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
        ink_black: '#0B0B0F',
        ink_panel: '#111216',
        ink_card: '#17181D',
        mint_light: '#BBFFAB',
        mint_soft: '#A9E8A0',
        lime_accent: '#4DFF3A',
        lime_text_on_dark: '#8CFF6B',
        page_offwhite: '#FBFEF9',
        surface_grey_green: '#EFF2EA',
        text_primary: '#0B0B0F',
        text_muted: '#555A55',
        text_on_dark: '#FFFFFF',
        text_muted_on_dark: '#B4B8B0',
        border_light: '#D9DDD3',
        border_dark: '#2A2C33',
        grade_good: '#16A765',
        grade_ok: '#A4D500',
        grade_warn: '#F5C400',
        grade_bad: '#E5484D',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        sans: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        panel: '28px',
        card: '22px',
        input: '11px',
        button: '11px',
        pill: '9999px',
      },
      boxShadow: {
        device: '0 40px 80px -20px rgba(0,0,0,0.45)',
        card: '0 10px 30px rgba(11,11,15,0.08)',
        limeGlow: '0 0 0 4px rgba(77,255,58,0.25)',
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
