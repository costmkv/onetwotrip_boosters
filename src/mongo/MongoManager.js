const mongoose = require('mongoose');

class MongoManager {
	constructor (config) {
		this._config = config;
	}
	getMongoUrl() {
		return this._config.url;
	}
	getMongoOptions() {
		return this._config.options;
	}
	connect () {
		return mongoose.connect(this.getMongoUrl(), this.getMongoOptions());
	}
}

module.exports = { MongoManager };
