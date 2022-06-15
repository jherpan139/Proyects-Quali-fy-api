const User = require('../../models/User')
const Course = require('../../models/Course')
const Course_User = require('../../models/Course_User')
const axios = require('axios')
const sequelize = require('sequelize')

const create = async(req,res) => {
    await Course_User.create({

    }).then(student => {
         res.json(student)
    })
}

const listAll = async (req, res) => {
    await Student.findAll({include: [{
        model: Course,
        as: 'course',
        attributes: ['name']
    }
]})
    .then((students) => {
        res.json(students)
    })
    .catch((err) => {
        res.json(err)
    })
}

const findById = async (req, res) => {
    await Course_User.findAll({where: {
        idUser: req.params.id
    }})
    .then((courseUser) => res.status(200).json(courseUser))
    .catch((err) => res.status(404).json(err))
}
const CourseUserValidations = {
    createStudent: create,
    listAllStudents: listAll,
    findStudentById: findById,
}

module.exports = CourseUserValidations
