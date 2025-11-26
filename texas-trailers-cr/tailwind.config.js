/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'texas-black': '#1a1a1a',
        'texas-red': '#c41e3a',
        'texas-white': '#ffffff',
        'texas-gray': '#f5f5f5',
      },
    },
  },
  plugins: [],
}
