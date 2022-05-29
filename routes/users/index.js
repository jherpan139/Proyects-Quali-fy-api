const express = require('express')
const Router = express.Router()
const User = require('../../models/User')
const validation = require('./validation')
const UserActions = require('./actions')
const passport = require('passport')
const roles = require('../../helpers/roles')


Router.get('/', UserActions.listAllUsers)

Router.post('/signup', validation.createUser, UserActions.createUser)
Router.post('/login', UserActions.loginUser)
/*Router.get('/:id', (req, res)=> {
    User.findByPk(req.params.id).then(user => {
        res.json(user)
    })
})*/
Router.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
    try {
        res.status(200).json({
            user: req.user._idUser,
            email: req.user.email,
            role: roles[req.user.role]
        })
    } catch (error) {
        res.json(error)
    }

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