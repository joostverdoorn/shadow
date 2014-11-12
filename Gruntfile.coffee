module.exports = ( grunt ) ->
  srcs = [
    'src/shadow.coffee'

    'src/abstract_view.coffee'
    'src/expandable_view.coffee'

    'src/null_view.coffee'
    'src/undefined_view.coffee'
    'src/string_view.coffee'
    'src/array_view.coffee'
    'src/object_view.coffee'
    'src/boolean_view.coffee'

    'src/number_view.coffee'
    'src/root_view.coffee'

    'src/utils/rivets_shadow.coffee'

    'src/export.coffee'
  ]

  vendor = [
    "bower_components/sightglass/index.js"
    "bower_components/rivets/dist/rivets.js"
    "bower_components/es6-shim/es6-shim.js"
    "bower_components/absurd/client-side/build/absurd.js"
  ]


  specs = [
    '.grunt/shadow/spec_compiled/shadow.js'
    '.grunt/shadow/spec_compiled/export.js'
  ]

  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')

    coffee:
      dist:
        options:
          join: true
        files:
          'dist/shadow.js': srcs

      build:
        options:
          join: true
          sourceMap: true
        files:
          'build/shadow.js': srcs

      spec:
        files: [
          expand: true
          cwd: 'spec'
          src: ['**/*.coffee']
          dest: '.grunt/shadow/spec_compiled'
          ext: '.js'
        ]

    jasmine:
      build:
        src: ['build/**/*.js']
        options:
          specs: specs
          vendor: vendor
          keepRunner: true

    clean:
      build: ['build']
      spec:  ['.grunt/shadow/spec_compiled']
      grunt: ['.grunt']

    watch:
      all:
        files: ['src/**/*.coffee']
        tasks: ['coffee:build', 'coffee:spec']

  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-jasmine'

  grunt.registerTask 'default', ['coffee','jasmine:build', 'watch']
  grunt.registerTask 'build',   ['coffee:build']
  grunt.registerTask 'dist',    ['coffee:dist']
  grunt.registerTask 'spec',    ['clean:spec', 'coffee:build', 'coffee:spec', 'jasmine:build', 'clean:spec']



# module.exports = ( grunt ) ->
#   srcs = [
#     'src/list.coffee'
#   ]

#   grunt.initConfig
#     pkg: grunt.file.readJSON('package.json')

#     meta:
#       banner:
#         '// Collection\n' +
#         '// version: <%= pkg.version %>\n' +
#         '// contributors: <%= pkg.contributors %>\n' +
#         '// license: <%= pkg.licenses[0].type %>\n'

#     coffee:
#       dist:
#         options:
#           join: true
#         files:
#           'dist/list.js': 'src/list.coffee'

#       build:
#         options:
#           join: true
#           sourceMap: true
#         files:
#           'build/list.js': 'src/list.coffee'

#       spec:
#         files: [
#           expand: true
#           cwd: 'spec'
#           src: ['**/*.coffee']
#           dest: '.grunt/list/spec_compiled'
#           ext: '.js'
#         ]

#     jasmine:
#       build:
#         src: ['build/list.js']
#         options:
#           specs: '.grunt/list/spec_compiled/**/*.js'
#           vendor: []
#           template: require('grunt-template-jasmine-istanbul')
#           templateOptions:
#             coverage: 'statistics/coverage/coverage.json'
#             report:
#               type: 'lcovonly'
#               options:
#                 dir: '.grunt/list/coverage/lcov'
#             thresholds:
#               lines: 60
#               statements: 60
#               branches: 60
#               functions: 60
#       html:
#         src: ['build/list.js']
#         options:
#           specs: '.grunt/list/spec_compiled/**/*.js'
#           vendor: []
#           template: require('grunt-template-jasmine-istanbul')
#           templateOptions:
#             coverage: 'statistics/coverage/coverage.json'
#             report:
#               type: 'html'
#               options:
#                 dir: 'statistics/coverage/html'
#             thresholds:
#               lines: 60
#               statements: 60
#               branches: 60
#               functions: 60

#     plato:
#       all:
#         options:
#           jshint: false
#         files:
#           'statistics/complexity' : ['.grunt/list/src_compiled/**/*.js']


#     clean:
#       build: ['build']
#       spec:  ['.grunt/list/spec_compiled']
#       grunt: ['.grunt']

#     watch:
#       all:
#         files: 'src/**/*.coffee'
#         tasks: ['build', 'spec']

#   grunt.registerTask 'watch',   ['coffee:build', 'watch']
#   grunt.registerTask 'spec',    ['clean:spec', 'coffee:build', 'coffee:spec', 'jasmine:build', 'clean:spec']
#   grunt.registerTask 'build',   ['coffee:build']
#   grunt.registerTask 'dist',    ['coffee:dist']
#   grunt.registerTask 'analyze', ['coffee','jasmine:html', 'plato']
