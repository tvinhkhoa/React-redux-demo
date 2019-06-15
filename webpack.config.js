const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html"
});

module.exports = {
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
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