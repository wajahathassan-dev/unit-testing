const express = require('express')
const app = express()
const cors = require("cors");
const connector = require('./config/mongoConnect')

// routes
const employeeRoutes = require('./routes/employeeRoutes')

// middlewares
app.use(express.json())
app.use(cors())
app.use('/api', employeeRoutes)


// creating mongodb connection
connector()
app.listen(5000, () => console.log("Server running at port 5000"))



module.exports = app;