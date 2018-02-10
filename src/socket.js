const io = require('socket.io')();
io.origins('*:*')
var yahooFinance = require('yahoo-finance');

var connections = [];

io.on('connection', (client) => {
	connections.push(client);
// Will send back data about stocks.
    console.log("There are currently %s people connected", connections.length);

  client.on('subscribeToTimer', (stockRequest) => {

  		//console.log(stockRequest);
 		var dummyData = {'0':"AAPL", 
 						 '1':"TWTR", 
 						 '2':"FB",
 						 '3':"WFC",
 						 '4':"MCD",
 						 '5':"PSO",
 						 '6':"V"}

  		yahooFinance.quote({
		  symbols: Object.values(dummyData),
		  modules: [ 'price', 'summaryDetail' ] // see the docs for the full list
		}, function (err, quotes) {
		  //res.end(JSON.stringify(quotes));
		  client.emit('timer', quotes);
		});


    console.log('client is subscribing to timer with interval ');
    setInterval(() => {

		yahooFinance.quote({
		  symbols: ["AAPL", "TWTR", "WMT", "FB", "WFC", "MCD", "PSO"],
		  modules: [ 'price', 'summaryDetail' ] // see the docs for the full list
		}, function (err, quotes) {
		  //res.end(JSON.stringify(quotes));
		  client.emit('timer', quotes);
		});

    }, 10000000);
  });



  client.on('subscribeToNewStock', (stockInfo) => {

  	console.log("Will fetch info for " + stockInfo);

  	yahooFinance.quote({
		symbols: [stockInfo],
		modules: [ 'price', 'summaryDetail' ] // see the docs for the full list
	}, function (err, quotes) {
		client.emit('stockInfo', quotes);
	});

  });

    client.on('disconnect', (data) => {
        connections.splice(connections.indexOf(io), 1);
        console.log("Someone disconnected");
    });

});


const port = 2200;
io.listen(port);
console.log('listening on port!! ', port);