const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const config = require('../config')
const { resolve } = require('./utils')
const webpackBaseConfig = require('./webpack.config.base')
// const cssLoaderConfig = require('./config/css-loader-config')

module.exports = merge(webpackBaseConfig, {
  mode: config.dev.mode,
  entry: [
    './examples/main.ts',
    './build/dev-client'
  ],
  output: {
    path: path.join(__dirname, `../${config.dev.assetsSubDirectory}`),
    publicPath: `/${config.dev.assetsSubDirectory}`,
    filename: 'app.js'
  },
  devtool: config.dev.devtool,
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'css-loader'
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          },
          {
            loader: path.resolve(__dirname, './md-loader/index.js')
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: resolve('examples/index.html')
    }),
    new FriendlyErrorsWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
})
