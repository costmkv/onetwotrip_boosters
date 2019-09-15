const { Router: router } = require('express');

const { get } = require('./get');

module.exports = () => {
	const api = router();

	api.get('/', get());

	return api;
};
