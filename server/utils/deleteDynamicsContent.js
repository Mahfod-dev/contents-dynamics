import axios from 'axios';

export const deleteDynamicsContent = async (id) => {
	try {
		const config = {
			method: 'delete',
			url: `https://${process.env.zendeskSubdomain}.zendesk.com/api/v2/dynamic_content/items/${id}.json`,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Basic ${process.env.ZENDESK_TOKEN}`,
			},
		};

		const response = await axios(config);

		return response;
	} catch (error) {
		console.error(
			'Erreur lors de la suppression du contenu dynamique:',
			error.message
		);
	}
};
