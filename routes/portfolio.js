const multer  = require('multer')
const express = require("express")
const app= express()
const path= require("path")
const verify = require("../api/auth/auth");
const controller = require("../api/portfolio/portfolio");
const {upload} = require("../api/portfolio/uploadimage");

const Router = express.Router()
app.use(express.json())



Router.post('/createPortfolio', controller.createPortfolio)
Router.get('/getPortfolio', controller.getPortfolio)
Router.delete('/deletePortfolio/:id?', verify.auth, controller.deletePortfolio)
Router.put('/updatePortfolio/:id?', verify.auth, controller.updatePortfolio)

module.exports = Router