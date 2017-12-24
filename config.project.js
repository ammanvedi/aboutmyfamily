module.exports = {
  'src' : {
    'entry': './src/js/main.js',
    'js': [ './src/js/**/*.js' ],
    'css': [ './src/styles/screen.scss' ],
    'html': [ './src/site/**/*.html' ]
  },
  'dist' : {
    'location': './dist/',
    'html': './dist/',
    'bundleName': 'app.js'
  }
}
