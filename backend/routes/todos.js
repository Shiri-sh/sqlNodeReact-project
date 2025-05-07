const express = require("express");
const router = express.Router();
const controller = require("../controllers/todoCon");

router.get('/', async(req, res) => {
    const userId=req.query.userId;
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
        res.status(500).json({message:"Error fetching data",message: error.message});
    }
});
router.post('/' , async(req,res)=>{
    try {
        console.log('body',req.body);
        const { user_id, title, completed } = req.body;
        const newTodo = await controller.createTodo(user_id, title, completed);
        if(!newTodo){
          return res.status(404).json({ error: "Todo not found" });
        }
        else{
            res.status(200).send(newTodo);
        }
      } catch (error) {
        res.status(500).json({ error: "Failed to create todo" , message: error.message });
      }
})

router.delete('/:id',async (req,res)=>{
    try {
        const id = req.params.id;
        const deletedTodo = await controller.deleteTodo(id);
        if (!deletedTodo) {
          return res.status(404).json({ error: "Todo not found" });
        }
        else{
            res.status(200).json({ message: "Todo deleted successfully!" });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to delete todo" , message: error.message });
      }
})

router.put('/:id',async (req,res)=>{
    try {
        const id = req.params.id;
        const { title, completed } = req.body;

        const updatedTodo = await controller.updateTodo(id, title, completed);
        
        if (!updatedTodo) {
          return res.status(404).json({ error: "TODO not found" });
        }
        else{
            res.status(200).json(updatedTodo);
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to update post" });
      }
})
module.exports = router;
