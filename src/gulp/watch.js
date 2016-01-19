'use strict';

import path from 'path';

export default function(gulp, plugins, browserSync, config) {

  return (callback) => {

    gulp.watch([
      path.join(config.directories.source, '**/*.scss')
    ], ['sass']);

    gulp.watch([
      path.join(config.directories.source, '**/*.js')
    ], ['eslint', 'babel']);

    gulp.watch([
      path.join(config.directories.source, '**/*.jade')
    ], ['jade']);

  };

};
