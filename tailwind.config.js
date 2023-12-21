/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#faf5f7',
          '100': '#f7ecf0',
          '200': '#f0dae3',
          '300': '#e5bcca',
          '400': '#d492a8',
          '500': '#c47088',
          '600': '#ae5168',
          '700': '#954153',
          '800': '#7c3846',
          '900': '#69323d',
          '950': '#3e1921',
          'bg': '#201A1B',
        },
      }
    },
  },
  plugins: [],
}