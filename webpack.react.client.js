'use strict';

// Import Node Modules.
// ----------------------
const gSystemConfig = require('./config-application.js'); // System configuration.
const path = require('path');
// const fs = require('fs');
// const webpackNodeExternals = require("webpack-node-externals");
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin'); // help build html pages with files with hash names
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // extract css from js into separate css file
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // minify css

const CopyWebpackPlugin = require('copy-webpack-plugin');

const Dotenv = require('dotenv-webpack');
// ----------------------

//  FROM: http:// jlongster.com/Backend-Apps-with-Webpack--Part-I#p28
/*
const nodeModules = {};
fs.readdirSync('node_modules')
    .filter(item => ['.bin'].indexOf(item) === -1)  //  exclude the .bin folder
    .forEach((mod) => {
        nodeModules[mod] = 'commonjs ' + mod;
    });*/

module.exports = {
  mode: 'production', // production is default | development
  // target: "node",// causing error: require not defined
  // target: "web",
  entry: './components_react/client.js',
  // externals: nodeModules,
  // externals: [webpackNodeExternals()],
  externals: {
    //  require("jquery") is external and available
    //   on the global var jQuery
    jquery: 'jQuery',
  },
  output: {
    // globalObject: "this", // ref: https:// stackoverflow.com/questions/38951721/react-js-server-side-issue-window-not-found
    // libraryTarget: "commonjs2", // ref: https:// stackoverflow.com/questions/52807408/webpack-referenceerror-require-is-not-defined-reactjs
    // library: "FunctionsSyncSystem",
    // libraryTarget: "window",
    // libraryExport: "default",
    filename: 'bundle.react.client.js',
    // path: path.resolve(__dirname, "build/public"),
    path: path.resolve(__dirname, gSystemConfig.configDirectoryBuildReact + '/' + gSystemConfig.configDirectoryBuildReactClient),
    // publicPath: "/build/public" // dist
    // publicPath: "/" + gSystemConfig.configDirectoryBuildReactSD + "/" + gSystemConfig.configDirectoryBuildReactClientSD // public folder
    publicPath: '/' + gSystemConfig.configDirectoryBuildReactSD + '/' + gSystemConfig.configDirectoryBuildReactClientSD + '/', // public folder // Note: this forma (with slash in the end), worked better with the path css conversion. Double check on the server format
  },
  // Prevent errors on webpack build.
  /*
    node: { 
        fs: 'empty'
    },
    
    node: { 
        fs: 'empty',
        tls: 'empty',
        child_process: 'empty',
        net: 'empty' 
    },
    externals: {
        'sharp': 'commonjs sharp'
    },
    */
  node: {
    fs: 'empty',
    tls: 'empty',
    // child_process: 'empty',
    // �: 'empty',
    net: 'empty',
  },
  resolve: {
    alias: {
      // 'jquery': path.join(__dirname, '/node_modules/jquery/dist/jquery.min.js')
      jquery: path.join(__dirname, 'node_modules/jquery/src/jquery'),
    },
  },
  plugins: [
    // JQuery.
    new webpack.ProvidePlugin({
      // window: "window", // didn´t work
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery',
      'window.$': 'jquery',
      'window.jQuery': 'jquery',
      // 'window.jquery': 'jquery',
      'window.Popper': 'Popper',
      tether: 'tether',
      Tether: 'tether',
      'window.Tether': 'tether',
    }),

    /**/
    new Dotenv(),
    new HtmlWebpackPlugin({
      // inject: true,
      filename: 'index.webpack_debug.html', // optional, if you want to use multiple files or rename the files
      // template: "./src/template.html",
      // chunks: [], // optional, to specify which file entries it should select
      minify: {
        // removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    // For multiple HTML files, simply duplicate this part of the code.
    // ref: https:// youtu.be/y_RFOaSDL8I?list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os
    // new MiniCssExtractPlugin({filename: "[name].[contentHash].bundle.css"}),
    // new MiniCssExtractPlugin({filename: "styles-[name].bundle.css"}),

    new MiniCssExtractPlugin({ filename: 'styles-frontend.bundle.css' }),
    // new MiniCssExtractPlugin({ filename: 'styles-frontend-mobile.bundle.css' }), // enable, if using separate css files for different resolutions

    // new CleanWebpackPlugin() // Clean directory beforme build.
  ],
  module: {
    rules: [
      // JQuery - expose.
      {
        test: require.resolve('jquery'),
        use: [
          {
            loader: 'expose-loader',
            options: 'jQuery',
          },
          {
            loader: 'expose-loader',
            options: '$',
          },
          {
            loader: 'expose-loader?$!expose?jQuery',
          },
        ],
      },
      {
        test: require.resolve('tether'),
        use: [
          {
            loader: 'expose-loader',
            options: 'Tether',
          },
        ],
      },
      /*
      {
                test: /bootstrap.+\.(jsx|js)$/, 
                // loader: 'imports?jQuery=jquery,$=jquery,this=>window' 
                loader: 'imports-loader?jQuery=jquery,$=jquery,this=>window' 
            },*/

      {
        test: /\.js$/,
        // exclude: /(node_modules|bower_components)/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['transform-class-properties', 'syntax-dynamic-import'],
            // plugins: ["transform-class-properties", "@babel/plugin-syntax-dynamic-import"],
            presets: [
              'react',
              // "es2015",
              'stage-0',
              [
                'env',
                {
                  targets: {
                    browsers: ['last 2 versions'],
                  },
                },
              ],
            ],
          },
        },
      },
      // CSS.
      /**/
      {
        test: /\.css$/,
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader,
          'css-loader',
        ], // css-loader, just loads the file. style-loader, applies the styles in DOM. css-loader has to load first, the the order here is reverse.
        // use: ["css-loader"]
      },
      // SASS.
      {
        test: /\.scss$/,
        use: [
          // "style-loader", // 3 - injects styles into DOM // substituted with the mini-css-extract-plugin
          MiniCssExtractPlugin.loader, // 3 - extract css into separate files
          'css-loader', // 2 - turns css into commonjs
          /*
          {
                        loader: "postcss-loader",
                        options: {
                            plugins: () => [
                                require("autoprefixer")()
                            ],
                        },
                    },*/
          'sass-loader', // 1 - tuns sass into css
        ],
      },

      // SASS | CSS.
      /*
      {
          test: /\.(sa|sc|c)ss$/,
          use: [
              // "style-loader", 
              MiniCssExtractPlugin.loader,
              "css-loader", 
              "sass-loader"
          ] // css-loader, just loads the file. style-loader, applies the styles in DOM. css-loader has to load first, the the order here is reverse.
          // use: ["css-loader"]
      },
      {
          test: /\.css$/i,
          use: [
              "style-loader", 
              "css-loader"
          ]
      }*/

      /*
      {
          test: /\.css$/,
          use: ['isomorphic-style-loader', { 
                  loader: 'css-loader',
                  options: {
                  importLoaders: 1
                  } 
              },
              'postcss-loader'
          ]
      }
      */
      /*
      {
          test: /\.css$/,
          loaders: [
            'style',
            '../app_styles?module&localIdentName=[name]__[local]___[hash:base64:5]',
          ],
      }
      */
      // Files
      /*
      {
          test: /\.(svg|png|jpg|jpeg|gif)$/,
          // test: "/\.png$/",
          use: {
              loader: "file-loader",
              options: {
                  name: "[name].[ext]",
                  // name: "imgs/[name].[hash].[ext]",
                  // name: "[name].[hash].[ext]",
                  outputPath: "files-layout",
                  // publicPath: "imgs", // optional, in case of using a directory with another name
                  esModule: false // prevents from displaying [object Module] in the output file (test on server)
              }
          }
      }*/

      // Files.
      {
        // test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, // fonts
        test: /\.(svg|jpg|jpeg|png|gif|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: {
          loader: 'file-loader',
          /*
          loader: "file-loader",
          options: {
              name: "[name].[ext]",
              // name: "imgs/[name].[hash].[ext]",
              // name: "[name].[hash].[ext]",
              outputPath: "files-layout",
              // publicPath: "imgs", // optional, in case of using a directory with another name
              esModule: false // prevents from displaying [object Module] in the output file (test on server)
          }*/
        },
      },
    ],
  },
};
