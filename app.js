/*express routing done on cloud9
visitng "/" ahould print "Hi there, welcome to my assignmnt!"
============================================================
Visiting "/speaki/pig" should print "the pig says oink"
Visiting "/speaki/cow" should print "the pig says moo"
Visiting "/speaki/dog" should print "the pig says woof"
=======================================================
Visiting "/repeat/hello/3" should print "hello hello hello"
Visiting "/repeat/hello/5" should print "hello hello hello hello hello"
Visiting "/repeat/blah/2" should print "blah blah"

If a user visits any other route, print:
"Sorry, page not found..."*/

var express = require('express');
var app = express();
app.get('/', function(req, res) {
	res.send('Hi there, welcome to my assignmnt!');
});

app.get('/speak/:animal', function(req, res) {
	var sounds = {
		pig      : 'Oink',
		cow      : 'Moo',
		dog      : 'Woof',
		cat      : 'I hate you human',
		goldfish : '....'
	};

	var animal = req.params.animal.toLowerCase();
	var sound = sounds[animal];
	res.send('The ' + animal + " says '" + sound + "'");
});

app.get('/repeat/:message/:times', function(req, res) {
	var message = req.params.message;
	var times = Number(req.params.times);
	var result = '';

	for (i = 0; i < times; i++) {
		result += message + ' ';
	}
	res.send(result);
});

app.get('*', function(req, res) {
	res.send('Sorry, page not found...');
});

app.listen(process.env.PORT, process.env.IP, function() {
	console.log('Now serving your app!');
});
