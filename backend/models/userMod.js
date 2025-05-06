var con=require('../../database/db');

async function getUserByUserNamePassword(userName, password) {
    try{
        const sql = 'SELECT * FROM users u inner join passwords p  on u.id=p.user_id  WHERE u.user_name = ? AND p.password = ?';
        const [rows] =  await con.query(sql, [userName, password]);
        console.log('rows',rows);
        return rows;
    }
    catch(error){
        console.log(error);
    }
}
module.exports = {getUserByUserNamePassword};