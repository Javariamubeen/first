const express = require("express")
const controller = require("../api/employee/employeecontroller");
const verify = require("./../api/auth/auth")

const Router = express.Router()



Router.post('/createEmployeeDetail',verify.auth, controller.employeeDetails)
Router.get('/getEmployee' ,controller.getEmployees)
Router.delete('/deleteEmployees/:id?', verify.auth, controller.deleteEmployees)
Router.put('/updateEmployee/:id?', verify.auth, controller.updateEmployee)


module.exports = Router