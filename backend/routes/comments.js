const express = require("express");
const router = express.Router();
const controller = require("../controllers/commentCon");    

router.get('/', async(req, res) => {
    const postId=req.query.postId;
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
router.patch('/:id',async (req,res)=>{
    try {
        const id = req.params.id;
        const updatefields = req.body;
        const updatedComment = await controller.patchComment(id, updatefields);
        if (!updatedComment) {
          return res.status(404).json({ error: "Comment not found" });
        }
        else{
          res.status(200).json(updatedComment);
        }
      } catch (error) {
        res.status(500).json({ error: "Failed to update comment"  });
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
        res.status(500).json({ error: "Failed to delete comment" });
      }
})
router.post('/' , async(req,res)=>{
    try {
        const post_id = req.query.postId;
        const { name, email, body } = req.body;
        const newComment = await controller.createComment(post_id, name, email, body);
        if(!newComment){
          return res.status(404).json({ error: "Comment not found" });
        }
        else{
            res.status(200).send(newComment);
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to create comment" });
      }
})


module.exports = router;
