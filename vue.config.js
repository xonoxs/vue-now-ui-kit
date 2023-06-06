module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/public/" : "/",
};
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
