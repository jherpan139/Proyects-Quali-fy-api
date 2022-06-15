const User = require('../../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const roles = require('../../helpers/roles')



const create = async (req,res) => {

    const salt = bcrypt.genSaltSync(10)
    const cryptPassword = bcrypt.hashSync(req.body.password, salt)

    await User.findOne({where: { email: req.body.email}}).then( async (checkUser) => {
        if (checkUser){
            return res.status(422).json({
                message: 'Email already in use'
            })
        }
            await User.create({
                name: req.body.name,
                surnames: req.body.surnames,
                email: req.body.email,
                password: cryptPassword,
                role: req.body.role
            }).then(user => {
                 return res.status(200).json(user)
            })
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

const verifyToken = (req, res) => {
    try {
        res.status(200).json({
            idUser: req.user.idUser,
            name: req.user.name,
            surnames: req.user.surnames,
            email: req.user.email,
            role: roles[req.user.role],
            token: req.headers.authorization
        })
    } catch (error) {
        res.status(404).json(error)
    }
}

const listAll = async (req, res) => {
    await User.findAll()
    .then((users) => res.json(users))
}

const findById = async (req, res) => {
    await User.findByPk(req.params.id)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(404).json(err))
}

const UserActions = {
    createUser: create,
    listAllUsers: listAll,
    loginUser: login,
    verifyUserToken: verifyToken,
    findUserById: findById
}

module.exports = UserActions
