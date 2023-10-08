const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    entry: {
        index: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
    },
    devServer: {
        port: 3500,
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
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: {
                                filter: (url) => {
                                    const imageRgx = new RegExp('(?:^images|.*\/images)\/[\\w_-]+\.(?:png|svg|jpe?g)$');
                                    return !imageRgx.test(url);
                                },
                            }
                        }
                    },
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