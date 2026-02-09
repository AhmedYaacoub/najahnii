import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    '*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'electric-blue': '#0061FF',
        'vibrant-accent': '#FFD166',
        'background-light': '#F8FAFC',
        'background-soft-blue': '#EFF6FF',
        'text-main': '#0f172a',
        'text-sub': '#475569',
        'text-muted': '#64748b',
      },
      fontFamily: {
        'display': ['var(--font-ibm-plex)', 'sans-serif'],
        'body': ['var(--font-tajawal)', 'sans-serif'],
      },
      borderRadius: {
        'DEFAULT': '0.6rem',
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0, 0, 0, 0.08)',
        'soft-hover': '0 20px 40px -10px rgba(37, 99, 235, 0.25)',
        'vibrant': '0 8px 30px -4px rgba(0, 97, 255, 0.4)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
      },
      animation: {
        'float': 'float 7s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite 0.5s',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
