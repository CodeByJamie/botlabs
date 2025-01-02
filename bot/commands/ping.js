const handlers = require("../handlers");
const dependencies = require("../imports/dependencies");

module.exports = {
    enabled: true,
    data: new dependencies.discordjs.SlashCommandBuilder()
    .setName('connect')
    .setDescription('Testing database handler'),

    async execute(interaction) {
        try {
            await handlers.databaseHandler.ConnectToDatabase('botLabs')
            await handlers.databaseHandler.DisconnectFromDatabase()
        } catch (error) {
            console.error(`[ping.js]: ${error}`);
        }
    }
}