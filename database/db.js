const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',         // שנה את זה אם המשתמש שלך שונה
  password: 'Sql.User',         // שימי כאן את הסיסמה של MySQL אם יש
  database: 'social_life'   // החליפי לשם מסד הנתונים שלך
});

connection.connect((err) => {
  if (err) {
    console.error('❌ Error connecting to MySQL:', err.message);
    return;
  }
  console.log('✅ Connected to MySQL!');
});

module.exports = connection;
