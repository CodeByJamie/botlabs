const dependencies = require('./imports/dependencies');
const handlers = require('./handlers');

(async () => {
	// Start the client
	const client = await handlers.clientHandler.startClient();

	client.on(dependencies.discordjs.Events.InteractionCreate, async (interaction) => {
		try {
			if (interaction.isChatInputCommand()) await handlers.commandHandler.runCommands(client, interaction);
		} catch (error) {
			console.warn(`[clientOn - InteractionCreate]: ${error}`);
			await interaction.reply({
				embeds: [
					new dependencies.discordjs.EmbedBuilder()
						.setColor('#2f3136')
						.setDescription('Failed to execute command.'),
				],
			});
		}
	});

	process.on('SIGINT', async () => {
		await handlers.clientHandler.stopClient(client);
		process.exit();
	});
})();
