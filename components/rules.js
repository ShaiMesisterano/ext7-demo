const rules = [
    {test: /.(js)$/, use: {loader: 'babel-loader', options: {presets: ['@babel/preset-env', '@babel/preset-react']}}}
  ]

module.exports = rules;