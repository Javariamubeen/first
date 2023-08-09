const express = require("express")
const db = require("../../database/models")
const app = express();


exports.createServices = async (req, res) => {
    try {
        const createServices = await db.Services.create({
            image: req.body.image,
            title: req.body.title,
            description: req.body.description
        })

        res.status(200).json({
            status: 200,
            message: "Inserted",
            data: createServices
        })
    } catch (err) {
        if (!req.body.image || !req.body.title || !req.body.description) {
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


exports.getServices = async (req, res) => {
    try {
        const getServices = await db.Services.findAll()
        res.status(200).json({
            status: 200,
            data: getServices
        })
    } catch (e) {
        res.send(e.message)
    }

}


exports.deleteServices = async (req, res) => {
    const deleteServices = await db.Services.destroy({
        where: {id: req.params.id}
    })

    if (!deleteServices) {
        {
            res.status(200).json({
                status: 500,
                message: "Something went wrong"
            })
        }
    }
    res.status(200).json({
        status: 200,
        message: "Data deleted",
        data: {}
    })
}


exports.updateServices = async (req, res) => {
    try {
        const updateServices = await db.Services.update({
                question: req.body.question,
                answer: req.body.answer
            },
            {
                where: {id: req.params.id}
            })
        if (!updateServices) {
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
    } catch (e) {
        res.send(e.message)
    }
}


