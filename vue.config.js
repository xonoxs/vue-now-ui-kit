module.exports = {
  // Enable CSS source maps.
  publicPath: { 
  process.env.NODE_ENV === 'production'
    ? '/my-project/'
    : '/';
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
