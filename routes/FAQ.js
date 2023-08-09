const express = require("express")
const controller = require("../api/FAQ/FAQ");
const verify = require("./../api/auth/auth")

const Router = express.Router()


Router.post('/createFAQ', verify.auth, controller.createFAQ)
Router.get('/getFAQ', controller.getFAQ)
Router.delete('/deleteFAQ/:id?', verify.auth, controller.deleteFAQ)
Router.put('/updateFAQ/:id?', verify.auth, controller.updateFAQ)

module.exports = Router