const { userModel } = require("../models/user.model");
const userSignup = async (req, res) => {
const { name,email,age,phoneNumber,password } = req.body;

  try {
    const user = new userModel({
      name,
      email,
      password,
      phoneNumber,
      age,
    });
    await user.save();
    console.log("User signup data:", req.body);
  } catch (error) {
    console.error("Error during user signup:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const userLogin = () => {};

module.exports = { userSignup, userLogin };