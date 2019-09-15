const createTicket = async ({ Ticket }, ticket) => Ticket.create(ticket);

module.exports = { createTicket };
