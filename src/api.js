import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:2200');

function subscribeToTimer(cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  // Sends below to server
  var stockRequest = {
  	name: "Miguel"
  }
  socket.emit('subscribeToTimer', stockRequest);
}

function subscribeToNewStock(cb, symbol) {
  socket.on('stockInfo', stock => cb(null, stock));
  // Sends below to server

  socket.emit('subscribeToNewStock', symbol);
}

export { subscribeToTimer, subscribeToNewStock }