module.exports = {
  entry: __dirname + '/dist/shadow.js',
  devtool: 'source-map',
  cache: true,
  debug: true,
  output: {
    path: __dirname + '/dist',
    filename: 'shadow.browser.js',
    library: 'Shadow',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules(?!\/sonicjs)|bower_components)/,
        loader: 'babel'
      }
    ]
  }
};
