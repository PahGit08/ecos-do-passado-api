const { Router } = require("express");
const userController = require("../controller/user.controller");
const reportsController = require("../controller/reports.controller");
const authController = require("../controller/auth.controller");

const routes = Router();

routes.post('/user', userController.createUser)
routes.post('/reports', reportsController.createReport)
routes.get('/reports', reportsController.getReports)
routes.post('/auth', userController.login)


module.exports = routes;
