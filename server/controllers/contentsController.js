import { allDynamicsContent } from '../utils/allDynamicsContent.js';
import { HttpStatusCode } from 'axios';
import { NotFoundError } from '../errors/customErrors.js';
import { createDynamicContent } from '../utils/createDynamicsContent.js';
import { deleteDynamicsContent } from '../utils/deleteDynamicsContent.js';
import { updateDynamicsContent } from '../utils/updateDynamicsContent.js';
import { localeIdLanguage } from '../utils/localeIdLanguage.js';

export const getAllContents = async (req, res) => {
	if (!req.user) {
		throw new NotFoundError('No user found');
	}
	const contents = await allDynamicsContent();

	if (!contents) {
		throw new NotFoundError('No content found');
	}

	res.status(HttpStatusCode.Ok).json({ contents });
};

export const createContent = async (req, res) => {
	const { title, content, language } = req.body;
	console.log('language', language);
	console.log('title', title);
	console.log('content', content);

	let numLanguage;

	switch (language) {
		case 'English':
			numLanguage = 1176;
			break;
		case 'Spanish':
			numLanguage = 2;
			break;
		case 'French':
			numLanguage = 16;
			break;
		default:
			numLanguage = 'Unknown';
			break;
	}

	console.log('language', numLanguage);

	const newContent = await createDynamicContent(title, content, numLanguage);

	res.status(HttpStatusCode.Created).json(newContent);
};

export const updateContent = async (req, res) => {
	const { id } = req.params;
	const { name } = req.body;

	await updateDynamicsContent(id, name);

	res.status(HttpStatusCode.Created).json({
		message: `Content ${id} has been updated with name ${name}`,
	});
};

export const deleteContent = async (req, res) => {
	const { id } = req.params;

	await deleteDynamicsContent(id);

	res.status(HttpStatusCode.Ok).json({
		message: `Content ${id} has been deleted`,
	});
};

export const getAllLanguages = async (req, res) => {
	const languages = await localeIdLanguage();

	if (!languages) {
		throw new NotFoundError('No languages found');
	}

	res.status(HttpStatusCode.Ok).json({ languages });
};
