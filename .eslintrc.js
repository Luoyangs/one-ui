const config = require('./config')

module.exports = {
  root: true,
  env: {
    node: true
  },
  rules: {
    'semi': 0,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    'no-console': process.env.NODE_ENV === config.build.mode ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === config.build.mode ? 'error' : 'off'
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        'semi': [2, 'never']
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended'
  ]
};
