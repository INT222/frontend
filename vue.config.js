const Dotenv = require("dotenv-webpack");

module.exports = {
	transpileDependencies: ["wave-ui"], // ! \\
	css: {
		loaderOptions: {
			// `additionalData` was called `prependData` prior sass-loader 9.
			sass: { additionalData: '@import "@/scss/_variables.scss";' },
		},
	},

	configureWebpack: {
		plugins: [new Dotenv()],
	},
};
