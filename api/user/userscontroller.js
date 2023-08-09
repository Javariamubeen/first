require('dotenv').config();
const jwt = require('jsonwebtoken')
const express = require("express")
const db = require("../../database/models")
const bcrypt = require("bcrypt")
const bearerToken = require('express-bearer-token')
const app = express();
app.use(bearerToken());


exports.create = async (req, res) => {
    const hash = await bcrypt.hash(req.body.password, 12)
    const createUser = await db.Users.create({
        user_name: req.body.user_name,
        email: req.body.email,
        password:   hash,
        role: req.body.role
    });

    console.log(`${hash}`)
    console.log("data is not inserted properly")
    res.status(200).json({
        message: "user created",
        status: "success",
        createUser
    })
}


exports.login = async (req, res) => {
    try {
        const user = await db.Users.findOne({
            where: {user_name: req.body.user_name, role: "Admin"}
        })

        if (user) {
            // console.log(user)
            const passwordHashed = await bcrypt.compare(req.body.password, user.password);
            console.log(user.password)
            console.log("body",req.body.password)

            console.log("passwordHashed", passwordHashed);
            console.log(typeof process.env.JWT_EXPIRES_IN)
            if (passwordHashed) {
                console.log(process.env.JWT_EXPIRES_IN, process.env.JWT_SECRET)
                const Token = jwt.sign({
                    id: user.id,
                    user_name: user.user_name,
                },  process.env.JWT_SECRET, {
                    expiresIn: "10h"
                })
                console.log("token", Token)
               return res.status(200).send({
                    status: 200,
                    message: "Successfully login",
                    Token
                })

            }

            else if(!passwordHashed){
                return res.status(401).json({
                    status: 401,
                    message: "invalid credentials"
                })

            }
        } else if (!user) {
            return res.status(404).json({
                status: 404,
                message: "user not found"
            })
        }
        //  else {
        //     res.status(500).json({
        //         status: 401,
        //         message: "invalid credentials"
        //     })
        // }

    } catch (e) {
   if(!req.body.user_name||!req.body.password){
            res.status(400).json({
                status: 400,
                message: "bad request"
                   })
    }}
}
