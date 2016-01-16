'use strict';

import del from 'del';

export default function(gulp, plugins, browserSync, config) {

  return (callback) => {

    del([
      config.directories.target
    ]);

    // Return callback for task Sequencer
    callback();

  };

};
