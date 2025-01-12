const dependencies = require('../imports/dependencies');

let connections = {};

async function ConnectToDatabase(name) {
	// Check if there is already a connection saved
	if (connections[name]) return connections[name];

	// Check if there is a connection string stored
	if (!process.env.MONGO_URI) return null(console.error(`There is no connection string stored for ${name}`));

	// Connect to the database
	const connection = dependencies.mongoose.createConnection(process.env.MONGO_URI);

	if (connection) {
		console.log(`Successfully connected to the ${name} database!`);
	}
    return connection;
}

async function DisconnectFromDatabase() {
    const disconnect = await dependencies.mongoose.connection.close();
    if (disconnect) return console.log('Disconnected from the database!')

}

const databaseHandler = {
	ConnectToDatabase,
    DisconnectFromDatabase,
};

module.exports = databaseHandler;
