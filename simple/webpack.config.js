module.exports = {
    entry: {
        'bundle.webpack': './src/index.js'
    },
    output: {
        filename: 'dist/[name].js'
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
