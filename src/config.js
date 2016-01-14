const directories = {
  source: 'src',
  temporary: 'tmp',
  destination: 'build'
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
      'browserSync'
    ]
  ]
};

export default {
  directories,
  tasks
};
