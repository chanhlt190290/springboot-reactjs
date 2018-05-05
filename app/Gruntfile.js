module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
      main: {
        files: [
          {
			expand: true,
			cwd:"build/",
            src: ["**"],
            dest: "../src/main/resources/public/"
          }
        ]
      }
    }
  });
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.registerTask("default", ["copy"]);
};
