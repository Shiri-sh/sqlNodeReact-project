var con=require('../../database/db');

async function getCommentsOfPost(post_id){
    try {
        const sql = 'SELECT * FROM comments WHERE post_id = ?';
        const [rows] = await con.query(sql, [post_id]);
        return rows;
    } catch (error) {
        throw error;
    }
}
async function createComment(post_id, title, email, body) {
    try {
        const sqlQuery = `INSERT INTO comments (post_id, title, email, body) VALUES (?, ?, ?, ?)`;
        const [result] = await con.query(sqlQuery, [post_id, title, email, body]);
        const [rows] = await con.query(`SELECT * FROM comments WHERE id = ?`, [result.insertId]);
        return rows[0];
    } catch (err) {
        throw err;
    }
    
}
async function updateTitleComment(id, title) {
    try {
        const sqlQuery = `UPDATE comments SET title = ? WHERE id = ?`;
        const [result] = await con.query(sqlQuery, [title, id]);
        const [rows] = await con.query(`SELECT * FROM comments WHERE id = ?`, [id]);
        return rows[0];
    } catch (err) {
        throw err;
    }
}
async function updateBodyComment(id, body) {
    try {
        const sqlQuery = `UPDATE comments SET body = ? WHERE id = ?`;
        const [result] = await con.query(sqlQuery, [body, id]);
        const [rows] = await con.query(`SELECT * FROM comments WHERE id = ?`, [id]);
        return rows[0];
    } catch (err) {
        throw err;
    }
}
  async function deleteComment(id) {
    try {
       const deleteCom = await con.query(`DELETE FROM comments WHERE id = ?`, [id]);
       return deleteCom.affectedRows === 0 ? null : id;
    } catch (err) {
      throw err;
    }
  }
module.exports={getCommentsOfPost,createComment,updateTitleComment,updateBodyComment,deleteComment};