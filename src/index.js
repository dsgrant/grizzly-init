'use-strict';

import gulpLoadPlugins from 'gulp-load-plugins';
import browserSyncPlugin from 'browser-sync';


import clean from './gulp/clean';
import browserSyncInit from './gulp/browserSync';


// Export out our default function which will get passed in gulp in our gulpfile
export default function(oGulp) {

  // Create BrowserSync instance
  const browserSync = browserSyncPlugin.create();

  // Load all gulp plugins based on their names
  // EX: gulp-copy -> copy
  const plugins = gulpLoadPlugins();

  // load gulp and provide gulp help task
  // run 'gulp help'
  const gulp = plugins.help(oGulp);

  // Wrap our imports in a function passing in our arguments
  // Return the new function
  function wrap(fn) {
    return () => {
      fn(gulp, plugins, browserSync);
    };
  }

  gulp.task('clean', 'Clean', wrap(clean));
  gulp.task('browserSync', 'Init Browser Sync', wrap(browserSyncInit));

}
