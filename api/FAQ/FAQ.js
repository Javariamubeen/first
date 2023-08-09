const express = require("express")
const db = require("../../database/models")
const app = express();


exports.createFAQ = async (req, res) => {
    try {
        const createFAQ = await db.FAQ.create({
            question: req.body.question,
            answer: req.body.answer
        })

        res.status(200).json({
            status: 200,
            message: "Inserted",
            data: createFAQ
        })
    } catch (err) {
        if (!req.body.question || !req.body.answer) {
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


exports.getFAQ = async (req, res) => {
    try {
        const getFAQ = await db.FAQ.findAll()
        res.status(200).json({
            status: 200,
            data: getFAQ
        })
    } catch (e) {
        res.send(e.message)
    }

}


exports.deleteFAQ = async (req, res) => {
    const deleteFAQ = await db.FAQ.destroy({
        where: {id: req.params.id}
    })

    if (!deleteFAQ) {
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


exports.updateFAQ = async (req, res) => {
    try {
        const updateFAQ = await db.FAQ.update({
                question: req.body.question,
                answer: req.body.answer
            },
            {
                where: {id: req.params.id}
            })
        if (!updateFAQ) {
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


