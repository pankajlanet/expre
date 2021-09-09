const express = require('express')
const router = new express.Router()
const Tasks = require("../src/db/tasks");
const Users = require('../src/db/user')

router.post("/tasks", async (req, res) => {
    console.log(req.body);
    const task = new Tasks({
      description: req.body.description,
      completed: req.body.completed,
    });
  
    try {
      const result = await task.save();
      res.json({
        status: "data received",
        data: req.body,
      });
    } catch (e) {
      res.status("500");
      res.json({
        status: "unable to store data",
      });
    }
  });
  
  //endpoint to fetching all the tasks
  router.get("/tasks", async (req, res) => {
    try {
      const result = await Tasks.find();
      res.json(result);
    } catch (err) {
      res.json({ err });
    }
  });
  
  //endpoint to fetching all the tasks with id (passing in parameter)
  router.get("/tasks/:id", (req, res) => {
    const _id = req.params.id;
    if (!req.params.id) {
      res.json({
        err: "please end some field in query",
      });
    }
  
    Tasks.find({ _id })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json({
          error: err,
        });
      });
  });
  
  
  // setting up a task update handle
  // router.patch("/tasks/:id", async (req, res) => {
  //   const updates = Object.keys(req.body);
  //   const list = ["description", "completed"];
  //   const isValid = updates.every((update) => updates.includes(list));
  
  //   if (isValid) {
  //     return res.send(
  //       "please enter given fileds (description , completed status) only"
  //     );
  //   }
  //   try {
  
  //     const tasks = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
  //       new: true,
  //       runValidators: true,
  //     });
  //     if (!tasks) {
  //       return res.status(400).send("task not present with this id ");
  //     }
  //     res.status(201);
  //     res.json(req.body);
  //   } catch (e) {
  //     res.json({ err: e });
  //   }
  // });



  //patching with little changes to bring middleware encryption process

  router.patch("/tasks/:id", async (req, res) => {
    const updates = Object.keys(req.body);
    const list = ["description", "completed"];
    const isValid = updates.every((update) => updates.includes(list));
  
    if (isValid) {
      return res.send(
        "please enter given fileds (description , completed status) only"
      );
    }
    try {
  
      // const tasks = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
      //   new: true,
      //   runValidators: true,
      // });
      const tasks = await Tasks.findById(req.params.id)
      updates.forEach( update => tasks[update] === req.body[update] );
      await tasks.save()
      if (!tasks) {
        return res.status(400).send("task not present with this id ");
      }
      res.status(201);
      res.json(req.body);
    } catch (e) {
      res.json({ err: e });
    }
  });


  module.exports = router