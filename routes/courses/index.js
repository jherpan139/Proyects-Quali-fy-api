const express = require('express')
const Router = express.Router()
const Course = require('../../models/Course')
const Student = require('../../models/Student')
const User = require('../../models/User')
const CourseValidations = require('./validation')
const CourseActions = require('./actions')


Router.get('/', (req, res) => {
    Course.findAll({
        order: [
            ['idCourse', 'ASC'],
        ],
        include: [{
        model: Student,
        as: 'students'
    },
    {
        model: User
    }]
}).then((courses) => res.json(courses))
    
})
Router.post('/', CourseValidations.createCourse, CourseActions.createCourse)
Router.get('/:id', (req, res)=> {
    Course.findByPk(req.params.id, {
        include: [{
            model: Student,
            as: 'students'
        },
        {
            model: User
        }]
    })
    .then(course => {
        res.json(course)
    }, )
})
Router.put('/:id', (req, res) => {
    Course.update({
        name: req.body.name
    }, {
        where: {
            idCourse: req.params.id
        }
    }).then(course => {
        res.json('Updated!')
    })
})
Router.delete('/:id', (req, res) => {
    Course.destroy({
        where: {
            idCourse: req.params.id
        }
    }).then(info => res.json(info))
})

module.exports = Router