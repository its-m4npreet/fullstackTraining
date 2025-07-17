const express = require("express");
const { userSignup, userLogin } = require("../controllers/user.controller");

const userRoute = express.Router();

userRoute.post("/signUp", userSignup);
userRoute.post("/logIn", userLogin);

module.exports = userRoute;