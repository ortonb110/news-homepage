/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Inter: ['Inter']
    },
    colors: {
      'primarySoftOrange': 'hsl(35, 77%, 62%)',
      'primarySoftRed': 'hsl(5, 85%, 63%)',
      'offWhite': 'hsl(36, 100%, 99%)',
      'grayishBlue': 'hsl(233, 8%, 79%)',
      'darkGrayishBlue': 'hsl(236, 13%, 42%)',
      'veryDarkBlue': 'hsl(240, 100%, 5%)',
    },
  },
  plugins: [],
}