const model=require("../models/todoMod");

async function getTodosOfUser(userId) {
    try {
       return await model.getTodosOfUser(userId);
    } catch (error) {
        console.log(error);
    }
}
async function createTodo(user_id, title, completed) {
    try {
       return await model.createPost(user_id, title, completed);
    } catch (error) {
        throw error;
    }
}
module.exports={getTodosOfUser,createTodo};