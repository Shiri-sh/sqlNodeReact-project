const model=require("../models/userMod");

async function getUserByUserNamePassword(userName, password) {
    try{
       return await model.getUserByUserNamePassword(userName, password);
    }
    catch(error){
        console.log(error);
    }
}
async function getUserById(id){
    try{
        return await model.getUserById(id);
    }
    catch(error){
        console.log(error);
    }
}
module.exports={getUserByUserNamePassword,getUserById};