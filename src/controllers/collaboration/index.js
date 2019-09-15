const { Router: router } = require('express');

const { create } = require('./create');

module.exports = (models, { config }) => {
	const api = router();

	api.post('/', create(models, { config }));

	return api;
};
