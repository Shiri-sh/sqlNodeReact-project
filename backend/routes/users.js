const express = require("express");
const router = express.Router();
const controller = require("../controllers/userCon");
// router.get('/user', async(req, res) => {res.send('Hello World!')});
router.get("/users", async(req, res) => {
    const userName=req.query.userName
    const password=req.query.password
    if(userName && password){
        console.log('userName',userName,password);
        try{
            var user= await controller.getUserByUserNamePassword(userName, password)
            if(!user){
                res.status(404).json({message:"User not found"});
            }
            else{
                res.status(200).json(user);
            }
        }
        catch(error){
            res.status(500).json({message:"Error fetching data"});
        }
    }
    else{
        res.status(400).json({message:"Bad request"});
    }
});

// router.get("/users/:id", controller.getUser);
// router.put("/users/:id", controller.updateUser);
// router.delete("/users/:id", controller.deleteUser);

module.exports = router;