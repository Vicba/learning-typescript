/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-desktop': "url('/images/pattern-bg-desktop.png')",
        'hero-mobbile': "url('/images/pattern-bgs-mobile.png')",
      }
    }
  },
  plugins: [],
}