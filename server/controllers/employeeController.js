const employeeModel = require('../models/employeeModel');

// Add New Employee

const  addEmployee = async (req, res) => {
    try {
        const {firstName, lastName, email} = req.body
        await employeeModel.create({firstName, lastName, email})
        res.status(200).send()
    } catch {
        res.status(200).json({
            code: 10
        })
    }
}

// Get All Employees

const  getAllEmployees = async (req, res) => {
    try {
        const allEmps = await employeeModel.find({})
        res.status(200).json(allEmps)
    } catch {
        res.status(200).json({
            code: 20
        })
    }
}

// Get Single Employee by uuid

const  getSingleEmployee = async (req, res) => {
    try {
        const {uuid} = req.params
        const singleEmp = await employeeModel.findOne({uuid})
        res.status(200).json(singleEmp)
    } catch {
        res.status(200).json({
            code: 30
        })
    }
}

// Delete Single Employee by uuid

const  deleteSingleEmployee = async (req, res) => {
    try {
        const {uuid} = req.params
        await employeeModel.deleteOne({uuid})
        res.status(200).send()
    } catch {
        res.status(200).json({
            code: 40
        })
    }
}

// Update firstName, lastName and email by uuid

const  updateEmployee = async (req, res) => {
    try {
        const {uuid} = req.params
        const {firstName, lastName, email} = req.body
        await employeeModel.findOneAndUpdate({uuid}, {firstName, lastName, email})
        res.status(200).send()
    } catch {
        res.status(200).json({
            code: 50
        })
    }
}

// Update email by uuid

const updateEmployeeEmail = async (req, res) => {
    try {
        const {uuid} = req.params
        const {email} = req.body
        await employeeModel.findOneAndUpdate({uuid}, {email})
        res.status(200).send()
    } catch {
        res.status(200).json({
            code: 60
        })
    }
}

module.exports = {addEmployee, getAllEmployees, getSingleEmployee, deleteSingleEmployee, updateEmployee, updateEmployeeEmail}