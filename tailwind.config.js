module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
				blackBlue: "#20232A",
				deepBlue: "#3EB7D2",
				grayBlue: "#292D37",
				lightGray: "#323742",
				midGray: "#2D3037",
        deepBrownGray:"#484848"
			},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
