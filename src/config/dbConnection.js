const mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Cisco0105',
  database: 'FlaxNam'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("IT IS Connected");
  /*var sql = "INSERT INTO Login (username, contra) VALUES ('AkumaNam', 'Cisco0105')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted, ID: " + result.insertId);
  });*/
  con.query("SELECT * FROM Login", function(err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

