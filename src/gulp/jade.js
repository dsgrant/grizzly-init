'use strict';

import path from 'path';

export default function(gulp, plugins, browserSync, config) {

  return (callback) => {

    return gulp.src(path.join(config.directories.source, '**/*.jade'))
      .pipe(plugins.jade({
        pretty: true
      }))
      .pipe(gulp.dest(path.join(config.directories.target)));

    // No manual callback needed for pipes

  };

};
