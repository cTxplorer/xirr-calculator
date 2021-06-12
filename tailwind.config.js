module.exports = {
  purge: {
    enabled: true,
    content: [
      './pages/**',
      './components/**',
      './components/**/**'
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
