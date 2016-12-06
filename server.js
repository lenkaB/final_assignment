

    // import express ()
    var express = require('express');		// npm install --save express
    var app = express();

    // import node.js http
    var server = require('http').Server(app);

    // import socket.io
    var io = require('socket.io')(server);	// npm install --save socket.io



/* ----------------------------------
	Server and Socket Configuration
--------------------------------------*/

// tell express to server our index.html file, when someone requests the server, send the index.html file
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});


/* -------------------
	Start the server
----------------------*/

// listen to connection on port 8088 --> http://localhost:8088
server.listen(8088, function () {
	console.log('listening on port: ' + 8088);
});

