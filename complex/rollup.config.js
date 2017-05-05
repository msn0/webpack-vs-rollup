import babelrc from 'babelrc-rollup';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import path from 'path';

const configuration = {
    entry: path.resolve(__dirname, 'src') + '/index.js',
    dest: path.resolve(__dirname, 'dist') + '/bundle.rollup.js',
    format: 'iife',
    moduleName: 'Complex',
    plugins: [
        babel(babelrc({ path: path.resolve(__dirname, '../') + '/.babelrc' }))
    ]
};

if (process.env.BUILD === 'production') {
    configuration.dest = path.resolve(__dirname, 'dist') + '/bundle.rollup.min.js';
    configuration.plugins.push(uglify());
}

export default configuration;
