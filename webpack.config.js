const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    index: './src/index.tsx',
    shared: ['react', 'react-dom', 'react-relay', 'relay-runtime'],
  },
  output: {
    filename: './[name].[fullhash:8].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.tsx', '.js', '.ts'],
  },
  optimization: {
    minimize: isProd,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
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
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new MiniCssExtractPlugin(),
    // Dotenv 플러그인 설정 개선
    new Dotenv({
      systemvars: true, // 시스템 환경변수 사용 (Vercel 환경변수 포함)
      safe: false, // .env.example 파일 체크 비활성화
      silent: false, // 에러 출력 활성화
    }),
    // 환경변수 명시적 정의 (백업용)
    new webpack.DefinePlugin({
      'process.env.REACT_APP_GITHUB_ACCESS_TOKEN': JSON.stringify(process.env.REACT_APP_GITHUB_ACCESS_TOKEN),
    }),
  ],
  devServer: {
    port: 3030,
    historyApiFallback: true,
  },
};
