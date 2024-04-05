module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#e5e7eb',
        dark: '#222831',
        darkBlack: 'rgb(22 22 27)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}