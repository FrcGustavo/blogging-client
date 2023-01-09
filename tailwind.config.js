/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1C2237',
        'primary-light': '#4B5A8A',
        primary: '#6ec6ff',
        secondary: '#C63F17',
      },
    },
  },
  plugins: [],
};
