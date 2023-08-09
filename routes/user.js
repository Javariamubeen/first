const express = require("express")
const controller = require('../api/user/userscontroller')
const verify = require("./../api/auth/auth")

const Router = express.Router()

Router.post('/create', controller.create)
Router.post('/login', controller.login)
Router.get('/authenticate',require('../api/user/authenticate').authenticate)


module.exports = Router;