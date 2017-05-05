import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

export default {
    entry: 'src/index.js',
    dest: 'dist/bundle.rollup.js',
    format: 'iife',
    moduleName: 'Simple',
    plugins: [ babel(babelrc({ path: '../.babelrc' })) ]
};
