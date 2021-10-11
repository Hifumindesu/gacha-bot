// Bind the bot to the specified channel
const { SlashCommandBuilder } = require('@discordjs/builders');
const { hasBoundChannel, setBoundChannel } = require('../info/channelBind.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bind')
		.setDescription('Bind the bot to this channel.'),

	async execute(interaction) {
		const channelName = interaction.channel.name;
		const channelId = interaction.channelId;

		if (hasBoundChannel(channelId)) return;

		setBoundChannel(channelId, channelName);

		try {
			await interaction.reply({
				content: 'Bot bound to this channel!',
			});
		}
		catch (error) {
			console.log(error);
		}
	},
};
