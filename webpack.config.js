import path from 'path'
import precss from 'precss'
import autoprefixer from 'autoprefixer'
import FlowtypePlugin from 'flowtype-loader/plugin'
import pkg from './package.json'

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/dist',
    filename: `${pkg.name}.js`,
    library: pkg.name.toUpperCase(),
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    preLoaders: [
      { test: /\.jsx?$/, loader: 'flowtype', exclude: /node_modules/ }
    ],
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!postcss-loader!sass-loader'
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    }]
  },
  plugins: [
    new FlowtypePlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  postcss: () => [precss, autoprefixer],
  debug: true,
  devtool: 'source-map',
  devServer: {
    contentBase: './demo'
  }
}
