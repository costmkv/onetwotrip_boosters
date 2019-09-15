const { STATUS_CODES } = require('http');

const errorHandler = (err, req, res, next) => {
	console.log('Uncaught exception occured:', err.stack || err);

	return res
		.status(err.status || 500)
		.json({
			code: err.code || 500,
			message: err.message || STATUS_CODES[err.status],
		});
};

module.exports = { errorHandler };
