/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
          backgroundColor: {
        navy: '#002748',
        white: '#FFFFF',
        sky: '#55E2E9'

      },
      text: {
        sky: '#55E2E9',
        navy: '#002748',
        white: '#FFFFF',
      },
       colors: {
        customBlue: '#002748',
        sky: '#55E2E9',
      },
      border: {
        sky:  '#55E2E9',
        navy: '#002748',
      } ,
      fontFamily:{
        signature:['Poppins'],
      }
    },
  },
  plugins: [],
}