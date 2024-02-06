import axios from 'axios';

export const allDynamicsContent = async () => {
	try {
		const config = {
			method: 'get',
			url: `https://${process.env.zendeskSubdomain}.zendesk.com/api/v2/dynamic_content/items.json`,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Basic ${process.env.ZENDESK_TOKEN}`,
			},
		};

		const response = await axios(config);
		const dynamicsContent = response.data.items;

		return dynamicsContent;
	} catch (error) {
		console.error(
			'Erreur lors de la récupération des contenus dynamiques:',
			error.message
		);
	}
};
