const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    emp_Id: {
        type: String,
        required: true,
    },

    emp_Name: {
        type: String,
        required: true,
    },

    emp_Address: {
        type: String,
        required: true,
    },

    designation: {
        type: String,
        required: true,
    },

    doj: {
        type: Date,
        required: true,
    },

    dor: {
        type: Date,
        required: false,
    },
})

module.exports = mongoose.model('Employee', employeeSchema)