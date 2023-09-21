/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'chakra': ['Chakra Petch', 'sans-serif'],
      'ptSans': ['PT Sans Narrow', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'signup': "url('./src/assets/bg/loginbg.jpg')",
      },
      colors: {
        'blue-100':'#043263',
        'blue-200':'#01AFD1',
        'blue-300':'#239EFE',
        'blue-400':'#7DBAFB',
        'blue-500':'#DBE5FF',
        
        

      },
      boxShadow: {
        '5xl-blue': '0 5px 20px 0px rgba(38, 114, 231, 0.25)',
        '5xl': '0 1px 15px 0px rgba(0, 0, 0, 0.18)',
        '4xl': '0 4px 4px 0px rgba(0,0,0,0.25)',
        '3xl': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}

