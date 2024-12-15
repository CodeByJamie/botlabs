// Fetch all handlers
const commandHandler = require("./commandHandler");
const clientHandler = require("./clientHandler");
// Construct the handlers object
const handlers = {
    commandHandler, 
    clientHandler,
}

module.exports = handlers;