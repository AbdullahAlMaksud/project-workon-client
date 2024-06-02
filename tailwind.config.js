/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bangla': ['"Hind Siliguri"', 'sans-serif'],
        'poppins': ['"Poppins"', 'sans-serif'],
        'raleway': ['"Raleway"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

