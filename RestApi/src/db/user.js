const { bgCyanBright } = require("chalk");
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt= require('bcryptjs');
const jwt = require('jsonwebtoken')

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

userSchema.methods.generateAuthToken = async( )=> {
  const user = this;
  const token  = jwt.sign( {id : user._id.toString() } , 'random text' )
}


userSchema.methods.generateAuthToken  = async function ( ){
  const user = this;
  const token = jwt.sign({_id : user._id.toString()} , "random")
  return token
}
 



//must be used simple function to make bindings
userSchema.pre ('save' , async function (next) {
  const user = this
  if(user.isModified('password') )
  user.password = await bcrypt.hash(user.password,8)

  next()
} )

const Users = mongoose.model("Users",userSchema);

module.exports = Users;
