const express = require("express")
const db = require("../../database/models")
const app = express();


exports.createTestMonials = async (req, res) => {
    try {
        const createTestMonials = await db.Testmonials.create({
            client_name: req.body.client_name,
            project_name: req.body.project_name,
            rating: req.body.rating,
            description: req.body.description
        })

        res.status(200).json({
            status: 200,
            message: "Inserted",
            data: createTestMonials
        })
    } catch (err) {
        if (!req.body.client_name || req.body.project_name || req.body.rating || !req.body.description) {
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


exports.getTestMonials = async (req, res) => {
    try {
        const getTestMonials = await db.Testmonials.findAll()
        res.status(200).json({
            status: 200,
            data: getTestMonials
        })
    } catch (e) {
        res.send(e.message)
    }

}


exports.deleteTestMonials = async (req, res) => {
    const deleteTestMonials = await db.Testmonials.destroy({
        where: {id: req.params.id}
    })

    if (!deleteTestMonials) {
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


exports.updateTestMonials = async (req, res) => {
    try {
        const updateTestMonials = await db.Testmonials.update({
                client_name: req.body.client_name,
                project_name: req.body.project_name,
                rating: req.body.rating,
                description: req.body.description
            },
            {
                where: {id: req.params.id}
            })
        if (!updateTestMonials) {
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


