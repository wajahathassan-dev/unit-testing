const mongoose = require('mongoose');
const uuid = require('uuid')

// Defining Employee Schema

const employeeSchema = mongoose.Schema({
    uuid: {
        type: String,
        default: uuid.v4
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
    },
    {
        timestamps: true
    }
)

// Creating Employee Model

const employeeModel = mongoose.model('Employee', employeeSchema)

module.exports = employeeModel