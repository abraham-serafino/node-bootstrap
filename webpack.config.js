var webpack = require('webpack');

module.exports = {
  entry: './build/client/app.js',

  output: {
    path: './build/client',
    filename: 'app.min.js',
  },

  plugins: [ new webpack.NoErrorsPlugin() ],
  devtool: 'source-map'
};
