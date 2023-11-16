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
        // Add other custom colors if needed
      },
    },
  },
  plugins: [],
}