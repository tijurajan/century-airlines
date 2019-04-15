const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: {
        polyfills: "./src/polyfills.ts",
        main: "./src/main.ts"
    },
    output: {
        path: path.resolve(__dirname, "../CenturyAirline"),
        filename: "Scripts/[name].min.js",
        publicPath: "/"
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.css$/,
            loader: ["style-loader", "css-loader"]
        },
            {
                test: /\.ts$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.ts$/,
                enforce: "pre",
                loader: 'tslint-loader'
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.scss$/,
                loader: ["raw-loader", "sass-loader?sourceMap"]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].min.css"
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    }
}