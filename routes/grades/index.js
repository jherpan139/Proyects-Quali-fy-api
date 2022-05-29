const express = require('express')
const Router = express.Router()
const Grade = require('../../models/Grade')
const validation = require('./validation')
const GradeActions = require('./actions')

Router.get('/', GradeActions.listAllGrades)
Router.post('/', validation.createGrade, GradeActions.createGrade)
Router.get('/:id', (req, res)=> {
    User.findByPk(req.params.id).then(user => {
        res.json(user)
    })
})
Router.put('/:id', (req, res) => {
    User.update({
        name: req.body.name
    }, {
        where: {
            idUser: req.params.id
        }
    }).then(user => {
        res.json('Updated!')
    })
})
Router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            idUser: req.params.id
        }
    }).then(info => res.json(info))
})
module.exports = Router