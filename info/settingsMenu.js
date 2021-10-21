// Build the settings menu
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');


const embed = new MessageEmbed()
	.setColor('#000000')
	.setTitle('')
	.setDescription('Use the buttons below to change your settings.')
	.setTimestamp()
	.setFooter('');

const maleGenderButton = new MessageButton()
	.setCustomId('maleGender')
	.setLabel('Male')
	.setStyle('SECONDARY')
	.setDisabled(false);

const femaleGenderButton = new MessageButton()
	.setCustomId('femaleGender')
	.setLabel('Female')
	.setStyle('SECONDARY')
	.setDisabled(false);

const anyGenderButton = new MessageButton()
	.setCustomId('anyGender')
	.setLabel('Any')
	.setStyle('SECONDARY')
	.setDisabled(false);

const animeSourceButton = new MessageButton()
	.setCustomId('animeSource')
	.setLabel('Anime')
	.setStyle('SECONDARY')
	.setDisabled(false);

const mangaSourceButton = new MessageButton()
	.setCustomId('mangaSource')
	.setLabel('Manga')
	.setStyle('SECONDARY')
	.setDisabled(false);

const gameSourceButton = new MessageButton()
	.setCustomId('gameSource')
	.setLabel('Games')
	.setStyle('SECONDARY')
	.setDisabled(false);

const anySourceButton = new MessageButton()
	.setCustomId('anySource')
	.setLabel('Any')
	.setStyle('SECONDARY')
	.setDisabled(false);

const genderRow = new MessageActionRow()
	.addComponents(
		maleGenderButton,
		femaleGenderButton,
		anyGenderButton,
	);

const sourceRow = new MessageActionRow()
	.addComponents(
		animeSourceButton,
		mangaSourceButton,
		gameSourceButton,
		anySourceButton,
	);

const buttonList = [
	'maleGender',
	'femaleGender',
	'anyGender',
	'animeSource',
	'mangaSource',
	'gameSource',
	'anySource',
];


module.exports = {
	data: embed, genderRow, sourceRow, buttonList,

	getButtonList() {
		return buttonList;
	},

	getEmbed(interaction, avatar, gender, source, isUpdate) {
		if (isUpdate === false) {
			embed.setTitle(`${ interaction.user.username }'s roll settings`)
				.setFooter(`${ interaction.user.tag }`, avatar)
				.setFields(
					{ name: 'Gender', value: `${ gender }`, inline: true },
					{ name: 'Source', value: `${ source }`, inline: true },
				);
		}
		else if (isUpdate === true) {
			embed.setTitle(`${ interaction.user.username }'s roll settings`)
				.setDescription('Settings updated!\nYou may now dismiss this message.')
				.setFooter(`${ interaction.user.tag }`, avatar)
				.setFields(
					{ name: 'Gender', value: `${ gender }`, inline: true },
					{ name: 'Source', value: `${ source }`, inline: true },
				);
		}
		else {
			console.log('Something in the getEmbed function broke');
		}

		return embed;
	},

	getGenderRow() {
		return genderRow;
	},

	getSourceRow() {
		return sourceRow;
	},

	updateButtons(gender, source) {
		switch (gender) {
			case 'Male':
				maleGenderButton
					.setStyle('SUCCESS')
					.setDisabled(true);
				femaleGenderButton
					.setStyle('SECONDARY')
					.setDisabled(false);
				anyGenderButton
					.setStyle('SECONDARY')
					.setDisabled(false);
				break;
			case 'Female':
				maleGenderButton
					.setStyle('SECONDARY')
					.setDisabled(false);
				femaleGenderButton
					.setStyle('SUCCESS')
					.setDisabled(true);
				anyGenderButton
					.setStyle('SECONDARY')
					.setDisabled(false);
				break;
			case 'Any':
				maleGenderButton
					.setStyle('SECONDARY')
					.setDisabled(false);
				femaleGenderButton
					.setStyle('SECONDARY')
					.setDisabled(false);
				anyGenderButton
					.setStyle('SUCCESS')
					.setDisabled(true);
				break;
			default:
				console.log('Something in the updateButtons(gender) function broke.');
				break;
		}

		switch (source) {
			case 'Anime':
				animeSourceButton
					.setStyle('SUCCESS')
					.setDisabled(true);
				mangaSourceButton
					.setStyle('SECONDARY')
					.setDisabled(false);
				gameSourceButton
					.setStyle('SECONDARY')
					.setDisabled(false);
				anySourceButton
					.setStyle('SECONDARY')
					.setDisabled(false);
				break;
			case 'Manga':
				animeSourceButton
					.setStyle('SECONDARY')
					.setDisabled(false);
				mangaSourceButton
					.setStyle('SUCCESS')
					.setDisabled(true);
				gameSourceButton
					.setStyle('SECONDARY')
					.setDisabled(false);
				anySourceButton
					.setStyle('SECONDARY')
					.setDisabled(false);
				break;
			case 'Games':
				animeSourceButton
					.setStyle('SECONDARY')
					.setDisabled(false);
				mangaSourceButton
					.setStyle('SECONDARY')
					.setDisabled(false);
				gameSourceButton
					.setStyle('SUCCESS')
					.setDisabled(true);
				anySourceButton
					.setStyle('SECONDARY')
					.setDisabled(false);
				break;
			case 'Any':
				animeSourceButton
					.setStyle('SECONDARY')
					.setDisabled(false);
				mangaSourceButton
					.setStyle('SECONDARY')
					.setDisabled(false);
				gameSourceButton
					.setStyle('SECONDARY')
					.setDisabled(false);
				anySourceButton
					.setStyle('SUCCESS')
					.setDisabled(true);
				break;
			default:
				console.log('Something in the updateButtons(source) function broke.');
				break;
		}

		genderRow.spliceComponents(0, 3, maleGenderButton, femaleGenderButton, anyGenderButton);
		sourceRow.spliceComponents(0, 4, animeSourceButton, mangaSourceButton, gameSourceButton, anySourceButton);
	},
};