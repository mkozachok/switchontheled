var express = require('express');
var app = express();
var io = require('socket.io')(app.listen(8081));
var five = require('johnny-five');

app.use(express.static(__dirname + '/app'));

app.get('/', function (res) {
  	res.sendfile('/index.html');
});

var board = new five.Board({
  	repl:false
});

board.on("ready", function() {

  var led = new five.Led(13);

    io.on('connection', function (socket) {
        socket.on('toggle', function () {
			  led.stop();
        });
		
        socket.on('blink', function () {
              led.blink();
        });
    });
});