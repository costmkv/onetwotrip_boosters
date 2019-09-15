const get = () => async (req, res, next) => {
	return res.send({ message: 'Hello OneTwoTrip' });
};

module.exports= { get };
