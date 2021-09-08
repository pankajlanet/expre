const mongoose = require("mongoose");
const validator = require("validator");

const Users = mongoose.model("Users", {
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
});

module.exports = Users;
