
module.exports = {
    entry: {
        index: './src/index.js',
        app: './src/app.js',
    },
    mode: 'development', 
    devtool: 'inline-source-map',
    output:{
        filename: '[name].bundle.js',
        path: __dirname + '/dist', 
        clean: true
    }
}