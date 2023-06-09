/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'chakra': ['Chakra Petch', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'signup': "url('./src/assets/bg/loginbg.jpg')",
      }
    },
  },
  plugins: [],
}

