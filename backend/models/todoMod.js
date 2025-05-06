var con=require('../../database/db');

async function getTodosOfUser(userId) {
    try {
        const sql = 'SELECT id,title,completed FROM todos WHERE user_id = ?';
        const [rows] = await con.query(sql, [userId]);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function createTodo(user_id, title, completed) {
    try {
      const sqlQuery = `INSERT INTO todos (user_id, title, completed) VALUES (?, ?, ?)`;
      const [result] = await pool.query(sqlQuery, [user_id, title, completed]);
      const [rows] = await pool.query(`SELECT * FROM todos WHERE id = ?`, [result.insertId]);

      if (rows.length > 0) {
        return rows[0]; 
      } else {
        throw new Error('Post not found');
      }
    } catch (err) {
      throw err;
    }
  }
module.exports={getTodosOfUser,createTodo};
   