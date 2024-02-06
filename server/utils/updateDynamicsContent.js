import axios from 'axios';

export const updateDynamicsContent = async (id, name) => {
	try {
		const data = JSON.stringify({
			item: {
				name,
			},
		});

		const config = {
			method: 'put',
			url: `https://${process.env.zendeskSubdomain}.zendesk.com/api/v2/dynamic_content/items/${id}.json`,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Basic ${process.env.ZENDESK_TOKEN}`,
			},
			data,
		};

		const response = await axios(config);
		console.log(JSON.stringify(response.data));
	} catch (error) {
		console.error(
			'Erreur lors de la mise à jour du contenu dynamique:',
			error.message
		);
	}
};
