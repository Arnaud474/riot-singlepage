module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
  	grunt.loadNpmTasks('grunt-riot');

  	grunt.initConfig({
  		clean:{
  			build: {
			    src: ['assets/private/js/riot-compiled.js', 'assets/private/js/compiled.js']
			}
		},
		riot: {
			options: {
				template: 'pug',
			    concat : true
			},
			dist:{
				src: 'assets/private/riot/*.tag',
				dest: 'assets/private/js/riot-compiled.js'
			}
		},
		concat: {
			js:{
				src: 'assets/private/js/**/*.js',
				dest: 'assets/private/js/compiled.js'
			}
		},
		uglify: {
			options:{
				mangle:true
			},
			js:{
				src: 'assets/private/js/compiled.js',
				dest: 'assets/public/js/compiled.min.js'
			}
		}

	})

  	grunt.registerTask('build', ['clean', 'riot', 'concat', 'uglify', 'clean']);


}