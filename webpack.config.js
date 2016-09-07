var path = require('path');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var pkg = require('./package.json');

module.exports = {
  entry: './src/app.jsx',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!postcss-loader!sass-loader'
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    }]
  },
  postcss: function () {
    return [precss, autoprefixer];
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, '/lib'),
    publicPath: '/lib',
    filename: pkg.name + '.js',
    library: pkg.name.toUpperCase(),
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  debug: true,
  devtool: 'source-map',
  devServer: {
    contentBase: './demo',
    hot: true
  }
};
