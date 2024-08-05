export function getLanguageId(language) {
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

	return numLanguage;
}
