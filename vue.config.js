module.exports = {
  pages: {
    'index': {
      entry: './src/main.js',
      template: './public/index.html',
      title: 'Welcome to my vue generator project',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
  },
}
 
