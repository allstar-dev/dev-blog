var express = require('express');

var app = express();

app.use('/', function(req, res) {
	res.send('Hello')
});

app.listen(process.env.PORT || 3000);