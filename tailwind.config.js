const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ["'Urbanist'", ...defaultTheme.fontFamily.sans],
      },
      gridTemplateRows: {
        // Simple 8 row grid
       '8': 'repeat(8, minmax(0, 1fr))',

        // Complex site-specific row configuration
       'layout': '200px minmax(900px, 1fr) 100px',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
