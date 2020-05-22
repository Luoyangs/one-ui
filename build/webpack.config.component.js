const fs = require('fs')
const path = require('path')
const merge = require('webpack-merge')
const webpackProdConfig = require('./webpack.config.prod')
const { resolve } = require('./utils')
const packageName = require('../package.json').name
const config = require('../config')
const assetsRoot = config.build.assetsRoot

const packagePath = path.join(__dirname, '../packages')
const components = fs.readdirSync(packagePath, 'utf-8')
  .filter(name => !!name && !name.endsWith('.ts'))

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
    libraryTarget: 'umd'
  },
  externals: [
    function(context, request, callback) {
      console.log('ex', context, request, callback)
      if (new RegExp('^one-ui/').test(request)) {
        const regular = new RegExp(`^one-ui/${assetsRoot}/(one-)?([a-z-]+)$`)
        return callback(null, 'commonjs' + request.replace(regular, `${packageName}/${assetsRoot}/$2`))
      }

      callback()
    }
  ]
})