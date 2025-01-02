// Import all required dependencies
const discordjs = require('discord.js');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

// Construct the dependencies object
const dependencies = {
	discordjs,
	fs,
	path,
	dotenv,
	mongoose,
};

module.exports = dependencies;
