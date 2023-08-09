require('dotenv').config();
const jwt = require('jsonwebtoken')
const express = require("express")
const db = require("../../database/models")
const bcrypt = require("bcrypt")
const bearerToken = require('express-bearer-token')
const app = express();
app.use(bearerToken());


exports.authenticate = function verifyToken(req, res, next) {
    try {
        const bearerHeader = req.headers.authorization
        console.log(bearerHeader)
        if (typeof bearerHeader != 'undefined') {
            const bearerToken = bearerHeader.split(' ')[1]
            req.token = bearerToken
            console.log(req.token)
        }

        jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {
            if (err) {
                console.log(err)
                res.sendStatus(403);
            } else {
                res.json({
                    message: 'Validated',
                    authData
                });
                next();
            }
        })
    } catch (e) {
        console.log(e)
        res.send(e.message)
    }
}

//
// let sampleFile;
// let uploadPath;
//
// if (!req.files || Object.keys(req.files).length === 0) {
//     return res.status(400).send('No files were uploaded.');
// }
//
// // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
// sampleFile = req.files.sampleFile;
// uploadPath = __dirname + '/somewhere/on/your/server/' + sampleFile.name;
//
// // Use the mv() method to place the file somewhere on your server
// sampleFile.mv(uploadPath, function(err) {
//     if (err)
//         return res.status(500).send(err);
//
//     res.send('File uploaded!');
// });
