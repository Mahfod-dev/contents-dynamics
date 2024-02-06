import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import contentsRouter from './router/contentsRouter.js';
import colors from 'colors';
import 'express-async-errors';
import { connectDB } from './db/connectDB.js';
import errorHandlerMiddleware from './middleware/errorHandleMiddleware.js';
import authRouter from './router/authRouter.js';
import { authenticateUser } from './middleware/authMiddleware.js';
import cookieParser from 'cookie-parser';
import useRouter from './router/useRouter.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

//OtEHSJ3fQrhAssdokwBFsKID000grItmkzNJnth6;

const app = express();

app.use(express.json());
app.use(cookieParser());

console.log(process.env.PORT);

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/contents', authenticateUser, contentsRouter);
app.use('/api/v1/auth', authRouter);
// app.use('/api/v1/users', authenticateUser, useRouter);

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, './public', 'index.html'));
});

app.use('*', (req, res) => {
	res.status(404).json({ msg: 'not found' });
});

app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;

// Path: server.js

try {
	await connectDB();
	app.listen(PORT, () => {
		console.log(`server running on PORT ${PORT}....`.bgCyan);
	});
} catch (error) {
	console.log(error);
	process.exit(1);
}
