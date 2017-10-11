var webpack = require('webpack');
var path = require('path');

module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    files: [
      './spec/tests.webpack.js',
      '../**/*.html'
    ],
    frameworks: ['jasmine', 'sinon'],
    preprocessors: {
      './spec/tests.webpack.js': ['webpack', 'sourcemap'],
      '../**/*.html': ['ng-html2js']
    },
    reporters: ['dots'],
    singleRun: true,
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
          },
          {
              test: /.html$/,
              loader: 'ngtemplate?relativeTo=/app!html?root=' + __dirname + '/../app'
          },
          {
              test: /\.scss$/,
              loaders: ["style", "css", "sass"]
          },
          {
              test: /\.png$/,
              loader: 'file-loader'
          }
        ]
      },
      resolve: {
          root: path.resolve('app/'),
          extensions: ['', '.js']
      },
      plugins: [
          new webpack.ProvidePlugin({
              $: 'jquery',
              jQuery: 'jquery',
              'window.jQuery': 'jquery'
          })
      ],
      ngHtml2JsPreprocessor: {
          // strip this from the file path
          stripPrefix: 'public/',
          stripSuffix: '.ext',
          // prepend this to the
          prependPrefix: 'served/',

          // or define a custom transform function
          // - cacheId returned is used to load template
          //   module(cacheId) will return template at filepath
          cacheIdFromPath: function(filepath) {
            // example strips 'public/' from anywhere in the path
            // module(app/templates/template.html) => app/public/templates/template.html
            var cacheId = filepath.strip('public/', '');
            return cacheId;
          },

          // - setting this option will create only a single module that contains templates
          //   from all the files, so you can load them all with module('foo')
          // - you may provide a function(htmlPath, originalPath) instead of a string
          //   if you'd like to generate modules dynamically
          //   htmlPath is a originalPath stripped and/or prepended
          //   with all provided suffixes and prefixes
          moduleName: 'foo'
      },
      watch: true,
      sassLoader: {
          includePaths: [path.resolve(__dirname, "../app")]
      }
    },
    webpackServer: {
      noInfo: true,
    }
  });
};
