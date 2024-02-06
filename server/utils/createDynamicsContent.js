import axios from 'axios';
import { removeSpecialCharactersAndLowercase } from './removeSpecialCharacter.js';

export const createDynamicContent = async (name, content, language) => {
	let str = removeSpecialCharactersAndLowercase(name);

	try {
		const data = JSON.stringify({
			item: {
				name: str,
				content,
				default_locale_id: language,
			},
		});

		const config = {
			method: 'post',
			url: `https://${process.env.zendeskSubdomain}.zendesk.com/api/v2/dynamic_content/items.json`,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Basic ${process.env.ZENDESK_TOKEN}`,
			},
			data,
		};

		const response = await axios(config);
		return response.data.item;
	} catch (error) {
		console.error(
			'Erreur lors de la création du contenu dynamique:',
			error.message
		);
	}
};
