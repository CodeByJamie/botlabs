// Fetch all handlers
const commandHandler = require("./commandHandler");
const clientHandler = require("./clientHandler");
const databaseHandler = require('./databaseHandler');

// Construct the handlers object
const handlers = {
    commandHandler, 
    clientHandler,
    databaseHandler,
}

module.exports = handlers;