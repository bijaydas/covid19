const path = require('path');
const common = {
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(png|jpg|jpeg|svg)/,
                use: 'file-loader'
            }
        ]
    },
    resolve: {
        alias: {
            Utilities: path.resolve(__dirname, '../src/components/Utilities/'),
            ErrorBoundary: path.resolve(__dirname, '../src/components/ErrorBoundary/'),
            Comps: path.resolve(__dirname, '../src/components/'),
            Config: path.resolve(__dirname, '../config/')
        }
    }
}

module.exports = common;
