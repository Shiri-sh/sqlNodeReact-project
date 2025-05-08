const model=require("../models/todoMod");

async function getTodosOfUser(userId) {
    try {
       return await model.getTodosOfUser(userId);
    } catch (error) {
        throw error;
    }
}
async function createTodo(user_id, title, completed) {
    try {
       return await model.createTodo(user_id, title, completed);
    } catch (error) {
        throw error;
    }
}
async function deleteTodo(id) {
    try {
       return await model.deleteTodo(id);
    } catch (error) {
        throw error;
    }
}

async function patchTodo(id, fieldsToUpdate) {
   
    try {
       if(Object.keys(fieldsToUpdate)=='completed') return await model.updateCompletedTodo(id, Object.values(fieldsToUpdate));

       else return await model.updateTitleTodo(id, Object.values(fieldsToUpdate));
    }
    catch(error){
        throw error;
    }

}
module.exports={getTodosOfUser,createTodo,deleteTodo,patchTodo};