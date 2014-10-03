var _ = require('underscore');
var http = require('request');

var headers = {
  // FILL ME IN
  // THE USUAL STUFF
  // OR WHATEVER
};

// GRAB & STRINGIFY QUERY FROM USER
var request = document.getElementsByClassName('draft').value().toString(); 
// MAKE IT URL FOR XML-PARSED WIKIPEDIA PAGE
request =  'http://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text&page=' + request + '&format=xml';


// SET OF RESPONSES TO HTTP REQUESTS
var actions = {
  'GET': function(req, res){
    http.get(request, function(err, res, cb) {
      if (err) { throw err; }              // OR USE CALLBACK? OR DON'T
      // res = DATA FROM WIKIPEDIA TO USER
      // cb SHOULD ADD HTML FORMATTING
      cb(res.code, res.headers, res.buffer.toString()); // WON'T NECESSARILY BE PROPERTIES
      res.end(/*PROBABLY SEND BACK THE DATA HERE AMIRITE GUYS*/);
    })
  },
  'POST': function(req, res){

  },

};

exports.act = function(req, res){
  console.log("Serving request type " + req.method + " for url " + req.url);
  var action = actions[req.method];
  if(action){ action(req,res); } // + CALLBACK??
  else { console.log('Not to be rude or anything, but 404.'); }
};



