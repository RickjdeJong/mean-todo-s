'use strict';

var express = require('express');
var todos = require('../../mock/todos.json');

// set-up an API Router for ease of creation
var router = express.Router();

// Set-up /todos API call
router.get('/todos', function(req, res) {
	res.json({todos: todos});
});

// TODO: Add POST route to create new entries

// TODO: Add PUT route to update existing entries

// TODO: Add DELETE route to delete entries

module.exports = router;
