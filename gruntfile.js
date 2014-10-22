module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-svgstore');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'assets/js/app.js': ['js/*.js']
        } // files
      } // my_target
    }, // uglify
    compass: {
      dev: {
        options: {
          config: 'config.rb'
        } // options
      } //dev
    }, // compass
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9'] // more codenames at https://github.com/ai/autoprefixer#browsers
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'assets/css/',
          src: '{,*/}*.css',
          dest: 'assets/css'
        }]
      }
    },
    svgstore: {
      options: {

      },
      default : {
        files: {
          'assets/svg-sprites/svg-defs.svg': ['assets/svgs/*.svg'],
        },
      },
    },
    watch : {
      options: { livereload: true },
      scripts: {
        files: ['js/*.js'],
        tasks: ['uglify']
      }, // script
      sass: {
        files: ['sass/**/*.scss'],
        tasks: ['compass:dev', 'autoprefixer']
      }, // sass
      html: {
        files: ['*.html', '_layouts/*.html', '_includes/*.html', 
                'blog/*.html', 'approach/*.html', 'contact/*.html', 'projects/*.html']
      }, // html
    }
  }) // init config
  grunt.registerTask('images', [ 'responsive_images:detail']);
  grunt.registerTask('default', 'watch');
  grunt.registerTask('svg', 'svgstore');
  
}; //exports