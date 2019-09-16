module.exports = {
	mongo: {
		url: 'mongodb://mongo:27017/api',
		options: {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			reconnectTries: 60,
			reconnectInterval: 1000
		}
	},
	kudago: {
		host: 'kudago.com',
		basePath: '/public-api/v1.4'
	}
};
