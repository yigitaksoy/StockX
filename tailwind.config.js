/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      colors: {
        white: "white",
        none: "none",
      },
      fontFamily: {
        sans: ["serenity, sans-serif"],
      },
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
