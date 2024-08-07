const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cat')
		.setDescription('cat!'),
	async execute(interaction) {
		await interaction.reply('Cats are very cute');
	},
};