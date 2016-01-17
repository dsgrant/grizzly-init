'use-strict';

import config from './config';

import gulpLoadPlugins from 'gulp-load-plugins';

import taskSequencer from 'run-sequence';
import { each } from 'lodash';

import browserSyncPlugin from 'browser-sync';

import browserSyncInit from './gulp/browserSync';
import jade from './gulp/jade';
import sass from './gulp/sass';
import clean from './gulp/clean';



// Export out our default function which will get passed in gulp in our gulpfile
export default function(oGulp) {

  // Create BrowserSync instance
  const browserSync = browserSyncPlugin.create();

  // Load all gulp plugins based on their names
  // gulp-copy -> plugins.copy
  const plugins = gulpLoadPlugins();

  // load gulp and provide gulp help task
  // run 'gulp help'
  const gulp = plugins.help(oGulp);

  // Wrap our imports in a function passing in our arguments
  // Return the new function
  function wrap(fn) {
    return fn(gulp, plugins, browserSync, config);
  };

  gulp.task('clean', 'Clean', wrap(clean));
  gulp.task('jade', 'Compile Jade Files', wrap(jade));
  gulp.task('sass', 'Compile Jade Files', wrap(sass));
  gulp.task('browserSync', 'Init Browser Sync', wrap(browserSyncInit));

  // Gather tasks from config file
  // Run through each loop and sequence
  // Compiles task names for use in gulp help
  // To make proper use of run sequencer we need callback functions on task
  // functions so sequencer knows when done
  each(config.tasks, (val, key) => {
    gulp.task(key, 'Tasks: ' + val.join(', '), wrap((gulp, plugins, browserSync, config) => {
      const runSequence = taskSequencer.use(gulp);
      return (callback) => {
        runSequence.apply(null, val.concat(callback));
      }
    }));
  });


};
