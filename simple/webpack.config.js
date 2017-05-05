const webpack = require('webpack');
const path = require('path');

const configuration = {
    entry: {
        'bundle.webpack': path.resolve(__dirname, 'src') + '/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.webpack.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader'
            }]
        }]
    },
    plugins: []
};

if (process.env.BUILD === 'production') {
    configuration.output.filename = 'bundle.webpack.min.js';
    configuration.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = configuration;
