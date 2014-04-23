// web.js

/*=============================================
=            Variable Declarations            =
=============================================*/

// Node libraries
var express = require("express");
var logfmt = require("logfmt");
var mysql = require("mysql");

// Local functions
var db = require("./db");

// Init
var app = express();


/*=====================================
=            Init Routines            =
=====================================*/
app.use(logfmt.requestLogger());


/*=====================================
=            Output Action            =
=====================================*/



app.get('/', function(req, res) {
	console.log('req: ', req.connection.remoteAddress);

  var rows = db.getEvents();

	res.send('Hello World!'+rows);

	

});

app.get('/test', function(req, res) {
  res.send('Hello Test!');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});

