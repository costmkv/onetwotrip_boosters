const chalk = require('chalk');
const morgan = require('morgan');

const requestLogger = () => morgan([
	chalk.gray('[:date]'),
	chalk.yellow(':method'),
	':url',
	'-',
	':status',
	'-',
	':response-time ms'
].join(' '));

module.exports = { requestLogger };
