// List of user preferences
const preferences = new Map([
	['gender', 'Female'],
	['source', 'Anime'],
]);

module.exports = {
	getPreference(preference) {
		return preferences.get(preference);
	},

	setPreference(preference) {
		switch (preference) {
			case 'maleGender':
				preferences.set('gender', 'Male');
				break;
			case 'femaleGender':
				preferences.set('gender', 'Female');
				break;
			case 'anyGender':
				preferences.set('gender', 'Any');
				break;
			case 'animeSource':
				preferences.set('source', 'Anime');
				break;
			case 'mangaSource':
				preferences.set('source', 'Manga');
				break;
			case 'gameSource':
				preferences.set('source', 'Games');
				break;
			case 'anySource':
				preferences.set('source', 'Any');
				break;
			default:
				break;
		}
		return true;
	},
};