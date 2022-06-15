const express = require('express')
const Router = express.Router()
const Student = require('../../models/Student')
const Course_Users = require('../../models/Course_User')
const Actions = require('./actions')
const Validations = require('./validation')

Router.get('/', (req, res) => {
    Course_Users.findAll().then(courseUser => res.json(courseUser)
    )
})
Router.post('/',  (req,res) => {
    Course_Users.create({
        idUser: req.body.idUser,
        idCourse: req.body.idCourse,
        role: req.body.role,
    }).then(courseUser => {
        res.json(courseUser)
    })
})


//Get user's courses
Router.get('/:id', (req, res)=> {
    Course_Users.findAll({where: {
        idUser: req.params.id
    }})
    .then((courseUser) => res.json(courseUser))
    .catch((err) => res.status(404).json(err))
})
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