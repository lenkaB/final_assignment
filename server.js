
var express = require('express');
var chance = require('chance').Chance();
var app = express();





        var chance = require('chance').Chance();
    
        const have = ['should', 'are supposed to', 'must', 'have to'];
        const start = ['be busy', 'start', 'go back to', 'resume'];
        const verb = ['working', 'typing', 'writing'];
        const adjectives = ['energetically', 'eager', 'enthusiastic'];
        const time = ['right now', 'instantly', 'right away', 'at once', 'straightaway'];

        function choice(array) {
            var index = chance.natural({
                'min': 0,
                'max': array.length - 1
            });
            return array[index];

        }

        function maybe(array) {
            if (chance.bool()) {
                return choice(array);
            } else {
                return '';
            }
        }

        function procrast() {
            var message = 'Hi! You ' + choice(have) + ' ' + choice(start) + ' ' + choice(verb) + ' ' + maybe(adjectives) + ' ' + choice(time) + '. ';
            return message;

        }








//setting middleware
app.use(express.static(__dirname + "/public")); //Serves resources from public folder


 // import node.js http
    var server = require('http').Server(app);

    
    // import socket.io
    var io = require('socket.io')(server);  // npm install --save socket.io



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


io.on('connection', function(socket) {

console.log('got a connection');
 socket.on('procrast', function() {

    // send back message
        msg = procrast();
  	io.emit('message', msg);

  });});

