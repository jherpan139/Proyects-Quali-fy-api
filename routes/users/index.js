const express = require('express')
const Router = express.Router()
const validation = require('./validation')
const UserActions = require('./actions')
const passport = require('passport')


Router.get('/', UserActions.listAllUsers)

Router.get('/:id', validation.findById, UserActions.findUserById)

Router.post('/signup', validation.createUser, UserActions.createUser)
Router.post('/login', validation.loginUser, UserActions.loginUser)

Router.get('/verify/user', validation.verifyToken ,passport.authenticate('jwt', { session: false }), UserActions.verifyUserToken)

module.exports = Router