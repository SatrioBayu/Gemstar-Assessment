/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "dark-blue": "#1E67AF",
      "light-blue": "#73B9FF",
      gray: "#EDEBEB",
      white: "#FFFFFF",
      black: "#000000",
    },
    container: {
      padding: "2rem",
    },
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
