'use strict';
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SizePlugin = require('size-plugin');

module.exports = {
    stats: 'errors-only',
    entry: {
        content: './src/content',
        background: './src/background',
        options: './src/options'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    devtool: 'eval-cheap-module-source-map',
    plugins: [
        new SizePlugin(),
        new CopyWebpackPlugin([
            {
                from: '*',
                context: 'src',
                globOptions: {
                    ignore: '*.js'
                }
            },
            {
                from: '*',
                context: 'media'
            },
            {
                from: 'style/*',
                context: 'src'
            },
            {
                from: 'node_modules/webextension-polyfill/dist/browser-polyfill.min.js'
            },
            {
                from: 'node_modules/jquery/dist/jquery.slim.min.js'
            }
        ])
    ]
};
