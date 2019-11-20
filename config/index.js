module.exports = {
  build: {
    mode: 'production',
    assetsRoot: 'lib',
    assetsSubDirectory: '',
    productionSourceMap: true,
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report || process.argv.includes('--report'),
    devtool: '#source-map'
  },
  dev: {
    mode: 'development',
    port: 8000,
    autoOpenBrower: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: true,
    devtool: '#eval-source-map'
  }
}
