const { merge } = require('webpack-merge'); // devuelve un objeto y yo solo quiero la propiedad merge
const defaultConfig = require('./webpack.common');

// aquí vemos que dev devuelve objeto nuevo con la suma de "defaultConfig" + lo otro
module.exports = merge(defaultConfig, {
    mode: 'development', 
    devtool: 'inline-source-map', 
    output:{
        clean: false, // en common sobre escribirá a false
    }
});