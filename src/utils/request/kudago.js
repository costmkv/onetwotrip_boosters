const request = require('request-promise');

const getEvents = async (config, paramsRequest) => {
	const res = await request.get({
		url: 'https://' + config.host + config.basePath + '/events/',
		json: true,
		qs: paramsRequest
	});

	return res.results[0] || {};
};

module.exports = { getEvents };
