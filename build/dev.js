const path = require('path')
const express = require('express')
const opn = require('opn')
const webpack = require('webpack')
const httpProxyMiddleware = require('http-proxy-middleware')
const webpackDevConfig = require('./webpack.config.dev')
const config = require('../config')

const port = process.env.PORT || config.dev.port
const autoOpenBrower = !!config.dev.autoOpenBrower
const proxyTable = config.dev.proxyTable

const app = express()
const compiler = webpack(webpackDevConfig)

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackDevConfig.output.publicPath,
  quiet: true
})

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})

compiler.hooks.compilation.tap('HtmlWebpackPlugin', function(compilation) {
  compilation.hooks.htmlWebpackPluginAfterEmit.tapAsync('HtmlWebpackPlugin', function (data, cb) {
    hotMiddleware.publish({
      action: 'reload'
    })
    cb()
  })
})

Object.keys(proxyTable).forEach(function (context) {
  let options = proxyTable[context]

  if (typeof options === 'string') {
    options = {
      target: options
    }
  }

  app.use(httpProxyMiddleware(options.filter || context, options))
})

app.use(require('connect-history-api-fallback')({
  index: '/static/index.html'
}))
app.use(devMiddleware)
app.use(hotMiddleware)

const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

app.get('/static/*', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../static/' + req.path))
})

const uri = 'http://localhost:' + port
let _resolve
const readyPromise = new Promise(function(resolve) {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(function() {
  console.log('> Listening at: ' + uri + '\n')

  if (autoOpenBrower && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }

  _resolve()
})

const server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: function() {
    server.close()
  }
}
