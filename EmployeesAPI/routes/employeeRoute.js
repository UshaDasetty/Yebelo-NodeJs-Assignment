const express = require('express');
const {addEmp, getAllEmployees, updateAddressbyId, deleteEmployeeById, totalEmployees } = require('../controllers/employeeController');

const router = express.Router();

router.route('/addEmp').post(addEmp);
router.route('/getAllEmployees').get(getAllEmployees);
router.route('/updateAddressbyId/:id').put(updateAddressbyId);
router.route('/deleteEmployeeById/:id').delete(deleteEmployeeById);
router.route('/totalEmployees').get(totalEmployees);


module.exports = router;