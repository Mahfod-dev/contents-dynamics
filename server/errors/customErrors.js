import { HttpStatusCode } from 'axios';

export class NotFoundError extends Error {
	constructor(message) {
		super(message);
		this.name = 'NotFoundError';
		this.statusCode = HttpStatusCode.NotFound;
	}
}

export class BadRequestError extends Error {
	constructor(message) {
		super(message);
		this.name = 'BadRequestError';
		this.statusCode = HttpStatusCode.BadRequest;
	}
}
export class UnauthenticatedError extends Error {
	constructor(message) {
		super(message);
		this.name = 'UnauthenticatedError';
		this.statusCode = HttpStatusCode.Unauthorized;
	}
}
export class UnauthorizedError extends Error {
	constructor(message) {
		super(message);
		this.name = 'UnauthorizedError';
		this.statusCode = HttpStatusCode.Forbidden;
	}
}
