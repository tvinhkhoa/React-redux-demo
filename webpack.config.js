const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html"
});

module.exports = {
    output: {
        path: __dirname + '/dist',
        // path: __dirname + '/public/assets/',
        // publicPath: "/assets/",
        // filename: 'bundle.js',
        // chunkFilename: '[name].js'
    },
    resolve: {
        alias: {
            reducers: path.resolve(__dirname, 'src/js/reducers/'),
            actions: path.resolve(__dirname, 'src/actions/'),
            stores: path.resolve(__dirname, 'src/stores/')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader"
                }
            }
        ]
    },
    plugins: [
        htmlWebpackPlugin
    ]
};