'use strict';

import path from 'path';

export default function(gulp, plugins, browserSync, config) {

  return (callback) => {

    gulp.watch([
      path.join(config.directories.source, '**/*.scss'),
      path.join(config.directories.source, config.directories.components, '**/*.scss')
    ], ['sass']);

    gulp.watch([
      path.join(config.directories.source, '**/*.js')
    ], ['eslint', 'babel']);

    gulp.watch([
      path.join(config.directories.source, '**/*.jade'),
      path.join(config.directories.source, config.directories.components, '**/*.jade')
    ], ['jade']);

  };

};
