var http = require('http');
var main = require('./main');

var port = 8080;
var ip = "127.0.0.1";
var server = http.createServer(main.act);
console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);
