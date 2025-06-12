const { Router } = require("express");
const userController = require("../controller/user.controller");

const routes = Router();

routes.post('/user', userController.createUser)

module.exports = routes;
