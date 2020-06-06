const path = require('path');
const Dotenv = require('dotenv-webpack');
const common = {
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(png|jpg|jpeg|svg)/,
                use: 'file-loader',
            },
        ],
    },
    resolve: {
        alias: {
            ErrorBoundary: path.resolve(
                __dirname,
                '../src/components/ErrorBoundary/',
            ),
            Comps: path.resolve(__dirname, '../src/components/'),
            Config: path.resolve(__dirname, '../config/'),
            Utilities: path.resolve(__dirname, '../src/utilities/'),
        },
    },
    plugins: [
        new Dotenv(),
    ],
};

module.exports = common;
