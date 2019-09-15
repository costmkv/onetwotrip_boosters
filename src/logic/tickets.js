const createTicket = async ({ Ticket }, ticket) => Ticket.create(ticket);

const getTicket = async ({ Ticket }, ticket) => Ticket.findOne({
	'ticket.from.metaId': ticket.from.metaId,
	'ticket.to.metaId': ticket.to.metaId,
	'ticket.departure.time': ticket.departure.time
});

module.exports = { createTicket, getTicket };
