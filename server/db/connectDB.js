import mongoose from 'mongoose';

export const connectDB = async () => {
	try {
		const connect = await mongoose.connect(process.env.MONGO_URL);
		console.log('MongoDB connected');

		console.log(connect.connection.host.bgYellow);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};
