/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'ambient-pulse': 'ambientPulse 6s ease-in-out infinite',
        'strobe-wave': 'strobeWave 2s ease-in-out infinite', // Added strobe effect
        'ripple-pulse': 'ripplePulse 4s ease-out infinite', // Added ripple pulse
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        ambientPulse: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '50%': { opacity: '0.15' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        strobeWave: { // Added strobe keyframes
          '0%, 100%': { 'filter': 'drop-shadow(0 0 5px #a5f3fc) drop-shadow(0 0 10px #67e8f9)', 'opacity': '1' },
          '50%': { 'filter': 'drop-shadow(0 0 15px #22d3ee) drop-shadow(0 0 25px #06b6d4)', 'opacity': '0.8' },
        },
         ripplePulse: {
          '0%': { transform: 'scale(0.5)', opacity: '0.7' },
          '50%': { transform: 'scale(1)', opacity: '0.3' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}