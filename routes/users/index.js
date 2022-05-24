const express = require('express')
const Router = express.Router()
const User = require('../../models/User')
const validation = require('./validation')
const UserActions = require('./actions')

Router.get('/', (req, res) => {
    User.findAll().then(users => res.json(users)
    )
})
Router.post('/', validation.createUser, UserActions.createUser)
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