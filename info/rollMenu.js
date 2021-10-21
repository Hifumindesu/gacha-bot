// Build the roll menu
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');


const embed = new MessageEmbed()
	.setColor('#000000')
	.setTitle('')
	.setDescription('Press "Start" to begin.')
	.setTimestamp()
	.setFooter('');

const row = new MessageActionRow()
	.addComponents(
		new MessageButton()
			.setCustomId('start')
			.setLabel('Start')
			.setStyle('PRIMARY'),
		new MessageButton()
			.setCustomId('settings')
			.setLabel('Settings')
			.setStyle('SECONDARY'),
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
			.addFields(
				{ name: 'Roll Settings', value: 'Press the Settings button to edit' },
				{ name: 'Gender', value: `${ gender }`, inline: true },
				{ name: 'Source', value: `${ source }`, inline: true },
			);

		return embed;
	},

	getRow() {
		return row;
	},
};