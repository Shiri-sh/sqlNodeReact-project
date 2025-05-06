const model=require("../models/todoMod");

async function getTodosOfUser(userId) {
    try {
       return await model.getTodosOfUser(userId);
    } catch (error) {
        console.log(error);
    }
}
module.exports={getTodosOfUser};