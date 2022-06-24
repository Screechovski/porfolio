module.exports = {
    entry: './src/index.js',
    rules: [
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                presets: ['@babel/preset-env']
                }
            }
        }
    ],
    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
    },
};