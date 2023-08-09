const express = require("express")
const db = require("../../database/models")
const nodemailer = require('nodemailer');

const app = express();



exports.createContactUs = async (req, res) => {
    try {

        const createContactUs = await db.ContactUs.create({
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message
        })
        res.status(200).json({
            status: 200,
            message: "Inserted",
            data: createContactUs
        })
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.USER_GMAIL,
                pass: process.env.PASSWORD
            },
        });
        console.log("your email is being send")
        const mailOption = {
            from:req.body.email ,
            to:process.env.USER_GMAIL,
            subject: req.body.subject,
            text:
                `You got a message from 
                     Email : ${req.body.email}
                     Name: ${req.body.name}
                     Message: ${req.body.message}`
        };
        transporter.sendMail(mailOption,function(err){

            if(err){
                console.log(err.message)
            }
            else{
                console.log("email is send")
            }
        })

    } catch (err) {
        if (!req.body.name || !req.body.email || !req.body.subject || !req.body.message) {
            return res.status(400).json({
                status: 400,
                success: false,
                message: "feild required"
            })
        } else {
            res.send(err.message)
        }

    }
}

exports.getContactUs = async (req, res) => {
    try {
        const getContactUs = await db.ContactUs.findAll()
        res.status(200).json({
            status: 200,
            data: getContactUs
        })
    } catch (e) {
        res.send(e.message)
    }

}
