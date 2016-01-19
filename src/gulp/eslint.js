'use strict';

import path from 'path';

export default function(gulp, plugins, browserSync, config) {

  return (callback) => {

    return gulp.src([
        path.join('gulpfile.js'),
        path.join('gulpfile.babel.js'),
        '!' + path.join('node_modules/**'),
        path.join(config.directories.source, '**/*.js')
      ])
      .pipe(plugins.eslint(config.lint.js))
      .pipe(plugins.eslint.format())
      .pipe(browserSync.stream());

    // No manual callback needed for pipes

  };

};
