var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js', // 進入點
  output: {
    path: __dirname + '/dist', // 輸出的資料夾位置
    filename: '[name].[hash:8].js' // 輸出的檔名
  },
  plugins: [
    new CleanWebpackPlugin(), // build的時候先清理 dist資料夾
    new HtmlWebpackPlugin({ // 用來產生 html頁面
      template: './src/main.pug'
    }),
    new ExtractTextPlugin('style.css'), // 將 bundle.js 的 css 拆出來
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['pug-loader']
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            //resolve-url-loader may be chained before sass-loader if necessary
            use: ['css-loader', 'sass-loader']
        })
      }
    ]
  }
};
