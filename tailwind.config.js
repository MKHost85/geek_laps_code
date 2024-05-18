/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    container: {
      padding: {
        DEFAULT: "10px",
        sm: "32px",
      },
    },
  },
  plugins: [],
}