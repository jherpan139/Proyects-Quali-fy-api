const express = require('express')
const Router = express.Router()
const validation = require('./validation')
const StudentActions = require('./actions')

Router.get('/', validation.listAllStudents, StudentActions.listAllStudents)
Router.post('/', validation.createStudent, StudentActions.createStudent)
Router.get('/:id', validation.findStudentById, StudentActions.findStudentById)
Router.post('/course', validation.findStudentByCourse,StudentActions.findStudentByCourse)
Router.post('/:id/finalQualify', StudentActions.qualifyStudent)
Router.delete('/:id', validation.deleteStudent, StudentActions.deleteStudent)

module.exports = Router