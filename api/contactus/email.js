const express = require("express")
const db = require("../../database/models")
const nodemailer = require('nodemailer');

const app = express();


const transporter=nodemailer.createTransport({
    service:"email",
    auth:{
        user:'javariaquhdock@gmail.com',
        pass:"..QUHDOCK"
    }
})

const mailOptions={
    from:"javariaquhdock@gmail.com",
    to:"javariamubeen998@gmai",
    subject:"this email is from me to me",
    text:"email is here"
}
transporter.sendMail(mailOptions,function(err,info){
    if(err){
        console.log("sending email is having an error")
    }
    else{
        console.log("email is send")
    }
})
module.exports=transporter