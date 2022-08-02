const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

const COMMON_CONFIG = require('./webpack.common.config.js');

const PROD_CONFIG = {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
};

module.exports = (env) => merge([COMMON_CONFIG(env), PROD_CONFIG]);
