const fs = require('fs')
const path = require('path')
const merge = require('webpack-merge')
const webpackProdConfig = require('./webpack.config.prod')
const { resolve, getComponentList } = require('./utils')
const packageName = require('../package.json').name
const config = require('../config')
const assetsRoot = config.build.assetsRoot

const components = getComponentList()

const componentEntries = {}
components.forEach(component => {
  componentEntries[component] = `./packages/${component}/index.ts`
})

const { entry, output, ...otherWebpackConfig } = webpackProdConfig

module.exports = merge(otherWebpackConfig, {
  entry: componentEntries,
  output: {
    path: resolve(assetsRoot),
    filename: '[name]/index.js',
    library: packageName,
    libraryTarget: 'commonjs2'
  },
  externals: [
    function(context, request, callback) {
      if (new RegExp('^one-ui/').test(request)) {
        const regular = new RegExp(`^one-ui/${assetsRoot}/(one-)?([a-z-]+)$`)
        return callback(null, 'commonjs' + request.replace(regular, `${packageName}/${assetsRoot}/$2`))
      }

      callback()
    }
  ]
})
