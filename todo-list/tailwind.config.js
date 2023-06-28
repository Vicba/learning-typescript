/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'mobile-light': "url('/images/bg-mobile-light.jpg')",
        'mobile-dark': "url('/images/bg-mobile-dark.jpg')",
        'desktop-light': "url('/images/bg-desktop-light.jpg')",
        'desktop-dark': "url('/images/bg-desktop-dark.jpg')",
      },
      screens: {
        'sm': '450px',       // Small screen size, equal or larger
        'lg': '900px',
      },
    },
    plugins: [],
  }
};

