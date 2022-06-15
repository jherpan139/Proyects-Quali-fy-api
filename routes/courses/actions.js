const Student = require('../../models/Student')
const Course = require('../../models/Course')

const create = async (req,res) => {
    await Course.create({
        name: req.body.name
    }).then(course => {
        res.json(course)
    })
    .catch((err) => res.status(422).json({
        message: err
    }))
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


const CourseActions = {
    createCourse: create,
    listAllStudents: listAll,
    findStudentById: findById,
    findStudentByCourse: findByCourse,
}

module.exports = CourseActions
