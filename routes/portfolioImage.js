const multer  = require('multer')
const express = require("express")
const app= express()
const path= require("path")
const verify = require("../api/auth/auth");
// const portfolioImage=require("../api/portfolio/portfolioimage")
const upload = require("../api/portfolio/uploadimage");

const Router = express.Router()

Router.post('/uploadImage', upload.single('file'),(req,res)=>{
    try {
        res.send(req.file);
    } catch (error) {
        console.log(error);
        res.send("please select your file");
    }
})


module.exports = Router