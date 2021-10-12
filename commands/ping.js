// Check bot response delay
const { SlashCommandBuilder } = require('@discordjs/builders');
const { hasBoundChannel } = require('../info/channelBind.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Checks the bot\'s ping.'),

	async execute(interaction) {
		const channelId = interaction.channelId;

		if (!hasBoundChannel(channelId)) return;

		try {
			const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
			interaction.editReply(`Roundtrip latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
		}
		catch (error) {
			console.log(error);
		}
	},
};
