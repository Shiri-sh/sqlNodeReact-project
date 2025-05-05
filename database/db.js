const mysql = require('mysql2');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "!Shirishahor2005",
  database: "social_Life"
});

con.connect((err) => {
  if (err) {console.log(err) ;return;};
  console.log("Connected to DB!");

});
module.exports = con;

