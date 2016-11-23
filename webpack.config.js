const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const sassLoaders = [
  'css?sourceMap',
  'postcss',
  'sass?sourceMap'
];

// @todo: figure out order of scss files when constructing main.css

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', sassLoaders.join('!'))
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.scss'],
        root: [path.join(__dirname, './src')]
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    postcss: [
        autoprefixer({
            browsers: [
                '> 1%',
                'last 5 versions'
            ]
        })
    ],
    // not supported by ExtractTextPlugin
    sassLoader: {
        includePaths: [
            path.resolve(__dirname, './src/scss'),
            path.resolve(__dirname, './node_modules/foundation-sites/scss')
        ]
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new ExtractTextPlugin('[name].css', {
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
