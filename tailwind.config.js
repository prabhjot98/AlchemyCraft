/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-5px)' }, // Move up 5px
          '75%': { transform: 'translateY(5px)' }, // Move up 5px
        },
      },
      animation: {
        shake: 'shake 1s ease-in-out infinite', // Infinite shake animation
      },
    },
  },
  plugins: [],
};
