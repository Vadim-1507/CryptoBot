const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const worker_threads = require('worker_threads');

module.exports = {
    entry: {
        index: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
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
                    loader: 'file-loader',
                    options: {
                        name: 'assets/images/[name].[ext]',
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|)$/,
                type: 'asset/resource',

            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
            linkType: 'text/css',
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            scriptLoading: 'blocking',
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
    ],
}