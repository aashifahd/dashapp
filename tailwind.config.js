/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        sans: ["manrope", "sans-serif"],
      },

      container: {
        center: true,
        padding: "1rem",
        md: {
          padding: "2rem",
        },
      },
    },
  },
  plugins: [],
}

