const express = require('express');
const APP = express();
const PATH = require('path');
var dt = require('./app/modulos/modulo1');
var con = require('./app/modulos/dbConnection');

APP.set('port', 3001);

APP.use(express.static(PATH.join(__dirname, 'app')));

APP.listen(APP.get('port'), () => {
    console.log(`Aplicacion corriendo en el puerto ${APP.get('port')}`);
    console.log(__dirname);
});

/*var http = require('http');
var url = require('url');
var fs = require('fs');
var adr = 'http://localhost:3000/summer.html';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(" The date and time are currently: " +dt.myDateTime());
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.write(txt);
  fs.readFile('./app/index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.write(txt);
    var q = url.parse(req.adr, true);
    var filename = "." + q.pathname;
    
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    res.write("The date and time are currently: " +dt.myDateTime());
    
    res.write(data);
    return res.end();
  });
}).listen(3000);*/

var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.write("The date and time are currently: " +dt.myDateTime());
    return res.end();
  });
}).listen(3000);