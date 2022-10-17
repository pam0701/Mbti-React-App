const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'passwd',
  port: '3306',
  database: 'kdtdb',
});

connection.connect();

module.exports = connection;
