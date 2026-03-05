module.exports = {
  purge: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
    './blog/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFA',
        secondary: '#F5F4E9',
        accent: '#c4784a',
      },
      fontSize: {
        '7xl': '5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
