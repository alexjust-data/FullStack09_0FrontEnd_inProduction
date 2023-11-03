const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        home: './src/homePage.ts',
        teams: './src/teamsPage.ts',
        contact: './src/contactPage.ts',
    },
    mode: 'development', 
    devtool: 'inline-source-map',
    output:{
        filename: '[name].[chunkhash]bundle.js',
        path: path.resolve( __dirname ,'dist' ),
        // path.resolve( __dirname, '...' , '...', 'dist' ) podrías subir de directorios
        clean: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|gif|webp|ico)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            //template que buscará para compilar
            template: './src/templates/index.html',
            filename: 'index.html',
            chunks: ['home'], 
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/teams.html',
            filename: 'teams.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/contact.html',
            filename: 'contact.html'
        }),
    ]
}