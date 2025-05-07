var con=require('../../database/db');

async function getPostsOfUser(userId) {
    try {
        const sql = 'SELECT id,title,body FROM posts WHERE user_id = ?';
        const [rows] = await con.query(sql, [userId]);
        return rows;
    } catch (error) {
        throw error
    }
}
async function getAllPosts() {
  try {
      const sql = 'SELECT id,title,body FROM posts';
      const [rows] = await con.query(sql);
      return rows;
  } catch (error) {
      throw error;
  }
}
async function createPost(user_id, title, body) {
    try {
      const sqlQuery = `INSERT INTO posts (user_id, title, body) VALUES (?, ?, ?)`;
      const [result] = await pool.query(sqlQuery, [user_id, title, body]);
      const [rows] = await pool.query(`SELECT * FROM posts WHERE id = ?`, [result.insertId]);

    //   const sqlSelect = `SELECT * FROM posts WHERE userID = ? AND title = ? AND body = ?`;
    //   const [rows, fields] = await pool.query(sqlSelect, [userID, title, body]);
      if (rows.length > 0) {
        return rows[0]; 
      } else {
        throw new Error('Post not found');
      }
    } catch (err) {
      throw err;
    }
  }
  async function updatePost(id,user_id, title, body) {
    try {
      const sqlQuery = `UPDATE  posts SET user_id = ?, title = ?, body = ? WHERE postID = ?`;
      const [result] = await pool.query(sqlQuery, [user_id, title, body,id]);
      return result[0];//check it!!!!!!!!
    } 
    catch (err) {
      throw err;
    }
  }
  async function deletePost(id) {
    try {
      const selComments= await pool.query( `SELECT * FROM comments WHERE post_id = ?`, [id]);
      if(selComments.length>0)
      {
         await pool.query(`DELETE FROM comments WHERE post_id = ?`, [id]);
      }
       const delPost = await pool.query(`DELETE FROM posts WHERE id = ?`, [id]);
       if (delPost[0].length === 0)
        {
        const error = new Error("Post not found");
        error.status = 404;
        throw error;
        }
      return delPost[0];
    } catch (err) {
      throw err;
    }
  }
module.exports={getPostsOfUser,createPost,getAllPosts,updatePost,deletePost};
   