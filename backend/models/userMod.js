var con=require('../../database/db');

async function getUserByUserNamePassword(userName, password) {
    try{
        const sql = 'SELECT * FROM users u inner join passwords p  on u.id=p.user_id  WHERE u.user_name = ? AND p.password = ?';
        const [rows] =  await con.query(sql, [userName, password]);
        return rows[0];
    }
    catch(error){
        console.log(error);
    }
}
async function getUserById(id) {
    try{
        const sql = 'SELECT * FROM users WHERE id = ?';
        const [rows] =  await con.query(sql, [id]);
        return rows[0];
    }
    catch(error){
        console.log(error);
    }
}
module.exports = {getUserByUserNamePassword,getUserById};