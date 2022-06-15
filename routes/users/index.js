const express = require('express')
const Router = express.Router()
const User = require('../../models/User')
const validation = require('./validation')
const UserActions = require('./actions')
const passport = require('passport')


Router.get('/', UserActions.listAllUsers)

Router.get('/:id', validation.findById, UserActions.findUserById)

Router.post('/signup', validation.createUser, UserActions.createUser)
Router.post('/login', validation.loginUser, UserActions.loginUser)
/*Router.get('/:id', (req, res)=> {
    User.findByPk(req.params.id).then(user => {
        res.json(user)
    })
})*/
Router.get('/verify/user', validation.verifyToken ,passport.authenticate('jwt', { session: false }), UserActions.verifyUserToken)

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