const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/js/index.js'
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Main html',
      template: "./src/index.html",
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      title: 'about html',
      template: "./src/views/edit.html",
      filename: "views/edit.html"
    }),
    new HtmlWebpackPlugin({
      title: 'about html',
      template: "./src/views/main.html",
      filename: "views/main.html"
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
};
