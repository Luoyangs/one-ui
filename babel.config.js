module.exports = {
  plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-function-sent',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-throw-expressions',
    '@babel/plugin-syntax-import-meta',
    '@babel/plugin-syntax-dynamic-import',
  ],
  env: {
    development: {
      presets: [
        [
          '@vue/app'
        ]
      ],
    },
  }
}
