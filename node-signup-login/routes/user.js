const express = require("express");
const Router = express.Router();
//import user controller
const user_controller = require("../controller/user_controller");

// routes for signup & login
Router.post("/signup", user_controller.createUser);
Router.post("/login", user_controller.login);

module.exports = Router;
