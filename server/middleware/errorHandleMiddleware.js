import { HttpStatusCode } from 'axios';
const errorHandlerMiddleware = (err, req, res, next) => {
	console.log(err);
	const statusCode = err.statusCode || HttpStatusCode.INTERNAL_SERVER_ERROR;
	const msg = err.message || 'Something went wrong, try again later';

	res.status(statusCode).json({ msg });
};

export default errorHandlerMiddleware;
