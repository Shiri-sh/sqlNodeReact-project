var con=require('../../database/db');

async function getPostsOfUser(userId) {
    try {
        const sql = 'SELECT id,title,body FROM posts WHERE user_id = ?';
        const [rows] = await con.query(sql, [userId]);
        console.log("rows",rows);
        return rows;
    } catch (error) {
        throw error
    }
}
async function getAllPosts() {
  try {
      const sql = 'SELECT id,title,body FROM posts';
      const [rows] = await con.query(sql);
      console.log("rows",rows);
      return rows;
  } catch (error) {
      throw error;
  }
}
async function createPost(user_id, title, body) {
    try {
      const sqlQuery = `INSERT INTO posts (user_id, title, body) VALUES (?, ?, ?)`;
      const [result] = await con.query(sqlQuery, [user_id, title, body]);
      const [rows] = await con.query(`SELECT * FROM posts WHERE id = ?`, [result.insertId]);
      return rows[0];
    } catch (err) {
      throw err;
    }
  }
  async function updatePost(id,user_id, title, body) {
    try {
      const sqlQuery = `UPDATE  posts SET user_id = ?, title = ?, body = ? WHERE postID = ?`;
      const [result] = await con.query(sqlQuery, [user_id, title, body, id]);
      const [rows] = await con.query(`SELECT * FROM posts WHERE id = ?`, [result.insertId]);
      return rows[0];
    } 
    catch (err) {
      throw err;
    }
  }
  async function deletePost(id) {
    try {
       await con.query( `DELETE FROM comments WHERE post_id = ?`, [id]);
       const delPost = await con.query(`DELETE FROM posts WHERE id = ?`, [id]);
       return delPost.affectedRows === 0 ? null : id;
    } catch (err) {
      throw err;
    }
  }
module.exports={getPostsOfUser,createPost,getAllPosts,updatePost,deletePost};
   