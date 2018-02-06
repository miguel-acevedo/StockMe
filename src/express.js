const express = require('express')
const app = express()
var bodyParser = require('body-parser');
var yahooFinance = require('yahoo-finance');

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


		// This replaces the deprecated snapshot() API
		yahooFinance.quote({
		  symbols: [stockName, "AAPL", "TWTR", "WMT", "FB", "WFC", "MCD", "PSO"],
		  modules: [ 'price', 'summaryDetail' ] // see the docs for the full list
		}, function (err, quotes) {
		  res.end(JSON.stringify(quotes));
		});
/*
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
*/

})


app.listen(2000, () => console.log('Example app listening on port 2000!'))
