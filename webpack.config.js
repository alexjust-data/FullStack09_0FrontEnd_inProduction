const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        home: './src/homePage.ts',
        teams: './src/teamsPage.ts',
        contact: './src/contactPage.ts',
        error: './src/errorPage.ts',
    },
    mode: 'development', 
    devtool: 'inline-source-map',
    output:{
        filename: '[name].[chunkhash]bundle.js',
        path: path.resolve( __dirname ,'dist' ),
        // path.resolve( __dirname, '...' , '...', 'dist' ) podrías subir de directorios
        clean: true
    },
    devServer: {
        hot: true,
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
                type: 'asset/resource',
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'], // Aquí fue corregido
            },
        ]
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            //template que buscará para compilar
            template: './src/templates/index.html',
            filename: 'index.html',
            chunks: ['home'], // añado esta linea para selecciono el bundels de output
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/teams.html',
            filename: 'teams.html',
            chunks: ['teams']
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/contact.html',
            filename: 'contact.html',
            chunks: ['contact']
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/404.html',
            filename: '404.html',
            chunks: ['error'],
        }),
    ]
}