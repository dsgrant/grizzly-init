const directories = {
  source: 'src',
  target: 'public'
};

const server = {
  // When BrowserSync runs, what page to open
  // Can be true, local, external, ui, ui-external, or false
  // default: local    >> localhost
  open: 'local',

  // Which directory to serve files from
  // default: target directory
  baseDir: directories.target,

  // What port to run the server
  // default: 3000
  port: 3000,

  // Turn on/off BrowserSync notification in browser
  // default: true
  notify: true

}

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
      'jade'
    ],
    [
      'browserSync'
    ]
  ]
};

export default {
  directories,
  server,
  tasks
};
