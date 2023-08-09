const express = require("express")
const controller = require("../api/generalsettings/generalsettings");
const verify = require("./../api/auth/auth")

const Router = express.Router()


Router.post('/createGeneralSettings', controller.createGeneralSettings)
Router.get('/getGeneralSettings', controller.getGeneralSettings)
Router.put('/updateGeneralSettings/:id?', verify.auth, controller.updateGeneralSettings)


module.exports = Router