/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        rhodium : ['Rhodium Libre', 'serif'],
      },
      colors:{
        primary : '#1F3086',
        secondary: '#FFBA35',
        tersier: '#5D5D5D',
        background: '#D9D9D9',
        hover: '#40438E',

      }
    },
  },
  plugins: [],
}

