const webpack = require('webpack');

const configuration = {
    entry: {
        'bundle.webpack': './src/index.js'
    },
    output: {
        filename: 'dist/bundle.webpack.js'
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
    configuration.output.filename = 'dist/bundle.webpack.min.js';
    configuration.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = configuration;
