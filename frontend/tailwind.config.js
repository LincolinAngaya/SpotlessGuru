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
        white: '#fffff',
        sky: '#55E2E9'

      },
    },
  },
  plugins: [],
}