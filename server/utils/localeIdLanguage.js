import axios from 'axios';

export const localeIdLanguage = async () => {
	try {
		const config = {
			method: 'get',
			url: `https://${process.env.zendeskSubdomain}.zendesk.com/api/v2/locales.json`,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Basic ${process.env.ZENDESK_TOKEN}`,
			},
		};

		const response = await axios(config);
		const locales = response.data.locales;

		console.log('locales:', locales);

		return locales;
	} catch (error) {
		console.error(
			'Erreur lors de la récupération des locales:',
			error.message
		);
	}
};
