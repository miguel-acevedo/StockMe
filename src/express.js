var http = require("http");



		http.createServer(function (request, response) {

	    response.setHeader('Access-Control-Allow-Origin', '*');
	    // Request methods you wish to allow
	    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	    // Request headers you wish to allow
	    response.setHeader('Access-Control-Allow-Headers', '*');
	    // Set to true if you need the website to include cookies in the requests sent
	    // to the API (e.g. in case you use sessions)
	    response.setHeader('Access-Control-Allow-Credentials', true);

    	response.writeHead(200, {'Content-Type': 'application/json'});

    	console.log(request.params('stock'));

		var url = 'https://finance.google.com/finance?q='+ 'V' +'&output=json';
		var request = require("request");
		request(url, function (error, response1, body) {
		  if (!error && response.statusCode == 200) {
		     //var jsonObject = JSON.parse(response);
		    	 body = body.substring(body.indexOf("/") + 1);

		    	 //console.log(body);

		    	 response.end(body.slice(1));

		       }
		});
		   
		   // Send the response body as "Hello World"
		   //response.end(body.slice(1));
		   //response.end("Hi");

		}).listen(2000);

		// Console will print the message
		console.log('Server running at 2000');

