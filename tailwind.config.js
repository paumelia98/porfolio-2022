/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { fontFamily: {
      'mono': ['Mono', 'sans-serif'],
      'calibre': ['Calibre', 'sans-serif'],
      'calibre-bold': ['Calibre-bold', 'sans-serif'],
    }},
  },
  plugins: [],
}