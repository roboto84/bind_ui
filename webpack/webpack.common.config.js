const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const DEFAULT_API_PORT = '8000';
const DEFAULT_API_URL = '';
const DEFAULT_API_SSL = 'true';
const DEFAULT_APP_DESCRIPTION = 'A platform which provides a flexible interface for data that' +
  ' supports curiosity and learning.';

module.exports = (env) => ({
  entry: './src',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.png', '.jpg', '.webp'],
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
        test: /\.(jpg|png|webp)$/,
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
      favicon: './src/assets/favicon/favicon-32x32.png',
      meta: {
        description: {
          name: 'description',
          content: DEFAULT_APP_DESCRIPTION,
        },
        keyword: {
          name: 'keywords',
          content: 'data,curator,bind',
        },
        'og:title': {
          property: 'og:title',
          content: 'Bind',
        },
        'og:description': {
          property: 'og:description',
          content: DEFAULT_APP_DESCRIPTION,
        },
        'og:type': {
          property: 'og:type',
          content: 'website',
        },
        'og:image': {
          property: 'og:image',
          content: './og_image.webp',
        },
      },
    }),
    new CompressionPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'src/robots.txt', to: 'robots.txt' },
        { from: 'src/assets/images/og_image.webp', to: 'og_image.webp' },
      ],
    }),
    new webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify(`${env && env.API_URL ? `${env.API_URL}` : DEFAULT_API_URL}`),
      'process.env.API_PORT': JSON.stringify(`${env && env.API_PORT ? `${env.API_PORT}` : DEFAULT_API_PORT}`),
      'process.env.API_SSL': JSON.stringify(`${env && env.API_SSL ? `${env.API_SSL}` : DEFAULT_API_SSL}`),
    }),
  ],
});
