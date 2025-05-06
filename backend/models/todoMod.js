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
module.exports={getTodosOfUser};
   