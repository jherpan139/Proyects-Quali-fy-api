const express = require('express')
const Router = express.Router()
const Grade = require('../../models/Grade')
const validation = require('./validation')
const GradeActions = require('./actions')

Router.get('/', GradeActions.listAllGrades)
Router.post('/teacher/qualify', validation.createGrade, GradeActions.createGrade)
Router.get('/student/:id', GradeActions.listStudentGrades)


module.exports = Router