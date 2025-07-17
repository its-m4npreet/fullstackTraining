const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = { userModel };