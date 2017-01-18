module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
  	grunt.loadNpmTasks('grunt-riot');
  	grunt.loadNpmTasks('grunt-contrib-cssmin');

  	grunt.initConfig({
  		clean:{
  			build: {
			    src: ['assets/private/js/riot-compiled.js', 'assets/private/js/compiled.js', 'assets/private/css/release.css']
			}
		},
		riot: {
			options: {
				template: 'pug',
			    concat : true
			},
			dist:{
				src: 'assets/private/js/riot/**/*.tag',
				dest: 'assets/private/js/riot-compiled.js'
			}
		},
		concat: {
			js:{
				src: 'assets/private/js/**/*.js',
				dest: 'assets/private/js/compiled.js'
			},
			css:{
				src: 'assets/private/css/**/*.css',
				dest: 'assets/private/css/release.css'
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
		},
		cssmin:{
			minify: {
				src: 'assets/private/css/release.css',
				dest: 'assets/public/css/release.min.css'
			}
		}

	})

  	grunt.registerTask('build', ['clean', 'riot', 'concat', 'uglify', 'cssmin', 'clean']);


}