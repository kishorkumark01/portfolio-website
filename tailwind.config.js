/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      colors: {
        base: {
          light: '#F6F7FB',
          dark: '#0A0B14',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#12131F',
        },
        brand: {
          blue: '#4F6DF5',
          indigo: '#6C5CE7',
          purple: '#8B5CF6',
          pink: '#EC4899',
          cyan: '#22D3EE',
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #4F6DF5 0%, #8B5CF6 55%, #EC4899 100%)',
        'brand-gradient-soft': 'linear-gradient(135deg, rgba(79,109,245,0.15) 0%, rgba(139,92,246,0.15) 55%, rgba(236,72,153,0.15) 100%)',
        'mesh': 'radial-gradient(at 20% 20%, rgba(79,109,245,0.25) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(139,92,246,0.25) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(236,72,153,0.2) 0px, transparent 50%)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        glow: '0 0 40px rgba(139, 92, 246, 0.35)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'spin-slow': 'spin 14s linear infinite',
        gradient: 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-20px) translateX(10px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
    },
  },
  plugins: [],
}
