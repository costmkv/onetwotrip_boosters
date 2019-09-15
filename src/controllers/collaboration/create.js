const ticketsLogic = require('../../logic/tickets');

const create = (models, { config }) => async (req, res, next) => {
	try {
		const { body } = req;

		let result;

		if (body.title) {
			result = { message: 'Hello Boosters.pro' };
		} else {
			let result = await ticketsLogic.transform(body);
			await ticketsLogic.create(models, result);
		}

		return res.send(result);

	} catch (error) {
		next(error);
	}
};

module.exports= { create };
