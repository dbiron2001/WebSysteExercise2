/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './build/*.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontSize: {
        '2xs': '.65rem',
        '4xs': '.55rem',
      },
      keyframes: {
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },  // starts outside the right of the container
          '100%': { transform: 'translateX(0)' },    //  ends at its original position
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)' }, // starts outside the left of the container
          '100%': { transform: 'translateX(0)' },   //  ends at its original position
        },
      },
      animation: {
        'slide-in-right': 'slide-in-right 1s ease-out', // Adjust the duration (1s) and easing function
        'slide-in-left': 'slide-in-left 1s ease-out', // Adjust the duration (1s) and easing function
      },
    },
  },
  plugins: [],
}
