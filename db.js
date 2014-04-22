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

 


}; // module.exports
