const express = require('express')
const app = express()
var bodyParser = require('body-parser')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  next();
});

app.get('/', (req, res) => {

	var stockName = req.query.stock;

		res.setHeader('Access-Control-Allow-Credentials', true);

		res.writeHead(200, {'Content-Type': 'application/json'});

		var dummy = {
			"stock":"AAPL"
		}

	var url = 'https://finance.google.com/finance?q='+ stockName +'&output=json';
	var request = require("request");
	// Part below is causing all the delay
	request(url, function (error, response1, body) {
		if (!error && res.statusCode == 200) {
				 body = body.substring(body.indexOf("/") + 1);

				 //console.log(body);

				 res.end(body.slice(1));

				 }
	}); 

})


app.listen(2000, () => console.log('Example app listening on port 2000!'))
