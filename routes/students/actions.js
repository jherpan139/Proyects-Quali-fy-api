const Student = require('../../models/Student')
const Course = require('../../models/Course')
const User = require('../../models/User')

const create = async(req,res) => {
    await Student.create({
        name: req.body.name,
        surnames: req.body.surnames,
        email: req.body.email,
        dni: req.body.dni,
        idCourse: req.body.idCourse
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

const qualify = async(req, res) => {    
    await Student.update({
        final_grade: req.query.grade
    }, {
        where: {
            idStudent: req.params.id
        }
    }).then(student => {
        res.json('Updated!')
    })
    .catch((err) => res.status(404).json(err))
}

const StudentActions = {
    createStudent: create,
    listAllStudents: listAll,
    findStudentById: findById,
    findStudentByCourse: findByCourse,
    qualifyStudent: qualify
}

module.exports = StudentActions
