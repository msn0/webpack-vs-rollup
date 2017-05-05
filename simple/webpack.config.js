module.exports = {
    entry: {
        'bundle.webpack': './index.js'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader'
            }]
        }]
    }
};
