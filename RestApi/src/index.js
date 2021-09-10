const express = require("express");
const { set } = require("mongoose");
const Users = require("../src/db/user");
const Tasks = require("./db/tasks");
const userRouter = require('../routers/user')
const taskRouter = require('../routers/tasks');
const { compareSync } = require("bcryptjs");

require("./mongoose/mong"); //this is just to make a connetion to database
require("./mongoose/tasksdb"); // this is just to make a connection with database tasks

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json()); //it will parse the upcomming json to an javascript object
app.use(userRouter);
app.use(taskRouter)
app.get("/", (req, res) => {
  res.send("<h1>This is HomePage</h1>");
});
/* ****************************************************************************************************/
//Users Endpoint
/****************************************************************************************************** */

/* ****************************************************************************************************/
//Tasks EndPoint with Promise Channing
/****************************************************************************************************** */

// //creating a task

// app.post("/tasks", (req, res) => {
//   console.log(req.body);
//   const task = new Tasks({
//     description: req.body.description,
//     completed: req.body.completed,
//   });

//   task
//     .save()
//     .then(() => {
//       res.json({
//         status: "dataReceived",
//         data: req.body,
//       });
//     })
//     .catch((err) => {
//       res.json({
//         status: "data cannot be saved",
//         error: err,
//       });
//     });
// });

// //endpoint to fetching all the tasks
// app.get("/tasks", (req, res) => {
//   Tasks.find()
//     .then((result) => {
//       res.json(result);
//     })
//     .catch((err) => {
//       res.json({
//         err,
//       });
//     });
// });

// //endpoint to fetching all the tasks with id (passing in parameter)
// app.get('/tasks/:id', (req,res)=> {
//     const _id = req.params.id
//     if(!req.params.id)
//     {
//         res.json({
//             err : 'please end some field in query'
//         })
//     }

//     Tasks.find({_id}).then( (result) => {
//         res.json(result)

//     } ).catch( (err) => {
//         res.json(
//             {
//                 error : err
//             }
//         )
//     })
// })

// app.listen(port, () => {
//   console.log("server is hosted on port  " + port);
// });

/* ****************************************************************************************************/
//Tasks EndPoint with Async Await
/****************************************************************************************************** */

//creating a task





//listening the server on port 3000
app.listen(port, () => {
  console.log("server is hosted on port  " + port);
});


// const bcrypt = require('bcryptjs')

// const myFunction = async( )=> {
  
//   try{
//     const password = 'password'
//   const hashPassword = await bcrypt.hash(password , 8);
//   console.log(hashPassword)
//   }
//   catch(e) {
//     console.log("error is : " , e)
//   }
  

// } 

// const jwt = require('jsonwebtoken')

// myFunction();


app.all('/secerat' , (req,res,next) => {
    res.send({
        req : "test",
      next : next
    })
})

const path = require('path')
// sending the response as an image
app.get( '/show'  , (req,res) => {

  res.sendFile(path.join(__dirname , "download.jpeg"));

} ) 

app.get('/checknext' ,(req,res,next)=> {
    next( {name : 'rakesh' , age:  12});

})

app.disable('/test');
app.get( '/test');



