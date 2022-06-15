const Grade = require('../../models/Grade')
const User = require('../../models/User')
const Student = require('../../models/Student')


const create = async (req,res) => {

    const { idTeacher, idStudent, final_grade, overall_comment, presentation_grade, presentation_comment, documentation_grade, documentation_comment,
        demonstration_grade, demonstration_comment, questions_grade, questions_comment, research_grade, research_comment } = req.body

    await Grade.create({
        idUser: idTeacher,
        idStudent: idStudent,
        final_grade: final_grade,
        overall_comment: overall_comment,
        presentation_grade: presentation_grade,
        presentation_comment: presentation_comment,
        documentation_grade: documentation_grade,
        documentation_comment: documentation_comment,
        demonstration_grade: demonstration_grade,
        demonstration_comment: demonstration_comment,
        questions_grade: questions_grade,
        questions_comment: questions_comment,
        research_grade: research_grade,
        research_comment: research_comment
    }).then(grade => {
         res.json(grade)
    })
    .catch((err) => res.status(404).json(err))
}

const listAll = async (req, res) => {
    await Grade.findAll()
    .then((grades) => res.json(grades))
    .catch((err)=> res.json(err))
}

const listByIds = async (req, res) => {
    await Grade.findOne({ where: {
        idUser: req.body.idTeacher,
        idStudent: req.body.idStudent
    }})
    .then(grade => res.json(grade))
    .catch(err => res.status(404).json(err))
}

const listByStudent = async (req, res) => {
    await Grade.findAll({ where: {
        idStudent: req.params.id
    }})
    .then((grades) => res.json(grades))
    .catch(err => res.status(404).json(err))
}

const GradeActions = {
    createGrade: create,
    listAllGrades: listAll,
    listGradeByIds: listByIds,
    listStudentGrades: listByStudent
}

module.exports = GradeActions
