// Start a roll session
const { SlashCommandBuilder } = require('@discordjs/builders');
const { getPreference } = require('../info/preferences.js');
const { getEmbed, getRow, updateButtons } = require('../info/rollMenu.js');

module.exports = {
	data:
	new SlashCommandBuilder()
		.setName('roll')
		.setDescription('Start a roll session.'),

	async execute(interaction) {
		const avatar = interaction.user.avatarURL();
		const gender = getPreference('gender');
		const source = getPreference('source');

		const rolls = 0;
		updateButtons(rolls);

		const embed = getEmbed(interaction, avatar, gender, source);
		const row = getRow();

		try {
			interaction.reply({
				ephemeral: true,
				embeds: [embed],
				components: [row],
			});
		}
		catch (error) {
			console.log(error);
		}
	},
};
