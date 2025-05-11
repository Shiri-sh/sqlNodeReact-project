const express = require("express");
const router = express.Router();
const controller = require("../controllers/userCon");
router.get("/", async(req, res) => {
    const userName=req.query.userName
    const password=req.query.password
    if(userName && password){
        console.log('userName',userName,password);
        try{
            var user= await controller.getUserByUserNamePassword(userName, password)
            console.log('user',user);
            if(!user){
               res.status(404).json({error:"User not found!" });
            }
            else{
                res.status(200).json(user);
            }
        }
        catch(error){
            res.status(500).json({error:"Failed to fetch user",message: error.message});
        }
    }
    else{
        res.status(400).json({message:"Bad request"});
    }
});
router.get("/:id", async(req, res) => {
    const id = req.params.id;
    try{
        var user= await controller.getUserById(id)
        if(!user){
            res.status(404).json({error:"User not found"});
        }
        else{
            res.status(200).json(user);
        }
    }
    catch(error){
        res.status(400).json({error:"Failed to fetch user"});
    }
});
module.exports = router;