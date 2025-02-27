const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const DotenvWebpackPlugin = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

    const API_URL = isProductionMode
        ? process.env.API_URL_PROD 
        : process.env.API_URL; 

    const baseConfig = {
        entry: path.resolve(__dirname, './src/index'),
        mode: 'development',
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
                { test: /\.ts$/i, use: 'ts-loader' },
            ],
        },
        resolve: {
            extensions: ['.ts', '.js'],
        },
        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, './dist'),
        },
        plugins: [
            new DotenvWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, './src/index.html'),
                filename: 'index.html',
            }),
            new CleanWebpackPlugin(),

            new webpack.DefinePlugin({
                'process.env.API_URL': JSON.stringify(API_URL),
                'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
            }),
        ],
    };

    return merge(baseConfig, envConfig);
};
