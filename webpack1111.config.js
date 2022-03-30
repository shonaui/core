const TerserPlugin = require("terser-webpack-plugin");
var webpack = require("webpack"),
    path = require("path"),
    yargs = require("yargs");
var libraryName = "shonaui",
    plugins = [];
var entry = {};
entry[libraryName] = __dirname + "/src/index.ts";
entry[libraryName + ".min"] = __dirname + "/src/index.ts";

plugins.push(new DtsBundlePlugin());
// plugins.push(
//     new webpack.optimize.UglifyJsPlugin({
//         include: /\.min\.js$/,
//         minimize: true,
//     }),
// );
var config = {
    // entry: entry,
    entry: "./src/index.ts",
    mode: "production",
    output: {
        path: path.resolve(__dirname, "dist"),
        clean: true,
        filename: "[name].js",
        library: libraryName,
        libraryTarget: "umd",
        umdNamedDefine: true,
    },
    // module: {
    //     preLoaders: [{ test: /\.tsx?$/, loader: "tslint", exclude: /node_modules/ }],
    //     loaders: [{ test: /\.tsx?$/, loader: "ts", exclude: /node_modules/ }],
    // },
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
        modules: [__dirname, "node_modules"],
        alias: {
            Classnames: path.resolve(__dirname, "./src/"),
        },
        extensions: [".ts", ".js"],
    },
    plugins: plugins,
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    // Individual Plugin Options
    // tslint: {
    //     emitErrors: true,
    //     failOnHint: true,
    // },
};
module.exports = config;
function DtsBundlePlugin() {}
DtsBundlePlugin.prototype.apply = function (compiler) {
    compiler.plugin("done", function () {
        var dts = require("dts-bundle");
        dts.bundle({
            name: libraryName,
            main: "src/index.d.ts",
            out: "../index.d.ts",
            removeSource: true,
            outputAsModuleFolder: true, // to use npm in-package typings
        });
    });
};
