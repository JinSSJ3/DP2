

const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// const publicPath = '/template/';
const publicPath = '/';

module.exports = {
 mode: "development",
//  externals: {
//   // require("jquery") is external and available
//   //  on the global var jQuery
//   "jquery": "jQuery"
// },
 entry: {
   app: "./src/index.js"
 },
 devtool: 'inline-source-map',
 devServer: {
   contentBase: path.join(__dirname, './'), // where dev server will look for static files, not compiled
  //  publicPath: '/', //relative path to output path where  devserver will look for compiled files
   host: '0.0.0.0',
    compress: true,
    port: 3001, // port number
    historyApiFallback: true,
    quiet: true
 },
 externals: {
  // global app config object
  config: JSON.stringify({
      apiUrl: '',
      imageapiUrl: '',
      
      publicPath : '/template'            
  })
},
 output: {
   filename: 'js/[name].bundle.js',
   path: path.resolve(__dirname, 'dist'), // base path where to send compiled assets
   publicPath: publicPath, // base path where referenced files will be look for
 },
 resolve: {
   extensions: ['*', '.js', '.jsx'],
   alias: {
      Assets: path.resolve(__dirname, 'src/assets/'),
   },
   modules: [
    path.join(__dirname, "js/helpers"),
    "node_modules"
  ]
 },
 module: {
   rules: [
     { // config for es6 jsx
       test: /\.(js|jsx)$/,
       exclude: /node_modules/,
       use: {
         loader: "babel-loader"
       }
     },
     {
         test: /\.css$/,
         use: ['style-loader', 'css-loader'],
     },
     { // config for sass compilation
       test: /\.scss$/,
       use: [
         {
           loader: MiniCssExtractPlugin.loader
         },
         'css-loader',
         {
           loader: "sass-loader"
         }
       ]
     },
     {
       test: /\.(png|jpg|gif)$/i,
       use: [
         {
           loader: 'url-loader',
           options: {
             limit: 8192,
           },
         },
       ],
     },
     {
         test: /\.(woff|woff2|eot|ttf|svg)$/,
         loader: 'url-loader?limit=100000'
     },
    //  { // config for fonts
    //    test: /\.(woff|woff2|eot|ttf|otf)$/,
    //    use: [
    //      {
    //        loader: 'file-loader',
    //        options: {
    //          outputPath: 'fonts',
    //        }
    //      }
    //    ],
    //  }
   ]
 },
 optimization: {
  minimizer: [new UglifyJsPlugin()],
},
performance: {
  hints: process.env.NODE_ENV === 'production' ? "warning" : false
},
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        filename: "./index.html",
        favicon: './public/favicon.png'
      }),
        new MiniCssExtractPlugin({ // plugin for controlling how compiled css will be outputted and named
            filename: "css/[name].css",
            chunkFilename: "css/[id].css"
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["css/*.*", "js/*.*", "fonts/*.*", "images/*.*"]
        }),
        new webpack.ProvidePlugin({ //To automatically load jquery
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery'
        })
    ]
};