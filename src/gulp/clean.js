'use strict';

import del from 'del';

export default function(gulp, plugins, browserSync, config) {

  const dirs = config.directories;

  return (callback) => {

    del([
      dirs.temporary
    ]);

    // Return callback for task Sequencer
    callback();

  };

};
