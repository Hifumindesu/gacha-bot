// When someone presses a button in the rollsettings command
const { getPreference, setPreference } = require('../info/preferences.js');
const { getButtonList, getEmbed } = require('../info/settingsMenu.js');

module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		if (!interaction.isButton()) return;

		const buttonList = getButtonList();
		if (!buttonList.includes(interaction.customId)) return;

		setPreference(interaction.customId);

		const avatar = interaction.user.avatarURL();
		const gender = getPreference('gender');
		const source = getPreference('source');

		const embed = getEmbed(interaction, avatar, gender, source, true);

		try {
			interaction.update({
				ephemeral: true,
				embeds: [embed],
				components: [],
			});
			console.log(`${interaction.user.tag} in #${interaction.channel.name} pressed a button.`);
		}
		catch (error) {
			console.error(error);
			interaction.reply({ content: 'There was an error.', ephemeral: true });
		}
	},
};
