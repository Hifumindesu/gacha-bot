// Bind/Unbind the bot to/from the channel this command is used in
const { SlashCommandBuilder } = require('@discordjs/builders');
const { hasBoundChannel, setBoundChannel, delBoundChannel } = require('../info/channelBind.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bind')
		.setDescription('Bind the bot to this channel.')
		.addBooleanOption(option =>
			option.setName('unbind')
				.setDescription('Whether to unbind the bot instead.')
				.setRequired(false)),

	async execute(interaction) {
		let action = '';

		const channelName = interaction.channel.name;
		const channelId = interaction.channelId;

		if (interaction.options.getBoolean('unbind') === true) {
			if (!hasBoundChannel(channelId)) return;
			delBoundChannel(channelId);
			action = 'unbound from';
		}
		else if (interaction.options.getBoolean('unbind') === false || interaction.options.getBoolean('unbind') === null) {
			if (hasBoundChannel(channelId)) return;
			setBoundChannel(channelId, channelName);
			action = 'bound to';
		}
		else {
			console.log('kek broken');
		}

		try {
			await interaction.reply({
				content: `Bot ${ action } this channel!`,
			});
		}
		catch (error) {
			console.log(error);
		}
	},
};
