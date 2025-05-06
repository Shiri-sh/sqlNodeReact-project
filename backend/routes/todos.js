const express = require("express");
const router = express.Router();
const controller = require("../controllers/todoCon");

router.get('/todo/:userId', async(req, res) => {
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
router.post('/todo/:userId',async(req,res)=>{
    const newTodo=req.body
    try{
       
    }
    catch(err){
        res.status(500).json({message:"Error fetching data"});
    }
})

module.exports = router;
