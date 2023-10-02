const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


if (webpack.mode === 'development') {

}
module.exports = {
    entry: {
        index: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(svg|png|jpe?g|)$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        name: './assets/img/[name].[ext]',
                    },
                },
            },
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'CryptoBot',
            inject: 'body',
            scriptLoading: 'blocking',
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
    ],
}