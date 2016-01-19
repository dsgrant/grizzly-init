'use strict';

import path from 'path';
import del from 'del';

export default function(gulp, plugins, browserSync, config) {

  return (callback) => {

    return del([
      path.join(config.directories.target)
    ], callback);

    // Return callback for task Sequencer
    // callback();

  };

};
