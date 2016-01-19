'use-strict';

// Original Config
import oConfig from './config';

import gulpLoadPlugins from 'gulp-load-plugins';

import taskSequencer from 'run-sequence';
import { each, isArray, isObject, reduce } from 'lodash';

import browserSyncPlugin from 'browser-sync';

import browserSyncInit from './gulp/browserSync';
import clean from './gulp/clean';
import eslint from './gulp/eslint';
import babel from './gulp/babel';
import jade from './gulp/jade';
import sass from './gulp/sass';


// Export out our default function which will get passed in gulp in our gulpfile
// When calling in project can pass in local gulp and local config as arguments
export default function(locGulp, locConfig = {}) {

  // Create our config object
  // Match + merge our original configs with any local argument configs
  function createConfig(locConfig, oConfig) {
    return reduce(locConfig, (res, val, key) => {
        if (isObject(val) && (!isArray(val))) {
          res[key] = createConfig(locConfig[key], oConfig[key]);
        } else {
          res[key] = val;
        }
        return res;
      }, oConfig);
  };
  const config = createConfig(locConfig, oConfig);

  // Create BrowserSync instance
  const browserSync = browserSyncPlugin.create();

  // Load all gulp plugins based on their names
  // gulp-copy -> plugins.copy
  const plugins = gulpLoadPlugins();

  // load gulp and provide gulp help task
  // run 'gulp help'
  const gulp = plugins.help(locGulp);

  // Wrap our imports in a function passing in our arguments
  // Return the new function
  function wrap(fn) {
    return fn(gulp, plugins, browserSync, config);
  };

  gulp.task('browserSync', 'Init Browser Sync', wrap(browserSyncInit));
  gulp.task('clean', 'Clean', wrap(clean));
  gulp.task('eslint', 'Lint JS Files', wrap(eslint));
  gulp.task('babel', 'Compile Babel Files', wrap(babel));
  gulp.task('jade', 'Compile Jade Files', wrap(jade));
  gulp.task('sass', 'Compile Sass Files', wrap(sass));


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
