const eventsLogic = require('./events');

exports.transform = async function(ticket) {
	const events = await eventsLogic.get();

	return {events, ...ticket};
};

exports.create = async function({ Ticket }, ticket) {
	return Ticket.create(ticket);
};
