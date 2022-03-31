const path = require("path");
const NpmDtsPlugin = require("npm-dts-webpack-plugin");

module.exports = {
    entry: "./src/index.ts",
    devtool: "inline-source-map",
    mode: "production",
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        // root: path.resolve("./src"),
        alias: {
            shonaui: path.resolve(__dirname, "./src/"),
        },
        extensions: [".ts", ".js"],
    },
    plugins: [
        new NpmDtsPlugin({
            output: "./dist/shonaui.d.ts",
        }),
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        clean: true,
        filename: "shonaui.js",
        library: {
            name: "shonaui",
            type: "umd",
        },
        globalObject: "this",
    },
};
