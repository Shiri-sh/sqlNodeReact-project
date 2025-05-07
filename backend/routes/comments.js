const express = require("express");
const router = express.Router();
const controller = require("../controllers/commentCon");    

router.get('/', async(req, res) => {
    const postId=req.query.postId;
    console.log('post_id',postId);
    try{
        var comments= await controller.getCommentsOfPost(postId)
        if(!comments){
            res.status(404).json({message:"comments not found"});
        }
        else{
            res.status(200).json(comments);
        }
    }
    catch(error){
        res.status(500).json({message:"Error fetching data",message: error.message});
    }
})
router.put('/:id',async (req,res)=>{
    try {
        const id = req.params.id;
        const { title, body } = req.body;
        const updatedComment = await controller.updateComment(title, body);
        if (!updatedComment) {
          return res.status(404).json({ error: "Comment not found" });
        }
        else{
          res.status(200).json(updatedComment);
        }
      } catch (error) {
        res.status(500).json({ error: "Failed to update comment" , message: error.message });
      }
})
router.delete('/:id',async (req,res)=>{
    try {
        const id = req.params.id;
        const deletedComment = await controller.deleteComment(id);
        if (!deletedComment) {
          return res.status(404).json({ error: "Comment not found" });
        }
        else{
            res.status(200).json({ message: "Comment deleted successfully!" });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to delete comment" , message: error.message });
      }
})
router.post('/' , async(req,res)=>{
    try {
        const post_id = req.query.post_id;
        const { title, email, body } = req.body;
        const newComment = await controller.createComment(post_id, title, email, body);
        if(!newComment){
          return res.status(404).json({ error: "Comment not found" });
        }
        else{
            res.status(200).send(newComment);
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to create comment" , message: error.message });
      }
})


module.exports = router;
