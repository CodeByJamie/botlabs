const dependencies = require('../imports/dependencies');
const commandHandler = require('./commandHandler');

async function startClient() {
	try {
		// Create a new client
		const client = new dependencies.discordjs.Client({
			intents: Object.values(dependencies.discordjs.GatewayIntentBits).map((intent) => {
				return dependencies.discordjs.GatewayIntentBits[intent];
			}),
		});

		// Login into the client using the client token
		await client.login(process.env.CLIENT_TOKEN);

		// Load commands once client is ready
		client.on(dependencies.discordjs.Events.ClientReady, async (readyClient) => {
			console.log(`Logged in as ${readyClient.user.tag}.`);
			await commandHandler.fetchCommands(readyClient);
		});

		// return the client object
		return client;
	} catch (error) {
		console.error(`
            [clientHandler.js - startClient()]: ${error}
        `);
	}
}

async function stopClient(client) {
	await client.destroy();
	console.error(`Server has stopped.`)
	return true;
}

const clientHandler = {
	startClient,
	stopClient,
};

module.exports = clientHandler;
