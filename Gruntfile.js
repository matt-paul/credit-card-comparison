/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.

'http-server': {

    'dev': {

        // the server root directory
        root: './public',

        // the server port
        // can also be written as a function, e.g.
        // port: function() { return 8282; }
        port: 8080,


        // the host ip address
        // If specified to, for example, "127.0.0.1" the server will
        // only be available on that ip.
        // Specify "0.0.0.0" to be available everywhere
        host: "127.0.0.1",

        cache: 10,
        showDir : true,
        autoIndex: true,

        // server default file extension
        ext: "html",

        // run in parallel with other tasks
        runInBackground: false,

        // specify a logger function. By default the requests are
        // sent to stdout.
        // logFn: function(req, res, error) { }

    }

},
    sass: {
        options: {
            // sourceMap: true
        },
        dist: {
            files: {
                'public/main.css': 'public/styles/main.scss'
            }
        }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {}
      },
      gruntfile: {
        src: 'Gruntfile.js'
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      css: {
        files: '**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-http-server');

  // Default task.
  grunt.registerTask('default', ['sass', 'jshint', 'http-server', 'watch']);

};
