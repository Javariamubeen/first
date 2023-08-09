const express = require("express")
const controller = require("../api/services/services");
const verify = require("./../api/auth/auth")

const Router = express.Router()


Router.post('/createServices', verify.auth, controller.createServices)
Router.get('/getServices', controller.getServices)
Router.delete('/deleteServices/:id?', verify.auth, controller.deleteServices)
Router.put('/updateServices/:id?', verify.auth, controller.updateServices)


module.exports = Router