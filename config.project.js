module.exports = {
  'src' : {
    'entry': './src/js/main.js',
    'js': [ './src/js/**/*.js' ],
    'css': [ './src/styles/screen.scss' ],
    'html': [ './src/site/**/*.html' ],
    'img': [ './src/i/**' ]
  },
  'dist' : {
    'location': './dist/',
    'html': './dist/',
    'img': './dist/images/',
    'bundleName': 'app.js'
  }
}
