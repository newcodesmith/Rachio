const path = require("path");
const webpack = require("webpack");

module.exports = () => {

  return {
    entry: "./src/client/index.js",
    mode: "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: ['babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0']
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {}
            }
          ]
        }

      ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
      path: path.resolve(__dirname, "dist/"),
      publicPath: "/dist/",
      filename: "bundle.js"
    },
    devServer: {
      contentBase: path.join(__dirname, "public/"),
      port: 3000,
      publicPath: "http://localhost:3000/dist/",
      hotOnly: true,
      historyApiFallback: true,
    },
    node: {
      fs: 'empty'
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
  };
}
