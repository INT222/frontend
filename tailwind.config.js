module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      tb: "768px",
      md: "1280px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
