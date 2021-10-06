// When someone presses the settings button
const { MessageEmbed } = require('discord.js');
const { MessageActionRow, MessageButton } = require('discord.js');
const { getPreference } = require('../info/preferences.js');

const embed = new MessageEmbed()
	.setColor('#000000')
	.setTitle('')
	.setDescription('Use the buttons below to change your settings.')
	.setTimestamp()
	.setFooter('');

const genderRow = new MessageActionRow();
const sourceRow = new MessageActionRow();

const maleGenderButton = new MessageButton()
	.setCustomId('maleGender')
	.setLabel('Male')
	.setStyle('SECONDARY');

const femaleGenderButton = new MessageButton()
	.setCustomId('femaleGender')
	.setLabel('Female')
	.setStyle('SECONDARY');

const anyGenderButton = new MessageButton()
	.setCustomId('anyGender')
	.setLabel('Any')
	.setStyle('SECONDARY');

const animeSourceButton = new MessageButton()
	.setCustomId('animeSource')
	.setLabel('Anime')
	.setStyle('SECONDARY');

const mangaSourceButton = new MessageButton()
	.setCustomId('mangaSource')
	.setLabel('Manga')
	.setStyle('SECONDARY');

const gameSourceButton = new MessageButton()
	.setCustomId('gameSource')
	.setLabel('Games')
	.setStyle('SECONDARY');

const anySourceButton = new MessageButton()
	.setCustomId('anySource')
	.setLabel('Any')
	.setStyle('SECONDARY');

module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		if (!interaction.isButton()) return;
		if (interaction.customId !== 'settings') return;

		console.log(`${ interaction.user.tag } pressed a button.`);

		const avatar = interaction.user.avatarURL();

		const gender = getPreference('gender');
		const source = getPreference('source');

		switch (gender) {
			case 'Male':
				maleGenderButton
					.setStyle('SUCCESS')
					.setDisabled(true);
				break;
			case 'Female':
				femaleGenderButton
					.setStyle('SUCCESS')
					.setDisabled(true);
				break;
			case 'Any':
				anyGenderButton
					.setStyle('SUCCESS')
					.setDisabled(true);
				break;
			default:
				console.log('Something in the gender switch case broke.');
				break;
		}

		switch (source) {
			case 'Anime':
				animeSourceButton
					.setStyle('SUCCESS')
					.setDisabled(true);
				break;
			case 'Manga':
				mangaSourceButton
					.setStyle('SUCCESS')
					.setDisabled(true);
				break;
			case 'Games':
				gameSourceButton
					.setStyle('SUCCESS')
					.setDisabled(true);
				break;
			case 'Any':
				anySourceButton
					.setStyle('SUCCESS')
					.setDisabled(true);
				break;
			default:
				console.log('Something in the source switch case broke.');
				break;
		}

		genderRow.addComponents(
			maleGenderButton,
			femaleGenderButton,
			anyGenderButton,
		);

		sourceRow.addComponents(
			animeSourceButton,
			mangaSourceButton,
			gameSourceButton,
			anySourceButton,
		);

		embed.setTitle(`${ interaction.user.username }'s roll settings`)
			.setFooter(`${ interaction.user.tag }`, avatar)
			.addFields(
				{ name: 'Gender', value: `${ gender }` },
				{ name: 'Source', value: `${ source }` },
			);

		try {
			interaction.update({
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
