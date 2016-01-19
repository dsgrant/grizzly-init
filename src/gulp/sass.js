'use strict';

import path from 'path';
import autoprefixer from 'autoprefixer';

export default function(gulp, plugins, browserSync, config) {

  return (callback) => {

    var browserSupport = config.utils.browserSupport || ['last 2 versions'];

    return gulp.src(path.join(config.directories.source, config.directories.styles, config.entry.styles))
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sass({
        outputStyle: 'expanded',
        precision: 10
      }))
      .on('error', plugins.sass.logError)
      .pipe(plugins.postcss([ autoprefixer({ browsers: browserSupport }) ]))
      .pipe(plugins.sourcemaps.write())
      .pipe(gulp.dest(path.join(config.directories.target, config.directories.styles)))
      .pipe(browserSync.stream());

    // No manual callback needed for pipes

  };

};
