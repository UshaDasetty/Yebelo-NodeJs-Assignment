const express = require('express');
const app = express();
const employee = require('./routes/employeeRoute');
const errorMiddleware = require('./middleware/error');

app.use(express.json());

// Middleware for errors
app.use(errorMiddleware)

// Base routes for employee
app.use('/api/v1', employee);

module.exports = app;