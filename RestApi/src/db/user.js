const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    validate: (value) => {
      if (!validator.isEmail(value)) {

       
      throw "invalid email";
      }
    },
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: String,
  },
})

//must be used simple function to make bindings
userSchema.pre ('save' , async function (next) {
  const user = this
  console.log("just before  save")
  next()
} )

const Users = mongoose.model("Users",userSchema);

module.exports = Users;
