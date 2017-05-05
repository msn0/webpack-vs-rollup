import babelrc from 'babelrc-rollup';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

const configuration = {
    entry: 'src/index.js',
    dest: 'dist/bundle.rollup.js',
    format: 'iife',
    moduleName: 'Simple',
    plugins: [
        babel(babelrc({ path: '../.babelrc' }))
    ]
};

if (process.env.BUILD === 'production') {
    configuration.dest = 'dist/bundle.rollup.min.js';
    configuration.plugins.push(uglify());
}

export default configuration;
