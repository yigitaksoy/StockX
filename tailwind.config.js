/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
    },
    fontFamily: {
      sans: ["serenity, sans-serif"],
    },
  },
  plugins: [],
};
