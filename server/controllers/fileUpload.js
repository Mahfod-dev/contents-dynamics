import multer from 'multer';
import { processCsvAndCreateContent } from '../utils/processCsvAndCreateContent.js';
import { HttpStatusCode } from 'axios';

const upload = multer({ dest: 'uploads/' });

export const uploadMiddleware = upload.single('file');

export const uploadFile = async (req, res) => {
	const { path } = req.file;

	if (!path) {
		return res.status(HttpStatusCode.BadRequest).send('No file uploaded');
	}

	const response = await processCsvAndCreateContent(path);

	console.log(response);

	res.status(HttpStatusCode.Ok).send('File uploaded and processed!');
};
