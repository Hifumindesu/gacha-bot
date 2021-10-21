// When the settings button in the roll menu is pressed
const { getPreference } = require('../info/preferences.js');
const { getEmbed, getGenderRow, getSourceRow, updateButtons } = require('../info/settingsMenu.js');

module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		if (!interaction.isButton()) return;
		if (interaction.customId !== 'settings') return;

		const avatar = interaction.user.avatarURL();
		const gender = getPreference('gender');
		const source = getPreference('source');

		updateButtons(gender, source);

		const embed = getEmbed(interaction, avatar, gender, source, false);
		const genderRow = getGenderRow();
		const sourceRow = getSourceRow();

		try {
			interaction.reply({
				ephemeral: true,
				embeds: [embed],
				components: [genderRow, sourceRow],
			});
		}
		catch (error) {
			console.log(error);
		}
	},
};
