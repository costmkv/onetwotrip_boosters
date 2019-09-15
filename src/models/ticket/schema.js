const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({any: {}}, {
	versionKey: false,
	strict: false
});

module.exports = { schema };
