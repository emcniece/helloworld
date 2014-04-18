// web.js

/*=============================================
=            Variable Declarations            =
=============================================*/
var express = require("express");
var logfmt = require("logfmt");
var mysql = require("mysql");
var app = express();



/*=====================================
=            Init Routines            =
=====================================*/
app.use(logfmt.requestLogger());
var connection = mysql.createConnection({
  host     : 'us-cdbr-east-05.cleardb.net',
  user     : 'ba99510784f696',
  password : '55d00900'
});





/*=====================================
=            Output Action            =
=====================================*/

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

connection.end();



app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/test', function(req, res) {
  res.send('Hello Test!');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});