/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-blue-900',
    'text-white',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}