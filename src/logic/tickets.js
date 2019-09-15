'use strict';

const eventsLogic = require('./events');

exports.transform = async function(ticket) {
	const events = await eventsLogic.get();

	return {events, ...ticket};
};

exports.create = async function({ Ticket }) {
	return await Ticket.create({title: 'asd'});
};
