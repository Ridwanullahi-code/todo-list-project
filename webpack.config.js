const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Boilerplate',
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html', // output file
    }),
    // only update what changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
  ],
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    open: true,
    liveReload: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  module: {
    // to import all stylesheet files in entry javascript
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};