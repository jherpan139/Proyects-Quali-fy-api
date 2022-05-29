const express = require('express')
const Router = express.Router()
const Student = require('../../models/Student')

Router.get('/', (req, res) => {
    Student.findAll().then(student => res.json(student)
    )
})
Router.post('/',  (req,res) => {
    Student.create({
        name: req.body.name
    }).then(student => {
        res.json(student)
    })
})
Router.get('/:id', (req, res)=> {
    Student.findByPk(req.params.id).then(student => {
        res.json(student)
    })
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