var path = require('path');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var pkg = require('./package.json');

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.join(__dirname, '/lib'),
    publicPath: '/lib',
    filename: pkg.name + '.js',
    library: pkg.name.toUpperCase(),
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'stage-0', 'react', 'react-hmre']
      }
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
  debug: true,
  devtool: 'source-map',
  devServer: {
    contentBase: './demo'
  }
};
