const User = require('../../models/User')

const create = (req,res) => {
    User.create({
        name: req.body.name,
        surnames: req.body.surnames,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    }).then(user => {
         res.json(user)
    })
}

const UserActions = {
    createUser: create,
}

module.exports = UserActions
