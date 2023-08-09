const express = require("express")
const controller = require("../api/testmonials/testmonials");
const verify = require("./../api/auth/auth")

const Router = express.Router()


Router.post('/createTestMonials', verify.auth, controller.createTestMonials)
Router.get('/getTestMonials', controller.getTestMonials)
Router.delete('/deleteTestMonials/:id?', verify.auth, controller.deleteTestMonials)
Router.put('/updateTestMonials/:id?', verify.auth, controller.updateTestMonials)

module.exports = Router