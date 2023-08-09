require('dotenv').config();
const jwt = require('jsonwebtoken')
const express = require("express")
const db = require("../../database/models")
const bearerToken = require('express-bearer-token')
const app = express();
app.use(bearerToken());


exports.employeeDetails = async (req, res) => {
    try {
        const createEmployee = await db.Employees.create({
            name: req.body.name,
            designation: req.body.designation,
            image: req.body.image,
            joining_date: req.body.joining_date
        })

        res.status(200).json({
            status: 200,
            message: "Inserted",
            data: createEmployee
        })
    } catch (err) {
        if (!req.body.name || !req.body.designation || !req.body.image || !req.body.joining_date) {
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


exports.getEmployees = async (req, res) => {
    try {
        const getEmployee = await db.Employees.findAll()
        console.log(getEmployee)
        res.status(200).json({
            status: 200,
            data: getEmployee
        })
    } catch (e) {
        res.send(e.message)
    }

}


exports.deleteEmployees = async (req, res) => {
    const deleteEmployee = await db.Employees.destroy({
        where: {id: req.params.id}
    })

    if (!deleteEmployee) {
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


exports.updateEmployee = async (req, res) => {
    try {
        const updateEmployees = await db.Employees.update({
                name: req.body.name,
                designation: req.body.designation,
                image: req.body.image,
                joining_date: req.body.joining_date
            },
            {
                where: {id: req.params.id}
            })
        if (!updateEmployees) {
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


