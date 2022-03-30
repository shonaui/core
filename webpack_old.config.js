const path = require("path");

module.exports = {
    entry: "./src/index.ts",
    //   devtool: "inline-source-map",
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
        root: path.resolve("./src"),
        extensions: [".ts", ".js"],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        clean: true,
        filename: "shonaui.min.js",
        library: {
            name: "shonaui",
            type: "umd",
        },
        globalObject: "this",
    },
};
