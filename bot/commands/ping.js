const handlers = require('../handlers');
const dependencies = require('../imports/dependencies');

module.exports = {
	enabled: true,
	data: new dependencies.discordjs.SlashCommandBuilder()
	.setName('ping')
	.setDescription('ping'),

	async execute(interaction) {
		try {
			const embed = new dependencies.discordjs.EmbedBuilder()
				.setDescription('test')
				.setFields([
					{
						name: 'test',
						value: 'testing',
					},
				])
				.setColor('#2f3136');

			interaction.reply({
				embeds: [embed],
			});
		} catch (error) {
			console.error(`[ping.js]: ${error}`);
		}
	},
};
