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
        'other-gray': '#ACA9BB',
        'dark-teal': '#00C9C8',
        'logo-purple': '#5865F2',
        'off-purple': '#918CB7',
        'pal-white': '#FAF7FF',
        'pal-orange': '#FF6369',
        'pal-gray': '#474554',
        'nat-purp': '#D7D0FF',
        'pal-cream': '#FEFEDF',
        'pal-alt-purp': '#9A9AFF',
        'deep-brown':'#31221F',
        'bv-crayola': '#8367C7',
        'middle-bp': '#8A7ABF',
        'wb-yonder': '#9BA8C7',
        'opal': '#A7C9C7',
        'honeydew': '#F0FFF1',
        'mid-brown': '#B38955',
        'welcome-bg': '#474554'
      },
      fontFamily: {
        'home-name': 'Amsterdam',
        'sora-main': 'Sora',
        'raleway': 'Raleway'
      },
      height: {
        'to-fit': '90%'
      },
      width: {
        'to-fit': '90%',
        '100': '100%',
        'over9k': '150%'
      },
      spacing: {
        '17': '4.5rem',
        '30': '7.2rem',
        '21': '5.3rem',
        '22': '5.5rem',
        '31': '7.5rem'
      },
      screens: {
        'xs': {'min':'1px', 'max': '575px'},
        'tabs': {'min': '576px', 'max': '1300px'}
      },
      scale: {
        '300': '3'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
