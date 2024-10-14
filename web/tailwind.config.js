/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        green: {
          50: "#ecf8ec",
          100: "#c7ebc6",
          200: "#a1dea1",
          300: "#7cd07b",
          400: "#56c355",
          500: "#379936",
          600: "#2f842f",
          700: "#2f842f",
          800: "#225e21",
          900: "#143914",
          950: "#071307",
        },
        yellow: {
          50: "#FFF5E6",
          100: "#FEE0B3",
          200: "#FECC81",
          300: "#FDB74E",
          400: "#FDA31C",
          500: "#FDA521",
          600: "#E38902",
          700: "#B16B02",
          800: "#7E4C01",
          900: "#4C2E01",
          950: "#190F00",
        },
      },
    },
  },
  plugins: [],
}
