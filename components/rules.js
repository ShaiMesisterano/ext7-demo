const rules = [
  { test: /.(js)$/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env', '@babel/preset-react'] } } },
  {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: ['ts-loader'],
  },
]

const resolve = { extensions: ['.tsx', '.ts', '.js'], }

module.exports = {
  reactRules: rules,
  reactResolve: resolve
};