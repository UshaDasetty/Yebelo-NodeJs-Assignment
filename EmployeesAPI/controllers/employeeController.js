const Employee = require('../models/employeeModel')

// 9. Create Employee
exports.addEmp = async (req, res, next) => {
    const employee = await Employee.create(req.body);

    res.status(201).json({
        success: true,
        employee    // displays the employee
    })
}

// 5. get all employees
exports.getAllEmployees = async (req, res) => {
    const employees = await Employee.find();

    res.status(200).json({
        success: true,
        employees
    })
}

// 10. update address based on particular employee
exports.updateAddressbyId = async (req, res) => {

    let employee = await Employee.findById(req.params.id);
    if(!employee) {
        return res.status(500).json({
            success: false,
            message: 'no employee found'
        })
    }

     employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        employee
    })
}

// 8. remove employee who left the organisation
exports.deleteEmployeeById = async (req, res) => {
    let employee = await Employee.findById(req.params.id);

    if(!employee) {
        return res.status(500).json({
            success: false,
            message: 'Employee not found'
        })
    }

    await employee.remove()

    res.status(200).json({
        success: true,
        message: 'Employee left organisation'
    })
}

// 6. Total number of employees in the organisation
exports.totalEmployees = async (req, res) => {
    let employee = await Employee.count();

    res.status(200).json({
        success: true,
        message: `Total Number of Employees in organisation: ${ employee}`
    })
}

