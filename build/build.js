const path = require('path')
const webpack = require('webpack')
const rm = require('rimraf')
const config = require('../config')
const compWebpackConfig = require('./webpack.config.component')
// set env production
process.env.NODE_ENV = 'production'

/**
 * if has -nt param, disable fetch translation.
 */
rm(`${path.join(config.build.assetsRoot, config.build.assetsSubDirectory)}`, err => {
  if (err) throw err
  webpack(compWebpackConfig, function(error, stats) {
    if (error) throw error
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log('\x1b[32m%s\x1b[0m', 'Build components complete.\n')
  })
})
