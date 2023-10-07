const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');

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
                type: 'asset/resource',
                use: {
                    options: {
                        name: './assets/images/[name].[ext]',
                    },
                },
            },
            {
                test: /\.css$/,
                use: [miniCss.loader, 'css-loader'],
            },
            // {
            //     test: /\.(woff(2)?|eot|ttf|otf|)$/,
            //     type: 'asset/resource',
            //     use: {
            //         options: {
            //             name: './assets/fonts/[name].[ext]',
            //         },
            //     },
            // },
        ],
    },
    plugins: [
        new miniCss({
            filename: 'style.css',
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            scriptLoading: 'blocking',
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
    ],
}