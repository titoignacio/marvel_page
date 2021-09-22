const colors = require('tailwindcss/colors')

module.exports = {

  purge: [
      './public/**/*.html',
  ],
  darkMode: false,
  theme: {
      extend: {
        colors: {
            redd: "#ec1d24"
        },
      },
  },

  variants: {
      extend: {},
  },
  plugins: [],
}