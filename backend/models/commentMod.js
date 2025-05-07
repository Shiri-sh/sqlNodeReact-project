var con=require('../../database/db');

async function getCommentsOfPost(post_id){
    try {
        const sql = 'SELECT title,email,body FROM comments WHERE post_id = ?';
        const [rows] = await con.query(sql, [post_id]);
        return rows[0];
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
async function updateComment(title, body) {
    try {
        const sqlQuery = `UPDATE comments SET title = ?, body = ? WHERE id = ?`;
        const [result] = await con.query(sqlQuery, [title, body]);
        return result[0];
    } catch (err) {
        throw err;
    }
}
module.exports={getCommentsOfPost,createComment,updateComment};