const { merge } = require('webpack-merge'); 
const defaultConfig = require('./webpack.common');

module.exports = merge(defaultConfig, {
    mode: 'production', 
    devtool: 'source-map', 
    output:{
        clean: true,
    },
});