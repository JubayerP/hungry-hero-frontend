const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9ccd62",
        secondary: "#3c3d42",
        accent: "#f6f8e2",
        base: "#fff",
        third: "#e0ddca"
      }
    },
    fontFamily: {
      "poppins": ['Poppins', 'sans-serif'],
      "varela": ['Varela Round', 'sans-serif']
    }
  },
  plugins: [],
})