const webpack = require('webpack')
const merge = require('webpack-merge')
const TenserPlugin = require('terser-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const webpackBaseConfig = require('./webpack.config.base')
const { resolve } = require('./utils')
const packageName = require('../package.json').name
const config = require('../config')
const assetsRoot = config.build.assetsRoot

const webpackConfig = merge(webpackBaseConfig, {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: resolve(assetsRoot),
    filename: '[name].js',
    library: packageName,
    libraryTarget: 'umd'
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  externals: [
    {
      vue: {
        root: 'Vue',
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue'
      }
    }
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TenserPlugin({
        cache: true,
        parallel: true,
        sourceMap: config.build.productionSourceMap
      })
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ]
})

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
