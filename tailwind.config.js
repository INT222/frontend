module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
        tb: '768px',
        // => @media (min-width: 640px) { ... }
  
        md: '1280px',
        // => @media (min-width: 768px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
