const express = require('express')
const router = express.Router()
const Users = require("../src/db/user");

router.get("/test" ,(req,res) => {
    res.send("this is testing")
})



//getting user info with parameters
router.get("/users/:name", (req, res) => {
    const name = req.params.name;
    console.log(name);
    Users.find({ name })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json({ status: err });
      });
  });
  
  // getting the user info by passing the additional info in body
  
  router.get("/users", (req, res) => {
    Users.find({ email: req.body.email }).then((result) => {
      if (result.length === 0) {
        res.send({
          status: "person not present",
        });
      }
      res.send(result);
    });
  });
  
  //storing the details of user in database
  router.post("/users", (req, res) => {
    console.log(req.body);
    const user = new Users({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      age: req.body.age,
    });
  
    user
      .save()
      .then(() => {
        res.status(201);
        res.json({
          status: user,
        });
      })
      .catch((err) => {
        res.status(400);
        res.json({
          db: "invalid credentials",
          error: err,
        });
      });
  });

  //deletig a user form the database endpoint
router.delete('/users/:id' ,(req,res) => {

    Users.findByIdAndDelete(req.params.id).then( (user=> {
      if(!user)
      {
        return  res.send('no user with this id is present')
      }
      console.log("data deleted");
      res.send("data deleted")
    })
    
    ).catch( (e)=> {
      console.log("error encountered" ,e)
  
    })
  
  
  } )
  
  // patching the some details with existing user in database
  router.patch("/users/:id", async (req, res) => {
    const allowedUpdates = ["name", "email", "password", "age"]; // to validate so that these feilds can only be stored
    const updates = Object.keys(req.body);
    
    const isItValid = updates.every((update) => {
      return allowedUpdates.includes(update);
    });
    if (!isItValid) {
      return res.status(404).send("opeartion are not allowed to change");
    }
    
   

    try {
      const user = await Users.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      
    
      if (!user) {
        return res.status(404).send("user is not present");
      }
  
      res.send(user);
    } catch (e) {
      res.status(400).json({
        err : e
      });
    }
  });
  
  
  

  
  

module.exports = router