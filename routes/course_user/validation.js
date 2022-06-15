const { body, header, param } = require('express-validator')
const checkValidationSchema = require('../../middleware/checkValidationSchema')

const createStudentValidation = [
    header('Accept-version', 'accept-version not correct').exists(),
    body('name', 'name must not be empty').notEmpty().isString(),
    body('surnames', 'surnames must not be empty').notEmpty().isString(),
    body('email', 'email must be formatted correctly').isEmail(),
    body('dni', 'dni must exist and be formatted correctly').isString(),
    body('idCourse', 'course not correct').isInt()
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
    createStudent: [createStudentValidation, checkValidationSchema],
    listAllStudents: [listAllStudentsValidation, checkValidationSchema],
    findStudentById: [findStudentByIdValidation, checkValidationSchema],
    findStudentByCourse: [findStudentByCourseValidation, checkValidationSchema],
    addGradeToStudent: [addGradeToStudentValidation, checkValidationSchema]
}

module.exports = validations