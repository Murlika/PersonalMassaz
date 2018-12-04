'use strict'
const path = require('path')

var webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
//global.$ = require('jquery')
//global.jQuery = require('jquery')
//window.jQuery = require('jquery')

module.exports = {
    entry: './app.js',
    resolve: {

    },
    output: {
        path: path.join(__dirname, '/')+"dist",
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?url=false'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff"},
            {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"}
        ]
    },
    resolve: {
        alias: {
            vue: './node_modules/vue/dist/vue.js',
            modulesDirectories: './node_modules'

        }
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.LoaderOptionsPlugin({
            // test: /\.xxx$/, // may apply this only for some modules
            options: {
                styles: {
                    'mixins': true,
                    'bordered-pulled': true,
                    'core': true,
                    'fixed-width': true,
                    'icons': true,
                    'larger': true,
                    'list': true,
                    'path': true,
                    'rotated-flipped': true,
                    'animated': true,
                    'stacked': true
                }
            }
        })

    ]

}
