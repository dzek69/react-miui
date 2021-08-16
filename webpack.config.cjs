const path = require("path");
const { CommonsChunkPlugin } = require("webpack");

console.info("WEBPACK CONFIG LOADED");

module.exports = {
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
        new CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity
        })
    ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
};
