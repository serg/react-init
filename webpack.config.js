var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');

var config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-react',
            ['@babel/preset-env', {
              'targets': {
                'browsers': ['last 2 versions', '> 1%']
              },
              'modules': false
            }]
          ]
        }
      }
    }, {
      test: /\.(scss|sass)$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
    }, {
      test: /\.html$/,
      use: ['html-loader']
    }, {
      test: /\.(jpg|png|svg|gif|webp|jpeg|ico)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'img/'
        }
      }]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};

module.exports = (env, argv) => {
  var isProduction = argv.mode === 'production';

  if (isProduction) {
    config.plugins.push(new CleanWebpackPlugin());
  }

  return config;
};