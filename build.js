const webpack = require ('webpack');
const webpackConfigSimple = require('./simple/webpack.config');

webpack([
    webpackConfigSimple
], (err, multiStats) => {
    const { startTime, endTime } = multiStats.stats[0];
    console.log('webpack build time [ms]: ' + (endTime - startTime));
});
