var http = require('http');
var mustache = require('mustache');
var calculator = require('./calculator');

requestHandler = function(req, res) {
	console.log('handler');
	console.log(req, res);

	if (req.url == '/') {
		res.end("url is not valid");
	} else {
		var params = new String(req.url);
		var num1 = params.split('&')[0].split('=')[1];
		var num2 = params.split('&')[1].split('=')[1];
		var operation = params.split('&')[2].split('=')[1];
		var result = calculator.getCalculationFunction(Number(num1), Number(num2), operation);
		res.end('<h1>'+ operation + ' = '+ result +'</h1>');
	}
}
var server = http.createServer(requestHandler);

server.listen(3000, function() {
	console.log('started server on port 3000');
})
