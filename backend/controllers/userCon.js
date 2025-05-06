const model=require("../models/userMod");

async function getUserByUserNamePassword(userName, password) {
    try{
       return await model.getUserByUserNamePassword(userName, password);
    }
    catch(error){
        console.log(error);
    }
}

module.exports={getUserByUserNamePassword};