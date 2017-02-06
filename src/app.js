'use strict';

// Add Express
var express = require('express');
// Add the API Router
var router = require('./api');

// Start the app
var app = express();

// Tell 'Express' to only search for files in following folder
app.use('/', express.static('public'));

// Use the API router
app.use('/api', router);

// Run app on port 3000
app.listen(3000, function() {
	console.log("The server is running on port 3000!");
});