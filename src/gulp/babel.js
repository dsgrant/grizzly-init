'use strict';

import path from 'path';

import webpack from 'webpack-stream';

export default function(gulp, plugins, browserSync, config) {

  return (callback) => {

    return gulp.src(path.join(config.directories.source, config.directories.scripts, config.entry.scripts))
      .pipe(webpack({
        output: {
          filename: '[name].js',
        },
        devtool: 'inline-source-map',
        module: {
          loaders: [
            {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                presets: ['es2015']
              }
            }
          ]
        },
        resolve: {
          modulesDirectories: [
            config.directories.source,
            config.directories.scripts,
            config.directories.components,
            'node_modules'
          ]
        }
      }))
      .pipe(gulp.dest(path.join(config.directories.target, config.directories.scripts)))
      .pipe(browserSync.stream());

    // No manual callback needed for pipes

  };

};
