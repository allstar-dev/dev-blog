var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.json({message: 'Hello world'});
});

app.get('/info', function(req, res) {
	res.json({message: 'App running...'});
});

app.use(express.static('public'));

app.listen(process.env.PORT || 3000);

module.exports = app;