'use strict';

export default function(gulp, plugins, browserSync, config) {

  return (callback) => {

    browserSync.init();

    // No callback since we want this to stream

  };

};
