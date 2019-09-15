const request = require('request-promise');

const getEvents = async (config, requestParams) => {
	const res = await request.get({
		url: 'https://' + config.host + config.basePath + '/events/',
		json: true,
		qs: requestParams
	});

	return res.results[0] || {};
};

module.exports = { getEvents };
