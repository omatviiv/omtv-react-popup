const path = require('path');
const pkg = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FlowWebpackPlugin = require('flow-webpack-plugin');

module.exports = {
  entry: './demo/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'demo/dist'),
  },
  resolve: {
    alias: {
      demo: path.resolve(__dirname, 'demo/'),
      componnt: path.resolve(__dirname, 'component/'),
    },
  },
  stats: 'errors-warnings',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'demo'),
          path.resolve(__dirname, 'component'),
          path.resolve(__dirname, 'node_modules/omtv-theme'),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-flow',
            ],
          },
        },
      },
      {
        test: /\.css/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: `${ pkg.name } demo`,
      template: path.resolve(__dirname, 'demo/index.html'),
    }),
    new CleanWebpackPlugin(),
    new FlowWebpackPlugin(),
  ],
  devServer: {
    contentBase: './demo/dist',
    port: 9001,
  },
};
