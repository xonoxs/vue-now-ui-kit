module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/xonoxs.github.io/'
    : './src/main.js/',
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production' ? "/xonoxs.github.io/" : "./src/assets/",
  }
}

var path = require('path');
module.exports = {
	configureWebpack : {
		resolve: {
	        modules : [
		        path.resolve("./src"),
	            path.resolve("./node_modules")
	        ]
	    },
	}
}
