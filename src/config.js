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


// LINT ALL THINGS
const lint = {
  js: {
    "parser": "babel-eslint",
    "env": {
      "browser": true,
      "node": true,
      "es6": true
    },
    "globals": {
      "DocumentFragment": true
    },
    "rules": {
      "indent": [2, 2],
      "valid-jsdoc": 0,
      "brace-style": [1, "stroustrup"],
      "no-constant-condition": 1,
      "no-underscore-dangle": 0,
      "no-use-before-define": 1,
      "func-names": 0,
      "semi": [2, "always"],
      "no-new": 0,
      "new-parens": 2,
      "no-ternary": 0,
      "new-cap": 0,
      "no-unused-vars": [1, {"vars": "local", "args": "none"}],
      "quotes": [2, "single"],
      "one-var": 0,
      "space-infix-ops": 0,
      "strict": 0,
      "camelcase": [2, {"properties": "never"}]
    }
  }
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
      'eslint'
    ],
    [
      'babel',
      'sass',
      'jade'
    ],
    'browserSync',
    'watch'
  ]
};

export default {
  directories,
  entry,
  utils,
  server,
  lint,
  tasks
};
