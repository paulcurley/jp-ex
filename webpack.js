const path = require('path');
const webpack = require('webpack');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html'
});

module.exports = {
    entry: { app: './src/index.js' },
    mode: 'development',
    devtool: 'eval',
    watch: true,
    devServer: {
        hot: true,
        //inline: true,
        open: true,
        //watchContentBase: true,
        contentBase: './dist/'
    },
    watchOptions: {
        poll: 1000 // Check for changes every second
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        htmlPlugin,
        new webpack.HotModuleReplacementPlugin(),
        new LiveReloadPlugin()
    ]
};
