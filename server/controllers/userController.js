import { HttpStatusCode } from 'axios';
import User from '../models/UserModel.js';

export const getCurrentUser = async (req, res) => {
	console.log(req.user);

	const user = await User.findOne({ _id: req.user.userId });

	const userWithOutPassword = user.toJSON();

	console.log(user);
	res.status(HttpStatusCode.Ok).json({ user: userWithOutPassword });
};

export const getApplicationStats = async (req, res) => {
	res.status(HttpStatusCode.Ok).json({ msg: 'application stats' });
};

export const updateUser = async (req, res) => {
	const obj = { ...req.body };

	delete obj.password;

	const updatedUser = await User.findByIdAndUpdate(req.user.userId, obj);
	res.status(HttpStatusCode.Ok).json({ msg: 'user updated' });
};
