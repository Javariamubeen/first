const express=require("express")
const db=require("../../database/models")
const multer = require("multer");
const app=express();

exports.createPortfolio = async(req,res)=>{

    try{
        const createPortfolio = await db.Portfolio.create({
            project_name:req.body.project_name,
           description:req.body.description,
        })
        req.body.images.map((item) => {
            const createPortfolioImages = db.PortfolioImages.create({
                images:item.img,
                portfolio_id:req.body.portfolio_id
            },{
                include:
                {
                    model:db.Portfolio
                }}
            )
        });
        res.status(200).json({
            status: 200,
            message: "Inserted",
            data:  createPortfolio
        })
    }
    catch(err)
    {
        res.send(err.message)
    }
}

exports.getPortfolio=async(req,res)=>
{
    try{
        const getPortfolio=await db.Portfolio.findAll({
                include:[
                    {
                        model:db.PortfolioImages
                    }
                ]
        })
        res.status(200).json({
            status: 200,
            data: getPortfolio
        })
    }catch(e){
        res.send(e.message)
    }

}

exports.deletePortfolio = async (req, res) => {
    const deletePortfolio = await db.Portfolio.destroy({
        where: {id: req.params.id}
        })
    const deletePortfolioImages=  db.PortfolioImages.destroy({
        where: {portfolio_id:req.params.id},
        include:[
            {
                model:db.Portfolio
            }
        ]
    })
    if (!deletePortfolio) {
        {
            res.status(200).json({
                status: 500,
                message: "Something went wrong"
            })
        }
    }else{
        res.status(200).json({
            status: 200,
            message: "Data deleted",
            data:  deletePortfolio
        })
    }
}

exports.updatePortfolio=async (req,res)=>{
    try{
        const updatePortfolio= await  db.Portfolio.update({
            project_name:req.body.project_name,
            description:req.body.description,
        },{
         where: {id: req.params.id}}
)
        req.body.images.map(item => {
            console.log(item.img)
            const updatePortfolioImages = db.PortfolioImages.update({
                    images: item.img
                },
                {where:
                        {portfolio_id: req.params.id}},
                {
                    include:
                        {
                            model: db.Portfolio
                        }
                })
            // db.PortfolioImages.destroy({
            //     where: {portfolio_id: req.params.id},
            // })
        })
        if(!updatePortfolio)
        {
            res.status(200).json({
                status: 500,
                message: "Something went wrong"
            })
        }
        res.status(200).json({
            status: 200,
            message: "Data updated",
            data:  updatePortfolio
        })
    }catch(e){
        res.send(e.message)
    }
}
