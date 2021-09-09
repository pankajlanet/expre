const { bgCyanBright } = require("chalk");
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt= require('bcryptjs');


const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique  : true, 
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

//
userSchema.statics.findByCredentials = async (email, password) => {
  console.log("method called")
  const user = await Users.findOne({ email });
  if (!user) {
    throw new Error("unable to login");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Unable to login");
  }
  return user;  
};


//must be used simple function to make bindings
userSchema.pre ('save' , async function (next) {
  const user = this
  if(user.isModified('password') )
  user.password = await bcrypt.hash(user.password,8)

  next()
} )

const Users = mongoose.model("Users",userSchema);

module.exports = Users;
