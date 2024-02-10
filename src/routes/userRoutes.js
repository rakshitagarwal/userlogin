const express = require("express");
const { signup, signin } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post("/register", signup);
userRouter.post("/login", signin);

module.exports = userRouter;