module.exports = {
	mongo: {
		url: 'mongodb://127.0.0.1:27017/api',
		options: {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			reconnectTries: 60,
			reconnectInterval: 1000
		}
	}
};
