import { type Config } from 'tailwindcss'

/**
 * SF on Apple devices, Inter (self-hosted by next/font) everywhere else. Inter is only
 * downloaded when the system font isn't there.
 */
const systemSans = [
  '-apple-system',
  'BlinkMacSystemFont',
  'var(--font-inter)',
  'Segoe UI',
  'Roboto',
  'Helvetica Neue',
  'Arial',
  'sans-serif',
]

export default {
  content: ['./src/**/*.{js,jsx,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.25rem' }],
      '3xl': ['1.75rem', { lineHeight: '2.25rem', letterSpacing: '-0.015em' }],
      '4xl': ['2rem', { lineHeight: '2.5rem', letterSpacing: '-0.02em' }],
      '5xl': ['2.5rem', { lineHeight: '3rem', letterSpacing: '-0.025em' }],
      '6xl': ['3rem', { lineHeight: '3.25rem', letterSpacing: '-0.03em' }],
      '7xl': ['4rem', { lineHeight: '4.25rem', letterSpacing: '-0.035em' }],
      '8xl': ['5rem', { lineHeight: '5.25rem', letterSpacing: '-0.04em' }],
    },
    extend: {
      colors: {
        surface: 'rgb(var(--surface) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        primary: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          ink: 'rgb(var(--primary-ink) / <alpha-value>)',
          text: 'rgb(var(--primary-text) / <alpha-value>)',
        },
        accent: 'rgb(var(--accent) / <alpha-value>)',
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
      fontFamily: {
        sans: systemSans,
        display: [systemSans, { fontVariationSettings: 'normal' }],
      },
      transitionTimingFunction: {
        'apple-out': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config
