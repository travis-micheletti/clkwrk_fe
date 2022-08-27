/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  mode: 'jit',
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#001185',
        'pal-gray': '#ACA9BB',
        'dark-teal': '#00C9C8',
        'logo-purple': '#5865F2',
        'off-purple': '#918CB7',
        'pal-white': '#FAF7FF',
        'pal-orange': '#FF6369',
        'pal-gray': '#474554'
      },
      fontFamily: {
        'home-name': 'Amsterdam',
        'sora-main': 'Sora',
      },
      height: {
        'to-fit': '90%'
      },
      width: {
        'to-fit': '90%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
