const model = require("../models/postMod");

async function getPostsOfUser(userId) {
    try {
       return await model.getPostsOfUser(userId);
    } catch (error) {
        throw error;
    }
}
async function getAllPosts() {
    console.log("i am in getAllPosts");
    try {
       return await model.getAllPosts();
    } catch (error) {
        throw error;
    }
}
async function createPost(user_id, title, body) {
    try {
       return await model.createPost(user_id, title, body);
    } catch (error) {
        throw error;
    }
}
async function patchPost(id,updatefields) {
    
    try {
        if(Object.keys(updatefields)=='title')
            return await model.updateTitlePost(id,Object.values(updatefields));
    
        else if(Object.keys(updatefields)=='body')
            return await model.updateBodyPost(id,Object.values(updatefields));
        else
            throw new Error('Invalid fields to update');

    } catch (error) {
        
        throw error;
    }
}

async function deletePost(id) {
    try {
       return await model.deletePost(id);
    } catch (error) {
        throw error;
    }
}
module.exports={createPost,getPostsOfUser,getAllPosts,deletePost,patchPost};
