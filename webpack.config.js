const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    index: './src/index.tsx',
    shared: ['react', 'react-dom', 'react-relay', 'relay-runtime']
  },
  output: {
    filename: './[name].[fullhash:8].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.tsx', '.js', '.ts']
  },
  optimization: {
    minimize: isProd,
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        }
      }
    },
    runtimeChunk: 'single',
    minimizer: [
      new TerserPlugin({
        parallel: true,
        // minify: (file) => {
        //   return require('uglify-js').minify(file, [])
        // }
    }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
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
  plugins: [
    new HtmlWebpackPlugin({template: "./public/index.html" }),
    new MiniCssExtractPlugin(),
    new Dotenv(),

  ],
  devServer: {
    port: 3030,
    historyApiFallback: true,
  }
}