
module.exports = {
    entry: {
        home: './src/homePage.js',
        teams: './src/teamsPage.js',
        contact: './src/contactPage.js',
    },
    mode: 'development', 
    devtool: 'inline-source-map',
    output:{
        filename: '[name].bundle.js',
        path: __dirname + '/dist', 
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
}