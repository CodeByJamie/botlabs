const dependencies = require('../imports/dependencies');

let commands = [];

async function fetchCommands(client) {
	// Initialize collection to store commands
	client.commands = new dependencies.discordjs.Collection();

	// Fetch the command directory
	const commandDirectory = dependencies.path.join(__dirname, '../commands');
	// Check if the command directory exists, if not throw error.
	if (!dependencies.fs.existsSync(commandDirectory)) return console.warn(`Failed to fetch the command directory.`);

	// Fetch all commands & folders in the directory
	const commandFiles = dependencies.fs.readdirSync(commandDirectory);

	// Check if there are any files / folders in the directory
	if (!commandFiles || commandFiles.length === 0) return console.warn(`No files / folders found in the command directory.`);
	for (const file of commandFiles) {
		// Fetch the path of the folder / file
		const commandPath = dependencies.path.join(commandDirectory, file);

		// Check if the file is a folder
		if (dependencies.fs.statSync(commandPath).isDirectory()) {
			const subFiles = dependencies.fs.readdirSync(commandPath);

			for (const subFile of subFiles) {
				// Check if file is not a JS file
				if (!subFile.endsWith('.js')) continue;

				// Fetch the path of the sub command
				const subCommandPath = dependencies.path.join(commandPath, subFile);

				const command = require(subCommandPath);
				// Check if the sub file is a valid command
				if ('data' in command && 'execute' in command) {
					commands.push(command.data.toJSON());
					client.commands.set(command.data.name, command);
					console.log(commands)
				} else {
					console.warn(
						`[commandHandler.js - fetchCommands]: The ${subFile} is missing the data or execute method.`
					);
				}
			}
			// Runs if the condition returns a file
		} else {
			// Check if file is not a JS file
			if (!file.endsWith('.js')) continue;

			const commandFile = require(commandPath);

			console.log(commandFile)
			
			// Check if the file is a valid command
			if ('data' in commandFile && 'execute' in commandFile) {
				commands.push(commandFile.data.toJSON());
				client.commands.set(commandFile.data.name, commandFile);
				console.log(commandFile)
			} else {
				console.warn(`[commandHandler.js - fetchCommands]: The ${commandFile} is missing the data or execute method.`);
			}
		}
	}
	// If there are commands stored, register them
	if (commands.length > 0) await registerCommands(client);
}

async function registerCommands(client) {
	// Construct the rest object
	const rest = new dependencies.discordjs.REST().setToken(process.env.CLIENT_TOKEN);

	// Try to register the commands on the discord API
	try {
		const data = await rest.put(dependencies.discordjs.Routes.applicationGuildCommands(client.user.id, process.env.GUILD_ID), {
			body: commands,
		});

		// if the data exists in the commands display a success message
		if (data) console.log(`[commandHandler.js - registerCommands()]: Successfully registered application commands.`);
	} catch (error) {
		console.error(`[commandHandler.js - registerCommands()]: ${error}`);
	}
}

async function runCommands(client, interaction) {
	// Fetch the command that is trying to be ran
	const command = client.commands.get(interaction.commandName);

	// if the command doesn't exist anymore, display an error.
	if (!command) console.error('command not found');

	try {
		
		await command.execute(interaction);
	} catch (error) {
		console.error(`[commandHandler.js - runCommands()]: ${error}`);
	}
}

module.exports = {
	fetchCommands,
	registerCommands,
	runCommands,
};
