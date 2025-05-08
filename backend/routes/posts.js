const express = require("express");
const router = express.Router();
const controller = require("../controllers/postCon");

router.get('/', async(req, res) => {
    const userId = req.query.userId;
    console.log('user_id',userId);
    if(userId !== undefined)
    {//all the posts by user
       try{
        var posts= await controller.getPostsOfUser(userId);
        console.log(posts);
        res.status(200).json(posts);
        }
        catch(error){
        res.status(500).json({error:"Error fetching data",message: error.message});
    } 
    }
    //all posts in db
    else{
      console.log("i am here");
        try{
            var posts = await controller.getAllPosts();
            console.log(posts);
            if(!posts){
              res.status(404).json({message:"posts not found"});
            }
            else{
                res.status(200).json(posts);
            }
        }
        catch(error)
        {
         res.status(500).json({error:"Error fetching data",message: error.message});
        }
    }
});
router.post('/' , async(req,res)=>{
    const { user_id, title, body } = req.body;
    try {
        const newPost = await controller.createPost(user_id, title, body);
        res.status(200).json(newPost);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to create post", message: error.message });
      }
});
router.patch('/:id',async (req,res)=>{
    try {
        const id = req.params.id;
        const { user_id, title, body } = req.body;
        const updatedPost = await controller.updatePost(id, user_id, title, body);
        if (!updatedPost) {
          return res.status(404).json({ error: "Post not found" });
        }
        else{
          res.status(200).json(updatedPost);
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to update post" , message: error.message });
      }
})
router.delete('/:id',async (req,res)=>{
    try {
        const id = req.params.id;
        const deletedPost = await controller.deletePost(id);
        if (!deletedPost) {
          return res.status(404).json({ error: "Post not found" });
        }
        else{
            res.status(200).json({ message: "Post deleted successfully!" });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to delete post" , message: error.message });
      }
})
module.exports = router;
