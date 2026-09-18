/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Deep forest green - primary brand color (hero bg, header text, dark sections)
        forest: {
          DEFAULT: '#14271F',
          50: '#eef2f0',
          100: '#d5ded9',
          200: '#aebfb4',
          300: '#7f9a8a',
          400: '#517566',
          500: '#2f5545',
          600: '#1e3c2f',
          700: '#182f26',
          800: '#14271F',
          900: '#0d1a15',
        },
        // Warm gold - accent color (buttons, eyebrow text, icons)
        gold: {
          DEFAULT: '#C9A24B',
          50: '#faf5e9',
          100: '#f2e6c6',
          200: '#e6cd8f',
          300: '#dab758',
          400: '#C9A24B',
          500: '#b3893a',
          600: '#8f6c2d',
        },
        // Warm off-white - page background
        cream: {
          DEFAULT: '#F7F5F0',
          dark: '#EFEBE2',
        },
        ink: {
          DEFAULT: '#1E2A24',
          soft: '#4B584F',
          faint: '#7C8781',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        pill: '999px',
      },
      maxWidth: {
        content: '1320px',
      },
    },
  },
  plugins: [],
}
