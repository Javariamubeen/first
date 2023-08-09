const express=require("express")
const db=require("../../database/models")
const multer = require("multer");
const app=express();

storage = multer.diskStorage({
        destination:"./src/assets"
    // destination: function (req, file, cb) {
    //     cb(null,"./src/assets")
    ,
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage});

module.exports = upload

// exports.createPortfolioImage = async(req,res)=>{
//     try{
//         const file = req.file;
//         if (req.file === "undefined") {
//             res.send(`You must select a file.`);
//         }
//         const createPortfolioImages = await db.PortfolioImages.create({
//          images:req.file.originalname,
//          portfolio_id:1
//         })
//         console.log(req.file)
//         res.status(200).json({
//             status: 200,
//             message: "Inserted",
//             data: createPortfolioImages
//         })
//     }
//     catch(err)
//     {
//         res.send(err.message)
//     }

// }
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
//

// createPortfolioImage};