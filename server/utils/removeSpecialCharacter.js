// export function removeSpecialCharactersAndLowercase(str) {
// 	console.log(str);

// 	return str
// 		.normalize('NFD')
// 		.replace(/[\u0300-\u036f]/g, '')
// 		.replace(/[^a-zA-Z0-9]/g, '')
// 		.toLowerCase();
// }

export function removeSpecialCharactersAndLowercase(str) {
	console.log(str);

	return str
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^a-zA-Z0-9 ]/g, '')
		.toLowerCase();
}
