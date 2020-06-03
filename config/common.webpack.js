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
    }
}

module.exports = common;
