const express = require('express')
const Router = express.Router()
const Course = require('../../models/Course')
const Student = require('../../models/Student')


Router.get('/', (req, res) => {
    Course.findAll({include: {
        model: Student,
        as: 'students'
    }}).then((courses) => res.json(courses))
    
})
Router.post('/',  (req,res) => {
    Course.create({
        name: req.body.name
    }).then(course => {
        res.json(course)
    })
})
Router.get('/:id', (req, res)=> {
    Course.findByPk(req.params.id).then(course => {
        res.json(course)
    })
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