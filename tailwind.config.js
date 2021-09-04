const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 3s linear infinite',
        marquee2: 'marquee2 3s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      colors: {
        primary: colors.purple,
        secondary: colors.orange,
        accent: colors.white,
      },
    },
  },
  variants: {
    extend: {
      backgroundOpacity: ['active', 'dark', 'hover', 'focus', 'responsive'],
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
