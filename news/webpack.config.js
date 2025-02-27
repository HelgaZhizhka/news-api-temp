const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const DotEnv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod';

    const envFile = isProductionMode ? '.env.production' : '.env.development';

    console.log(`Webpack mode: ${mode}`);
    console.log(`Using env file: ${envFile}`);

    const baseConfig = {
        entry: path.resolve(__dirname, './src/index.ts'),
        mode: isProductionMode ? 'production' : 'development',
        module: {
            rules: [
                { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
                { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
                { test: /\.svg$/, loader: 'svg-inline-loader' },
            ],
        },
        resolve: { extensions: ['.ts', '.js'] },
        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, './dist'),
        },
        plugins: [
            new DotEnv({ path: path.resolve(__dirname, envFile) }),

            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, './src/index.html'),
                filename: 'index.html',
            }),
            new CleanWebpackPlugin(),
        ],
    };

    return merge(baseConfig, isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config'));
};
