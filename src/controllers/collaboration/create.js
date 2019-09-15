const create = (models, { config }) => async (req, res, next) => {
	try {
		const { body: { title } } = req;

		let result;

		if (title) {
			const ticket = await models.Ticket.create({title: 'asd'});
			result = { message: 'Hello Boosters.pro', ticket };
		} else {
			// result = ticketsLogic.transformTickets()
		}

		return res.send(result);

	} catch (error) {
		next(error);
	}
};

module.exports= { create };
