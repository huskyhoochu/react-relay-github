const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: './bundled.[fullhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          'postcss-loader',
        ]
      },
      {
        test: /\.html$/i,
        loader: "html-loader"
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({template: "./public/index.html" }), new MiniCssExtractPlugin(), new Dotenv()],
  devServer: {
    port: 3030
  }
}