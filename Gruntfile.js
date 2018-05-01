//
// @see https://www.npmjs.com/package/grunt-webfont
//
module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean:["dist"],//distを消去
    webfont: {
      icons: {
        src: 'src/svg/*.svg',
        dest: 'dist/fonts/ligature-icons',
        destScss: 'dist/scss',
        options: {
          ligatures:true,
          engine:'fontforge',
          font: 'ligature-icons',
          stylesheet: 'scss',
          template: 'src/template/template.css',
          templateOptions: {
            baseClass: 'ligature-icons',
            classPrefix: 'ligature-icons-'
          },
          htmlDemoTemplate:"src/template/template.html",
          htmlDemoFilename:"_sample",
          callback: function(filename, types, glyphs, hash) {
              console.log("[created] ligature icons")
          }
        }
      }
    }
  });
  grunt.registerTask('default', ['clean','webfont']);
};
