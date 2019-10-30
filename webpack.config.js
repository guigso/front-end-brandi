const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'js/app.js': './src/js/app.js',
    'css/style.css~': './src/css/main.scss'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name]'
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3001
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
              publicPath: '../',
              useRelativePaths: true
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader', options: { minimize: true } }]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./css/style.css'),
    new HTMLWebPackPlugin({ template: './src/index.html', filename: './index.html' })
  ]
};
