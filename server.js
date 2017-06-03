// Globals
var express = require('express');
var app = express();
var path = require('path');

// Listen
app.listen(7500, function() {
	console.log('server listening on :7500');
});

/*** ROUTES ***/
// Base URL
app.get('/', function(res, req) {
	console.log('Base URL hit');
	res.sendFile(path.resolve('views/index.html'));
});
