import { body } from 'express-validator';
import User from '../models/UserModel.js';
import { withValidationErrors } from './validationMiddleware.js';
import {
	BadRequestError,
	UnauthenticatedError,
} from '../errors/customErrors.js';
import { verifyJWT } from '../utils/tokenUtils.js';

export const authenticateUser = async (req, res, next) => {
	const { token } = req.cookies;

	if (!token) {
		throw new UnauthenticatedError('authentication invalid');
	}

	try {
		const { userId, role } = verifyJWT(token);
		req.user = { userId, role };

		next();
	} catch (error) {
		throw new UnauthenticatedError('authentication invalid');
	}
};

export const validateRegisterInput = withValidationErrors([
	body('name').notEmpty().withMessage('name is required'),
	body('email')
		.notEmpty()
		.withMessage('email is required')
		.isEmail()
		.withMessage('invalid email format')
		.custom(async (email) => {
			const user = await User.findOne({ email });
			if (user) {
				throw new BadRequestError('email already exists');
			}
		}),
	body('password')
		.notEmpty()
		.withMessage('password is required')
		.isLength({ min: 8 })
		.withMessage('password must be at least 8 characters long'),
	body('location').notEmpty().withMessage('location is required'),
	body('lastName').notEmpty().withMessage('last name is required'),
]);

export const validateLoginInput = withValidationErrors([
	body('email')
		.notEmpty()
		.withMessage('email is required')
		.isEmail()
		.withMessage('invalid email format'),
	body('password').notEmpty().withMessage('password is required'),
]);
