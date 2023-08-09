const express = require("express")
const app = express();
const multer = require("multer")
const path = require("path")
const http=require("http")
const port = 8000;



const user = require("../routes/user")
const employee = require("../routes/employee")
const FAQ = require("../routes/FAQ")
const services = require("../routes/services")
const testmonials = require("../routes/testmonials")
const ContactUs = require("../routes/contactus")
const GeneralSettings=require("../routes/Generalsettings")
const portfolio=require("../routes/portfolio")
const upload=require("../routes/portfolioImage")

// console.log(http.METHODS)
// console.log(http.STATUS_CODES)
app.use(express.json())
// const options = {
//     swaggerDefinition: {
//         info: {
//             title:'Employee API',
//             version:'1.0.0'
//         }
//     },
//     apis:['../routes/employee.js'],
// };

// const options = {
//     openapi: '3.0.0',
//     info: {
//         title: 'Employee API',
//         description: '',
//         termsOfService: '',
//         contact: {
//             name: 'Your contact Details',
//             url: 'https://example.com',
//         },
//         license: {},
//     },
//     servers: [
//         {
//             url: 'http://localhost:2000/api',
//             description: 'Local development server',
//         }
//     ]
// }

const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('../swegger.json');

app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use("/users", user)
app.use("/employee", employee)
app.use("/FAQ", FAQ)
app.use("/services", services)
app.use("/Testmonials", testmonials)
app.use("/ContactUs", ContactUs)
app.use("/Generalsettings",GeneralSettings)
app.use("/portfolio",portfolio)
app.use("/upload",upload)



app.listen(port, () => {
    console.log(`server started on port: ${port}`)
})

module.exports = app;
