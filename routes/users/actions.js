const User = require('../../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



const create = async (req,res) => {

    const salt = bcrypt.genSaltSync(10)
    const cryptPassword = bcrypt.hashSync(req.body.password, salt)

    await User.create({
        name: req.body.name,
        surnames: req.body.surnames,
        email: req.body.email,
        password: cryptPassword,
        role: req.body.role
    }).then(user => {
         res.json(user)
    })
}

const login = async (req, res) => {
    await User.findOne({where: {
        email: req.body.email
    }})
    .then(user => {
        if(!user){
            return res.status(400).json({
                message: 'User not found'
            })
        }
        if (!bcrypt.compareSync(req.body.password, user.password)){
            return res.status(422).json({
                message: 'Wrong password'
            })
        }

        const payload = {
            email: user.email,
            id: user.idUser,
            name: user.name,
            role: user.role
        }

        const token = jwt.sign(payload, 'top_secret', {expiresIn: '1d'})

        return res.status(200).json({
            token: 'Bearer '+token,
            message: 'Logged in'
        })
    })
}

const listAll = async (req, res) => {
    await User.findAll()
    .then((users) => res.json(users))
}

const UserActions = {
    createUser: create,
    listAllUsers: listAll,
    loginUser: login,
}

module.exports = UserActions
