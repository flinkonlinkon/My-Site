import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#22d3ee',
        secondary: '#a855f7',
        accent: '#22c55e',
        darkBg: '#020617',
      },
      boxShadow: {
        'neon-cyan': '0 0 25px rgba(34,211,238,0.6)',
        'neon-purple': '0 0 25px rgba(168,85,247,0.6)',
      },
      backgroundImage: {
        'grid-neon':
          'linear-gradient(rgba(56,189,248,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.08) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-neon-size': '120px 120px',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        cyberdark: {
          primary: '#22d3ee',
          secondary: '#a855f7',
          accent: '#22c55e',
          neutral: '#0f172a',
          'base-100': '#020617',
          'base-200': '#020617',
          'base-300': '#020617',
          info: '#38bdf8',
          success: '#22c55e',
          warning: '#f59e0b',
          error: '#ef4444',
        },
      },
      'dark',
    ],
  },
}

