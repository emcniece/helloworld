// db.js
// ========
var mysql = require("mysql");

var pool  = mysql.createPool({
    host     : 'us-cdbr-east-05.cleardb.net',
    user     : 'ba99510784f696',
    password : '55d00900',
    database : 'heroku_5d9641444500b51'
});

exports.pool = pool;


module.exports = {

  /*================================================
  =            Test Database Connection            =
  ================================================*/
	getEvents: function(){
    
    pool.getConnection(function(err, connection){
      connection.query( "select * from events",  function(err, rows){
        if(err) {
          throw err;
        }else{
          console.log( 'rows: ', rows );
        }
      });
      
      connection.release();
    });
  } // getEvents

  testCon: function(conn){
    var output = '';
	//conn.connect();

	connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
	  if (err) throw err;

	  console.log('The solution is: ', rows[0].solution);
	  output = rows;
	});

	//conn.end();

	return output;
    
  },

  /*========================================
  =            Close Connection            =
  ========================================*/ 
  
  close: function(){

  	conn.close();
    return true;
  }



}; // module.exports
