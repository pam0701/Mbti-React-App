const mysql = require('mysql');
const { connect } = require('react-redux');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'passwd',
  port: '3306',
  database: 'mydb',
});

connection.connect();

module.exports = connection;
