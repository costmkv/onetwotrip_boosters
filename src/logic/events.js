const _ = require('lodash');
const moment = require('moment');

const kudagoRequest = require('../utils/request/kudago');

const getEvents = async (config, { daysCount = 3, departure }) => {
	const baseParams = {
		fields: 'dates,short_title,images,site_url',
		page_size: 1
	};

	let promises = [];

	_.times(daysCount, (index) => {
		let paramsRequest = { ...baseParams };

		if (index === 0) {
			paramsRequest.actual_seance = moment(departure).unix();
		} else {
			paramsRequest.actual_seance = moment(departure)
				.add(index, 'day')
				.startOf('day')
				.unix();
		}

		paramsRequest.actual_until = moment(departure)
			.add(index, 'days')
			.endOf('day')
			.unix();

		promises.push(kudagoRequest.getEvents(config.kudago, paramsRequest));
	});

	return Promise.all(promises);
};

module.exports = { getEvents };
