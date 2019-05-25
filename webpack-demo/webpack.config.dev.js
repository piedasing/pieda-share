var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js', // 進入點
  output: {
    path: __dirname + '/dist', // 輸出的資料夾位置
    filename: '[name].[hash:8].js' // 輸出的檔名
  },
  plugins: [
    new HtmlWebpackPlugin({ // 用來產生 html頁面
      template: './src/main.pug'
    }),
    new webpack.NamedModulesPlugin(), // hot reload module
    new webpack.HotModuleReplacementPlugin() // hot reload module
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['pug-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};
