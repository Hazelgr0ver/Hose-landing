/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Графит — основной тёмный фон
        graphite: {
          950: '#080B11',
          900: '#0B0F17',
          800: '#0F141E',
          700: '#161D2A',
          600: '#1E2738',
          500: '#283346',
        },
        // Бирюзово-синий фирменный акцент
        brand: {
          50: '#ECFEFF',
          100: '#CFFAFE',
          200: '#A5F3FC',
          300: '#67E8F4',
          400: '#34D6E8',
          500: '#15B8CB',
          600: '#0E94A8',
          700: '#117585',
          800: '#155E6B',
          900: '#164E5A',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(8, 11, 17, 0.12)',
        'soft-lg': '0 24px 70px -20px rgba(8, 11, 17, 0.18)',
        glow: '0 0 0 1px rgba(21, 184, 203, 0.18), 0 18px 50px -16px rgba(21, 184, 203, 0.35)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(rgba(21,184,203,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(21,184,203,0.06) 1px, transparent 1px)',
      },
      keyframes: {
        'flow-dash': {
          to: { strokeDashoffset: '-200' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
      animation: {
        'flow-dash': 'flow-dash 6s linear infinite',
        'spin-slow': 'spin-slow 40s linear infinite',
        float: 'float 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
