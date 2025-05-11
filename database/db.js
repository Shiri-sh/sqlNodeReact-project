const mysql = require('mysql2');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',         
  password: 'Sql.User',         
  database: 'social_life'   
}).promise();

module.exports = connection;
