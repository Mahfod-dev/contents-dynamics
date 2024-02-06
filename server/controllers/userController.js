import { HttpStatusCode } from 'axios';
import User from '../models/UserModel.js';

export const getCurrentUser = async (req, res) => {
	const user = await User.findOne({ _id: req.user.userId });
	res.status(HttpStatusCode.Ok).json({ user });
};

export const getApplicationStats = async (req, res) => {
	res.status(HttpStatusCode.Ok).json({ msg: 'application stats' });
};

export const updateUser = async (req, res) => {
	const updatedUser = await User.findByIdAndUpdate(req.user.userId, req.body);
	res.status(HttpStatusCode.Ok).json({ msg: 'user updated' });
};
