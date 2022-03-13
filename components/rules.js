const ESLintPlugin = require('eslint-webpack-plugin');

const rules = [
  { test: /.(js)$/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env', '@babel/preset-react'] } } },
  {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: ['ts-loader'],
  },
]

const resolve = { extensions: ['.tsx', '.ts', '.js'], };

const plugins = [
  new ESLintPlugin({
    extensions: ["js", "jsx", "ts", "tsx"],
  }),
];

module.exports = {
  reactRules: rules,
  reactResolve: resolve,
  reactPlugins: plugins
};