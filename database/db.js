const mysql = require('mysql2');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',         // שנה את זה אם המשתמש שלך שונה
  password: '!Shirishahor2005',         // שימי כאן את הסיסמה של MySQL אם יש
  database: 'social_life'   // החליפי לשם מסד הנתונים שלך
}).promise();

module.exports = connection;
