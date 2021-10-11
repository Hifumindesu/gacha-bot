// Check bot response delay
const { SlashCommandBuilder } = require('@discordjs/builders');
const boundChannels = require('../info/channelBind.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Checks the bot\'s ping.'),

	async execute(interaction) {
		let filter = false;
		boundChannels.data.forEach((value) => {
			console.log(value);
			console.log(interaction.channelId);
			if (interaction.channelId != value) filter = true;
		});

		if (filter) return;

		try {
			const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
			interaction.editReply(`Roundtrip latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
		}
		catch (error) {
			console.log(error);
		}
	},
};
