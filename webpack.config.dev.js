const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',

    compress: true,
    port: 3010, // default 8000
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
      __DEV__: true,
    }),
  ],
});
