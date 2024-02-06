import User from '../models/UserModel.js';
import { HttpStatusCode } from 'axios';
import { hashPassword, comparePassword } from '../utils/passwordUtils.js';
import { UnauthenticatedError } from '../errors/customErrors.js';
import { createJWT } from '../utils/tokenUtils.js';

export const register = async (req, res) => {
	// first registered user is an admin
	const isFirstAccount = (await User.countDocuments()) === 0;
	req.body.role = isFirstAccount ? 'admin' : 'user';

	const hashedPassword = await hashPassword(req.body.password);
	req.body.password = hashedPassword;

	const user = await User.create(req.body);
	res.status(HttpStatusCode.Created).json({ msg: 'User created', user });
};
export const login = async (req, res) => {
	const user = await User.findOne({ email: req.body.email });

	const token = createJWT({ userId: user._id, role: user.role });

	const { password } = req.body;

	const isValidUser =
		user && (await comparePassword(password, user.password));
	if (!isValidUser) throw new UnauthenticatedError('invalid credentials');

	if (isValidUser) {
		const oneDay = 1000 * 60 * 60 * 24;

		res.cookie('token', token, {
			httpOnly: true,
			expires: new Date(Date.now() + oneDay),
			secure: process.env.NODE_ENV === 'production',
		});
	}

	res.status(HttpStatusCode.Ok).json({ msg: 'User logged in', user });
};

export const logout = (req, res) => {
	res.cookie('token', 'logout', {
		httpOnly: true,
		expires: new Date(Date.now()),
	});
	res.status(HttpStatusCode.Ok).json({ msg: 'user logged out!' });
};
