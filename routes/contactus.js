const express = require("express")
const controller= require("../api/contactus/contactus")
// const transporter=require("../api/contactus/email")
const verify = require("./../api/auth/auth")
const nodemailer = require("nodemailer");

const Router = express.Router()

Router.post('/createContactUs', controller.createContactUs)
Router.get('/getContactUs', verify.auth, controller.getContactUs)
// Router.get('/transporter',  controller.transporter)


module.exports = Router