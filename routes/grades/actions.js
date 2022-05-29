const Grade = require('../../models/Grade')
const User = require('../../models/User')
const Student = require('../../models/Student')


const create = async (req,res) => {

    const { grade, idTeacher, idStudent} = req.body


    await Grade.create({
        grade: grade,
        idUser: idTeacher,
        idStudent: idStudent
    }).then(grade => {
         res.json(grade)
    })
}

const listAll = async (req, res) => {
    await Grade.findAll()
    .then((grades) => res.json(grades))
    .catch((err)=> res.json(err))
}

const GradeActions = {
    createGrade: create,
    listAllGrades: listAll
}

module.exports = GradeActions
