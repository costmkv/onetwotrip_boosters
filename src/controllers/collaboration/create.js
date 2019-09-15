const { createTicket, getTicket } = require('../../logic/tickets');
const { getEvents } = require('../../logic/events');

const getTestMessage = () => ({ message: 'Hello Boosters.pro' });

const getExtendedTicket = async (models, config, ticket) => {
	try {
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
