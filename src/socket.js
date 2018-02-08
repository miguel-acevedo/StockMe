const io = require('socket.io')();
io.origins('*:*')
var yahooFinance = require('yahoo-finance');

io.on('connection', (client) => {

// Will send back data about stocks.

  client.on('subscribeToTimer', (interval) => {


		yahooFinance.quote({
		  symbols: ["AAPL", "TWTR", "WMT", "FB", "WFC", "MCD", "PSO"],
		  modules: [ 'price', 'summaryDetail' ] // see the docs for the full list
		}, function (err, quotes) {
		  //res.end(JSON.stringify(quotes));
		  client.emit('timer', quotes);
		});

    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {

		yahooFinance.quote({
		  symbols: ["AAPL", "TWTR", "WMT", "FB", "WFC", "MCD", "PSO"],
		  modules: [ 'price', 'summaryDetail' ] // see the docs for the full list
		}, function (err, quotes) {
		  //res.end(JSON.stringify(quotes));
		  client.emit('timer', quotes);
		});

    }, interval);
  });



  client.on('subscribeToStocks', (interval) => {

  	client.emit('timer', new Date());

    console.log('client is subscribing to Stocks ', interval);
    setInterval(() => {

      client.emit('timer', new Date());

    }, interval);
  });

});

const port = 2200;
io.listen(port);
console.log('listening on port!! ', port);