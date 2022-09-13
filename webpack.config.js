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
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        }),
    ],
    target: 'web',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        publicPath: '/',
        open: true,
        watchContentBase: true,
        port: 8080,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
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
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
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
                test: /\.(jpg|jpeg|png|gif|woff|woff2|eot|ttf|otf)$/,
                type: 'asset'
            }
        ]
    }
};
