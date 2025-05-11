const db = require('./db'); 
async function createTable() {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS Passwords (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        password VARCHAR(20) NOT NULL,
        FOREIGN KEY (user_id) REFERENCES Users(id)
        )`
    );
    console.log('Table Passwords created!;)');
    await db.query(`
      INSERT INTO Passwords (user_id, password)
      VALUES 
      (1, '1234'),
      (2, '5678'),
      (3, '4321'),
      (4, '8765'),
      (5, '1111')`
    );
    console.log('Inserted passwords!!!!!:)');
  } catch (err) {
    console.error('Error:', err.message);
  }
}
createTable();
