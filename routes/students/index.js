const express = require('express')
const Router = express.Router()
const Student = require('../../models/Student')
const validation = require('./validation')
const StudentActions = require('./actions')

Router.get('/', validation.listAllStudents, StudentActions.listAllStudents)
Router.post('/', validation.createStudent, StudentActions.createStudent)
//Router.post('/qualify', validation.addGradeToStudent, StudentActions.createStudent)
Router.get('/:id', validation.findStudentById, StudentActions.findStudentById)
Router.post('/course', validation.findStudentByCourse,StudentActions.findStudentByCourse)
Router.post('/:id/finalQualify', StudentActions.qualifyStudent)

Router.put('/:id', (req, res) => {
    Student.update({
        name: req.body.name
    }, {
        where: {
            idStudent: req.params.id
        }
    }).then(student => {
        res.json('Updated!')
    })
})
Router.delete('/:id', (req, res) => {
    Student.destroy({
        where: {
            idStudent: req.params.id
        }
    }).then(info => res.json(info))
})

module.exports = Router