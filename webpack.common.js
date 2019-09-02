const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: "./src/js/main.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "app.js",
	},
	plugins: [
		new CopyWebpackPlugin([{ from: "**/*", to: "" }], {
			context: "src/static",
			writeToDisk: true,
		}),
	],
};
