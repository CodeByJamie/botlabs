// Import all required dependencies
const discordjs = require('discord.js');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv').config();

// Construct the dependencies object
const dependencies = {
	discordjs,
	fs,
	path,
	dotenv,
};

module.exports = dependencies;
