const express = require("express");
const router = express.Router();
const controller = require("../controllers/todoCon");

router.get('/:userId', async(req, res) => {
    const userId=req.params.userId;
    console.log('user_id',userId);
    try{
        var todos= await controller.getTodosOfUser(userId)
        if(!todos){
            res.status(404).json({message:"todos not found"});
        }
        else{
            res.status(200).json(todos);
        }
    }
    catch(error){
        res.status(500).json({message:"Error fetching data"});
    }
});
router.post('/' , async(req,res)=>{
    try {
        // const id=req.params.userId;
        const { user_id, title, completed } = req.body;
        const newTodo = await controller.createPost(user_id, title, completed);
        res.status(200).send(newTodo);
      } catch (error) {
        res.status(500).json({ error: "Failed to create todo" });
      }
})

router.delete('/:id',async (req,res)=>{
    try {
        const id = req.params.id;
        await controller.deleteTodo(id);
        res.status(200).json({ message: "Todo deleted successfully!!!!!!!!!!!!!" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to delete todo" });
      }
})
module.exports = router;
