const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: './src/index.tsx'
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: `${__dirname}/dist`
  },
  module: {
    rules: [
      {
        test: /\.ts[x]?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      }, {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { url: false }
          },
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  target: ['web', 'es6'],
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/app.css'
    })
  ],
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  devServer: {
    static: {
        directory: `${__dirname}/public`
    },
    compress: true,
    port: 8080,
    open: true
    // open: true,
    // contentBase: `${__dirname}/public`
  }
};