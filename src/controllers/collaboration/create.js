const { createTicket, getTicket } = require('../../logic/tickets');
const { getEvents } = require('../../logic/events');

const getTestMessage = () => ({ message: 'Hello Boosters.pro' });

const getExtendedTicket = async (models, config, ticket) => {
	try {
		ticket = {
			"from": {
				"code": 2000001,
				"station": "Москва Курская",
				"metaId": 22823,
				"metaName": "Москва",
				"initCode": 2060001,
				"initDate": "2019-09-14T00:00:00"
			},
			"to": {
				"code": 2004001,
				"station": "Санкт-Петербург-Главн.",
				"metaId": 22871,
				"metaName": "Санкт-Петербург",
				"finalCode": 2004001
			},
			"departure": {
				"time": "2019-09-15T00:44:00",
				"localTime": "2019-09-15T00:44:00",
				"local": false,
				"utcTimeOffset": 3,
				"stopInMinutes": 15
			},
		};

		const existingTicket = await getTicket(models, ticket);

		let result;

		if (existingTicket) {
			const { ticket } = existingTicket;
			result = { ticket };
		} else {
			ticket.events = await getEvents(config, {
				daysCount: 3,
				departureTime: ticket.departure.time
			});

			result = { ticket };

			await createTicket(models, result);
		}

		return result;
	} catch(err) {
		throw err;
	}
};

const create = (models, { config }) => async (req, res, next) => {
	try {
		const { body: { title, ticket = {} } } = req;

		let result;

		if (title) {
			result = getTestMessage();
		} else {
			result = await getExtendedTicket(models, config, ticket);
		}

		return res.send(result);
	} catch (error) {
		next(error);
	}
};

module.exports= { create };
