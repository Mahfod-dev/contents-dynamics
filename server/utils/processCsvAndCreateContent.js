import fs from 'fs';
import csvParser from 'csv-parser';
import { createDynamicContent } from './createDynamicsContent.js';
import { getLanguageId } from './changeLanguageNumber.js';

export const processCsvAndCreateContent = (filePath) => {
	console.log('Processing CSV file:', filePath);

	fs.createReadStream(filePath)
		.pipe(csvParser())
		.on('data', async (row) => {
			console.log('Processing row:', row);

			const { title, content, language } = row;

			const languageId = await getLanguageId(language);

			console.log(row.title, row.content, row.language);
			try {
				const item = await createDynamicContent(
					title,
					content,
					languageId
				);

				return item;
			} catch (error) {
				console.error('Erreur lors de la création du contenu:', error);
			}
		})
		.on('end', () => {
			console.log('Traitement du CSV terminé.');

			fs.unlinkSync(filePath);
		});
};
