const mysql = require('mysql');
const { connect } = require('react-redux');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'kdt',
  password: 'passwd',
  port: '3306',
  database: 'kdt-local',
});

connection.connect();

module.exports = connection;
