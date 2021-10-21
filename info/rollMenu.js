// Build the roll menu
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');


const embed = new MessageEmbed()
	.setColor('#000000')
	.setTitle('')
	.setDescription('Press "Start" to begin.')
	.setTimestamp()
	.setFooter('');

const startButton = new MessageButton()
	.setCustomId('start')
	.setLabel('Start')
	.setStyle('PRIMARY')
	.setDisabled(false);

const settingsButton = new MessageButton()
	.setCustomId('settings')
	.setLabel('Settings')
	.setStyle('SECONDARY')
	.setDisabled(false);

const row = new MessageActionRow()
	.addComponents(
		startButton,
		settingsButton,
	);

const buttonList = [
	'start',
	'settings',
	'cancel',
];


module.exports = {
	data: embed, row, buttonList,

	getButtonList() {
		return buttonList;
	},

	getEmbed(interaction, avatar, gender, source) {
		embed.setTitle(`${ interaction.user.username }'s roll session`)
			.setFooter(`${ interaction.user.tag }`, avatar)
			.setFields(
				{ name: 'Roll Settings', value: 'Press the Settings button to edit' },
				{ name: 'Gender', value: `${ gender }`, inline: true },
				{ name: 'Source', value: `${ source }`, inline: true },
			);

		return embed;
	},

	getRow() {
		console.log(row.components);
		return row;
	},

	updateButtons(rolls) {
		if (rolls < 1) startButton.setDisabled(true);
		else startButton.setDisabled(false);

		row.spliceComponents(0, 2, startButton, settingsButton);
	},
};