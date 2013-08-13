var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var buffer = new Buffer(50);
app.get('/', function(request, response) {
  // response.send('Hello World 2!');
var text = fs.readFileSync('index.html','utf-8');
  //response.send(buffer.toString(fs.readFileSync('index.html')));
response.send(text);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
