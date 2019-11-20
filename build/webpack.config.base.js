const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const { assetsPath, resolve } = require('./utils')
const config = require('../config')
const packageName = require('../package.json').name
const isProduct = process.env.NODE_ENV === config.build.mode

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: [
          isProduct ? MiniCssExtractPlugin.loader : 'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: config.dev.cssSourceMap
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: config.dev.cssSourceMap,
              config: {
                path: resolve('postcss.config.js')
              }
            }
          }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('packages'), resolve('examples'), resolve('test')]
      },
      {
        test: /\.tsx?$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              appendTsxSuffixTo: [/\.vue$/]
            }
          }
        ],
        include: [resolve('src'), resolve('packages'), resolve('test'), resolve('examples')],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1024,
          /**
            * Devlopment
            * For css and js
            *
            * Production
            * Only for css file. js file's images url will be prelaced by webpack externals
            */
          name: assetsPath('images/[name].[ext]'),
          publicPath: isProduct ? `${packageName}/${config.build.assetsRoot}` : ''
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json', '.vue'],
    alias: {
      vue: 'vue/dist/vue.common.js',
      [packageName]: resolve('packages'),
      '@public': resolve('public'),
      '@src': resolve('src'),
      '@config': resolve('config')
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new ForkTsCheckerWebpackPlugin({
      vue: true,
      tslint: true
    })
  ]
}
