/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      zinc: {
        50: '#fafafa',
        100: '#f4f4f5',
        200: '#e4e4e7',
        300: '#d4d4d8',
        400: '#a1a1aa',
        500: '#71717a',
        600: '#52525b',
        700: '#3f3f46',
        800: '#27272a',
        900: '#18181b',
        950: '#09090b',
      },
      green: {
        50: '#ecf8ec',
        100: '#c7ebc6',
        200: '#a1dea1',
        300: '#7cd07b',
        400: '#56c355',
        500: '#379936',
        600: '#2f842f',
        700: '#2f842f',
        800: '#225e21',
        900: '#143914',
        950: '#071307',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
