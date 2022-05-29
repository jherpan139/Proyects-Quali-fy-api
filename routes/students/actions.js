const Student = require('../../models/Student')
const Course = require('../../models/Course')
const User = require('../../models/User')

const create = async(req,res) => {
    await Student.create({
        name: req.body.name,
        email: req.body.email,
        dni: req.body.dni,
        courseIdCourse: req.body.idCourse
    }).then(student => {
         res.json(student)
    })
}

const listAll = async (req, res) => {
    await Student.findAll({include: [{
        model: Course,
        as: 'course',
        attributes: ['name']
    },
    {
        model: User,
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
    await Student.findByPk(req.params.id,
        {include: {
        model: Course,
        as: 'course',
        attributes: ['name']
    }})
    .then((student) => res.json(student))
    .catch((err) => {
        res.json(err)
    })
}

const findByCourse = async(req, res) => {
    await Student.findAll({
        where: {
            idCourse: req.body.idCourse
        }, include: {
            model: Course,
            as: 'course',
            attributes: ['name'],
        }
    })
    .then((student) => {
        res.json(student)
    })
    .catch((err) => res.json(err))
}

const StudentActions = {
    createStudent: create,
    listAllStudents: listAll,
    findStudentById: findById,
    findStudentByCourse: findByCourse,
}

module.exports = StudentActions
