const express = require('express');
const router = express.Router();
// controllers

const {addEmployee, getAllEmployees, getSingleEmployee, deleteSingleEmployee, updateEmployee, updateEmployeeEmail} = require('../controllers/employeeController');

// validators

const {validateEmployee, validateEmail} = require('../middleware/validation')


// managing routes

// get all employees

router.route('/employees').get(getAllEmployees)

// get single employee by uuid

router.route('/employees/:uuid').get(getSingleEmployee)

// add new employee

router.route('/employees').post(validateEmployee, addEmployee)

// delete single employee by uuid

router.route('/employees/:uuid').delete(deleteSingleEmployee)

// update firstName, lastName and email by uuid

router.route('/employees/:uuid').put(validateEmployee, updateEmployee)

// update only email by uuid

router.route('/employees/:uuid').patch(validateEmail, updateEmployeeEmail)

module.exports = router;