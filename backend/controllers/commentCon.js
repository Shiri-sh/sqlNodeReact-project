const model = require("../models/commentMod");

async function getCommentsOfPost(post_id){
    try {
        return await model.getCommentsOfPost(post_id);
    } catch (error) {
        throw error;
    }
}

async function createComment(post_id, title, email, body){
    try {
        return await model.createComment(post_id, title, email, body);
    } catch (error) {
        throw error;
    }
}

async function updateComment(title, body){
    try {
        return await model.updateComment(title, body);
    } catch (error) {
        throw error;
    }
}

async function deleteComment(id){
    try {
        return await model.deleteComment(id);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getCommentsOfPost,
    createComment,
    updateComment,
    deleteComment
}