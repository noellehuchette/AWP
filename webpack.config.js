module.exports = {
    entry: [
        './app/main.js'
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    mode: 'development',
    context: __dirname,
    devtool: 'source-map',
    devServer: {
        allowHosts: 'all'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-react',
                ]
            }
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
            ]
        }]
    }
};