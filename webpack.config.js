const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: { index: path.resolve(__dirname, "src", "index.js") },
    output: {
        path: path.resolve(__dirname, "build"),
        clean: true,
        filename: 'bundle.js'
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        }),
    ],
    devServer: {
        historyApiFallback: true,
        proxy: {
            '/api/**': {
                target: process.env.BACKEND_URL,
                secure: false,
                changeOrigin: true,
            }
        },
    },
    module: {
        rules: [
            {
                use: ["babel-loader"],
                test: /\.(js|jsx)$/,
                include: [
                    path.resolve(__dirname, "src")
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/i,
                use: ["style-loader", "css-loader", "less-loader"],
            },
            {
                test: /\.(jpg|jpeg|png|gif|woff|woff2|eot|ttf|otf|svg)$/,
                type: 'asset'
            },
        ]
    }
};
