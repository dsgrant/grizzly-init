'use strict';

import path from 'path';
import autoprefixer from 'autoprefixer';

export default function(gulp, plugins, browserSync, config) {

  return (callback) => {

    var browserSupport = config.utils.browserSupport || ['last 2 versions'];

    return gulp.src(path.join(config.directories.source, '**/*.scss'))
      .pipe(plugins.sass({
        outputStyle: 'expanded',
        precision: 10
      }))
      .on('error', plugins.sass.logError)
      .pipe(plugins.postcss([ autoprefixer({ browsers: browserSupport }) ]))
      .pipe(gulp.dest(path.join(config.directories.target)))
      .pipe(browserSync.stream({match: '**/*.css'}));

    // No manual callback needed for pipes

  };

};
