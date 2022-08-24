/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  mode: 'jit',
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      colors: {
        'dark-pink': '#FFE3F1',
        'dark-gray': '#303030',
        'dark-teal': '#00C9C8'
      },
      fontFamily: {
        'home-name': 'Amsterdam',
        'header-main': 'Crimson Pro',
      },
      height: {
        'to-fit': '100%'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
