#!/usr/bin/env node
var express = require('express');
var fs = require('fs');
var infile = "index.html";

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var txt = fs.readFileSync('./index.html','utf8');
  response.send(txt.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
