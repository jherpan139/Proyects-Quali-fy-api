const { body, header, param } = require('express-validator')
const checkValidationSchema = require('../../middleware/checkValidationSchema')

const createCourseValidation = [
    header('Accept-version', 'accept-version not correct').exists(),
    header('Authorization', 'Authorization not correct').exists(),
    body('name', 'name must not be empty').notEmpty().isString(),
]

const listAllStudentsValidation = [
    header('Accept-version', 'accept-version not correct').exists(),
]

const findStudentByIdValidation = [
    header('Accept-version', 'accept-version not correct').exists(),
    param('id', 'id must exist and be numeric').exists().isInt(),
]

const findStudentByCourseValidation = [
    header('Accept-version', 'accept-version not correct').exists(),
    body('idCourse', 'idCourse must not be empty and be numeric').notEmpty().isInt()
]

const addGradeToStudentValidation = [
    header('Accept-version', 'accept-version not correct').exists(),
    body('idStudent', 'idStudent must not be empty and be numeric').notEmpty().isInt(),
    body('idTeacher', 'idTeacher must not be empty and be numeric').notEmpty().isInt(),
    body('grade', 'grade must not be empty and be numeric').notEmpty().isInt({gt: 0, lt: 11})
]

const validations = {
    createCourse: [createCourseValidation, checkValidationSchema],
}

module.exports = validations