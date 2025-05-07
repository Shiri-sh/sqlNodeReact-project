const express = require("express");
const router = express.Router();
const controller = require("../controllers/postCon");

router.get('/', async(req, res) => {
    const userId=req.query.userId;
    console.log('user_id',userId);
    if(userId)
    {//all the posts by user
       try{
        var posts= await controller.getTodosOfUser(userId)
        res.status(200).json(posts);
        }
        catch(error){
        res.status(500).json({message:"Error fetching data"});
    } 
    }
    //all posts in db
    else{
        try{
            var posts=await controller.getAllPosts();
        }
        catch(error)
        {
         res.status(500).json({})
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
        res.status(500).json({ error: "Failed to create post" });
      }
});
router.put('/:id',async (req,res)=>{
    try {
        const id = req.params.id;
        const { user_id, title, body } = req.body;
        await controller.updatePost(id, user_id, title, body);
        const updatedPost = await controller.getPost(id);
        if (!updatedPost) {
          return res.status(404).json({ error: "Post not found" });
        }
        res.status(200).json(updatedPost);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to update post" });
      }
})
router.delete('/:id',async (req,res)=>{
    try {
        const id = req.params.id;
        await controller.deletePost(id);
        res.status(200).json({ message: "Post deleted successfully!!!!!!!!!!!!!" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to delete post" });
      }
})
module.exports = router;
