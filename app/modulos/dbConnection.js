const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Cisco0105',
  database: 'FlaxNam'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("IT IS Connected");
});

exports.con;