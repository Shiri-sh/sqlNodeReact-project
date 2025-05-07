const model = require("../models/postMod");

async function getPostsOfUser(userId) {
    try {
       return await model.getPostsOfUser(userId);
    } catch (error) {
        throw error;
    }
}
async function getAllPosts() {
    try {
       return await model.getPostsOfUser();
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
async function updatePost(id,user_id, title, body) {
    try {
       return await model.updatePost(id,user_id, title, body);
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
module.exports={createPost,getPostsOfUser,getAllPosts,updatePost,deletePost};
