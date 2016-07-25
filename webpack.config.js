module.exports = {
  entry: './src/app.jsx',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: './dist',
    publicPath: '/',
    filename: 'jarvip.js'
  },
  devServer: {
    contentBase: './demo',
    hot: true
  }
};
