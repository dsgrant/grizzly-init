const directories = {
  source: 'src',
  target: 'public',
  scripts: 'scripts',
  styles: 'styles',
  pages: 'pages',
  modules: '_modules'
};

const entry = {
  scripts: 'main.js',
  styles: 'main.scss'
};

const utils = {
  // Set autoprefixer browser support
  browserSupport: [
    'last 2 versions'
  ]
};

const server = {
  // When BrowserSync runs, what page to open
  // Can be true, local, external, ui, ui-external, or false
  // default: local    >> localhost
  // open: 'local',
  open: false,

  // Which directory to serve files from
  // default: target directory
  baseDir: directories.target,

  // What port to run the server
  // default: 3000
  port: 3000,

  // Turn on/off BrowserSync notification in browser
  // default: true
  notify: true

};

// This uses runSequence so
// [
//   'Can add array',
//   'to create a sequence'
// ],
// 'this task will run after the tasks in array'
const tasks = {
  build: [
    'clean'
  ],
  serve: [
    'clean',
    [
      'babel',
      'sass',
      'jade'
    ],
    'browserSync'
  ]
};

export default {
  directories,
  entry,
  utils,
  server,
  tasks
};
