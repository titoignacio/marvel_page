const colors = require('tailwindcss/colors')

module.exports = {

  purge: [
      './public/**/*.html',
  ],
  darkMode: false,
  theme: {
      extend: {

        backgroundImage: theme => ({
          'wave-pattern': 'url(../img/wave-white.png)'

        }),
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