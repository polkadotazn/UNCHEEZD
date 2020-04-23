var path = require("path");
var webpack = require("webpack");

var plugins = []; // if using any plugins for both dev and production
var devPlugins = []; // if using any plugins for development

var UglifyJsPlugin = require("uglifyjs-3-webpack-plugin");

var prodPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new UglifyJsPlugin({
    uglifyOptions: {
    warnings: false,
    ie8: false,
    output: {
      comments: false
    }}
  })
];

plugins = plugins.concat(
  process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins
);

// include plugins config
module.exports = {
  mode: 'none',
  context: __dirname,
  entry: "./frontend/uncheezd.jsx",
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js"
  },
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: [{
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015']
          }
        }],
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
