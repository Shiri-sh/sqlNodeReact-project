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

async function patchComment(id,updatefields){
    try {
        if(Object.keys(updatefields)=='title'){
            return await model.updateTitleComment(id,Object.values(updatefields));
        }
        else if(Object.keys(updatefields)=='body'){
            return await model.updateBodyComment(id,Object.values(updatefields));
        }
        else{
            throw new Error('Invalid fields to update');
        }
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
    patchComment,
    deleteComment
}