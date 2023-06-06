var path = require('path');
module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
    ? '/xonoxs.github.io/'
    : './public/',
	configureWebpack : {
		resolve: {
	        modules : [
		        path.resolve("./src"),
	            path.resolve("./node_modules")
	        ]
	    },
	}
}
