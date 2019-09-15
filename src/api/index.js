const express = require('express');

const { errorHandler } = require('../middleware');

const models = require('../models');

const init = require('../controllers/init');
const collaboration = require('../controllers/collaboration');

const routersInit = config => {
	const router = express();

	router.use('/init', init());
	router.use('/collaboration', collaboration(models, { config }));

	router.use(errorHandler);

	return router;
};

module.exports = routersInit;
