const express=require("express")
const db=require("../../database/models")
const app=express();


exports.createGeneralSettings = async(req,res)=>{
    try{
        const createGeneralSettings = await db.GeneralSettings.create({
            projects_number:req.body.projects_number,
            enterpise_clients_number:req.body.enterpise_clients_number,
            countries_number:req.body.countries_number,
            client_retention_number:req.body.client_retention_number,
            linkedin_link:req.body.linkedin_link,
            facebook_link:req.body.facebook_link,
            instagram_link:req.body.instagram_link,
            local_address:req.body.local_address,
            international_address:req.body.international_address,
            phone:req.body.phone,
            mail:req.body.mail
        })

        res.status(200).json({
            status: 200,
            message: "Inserted",
            data: createGeneralSettings
        })
    }
    catch(err)
    {
            res.send(err.message)
        }

}


exports.getGeneralSettings=async(req,res)=>
{
    try{
        const getGeneralSettings=await db.GeneralSettings.findAll()
        res.status(200).json({
            status: 200,
            data: getGeneralSettings
        })
    }catch(e){
        res.send(e.message)
    }

}

exports.updateGeneralSettings=async (req,res)=>{
    try{
        const updateGeneralSettings= await  db.GeneralSettings.update({
                projects:req.body.projects,
                enterpise_clients:req.body.enterpise_clients,
                countries:req.body.countries,
                client_retention:req.body.client_retention,
                linkedin_link:req.body.linkedin_link,
                facebook_link:req.body.facebook_link,
                instagram_link:req.body.instagram_link,
                local_address:req.body.local_address,
                international_address:req.body.international_address,
                phone:req.body.phone,
                mail:req.body.mail
            },
            {
                where: {id: req.params.id}
            })
        if(!updateGeneralSettings)
        {
            res.status(200).json({
                status: 500,
                message: "Something went wrong"
            })
        }
        res.status(200).json({
            status: 200,
            message: "Data updated",
            data: req.body
        })
    }catch(e){
        res.send(e.message)
    }
}
