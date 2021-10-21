// Modify roll settings
const { SlashCommandBuilder } = require('@discordjs/builders');
const { getPreference } = require('../info/preferences.js');
const { getEmbed, getGenderRow, getSourceRow, updateButtons } = require('../info/settingsMenu.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('settings')
		.setDescription('Modify your roll settings.'),

	async execute(interaction) {
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
