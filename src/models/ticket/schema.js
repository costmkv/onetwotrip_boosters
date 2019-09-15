const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({any: {}}, {
	versionKey: false
});

module.exports = { schema };
