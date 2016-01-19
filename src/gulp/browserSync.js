'use strict';

export default function(gulp, plugins, browserSync, config) {

  return (callback) => {

    browserSync.init({
      open: config.server.open,
      server: {
        baseDir: config.server.baseDir || config.directories.target
      },
      port: config.server.port || 3000,
      notify: config.server.notify || true
    });

    // No callback since we want this to stream

  };

};
