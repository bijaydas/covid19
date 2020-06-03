const path = require('path');
const WebpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlPlugin = new HtmlWebpackPlugin({
    title: '^React',
    template: path.resolve(__dirname, '../public/template.html'),
    favicon: path.resolve(__dirname, '../public/favicon.ico')
});

const commonWebpackConfig = require('./common.webpack');

const development = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [HtmlPlugin]
};

module.exports = WebpackMerge(commonWebpackConfig, development);
