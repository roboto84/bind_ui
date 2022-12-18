const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const DEFAULT_API_PORT = '8000';
const DEFAULT_API_URL = '';
const DEFAULT_API_SSL = 'true';

module.exports = (env) => ({
  entry: './src',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.png', '.jpg'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(tsx?)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.(mp3)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/assets/favicon/favicon-16x16.png',
    }),
    new CompressionPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'src/robots.txt', to: 'robots.txt' },
      ],
    }),
    new webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify(`${env && env.API_URL ? `${env.API_URL}` : DEFAULT_API_URL}`),
      'process.env.API_PORT': JSON.stringify(`${env && env.API_PORT ? `${env.API_PORT}` : DEFAULT_API_PORT}`),
      'process.env.API_SSL': JSON.stringify(`${env && env.API_SSL ? `${env.API_SSL}` : DEFAULT_API_SSL}`),
    }),
  ],
});
