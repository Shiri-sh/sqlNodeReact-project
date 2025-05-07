var con=require('../../database/db');

async function getTodosOfUser(userId) {
    try {
        const sql = 'SELECT id,title,completed FROM todos WHERE user_id = ?';
        const [rows] = await con.query(sql, [userId]);
        return rows;
    } catch (error) {
        throw error;
    }
}

async function createTodo(user_id, title, completed) {
    try {
      const sqlQuery = `INSERT INTO todos (user_id, title, completed) VALUES (?, ?, ?)`;
      const [result] = await con.query(sqlQuery, [user_id, title, completed]);
      const [rows] = await con.query(`SELECT * FROM todos WHERE id = ?`, [result.insertId]);
      return rows[0]; 
    } catch (err) {
      throw err;
    }
  }
  async function deleteTodo(id) {
    try{
        const delTodo = await con.query(`DELETE FROM todos WHERE id = ?`, [id]);
        if (delTodo[0].length === 0) {
          const error = new Error("Todo not found");
          error.status = 404;
          throw error;
        }
        return delTodo[0];
    } catch (err) {
      throw err;
    }
  }
  async function updateTodo(id, title, completed) {
    try {
      const sqlQuery = `UPDATE todos SET title = ?, completed = ? WHERE id = ?`;
      const [result] = await con.query(sqlQuery, [title, completed, id]);
      return result[0];
    } catch (err) {
      throw err;
    }
  }
module.exports={getTodosOfUser,createTodo,deleteTodo,updateTodo};
   