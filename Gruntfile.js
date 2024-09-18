module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        files: { 'dist/css/style.css': 'src/less/style.less' }
      }
    },
    uglify: {
      my_target: {
        files: { 'dist/js/app.min.js': ['src/js/app.js'] }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['less', 'uglify']);
};
